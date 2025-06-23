import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import FlatpickrInput from '@/Components/FlatpickrInput';
import Select2Input from '@/Components/Select2Input';
export default function CaseHistory({ auth }) {
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
                                                    <h3>Case History</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_case" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr className="bg-light">
                                                                <th className="min-w-80px">ID</th>
                                                                <th className="min-w-100px">Doctor</th>
                                                                <th className="min-w-100px">Date</th>
                                                                <th className="min-w-100px">Tooth </th>
                                                                <th className="min-w-200px">Description</th>
                                                                <th className="min-w-150px">Option</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>32</td>
                                                                <td>This is for description</td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>32</td>
                                                                <td>This is for description</td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>32</td>
                                                                <td>This is for description</td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>32</td>
                                                                <td>This is for description</td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>
                                                                <td>32</td>
                                                                <td>This is for description</td>
                                                                <td>
                                                                    <div className="d-flex justify-content-middle flex-shrink-0">
                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i
                                                                                className="fa-regular text-warning fa-pen-to-square fs-2"></i>
                                                                        </button>

                                                                        <button type="button"
                                                                            className="btn btn-icon btn-bg-white my-2 me-1">
                                                                            <i className="fa-regular text-danger fa-trash-can fs-2"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>

                                                    </table>

                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="modal fade" id="kt_modal_add_case" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Case</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y">

                                    <form id="kt_modal_add_case_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Select Date</label>

                                                        <FlatpickrInput className="form-control form-control-solid" name="date" placeholder="Pick a date"
                                                            id="kt_datepicker_1" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Select Patient </label>


                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Patient"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="john">John</option>
                                                            <option value="zubair">Zubair</option>
                                                            <option value="jass">Jass</option>
                                                            <option value="kaif">Kaif</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Category</label>

                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Category"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="implant">Implant</option>
                                                            <option value="rct">RCT</option>
                                                            <option value="extraction">Extraction</option>
                                                        </Select2Input>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Status</label>


                                                        <Select2Input name="format" data-control="select2" data-placeholder="Select Status"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_case">
                                                            <option></option>
                                                            <option value="faisal">In progress</option>
                                                            <option value="saud">Completed</option>
                                                            <option value="ibh">Pending</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>




                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Select Tooth</label>


                                                <Select2Input name="format" data-control="select2" data-placeholder="Select tooth"
                                                    className="form-select form-select-solid fw-bold" data-dropdown-parent="#kt_modal_add_case">
                                                    <option></option>
                                                    <option value="31">#31</option>
                                                    <option value="21">#21</option>
                                                    <option value="11">#11</option>
                                                </Select2Input>

                                            </div>

                                        </div>


                                        <div className="fv-row mb-7">

                                            <label className="required fw-semibold fs-6 mb-2">Description </label>


                                            <textarea name="" className="form-control form-control-lg form-control-solid" rows="5"></textarea>

                                        </div>


                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary">
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