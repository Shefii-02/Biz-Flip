import AuthenticatedLayout from '@/Layouts/Authenticated';
import Wrapper from './layout/Wrapper';
import AdsTable from './AdsTable';
import { Head, Link, useForm, router } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/Components/Spinner';
import PermissionAllow from '@/Components/PermissionAllow';
import Delete from './Components/Delete';

export default function Ads({ auth, ads }) {
    const [loading, setLoading] = useState(false);

    const [adData, setadData] = useState(ads.data);

    const { data, setData } = useForm({
        q: "",
    });

    // useEffect(() => {
    //     searchResult();
    // }, [data]);

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.ads.search", data));
        setadData(response.data);
        setLoading(false);
    }

    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const deleteAction = function (id) {
        setShowDelete(false);
        router.delete(route("seller.ads.destroy", id))
    }

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    const handleClose = () => setShowDelete(false);
    
    return (
        <>
            {loading && <Spinner />}
            <Head title="Ads" />
            <Delete showDelete={showDelete} handleClose={handleClose} deleteAction={deleteAction} deleteId={deleteId} setShowDelete={setShowDelete}></Delete>
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-xl vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Ads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name, location etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                            <PermissionAllow permission="Ad Create">
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i>
                                                    <span className="d-none d-md-inline">New ad</span>
                                                </Link>
                                            </div>
                                            </PermissionAllow>
                                        </div>
                                    </div>
                                    <AdsTable confirmDelete={confirmDelete} ads={adData}></AdsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
