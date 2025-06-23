import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import images from '../../Misc/image_map';
export default function Documents({ auth }) {
    const { patient } = usePage().props;
    
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">patients</h2>} >
            <Head title="patients" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Patient Details</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <a href="dashboard/index.php" className="text-muted text-hover-primary">Home</a>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Patient</li>

                                    </ul>

                                </div>


                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-row">

                                    <Sidebar patient={patient} />



                                    <div className="w-100 flex-lg-row-fluid mx-lg-13">

                                        <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="btn btn-icon btn-active-color-primary w-30px h-30px"
                                                    id="kt_social_start_sidebar_toggle">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                fill="currentColor" />
                                                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Documents</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_document"
                                                        className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row g-6 g-xl-9 mb-6 mb-xl-9 mt-3">

                                            <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6">

                                                <div className="card h-100">

                                                    <div
                                                        className="card-body d-flex justify-content-center text-center flex-column p-8">

                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary d-flex flex-column">

                                                            <div className="symbol symbol-60px mb-5">
                                                                <img src={images.pdf} className="theme-light-show"
                                                                    alt="" />
                                                            </div>

                                                            <span
                                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow position-absolute">
                                                                <i className="bi bi-x fs-2"></i>
                                                            </span>

                                                            <div className="d-flex justify-content-center ">
                                                                <span className=" badge badge-info">Download</span>
                                                            </div>

                                                        </a>


                                                        <div className="fs-7 pt-2 fw-semibold text-gray-400">12 Feb 2023</div>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6">

                                                <div className="card h-100">

                                                    <div
                                                        className="card-body d-flex justify-content-center text-center flex-column p-8">

                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary d-flex flex-column">

                                                            <div className="symbol symbol-60px mb-5 image-input">
                                                                <img src={images.doc_icon} className="theme-light-show"
                                                                    alt="" />

                                                            </div>

                                                            <span
                                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow position-absolute">
                                                                <i className="bi bi-x fs-2"></i>
                                                            </span>


                                                            <div className="d-flex justify-content-center ">
                                                                <span className=" badge badge-info">Download</span>
                                                            </div>

                                                        </a>


                                                        <div className="fs-7 pt-2 fw-semibold text-gray-400">10 feb 2023</div>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6">

                                                <div className="card h-100">

                                                    <div
                                                        className="card-body d-flex justify-content-center text-center flex-column p-8">

                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary d-flex flex-column">

                                                            <div className="symbol symbol-60px mb-5">
                                                                <img src={images.icon_pv4}
                                                                    className="theme-light-show" alt="" />
                                                            </div>

                                                            <span
                                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow position-absolute">
                                                                <i className="bi bi-x fs-2"></i>
                                                            </span>

                                                            <div className="d-flex justify-content-center ">
                                                                <span className=" badge badge-info">Download</span>
                                                            </div>

                                                        </a>


                                                        <div className="fs-7 pt-2 fw-semibold text-gray-400">4 days ago</div>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6">

                                                <div className="card h-100">

                                                    <div
                                                        className="card-body d-flex justify-content-center text-center flex-column p-8">

                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary d-flex flex-column">

                                                            <div className="symbol symbol-60px mb-5">
                                                                <img src={images.icon_pv4}
                                                                    className="theme-light-show" alt="" />
                                                            </div>

                                                            <span
                                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow position-absolute">
                                                                <i className="bi bi-x fs-2"></i>
                                                            </span>

                                                            <div className="d-flex justify-content-center ">
                                                                <span className=" badge badge-info">Download</span>
                                                            </div>

                                                        </a>


                                                        <div className="fs-7 pt-2  fw-semibold text-gray-400">4 days ago</div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="modal fade" id="kt_modal_add_document" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Add Document</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                    <form id="kt_modal_add_document_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">

                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Patient</label>


                                                <Select2Input className="form-select form-select-sm form-select-solid" data-control="select2"
                                                    name="patient" data-placeholder="Options" data-hide-search="true">
                                                    <option value="1">Joe</option>
                                                    <option value="2">Raid</option>
                                                    <option value="3">abdul</option>
                                                </Select2Input>

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Title</label>


                                                <input type="text" name="title" className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="Title" />

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Address</label>

                                                <div className="dropzone" id="kt_dropzonejs_example_1">

                                                    <div className="dz-message needsclick">
                                                        <i className="ki-duotone ki-file-up fs-3x text-primary"><span
                                                            className="path1"></span><span className="path2"></span></i>

                                                        <div className="ms-4">
                                                            <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to
                                                                upload.
                                                            </h3>
                                                            <span className="fs-7 fw-semibold text-gray-400">Upload up to 10
                                                                files</span>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout>
    )
}