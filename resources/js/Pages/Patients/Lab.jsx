import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
export default function Lab({ auth }) {
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
                                        Patient Lab</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Lab</li>

                                    </ul>

                                </div>

                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_edit_lab_report">

                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        Add
                                    </button>

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
                                                    <h3>Lab Reports</h3>
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
                                                                <th className="text-end min-w-100px">Actions</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr className="py-2">
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>

                                                                <td className="text-end">
                                                                    <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions

                                                                        <span className="svg-icon svg-icon-5 m-0">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </a>

                                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                        data-kt-menu="true">

                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_edit_lab_report" data-bs-toggle="modal">Edit</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Delete</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="patient/lab-report.php" className="menu-link px-3">View</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Download</a>
                                                                        </div>

                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            <tr className="py-2">
                                                                <td>2</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>

                                                                <td className="text-end">
                                                                    <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions

                                                                        <span className="svg-icon svg-icon-5 m-0">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </a>

                                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                        data-kt-menu="true">

                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_edit_lab_report" data-bs-toggle="modal">Edit</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Delete</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="patient/lab-report.php" className="menu-link px-3">View</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Download</a>
                                                                        </div>

                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            <tr className="py-2">
                                                                <td>3</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>

                                                                <td className="text-end">
                                                                    <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions

                                                                        <span className="svg-icon svg-icon-5 m-0">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </a>

                                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                        data-kt-menu="true">

                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_edit_lab_report" data-bs-toggle="modal">Edit</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Delete</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="patient/lab-report.php" className="menu-link px-3">View</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Download</a>
                                                                        </div>

                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            <tr className="py-2">
                                                                <td>4</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023</td>

                                                                <td className="text-end">
                                                                    <a className="btn btn-light btn-active-light-primary btn-sm"
                                                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions

                                                                        <span className="svg-icon svg-icon-5 m-0">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </a>

                                                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                                        data-kt-menu="true">

                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_edit_lab_report" data-bs-toggle="modal">Edit</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Delete</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="patient/lab-report.php" className="menu-link px-3">View</a>
                                                                        </div>


                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Download</a>
                                                                        </div>

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

                    <div className="modal fade" id="kt_modal_add_edit_lab_report" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add | Edit Lab Report</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y">

                                    <form id="kt_modal_add_edit_lab_report_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Select Date</label>

                                                        <input className="form-control form-control-solid" name="date" placeholder="Pick a date"
                                                            id="kt_datepicker_1" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Select Patient </label>


                                                        <select name="format" data-control="select2" data-placeholder="Select Patient"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_edit_lab_report">
                                                            <option></option>
                                                            <option value="john">John</option>
                                                            <option value="zubair">Zubair</option>
                                                            <option value="jass">Jass</option>
                                                            <option value="kaif">Kaif</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>



                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Refd By Doctor</label>


                                                        <select name="format" data-control="select2" data-placeholder="Select Doctor"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_edit_lab_report">
                                                            <option></option>
                                                            <option value="hashim">Hashim</option>
                                                            <option value="kadir">Kadir</option>
                                                            <option value="saud">Saud</option>
                                                            <option value="abdullah">Abdullah</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="required fw-semibold fs-6 mb-2">Template</label>


                                                        <select name="format" data-control="select2" data-placeholder="Select Template"
                                                            className="form-select form-select-solid fw-bold"
                                                            data-dropdown-parent="#kt_modal_add_edit_lab_report">
                                                            <option></option>
                                                            <option value="9">Lipid Profile Result </option>
                                                            <option value="6">CBC </option>
                                                            <option value="5">Lipid  Profile </option>
                                                            <option value="3">Diagnostic </option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Description </label>

                                                <textarea name="kt_rep_desc_ckeditor_classic" id="kt_rep_desc_ckeditor_classic" className="form-control form-control-solid" rows="5"></textarea>
                                            </div>


                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">
                                                    <span className="indicator-label">Submit</span>
                                                </button>
                                            </div>

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