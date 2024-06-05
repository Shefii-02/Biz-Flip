import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import React, { useState } from 'react';
import Permissions from './Permissions';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import Spinner from '@/Components/Spinner';

export default function Index({ auth, roles }) {

    const [roleData, setroleData] = useState(roles.data);

    const { data, setData } = useForm({
        q: "",
    });

    // useEffect(() => {
    //     searchResult();
    // }, [data]);

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.roles.search", data));
        setroleData(response.data);
        setLoading(false);
    }

    const deleteRole = function (role) {
        if (!window.confirm("Are you sure you want to delete the role?")) {
            return;
        }
        router.delete(route("seller.roles.destroy", role))
    }

    const [show, setShow] = useState(false);
    const [mdata, setmData] = useState(null);
    const [title, setTitle] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);

    const ShowPermissions = async function (role) {
        setTitle(`Permissions of ${role.name}`);
        setLoading(true);
        const response = await axios.get(route("seller.roles.show", role.id));
        setmData(ReactDOMServer.renderToString(<Permissions permissions={response.data.permissions} />));
        setLoading(false);
        setShow(true);
    }

    const search = async (q) => {

    }

    return (
        <>
            <Head title="Staff roles" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Staff roles</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary text-overflow" href={route('seller.roles.create')}><i className="bi bi-plus text-md"></i>
                                                    <span className="d-none d-md-inline">New role</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Permissions</th>
                                                    <th scope="col">Last updated</th>
                                                    <th scope="col" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roleData.length ? (
                                                    <>
                                                        {roleData.map((role) => (
                                                            <tr key={role.id}>
                                                                <td>
                                                                    #{role.id}
                                                                </td>
                                                                <td>
                                                                    {role.name}
                                                                </td>

                                                                <td>
                                                                    <div role='button' onClick={(e) => ShowPermissions(role)} className="text-primary text-decoration-none">{role.total_permissions} permissions</div>
                                                                </td>

                                                                <td>
                                                                    {role.updated_text}
                                                                </td>
                                                                <td>
                                                                    <Link href={route('seller.roles.edit', role.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                    <button onClick={(e) => deleteRole(role.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </>
                                                ) : (<>
                                                    <tr>
                                                        <td className="text-center" colSpan="100">
                                                            No records found..
                                                        </td>
                                                    </tr>
                                                </>)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {loading && <Spinner />}
                <ModalPopup animation={false} centered show={show} handleClose={handleClose} data={mdata} title={title} />
            </Wrapper>
        </>
    );
}
