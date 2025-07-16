import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import FlatpickrInput from '@/Components/FlatpickrInput';
import AddPaymentModal from '@/Modals/AddPaymentModal';
import images from '@/Misc/image_map';
import AddPatient  from "@/Modals/AddPatient"
import AddDoctor from '@/Modals/AddDoctor'
export default function PaymentHistory({ auth }) {
    const { patient_detail, options } = usePage().props;
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
                                        Payment History</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Patient</li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Payment History</li>

                                    </ul>

                                </div>

                                <div className="d-flex align-items-center gap-2 gap-lg-3">

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_payment">

                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        Add
                                    </button>


                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#kt_modal_view_invoice">

                                        <span className="svg-icon svg-icon-2">
                                            <i className="fa fa-eye"></i>
                                        </span>
                                        Invoice
                                    </button>


                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#kt_modal_add_edit_patient_deposit">

                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"></rect>
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"></rect>
                                            </svg>
                                        </span>
                                        Add Deposit
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-row">

                                    <Sidebar patient={patient_detail} />



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
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="card">

                                                    <div className="card-header">

                                                        <div className="card-title">
                                                            <h3> Payment History</h3>
                                                        </div>


                                                        <div className="card-toolbar">

                                                            <div className="w-150px me-3">
                                                                <button type="button" className="btn btn-light-primary me-3 w-150px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">

                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    Filter</button>

                                                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">

                                                                    <div className="px-7 py-5">
                                                                        <div className="fs-5 text-dark fw-bold">Select Filter</div>
                                                                    </div>


                                                                    <div className="separator border-gray-200"></div>


                                                                    <div className="px-7 py-5" data-kt-user-table-filter="form">

                                                                        <div className="mb-10">
                                                                            <label className="form-label fs-6 fw-semibold">Date From:</label>
                                                                            <FlatpickrInput type="text" className="form-control form-control-solid flatpicker" name="date" />
                                                                        </div>


                                                                        <div className="mb-10">
                                                                            <label className="form-label fs-6 fw-semibold">Date To:</label>
                                                                            <FlatpickrInput type="text" className="form-control form-control-solid flatpicker" name="date" />
                                                                        </div>


                                                                        <div className="d-flex justify-content-end">
                                                                            <button type="reset" className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                                                            <button type="submit" className="btn btn-primary fw-semibold px-6" data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">


                                                                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_export_users">

                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1"
                                                                                transform="rotate(90 12.75 4.25)" fill="currentColor" />
                                                                            <path
                                                                                d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                                                fill="currentColor" />
                                                                            <path opacity="0.3"
                                                                                d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    Export
                                                                </button>

                                                            </div>


                                                            <div className="d-flex justify-content-end align-items-center d-none"
                                                                data-kt-user-table-toolbar="selected">
                                                                <div className="fw-bold me-5">
                                                                    <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected
                                                                </div>
                                                                <button type="button" className="btn btn-danger"
                                                                    data-kt-user-table-select="delete_selected">Delete Selected</button>
                                                            </div>


                                                            <div className="modal fade" id="kt_modal_export_users" tabIndex="-1" aria-hidden="true">

                                                                <div className="modal-dialog modal-dialog-centered mw-650px">

                                                                    <div className="modal-content">

                                                                        <div className="modal-header">

                                                                            <h2 className="fw-bold">Export Doctors</h2>


                                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                                data-bs-dismiss="modal">

                                                                                <span className="svg-icon svg-icon-1">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                                                            rx="1" transform="rotate(-45 6 17.3137)"
                                                                                            fill="currentColor" />
                                                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>

                                                                            </div>

                                                                        </div>


                                                                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                                            <form id="kt_modal_export_users_form" className="form" action="#">


                                                                                <div className="fv-row mb-10">

                                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                                        Export Format:</label>


                                                                                    <select name="format" data-control="select2"
                                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                                        className="form-select form-select-solid fw-bold">
                                                                                        <option></option>
                                                                                        <option value="excel">Excel</option>
                                                                                        <option value="pdf">PDF</option>
                                                                                        <option value="cvs">CVS</option>
                                                                                        <option value="zip">ZIP</option>
                                                                                    </select>

                                                                                </div>


                                                                                <div className="text-center">
                                                                                    <button type="reset" className="btn btn-light me-3"
                                                                                        data-bs-dismiss="modal">Discard</button>
                                                                                    <button type="submit" className="btn btn-primary"
                                                                                        data-kt-users-modal-action="submit">
                                                                                        <span className="indicator-label">Submit</span>
                                                                                        <span className="indicator-progress">Please wait...
                                                                                            <span
                                                                                                className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                                    </button>
                                                                                </div>

                                                                            </form>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <AddDoctor/>

                                                            <AddPatient/>



                                                            <div className="modal fade" id="kt_modal_add_temporary_patient" tabIndex="-1" aria-hidden="true">

                                                                <div className="modal-dialog modal-dialog-centered mw-650px">

                                                                    <div className="modal-content">

                                                                        <div className="modal-header" id="kt_modal_add_user_header">

                                                                            <h2 className="fw-bold">Add Temporary</h2>


                                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                                                <span className="svg-icon svg-icon-1">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                                            transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>

                                                                            </div>

                                                                        </div>


                                                                        <div className="modal-body scroll-y">

                                                                            <form id="kt_modal_edit_user_form" className="form" >

                                                                                <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                                                                    data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                                                                    data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                                                                    data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                                                                    <div className="fv-row mb-7">

                                                                                        <label className="required fw-semibold fs-6 mb-2">Full
                                                                                            Name</label>


                                                                                        <input type="text" name="temporary_patient_name"
                                                                                            className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />

                                                                                    </div>


                                                                                    <div className="fv-row mb-7">

                                                                                        <label className="required fw-semibold fs-6 mb-2">
                                                                                            Phone</label>


                                                                                        <input type="text" name="temporary_patient_name"
                                                                                            className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Phone" />

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

                                                    </div>


                                                    <div className="card-body p-0">

                                                        <div className="table-responsive">

                                                            <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9" id="patient-payment-history-dt">

                                                                <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                                    <tr className="bg-light">
                                                                        <th className="min-w-80px">ID</th>
                                                                        <th className="min-w-125px">Date</th>
                                                                        <th className="min-w-125px">Invoice #</th>
                                                                        <th className="min-w-125px">Bill Amount</th>
                                                                        <th className="min-w-125px">Deposit</th>
                                                                        <th className="min-w-125px">Deposit Type</th>
                                                                        <th className="text-end min-w-100px">Actions</th>
                                                                    </tr>
                                                                </thead>


                                                                <tbody className="fw-6 fw-semibold text-gray-600">
                                                                    <tr className="py-2">
                                                                        <td>1</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1231</td>
                                                                        <td>10221</td>
                                                                        <td>8001</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>2</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1232</td>
                                                                        <td>10222</td>
                                                                        <td>8002</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>3</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1233</td>
                                                                        <td>10223</td>
                                                                        <td>8003</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>4</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1234</td>
                                                                        <td>10224</td>
                                                                        <td>8004</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>5</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1235</td>
                                                                        <td>10225</td>
                                                                        <td>8005</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>6</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1236</td>
                                                                        <td>10226</td>
                                                                        <td>8006</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>7</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1237</td>
                                                                        <td>10227</td>
                                                                        <td>8007</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>8</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1238</td>
                                                                        <td>10228</td>
                                                                        <td>8008</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>9</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>1239</td>
                                                                        <td>10229</td>
                                                                        <td>8009</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
                                                                                </div>

                                                                            </div>

                                                                        </td>

                                                                    </tr>
                                                                    <tr className="py-2">
                                                                        <td>10</td>
                                                                        <td>10 Feb 2023</td>
                                                                        <td>12310</td>
                                                                        <td>102210</td>
                                                                        <td>80010</td>
                                                                        <td>Test</td>

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
                                                                                    <a href="#" className="menu-link px-3" data-bs-target="#kt_modal_add_payment" data-bs-toggle="modal">Edit</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a href="#" className="menu-link px-3">Delete</a>
                                                                                </div>


                                                                                <div className="menu-item px-3">
                                                                                    <a data-bs-target="#kt_modal_view_invoice" data-bs-toggle="modal" className="menu-link px-3">View Invoice</a>
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
                                            <div className="col-md-4">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <div className="card-title">
                                                            <h3>Payment Statistics</h3>
                                                        </div>
                                                    </div>

                                                    <div className="card-body p-0">
                                                        <div className="row p-3">
                                                            <div className="col-md-12 p-2">

                                                                <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100"
                                                                    style={{ backgroundColor: "rgb(58, 29, 53)", backgroundImage: `url(${images.wave_bg_red})` }}>

                                                                    <div className="card-header pt-5 mb-3">

                                                                        <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{ border: "1px dashed rgba(255, 255, 255, 0.4)", backgroundColor: "rgb(58, 29, 53)" }}>
                                                                            <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                        </div>

                                                                    </div>


                                                                    <div className="card-body d-flex align-items-end mb-3 py-0">

                                                                        <div className="d-flex align-items-center">
                                                                            <span className="fs-2hx text-white fw-bold me-6">SAR 800</span>
                                                                            <div className="fw-bold fs-6 text-white">
                                                                                <span className="d-block">Total Bill</span>
                                                                                <span className="">Amount</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="col-md-12 p-2">

                                                                <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{ backgroundColor: "rgb(58, 29, 53)", backgroundImage: `url(${images.wave_bg_red})` }}>

                                                                    <div className="card-header pt-5 mb-3">

                                                                        <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{
                                                                            border: "1px dashed rgba(255, 255, 255, 0.4)",
                                                                            backgroundColor: "rgb(58, 29, 53)"
                                                                        }}>
                                                                            <i className="far fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                        </div>

                                                                    </div>


                                                                    <div className="card-body d-flex align-items-end mb-3 py-0">

                                                                        <div className="d-flex align-items-center">
                                                                            <span className="fs-2hx text-white fw-bold me-6 text-success">SAR 400</span>
                                                                            <div className="fw-bold fs-6 text-white">
                                                                                <span className="d-block"> Total Deposit</span>
                                                                                <span className="">Amount</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="col-md-12 p-2">

                                                                <div className="card border-0 card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-xl-100" style={{ backgroundColor: "#000", backgroundImage: `url(${images.wave_bg_red})` }}>

                                                                    <div className="card-header pt-5 mb-3">

                                                                        <div className="d-flex flex-center rounded-circle h-80px w-80px" style={{ border: "1px dashed rgba(255, 255, 255, 0.4)", backgroundColor: "#000" }}>
                                                                            <i className="fas fa-money-bill-alt text-white fs-2qx lh-0"></i>
                                                                        </div>

                                                                    </div>


                                                                    <div className="card-body d-flex align-items-end mb-3 py-0">

                                                                        <div className="d-flex align-items-center">
                                                                            <span className="fs-2hx text-white fw-bold me-6 text-danger">SAR 400</span>
                                                                            <div className="fw-bold fs-6 text-white">
                                                                                <span className="d-block">Due</span>
                                                                                <span>Amount</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="modal fade" id="kt_modal_add_edit_patient_deposit" aria-hidden="true" tabIndex="-1">

                        <div className="modal-dialog modal-dialog-centered mw-350px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Deposit</h2>


                                    <button type="button" className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="fa fa-close fs-2x"></i>
                                    </button>

                                </div>



                                <div className="modal-body scroll-y">

                                    <form id="kt_modal_add_edit_patient_deposit_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7">


                                            <div className="fv-row mb-7">
                                                <label className="required fw-semibold fs-6 mb-2">Invoice</label>
                                                <Select2Input name="invoice_id" data-control="select2" data-placeholder="Select Invoice ID"
                                                    className="form-select form-select-solid fw-bold"
                                                    data-dropdown-parent="#kt_modal_add_edit_patient_deposit" >
                                                    <option></option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </Select2Input>
                                            </div>



                                            <div className="fv-row mb-7">
                                                <label className="required fw-semibold fs-6 mb-2">Deposit Amount</label>
                                                <input name="deposit_amount" type="text" className="form-control form-control-solid"
                                                    placeholder="Enter amount to deposit" />
                                            </div>



                                            <div className="fv-row mb-7">
                                                <label className="required fw-semibold fs-6 mb-2">Deposit Type</label>
                                                <Select2Input name="deposit_type" data-control="select2" data-placeholder="Deposit Type"
                                                    className="form-select form-select-solid fw-bold"
                                                    data-dropdown-parent="#kt_modal_add_edit_patient_deposit">
                                                    <option></option>
                                                    <option value="test">Test</option>
                                                    <option value="payment">Payment</option>
                                                </Select2Input>
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
                    <AddPaymentModal options={options} />
                    <div className="modal fade" id="kt_modal_view_invoice" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Invoice</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                        <i className="fa fa-close fs-2x"></i>
                                    </div>

                                </div>


                                <div className="modal-body scroll-y">

                                    <div className="d-flex flex-column flex-xl-row">

                                        <div className="flex-lg-row-fluid mb-10 mb-xl-0">

                                            <div className="mt-n1">

                                                <div className="d-flex flex-stack pb-10">

                                                    <a href="#">
                                                        <img alt="Logo" src={images.logo} className="h-70px" />
                                                        <br />Molar Dental Clinic
                                                    </a>

                                                </div>


                                                <div className="m-0">

                                                    <div className="row g-5 mb-11">

                                                        <div className="col-sm-6">

                                                            <div className="fw-semibold fs-7 text-gray-600 mb-1">Date:</div>


                                                            <div className="fw-bold fs-6 text-gray-800">17 Jun 2025                                                </div>

                                                        </div>


                                                    </div>


                                                    <div className="row g-5 mb-12">

                                                        <div className="col-sm-6">

                                                            <div className="fw-semibold fs-7 text-gray-600 mb-1">Payment To:</div>


                                                            <div className="fw-bold fs-6 text-gray-800">Molar Dental Clinic</div>


                                                            <div className="fw-semibold fs-7 text-gray-600">8692 Wild Rose Drive
                                                                <br />Livonia, MI 48150
                                                            </div>

                                                        </div>


                                                        <div className="col-sm-6">

                                                            <div className="fw-semibold fs-7 text-gray-600 mb-1">Bill To:</div>


                                                            <div className="fw-bold fs-6 text-gray-800">Ahmad Anwar</div>
                                                            <div className="fw-semibold fs-7 text-gray-600">+955-845978321</div>


                                                            <div className="fw-semibold fs-7 text-gray-600">9858 South 53rd Ave.
                                                                <br />Matthews, NC 28104
                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div className="flex-grow-1">

                                                        <div className="table-responsive table-row-dashed border-bottom mb-9">
                                                            <table className="table mb-3">
                                                                <thead>
                                                                    <tr className="border-bottom bg-light fs-6 fw-bold text-muted">
                                                                        <th className="min-w-5px pb-2">S.no</th>
                                                                        <th className="min-w-100px pb-2">Date</th>
                                                                        <th className="min-w-50px pb-2">Invoice</th>
                                                                        <th className="min-w-70px pb-2">Amount</th>
                                                                        <th className="min-w-100px pb-2">Deposit</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-bold text-gray-700">
                                                                        <td>2</td>
                                                                        <td className="ps-4"><span className="badge badge-light">10 March
                                                                            2023 </span></td>
                                                                        <td className="pt-6">#25</td>
                                                                        <td className="pt-6">SAR 150</td>
                                                                        <td className="pt-6 text-dark fw-bolder">SAR 100</td>
                                                                    </tr>
                                                                    <tr className="fw-bold text-gray-700 ">
                                                                        <td>3</td>
                                                                        <td className="ps-4"><span className="badge badge-light">10 March
                                                                            2023 </span></td>
                                                                        <td className="pt-6">#28</td>
                                                                        <td className="pt-6">SAR 100</td>
                                                                        <td className="pt-6 text-dark fw-bolder">SAR 0</td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr className="border-top fw-bold text-gray-700 fs-6">
                                                                        <td colSpan="3"></td>
                                                                        <td> Subtotal:</td>
                                                                        <td>SAR 250</td>
                                                                    </tr>
                                                                    <tr className="fw-bold text-gray-700 fs-6">
                                                                        <td colSpan="3"></td>
                                                                        <td>Received:</td>
                                                                        <td>SAR 100</td>
                                                                    </tr>
                                                                    <tr className="fw-bold text-gray-700 fs-6">
                                                                        <td colSpan="3"></td>
                                                                        <td>Due</td>
                                                                        <td>SAR 100</td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout >
    )
}