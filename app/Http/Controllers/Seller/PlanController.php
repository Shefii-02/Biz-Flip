<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\LeadEnquiry;
use Inertia\Inertia;

class PlanController extends BaseController{
    public $user;
    public $seller;
    use \App\Subscription;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
			$this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Plan/Index', [
            'plans' => \App\Models\SubscriptionPlan::whereDefault('0')->whereStatus('1')->whereVisibility('1')->orderBy('price')->get(),
        ]);
    }

     /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Role $role
     */
    public function show(Request $request, \App\Models\SubscriptionPlan $plan){
        \App\Models\SubscriptionPlan::whereDefault('0')->whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        return Inertia::render('Seller/Plan/Plan', [
            'address' => [
                'address' => $this->seller->address,
                'city' => $this->seller->city,
                'postalcode' => $this->seller->seller->postalcode ?? null,
                'province' => $this->seller->seller->province ?? null,
                'firstname' => $this->seller->firstname,
                'lastname' => $this->seller->lastname,
                'phone' => $this->seller->phone,
                'email' => $this->seller->email,
            ],
            'plan' => $plan,
            'province_options' => \App\Models\Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    public function update(\App\Http\Requests\PlanPurchaseRequest $request, \App\Models\SubscriptionPlan $plan){
        \App\Models\SubscriptionPlan::whereDefault('0')->whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        \DB::beginTransaction();
        try{
            $subscription = $this->subscribeToPlan($request, $plan, $this->seller);
            \DB::commit();
            return redirect()->route('seller.invoices.show', ['invoice' => $subscription])->with('success', "Thank you, your subscription has been completed.");
            
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()
            ->with('error', "Something went wrong, please try again.");
        }
    }

}
