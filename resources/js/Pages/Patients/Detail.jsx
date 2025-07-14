import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import FlatpickrInput from '@/Components/FlatpickrInput';
import AddAppointmentModal from '@/Modals/AddAppointmentModal';
import images from "@/Misc/image_map";
import AddDoctor from '@/Modals/AddDoctor';
import AddPatient  from "@/Modals/AddPatient"
export default function Detail({ auth }) {
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
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
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

                                        <div className="card ">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Appointments</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modal_add_appointment" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr className="bg-light">
                                                                <th className="min-w-80px">ID</th>
                                                                <th className="min-w-100px">Doctor</th>
                                                                <th className="min-w-200px">Date - Time</th>
                                                                <th className="min-w-100px">Status</th>
                                                                <th className="min-w-150px">User</th>
                                                                <th className="min-w-150px">option</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Saud</span>
                                                                </td>
                                                                <td>10 Feb 2023, 5:00 Am To 5:30 AM</td>
                                                                <td><a href="#" className="btn btn-secondary btn-sm my-2">Arrived</a></td>
                                                                <td>khaled@molar.clinic</td>
                                                                <td>
                                                                    <div className="w-100px position-relative">
                                                                        <Select2Input className="form-select form-select-sm form-select-solid"
                                                                            data-control="select2" data-placeholder="Options"
                                                                            data-hide-search="true">
                                                                            <option value="1">edit</option>
                                                                            <option value="2">Delete</option>
                                                                        </Select2Input>
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
                    {/* begin::Modal - Add Appointment*/}
                        <AddAppointmentModal/>
                    {/* end::Modal - Add Appointment*/}

                </div>
            </>
        </AuthenticatedLayout>
    )
}