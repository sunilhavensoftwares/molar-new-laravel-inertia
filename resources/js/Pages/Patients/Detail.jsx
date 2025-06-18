import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import FlatpickrInput from '@/Components/FlatpickrInput';
export default function Detail({ auth }) {
    const { patient } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">patients</h2>} >
            <Head title="patients" />
            <>
                <style>{`
                .image-input-placeholder {
                    backgroundImage: "url('assets/media/svg/files/blank-image.svg')";
                    }

                [data-theme="dark"] .image-input-placeholder {
                    backgroundImage: "url('assets/media/svg/files/blank-image-dark.svg')";
                }`
                }
                </style>

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




                    <div className="modal fade" id="kt_modal_add_doctor" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Add Doctor</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>

                                    </div>

                                </div>


                                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                    <form id="kt_modal_add_doctor_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                            <div className="fv-row mb-7">

                                                <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>

                                                <div className="image-input image-input-outline image-input-placeholder"
                                                    data-kt-image-input="true">

                                                    <div className="image-input-wrapper w-125px h-125px"
                                                        style={{ backgroundImage: `url('/assets/media/avatars/300-6.jpg')` }}>
                                                    </div>


                                                    <label
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                        <i className="bi bi-pencil-fill fs-7"></i>

                                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                        <input type="hidden" name="avatar_remove" />

                                                    </label>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>

                                                </div>


                                                <div className="form-text">Allowed file types: png, jpg, jpeg.
                                                </div>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>


                                                <input type="text" name="doctor_name" className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Email</label>


                                                <input type="email" name="doctor_email" className="form-control form-control-solid mb-3 mb-lg-0"
                                                    placeholder="example@domain.com" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Phone</label>


                                                <input type="text" name="doctor_phone"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Address</label>


                                                <input type="text" name="doctor_address"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Password</label>


                                                <input type="Password" name="doctor_password"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Profile</label>


                                                <input type="text" name="doctor_profile"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" />

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

                    <div className="modal fade" id="kt_modal_add_patient" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Add Patient</h2>


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


                                <div className="modal-body scroll-y mx-5 my-7">

                                    <form id="kt_modal_add_patient_form" className="form" >

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                            <div className="fv-row mb-7">

                                                <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>


                                                <div className="image-input image-input-outline image-input-placeholder"
                                                    data-kt-image-input="true">

                                                    <div className="image-input-wrapper w-125px h-125px"
                                                        style={{ backgroundImage: `url('/assets/media/avatars/300-6.jpg')` }}>
                                                    </div>


                                                    <label
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="change" data-bs-toggle="tooltip"
                                                        title="Change avatar">
                                                        <i className="bi bi-pencil-fill fs-7"></i>

                                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                        <input type="hidden" name="avatar_remove" />

                                                    </label>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                                                        title="Cancel avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>


                                                    <span
                                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                        data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                                                        title="Remove avatar">
                                                        <i className="bi bi-x fs-2"></i>
                                                    </span>

                                                </div>


                                                <div className="form-text">Allowed file types: png, jpg, jpeg.
                                                </div>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Full
                                                    Name</label>


                                                <input type="text" name="patient_name"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Phone</label>


                                                <input type="text" name="patient_phone"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">National ID</label>


                                                <input type="text" name="patient_national"
                                                    className="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Birth Date</label>


                                                <input className="form-control form-control-solid  pe-5 flatpicker" placeholder="Select date"
                                                    name="patient_dob" type="text" readOnly="readonly" />

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Gender</label>


                                                <select className="form-select form-select-solid" aria-label="Select example">
                                                    <option>Select Gender`</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                    <option value="3">Other</option>
                                                </select>

                                            </div>



                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Doctor</label>


                                                <select className="form-select form-select-solid" aria-label="Select example">
                                                    <option>Select Doctor</option>
                                                    <option value="1">Faisal</option>
                                                    <option value="2">Ahmad</option>
                                                    <option value="3">Saud</option>
                                                </select>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Address</label>


                                                <textarea name="patient_address" className="form-control form-control-solid" cols="30"
                                                    rows="5"></textarea>

                                            </div>



                                            <div className="fv-row mb-7">
                                                <div className="form-check form-check-custom form-check-success ">
                                                    <input className="form-check-input" name="send_message" type="checkbox" value=""
                                                        defaultChecked />
                                                    <label className="form-check-label" htmlFor="">
                                                        Send Message
                                                    </label>
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
                    <div className="modal fade" id="modal_add_appointment" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Appointment</h2>


                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                        <span className="svg-icon svg-icon-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                                    fill="currentColor" />
                                            </svg>
                                        </span>

                                    </div>

                                </div>


                                <div className="modal-body">

                                    <form id="kt_modal_add_appointment_form" className="form" >

                                        <div className="d-flex flex-column">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Patient</label>
                                                        <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_add_patient">Add</span>

                                                        <Select2Input className="form-select form-select-solid" data-control="select2"
                                                            aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a patient" >
                                                            <option value="">Select Patient</option>
                                                            <option value="1">John</option>
                                                            <option value="2">Afsal</option>
                                                            <option value="3">Ahsan</option>
                                                            <option value="3">Kiya</option>
                                                        </Select2Input>

                                                    </div>
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                                        <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_add_doctor">Add</span>


                                                        <Select2Input className="form-select form-select-solid" data-control="select2"
                                                            aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a doctor">
                                                            <option value="">Select Doctor</option>
                                                            <option value="1">Faisal</option>
                                                            <option value="2">Ahmad</option>
                                                            <option value="3">Saud</option>
                                                        </Select2Input>

                                                    </div>

                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Date</label>


                                                        <FlatpickrInput type="text" className="form-control form-control-solid kt_datepicker_1"
                                                            name="date" />

                                                    </div>
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Available Slots</label>


                                                        <Select2Input className="form-select form-select-solid" data-control="select2"
                                                            aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="select a slot">
                                                            <option value="">Select Slot</option>
                                                            <option value="03:30 PM To 04:15 PM">03:30 PM To 04:15 PM</option>
                                                            <option value="04:15 PM To 05:00 PM">04:15 PM To 05:00 PM</option>
                                                            <option value="05:00 PM To 05:45 PM">05:00 PM To 05:45 PM</option>
                                                            <option value="05:45 PM To 06:30 PM">05:45 PM To 06:30 PM</option>
                                                            <option value="06:30 PM To 07:15 PM">06:30 PM To 07:15 PM</option>
                                                            <option value="06:30 PM To 07:15 PM">06:30 PM To 07:15 PM</option>
                                                        </Select2Input>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Status</label>


                                                        <Select2Input className="form-select form-select-solid" data-control="select2"
                                                            aria-label="Select example" data-dropdown-parent="#modal_add_appointment" data-placeholder="Select status">
                                                            <option></option>
                                                            <option value="1">Pending</option>
                                                            <option value="2">Confirmed</option>
                                                            <option value="3">Treated</option>
                                                            <option value="4">Cancelled</option>
                                                        </Select2Input>

                                                    </div>
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Remarks</label>


                                                        <input type="text" className="form-control form-control-solid" name="remarks" />

                                                    </div>

                                                </div>
                                            </div>


                                            <div className="fv-row mt-2 mb-7">
                                                <div className="form-check form-check-custom form-check-success form-check-solid">
                                                    <input className="form-check-input" type="checkbox" value="" defaultChecked="" />
                                                    <label className="form-check-label" htmlFor="">
                                                        Send SMS
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="text-end pt-15">
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