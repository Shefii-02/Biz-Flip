
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import Form from 'react-bootstrap/Form';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Edit({ country_item, queryParams = null, auth }) {

    const { data, setData, post, errors, reset } = useForm({
        image: '',
        name: country_item.name || '',
        code: country_item.code || '',
        status: country_item.status = 'published' ? 1 : 0 || 1,
        position: country_item.position || '', _method: "PUT",
        remove_image: false,
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        // Set the initial image preview if an image exists
        if (country_item.image) {
            setImagePreview(country_item.image);
        }
    }, [country_item.image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
        // setData('remove_image', false);
    };

    const handleRemoveImage = () => {
        setData('image', '');
        setImagePreview('');

        setData('remove_image', true);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("admin.country.update", country_item.id));
    };


    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Country/Edit</h2>}
        >
            <Head title="Country Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit Country</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.country.index')}>Country</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'></div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Country Edit'} message="true">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                                                                        <TextInput
                                                                            id="name"
                                                                            type="text"
                                                                            name="name"
                                                                            className="form-control"
                                                                            value={data.name}
                                                                            onChange={(e) => handleChange("name", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.name} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Code</InputLabel>
                                                                        <TextInput
                                                                            id="country-code"
                                                                            type="text"
                                                                            name="code"
                                                                            className="form-control"
                                                                            value={data.code}
                                                                            onChange={(e) => handleChange("code", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.code} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Position</InputLabel>
                                                                        <SelectOption
                                                                            onChange={(value) => handleChange("position", value)}
                                                                            value={data.position}
                                                                            defaultValue={data.position}
                                                                        />
                                                                        <InputError message={errors.position} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group p-3 ">
                                                                        <label className="fw-700  form-label">Status</label>
                                                                        <Form.Check
                                                                            type="switch"
                                                                            id="custom-switch"
                                                                            name="status"
                                                                            label="Publish"
                                                                            role="button"
                                                                            checked={data.status === 1}
                                                                            onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}

                                                                        />
                                                                        <InputError message={errors.status} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="border rounded-4 p-3  text-center">
                                                                        <h4 className="box-title text-center">Image</h4>
                                                                        <div className="product-img">
                                                                            {imagePreview ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreview} alt="Selected" className="w-100 rounded-5" />
                                                                                    <i className="bi bi-x-lg fw-bold position-absolute text-danger top-0" role="button" onClick={handleRemoveImage}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                            )}
                                                                            <div className="mb-20">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-sm btn-neutral"
                                                                                    onClick={() => document.getElementById('project_image_path').click()}
                                                                                >
                                                                                    Choose Image
                                                                                </button>
                                                                                <TextInput
                                                                                    id="project_image_path"
                                                                                    type="file"
                                                                                    name="image"
                                                                                    className="d-none mt-1 block w-full upload"
                                                                                    onChange={handleImageChange}
                                                                                />

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-actions mt-10">
                                                    <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Save Data</button>
                                                </div>
                                            </form>
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
