<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province, City};
use App\Http\Requests\Ad\{AdRequest};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\LeadRequest;

class AdController extends BaseController{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        $ads = Ad::search($request)->searchListings($request)->whereStatus(1)->paginate(24)->appends(request()->query());
        $data = [
            'ads' => $ads,
            //'cities' => Ad::selectRaw("DISTINCT city as city")->pluck('city'),
            'cities' => \App\Models\City::get(),
            'request' => $request,
            'purposeOptions' => ['Rental','Lease','Sale'],
            'search_purposeOptions' => ['Rental','Lease','Sale'],
        ];
        return $request->ajax() ? response()->json([
            'success' => true,
            'total_ads' => $ads->total(),
            'html' => [
                'header' => view('search.header', $data)->render(),
                'list' => view('search.list', $data)->render(),
                'grid' => view('search.grid', $data)->render(),
            ],
        ]) : view('search.index', $data);
    }

    public function map(Request $request){
        return response()->json([
            'success' => true,
            'data' => \App\Http\Resources\MapAdResource::collection(Ad::search($request)->whereStatus(1)->searchListings($request)->get())
        ]);
    }

    /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Ad $ad
     */
    public function show(Request $request, Ad $ad){
        return view('listing')->withAd($ad);
    }

    public function update(LeadRequest $request, Ad $ad){
        $ad->leads()->firstOrCreate(
            $request->only('email', 'phone'), $request->only('firstname', 'lastname', 'message')
        )->update([
            'seller_id' => $ad->seller_id,
        ]);
        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

}
