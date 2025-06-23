import CountUpCard from '@/Components/countUpCard';
import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { AddAppointmentModal } from '@/Modals/AddAppointmentModal';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import images from '@/Misc/image_map';
export default function Detail({ auth }) {
    
    const { doctor } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Doctor Details</h2>}
        >
            <Head title="Doctor Details" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Doctor Profile</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Doctor Profile</li>

                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="card mb-6">
                                    <div className="card-body pt-9 pb-0">

                                        <div className="d-flex flex-wrap flex-sm-nowrap">

                                            <div className="me-7 mb-4">
                                                <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                                    <img src={doctor.img_url} alt="image" />
                                                    <div
                                                        className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px">
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex-grow-1">

                                                <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">

                                                    <div className="d-flex flex-column">

                                                        <div className="d-flex align-items-center mb-2">
                                                            <a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">DR. {doctor.name}</a>
                                                            {doctor.status && doctor.status === 'active' && <a href="#">

                                                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px"
                                                                        height="24px" viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                                                                            fill="white" />
                                                                    </svg>
                                                                </span>

                                                            </a>}
                                                        </div>


                                                        <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                                            {doctor.department &&
                                                            <a href="#"
                                                                className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">

                                                                <span className="svg-icon svg-icon-4 me-1">
                                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
                                                                            fill="currentColor" />
                                                                        <rect x="7" y="6" width="4" height="4" rx="2"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {doctor.department}
                                                            </a>
                                                            }
                                                            <a href="#"
                                                                className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">

                                                                <span className="svg-icon svg-icon-4 me-1">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                Riyadh
                                                            </a>
                                                            {doctor.email && <a href="#"
                                                                className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">

                                                                <span className="svg-icon svg-icon-4 me-1">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {doctor.email}
                                                            </a>
                                                            }
                                                        </div>

                                                    </div>


                                                    <div className="d-flex my-4">
                                                        <a href="#"
                                                            className="btn btn-sm btn-bg-light btn-active-color-primary me-3"
                                                            data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Set
                                                            Discount</a>
                                                        <a href="#" className="btn btn-sm btn-primary me-2"
                                                            data-bs-target="#kt_modal_add_user" data-bs-toggle="modal">Edit</a>
                                                        <a href="#" className="btn btn-sm btn-danger me-2">Delete</a>
                                                    </div>

                                                </div>


                                                <div className="d-flex flex-wrap flex-stack">

                                                    <div className="d-flex flex-column flex-grow-1 pe-8">

                                                        <div className="d-flex flex-wrap">

                                                            <div
                                                                className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                                <div className="d-flex align-items-center">
                                                                    <CountUpCard finalValue={4500} />
                                                                </div>


                                                                <div className="fw-semibold fs-6 text-gray-400">Appointments</div>

                                                            </div>


                                                            <div
                                                                className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">

                                                                <div className="d-flex align-items-center">
                                                                        <CountUpCard finalValue={80} />

                                                                </div>


                                                                <div className="fw-semibold fs-6 text-gray-400">Patients</div>

                                                            </div>


                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>


                                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">


                                            <li className="nav-item mt-2">
                                                <a className="nav-link text-active-primary ms-0 me-10 py-5 show active"
                                                    data-bs-toggle="tab" href="#kt_tab_pane_1">Time Schedule</a>
                                            </li>


                                            <li className="nav-item mt-2">
                                                <a className="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="tab"
                                                    href="#kt_tab_pane_2">Appointments</a>
                                            </li>


                                            <li className="nav-item mt-2">
                                                <a className="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="tab"
                                                    href="#kt_tab_pane_3">Holidays</a>
                                            </li>


                                            <li className="nav-item mt-2">
                                                <a className="nav-link text-active-primary ms-0 me-10 py-5" data-bs-toggle="tab"
                                                    href="#kt_tab_pane_4">Patients</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>





                                <div className="tab-content" id="myTabContent">

                                    <div className="tab-pane show active " id="kt_tab_pane_1" role="tabpanel">
                                        <div className="card mb-5 mb-xl-10">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Schedule</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modal_add_schedule" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr>
                                                                <th className="min-w-250px">Day</th>
                                                                <th className="min-w-100px">Start</th>
                                                                <th className="min-w-150px">End</th>
                                                                <th className="min-w-150px">Duration</th>
                                                                <th className="min-w-150px">Options</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-hover-primary text-gray-600">Sunday</a>
                                                                </td>
                                                                <td>
                                                                    <span className="badge badge-light-success fs-7 fw-bold">4:30
                                                                        AM</span>
                                                                </td>
                                                                <td><span className="badge badge-light-danger fs-7 fw-bold">5:00 Am</span></td>
                                                                <td>30 Minutes</td>
                                                                <td>
                                                                    <div className="w-100px position-relative">
                                                                        <Select2Input
                                                                            className="form-select form-select-sm form-select-solid"
                                                                            data-control="select2"
                                                                            data-placeholder="Options"
                                                                            data-hide-search="true"
                                                                            name="actions_schedule">
                                                                            <option></option>
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



                                    <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
                                        <div className="card mb-5 mb-xl-10">

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

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr>
                                                                <th className="min-w-80px">Id</th>
                                                                <th className="min-w-100px">Patient</th>
                                                                <th className="min-w-150px">Date - Time</th>
                                                                <th className="min-w-150px">Remarks</th>
                                                                <th className="min-w-150px">option</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <span className="badge badge-light-info fs-7 fw-bold">Afsal</span>
                                                                </td>
                                                                <td>10 Feb 2023, 5:00 Am To 5:30 AM</td>
                                                                <td></td>
                                                                <td>
                                                                    <div className="w-100px position-relative">
                                                                        <Select2Input
                                                                            className="form-select form-select-sm form-select-solid"
                                                                            data-control="select2"
                                                                            data-placeholder="Options"
                                                                            data-hide-search="true"
                                                                            name="actions_appointments">
                                                                            <option></option>
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




                                    <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
                                        <div className="card mb-5 mb-xl-10">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Holidays</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modal_add_holiday" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr>
                                                                <th className="min-w-80px">Id</th>
                                                                <th className="min-w-100px">Date</th>
                                                                <th className="min-w-150px">option</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>1</td>
                                                                <td>10 Feb 2023</td>
                                                                <td>
                                                                    <div className="w-100px position-relative">
                                                                        <Select2Input className="form-select form-select-sm form-select-solid"
                                                                            data-control="select2" data-placeholder="Options"
                                                                            data-hide-search="true" name="actions_holidays">
                                                                            <option></option>
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




                                    <div className="tab-pane fade " id="kt_tab_pane_4" role="tabpanel">
                                        <div className="card mb-5 mb-xl-10">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h3>Patients</h3>
                                                </div>


                                                <div className="card-toolbar">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#kt_modal_add_patient" className="btn btn-sm btn-primary my-1">Add</a>
                                                </div>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="table-responsive">

                                                    <table
                                                        className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">

                                                        <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                                                            <tr>
                                                                <th className="min-w-80px">Id</th>
                                                                <th className="min-w-100px">Detail</th>
                                                                <th className="min-w-150px">National Id</th>
                                                                <th className="min-w-150px">Due Balance</th>
                                                                <th className="min-w-150px">Options</th>
                                                            </tr>
                                                        </thead>


                                                        <tbody className="fw-6 fw-semibold text-gray-600">
                                                            <tr>
                                                                <td className="">
                                                                    456
                                                                </td>
                                                                <td>
                                                                    <a href="#"
                                                                        className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Bradly
                                                                        Beal</a>
                                                                    <span
                                                                        className="text-muted fw-semibold text-muted d-block fs-7">789456132</span>
                                                                </td>
                                                                <td><span className="badge badge-light-info fs-7 fw-bold" />74586212</td>
                                                                <td className="text-dark fw-bold d-block fs-5">SAR120</td>
                                                                <td>
                                                                    <div className="w-100px position-relative">
                                                                        <Select2Input className="form-select form-select-sm form-select-solid"
                                                                            data-control="select2" data-placeholder="Options"
                                                                            data-hide-search="true" name="actions_patients">
                                                                            <option></option>
                                                                            <option value="1">Info</option>
                                                                            <option value="22">History</option>
                                                                            <option value="3">Payment</option>
                                                                            <option value="4">Delete</option>
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


                    <div className="modal fade" id="kt_modal_new_target" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content rounded">

                                <div className="modal-header pb-0 border-0 justify-content-end">

                                    <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">

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


                                <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">

                                    <form id="kt_modal_new_target_form" className="form" action="#">

                                        <div className="mb-13 text-center">

                                            <h1 className="mb-3">Set Discount</h1>

                                        </div>


                                        <div className="d-flex flex-column mb-8 fv-row">

                                            <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                <span className="required">Discount</span>
                                            </label>

                                            <input type="text" className="form-control form-control-solid" placeholder="Enter Discount"
                                                name="doctor_discount" />
                                        </div>


                                        <div className="text-center">
                                            <button type="reset" data-bs-dismiss="modal" className="btn btn-light me-3">Cancel</button>
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>



                    <div className="modal fade" id="kt_modal_add_user" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header" id="kt_modal_add_user_header">

                                    <h2 className="fw-bold">Edit Doctor</h2>


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

                                    <form id="kt_modal_add_user_form" className="form" action="#">

                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll"
                                            data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                            data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                            data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px">


                                            <div className="fv-row mb-7">

                                                <label className="d-block fw-semibold fs-6 mb-5">Avatar</label>

                                                <div className="image-input image-input-outline image-input-placeholder"
                                                    data-kt-image-input="true">

                                                    <div className="image-input-wrapper w-125px h-125px"
                                                        style={{ backgroundImage: `url('${doctor.img_url}')` }} >
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
                                                        style={{ backgroundImage: `url('${doctor.img_url}')` }}>
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
                                                    name="patient_dob" type="text" readOnly="readOnly" />

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
                    {/* begin::Modal - Add Appointment*/}
                    <AddAppointmentModal/>
                    {/* end::Modal - Add Appointment*/}
                    <div className="modal fade" id="modal_add_holiday" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered mw-650px">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">Add Holiday</h2>


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


                                <div className="modal-body">

                                    <form className="form" >

                                        <div className="d-flex flex-column">

                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">Doctor</label>


                                                <select className="form-select form-select-solid" data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_holiday">
                                                    <option>Select Doctor</option>
                                                    <option value="1">Faisal</option>
                                                    <option value="2">Ahmad</option>
                                                    <option value="3">Saud</option>
                                                </select>

                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Date</label>


                                                <input className="form-control form-control-solid" name="date" placeholder="Pick a date" id="kt_datepicker_1" />

                                            </div>

                                        </div>


                                        <div className="text-end pt-15">
                                            <button type="reset" className="btn btn-light me-3"
                                                data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary"
                                                data-kt-users-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="modal fade" id="modal_add_schedule" tabIndex="-1" aria-hidden="true">

                        <div className="modal-dialog modal-dialog-centered">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h2 className="fw-bold">+ Add Schedule</h2>


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


                                <div className="modal-body">

                                    <form id="kt_modal_add_schedule_form" className="form" >

                                        <div className="d-flex flex-column">


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">


                                                        <label className="required fw-semibold fs-6 mb-2">Doctor</label>

                                                        <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal" data-bs-target="#kt_modal_add_doctor">Add</span>


                                                        <select className="form-select form-select-solid" data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_schedule">
                                                            <option>Select Doctor</option>
                                                            <option value="1">Faisal</option>
                                                            <option value="2">Ahmad</option>
                                                            <option value="3">Saud</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Weekday</label>


                                                        <select className="form-select form-select-solid" data-control="select2" aria-label="Select example" data-dropdown-parent="#modal_add_schedule">
                                                            <option>Select Weekday</option>
                                                            <option value="1">Sunday</option>
                                                            <option value="2">Monday</option>
                                                            <option value="3">Tuesday</option>
                                                            <option value="3">Wednesday</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">
                                                <div className="row g-3">
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">Start Time</label>


                                                        <input type="time" name="start_time" className="form-control form-control-solid" />

                                                    </div>
                                                    <div className="col-md-6">

                                                        <label className="required fw-semibold fs-6 mb-2">End Time</label>


                                                        <input type="time" name="end_time" className="form-control form-control-solid" />

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="fv-row mb-7">

                                                <label className="required fw-semibold fs-6 mb-2">
                                                    Appointment Duration</label>


                                                <select className="form-select form-select-solid">
                                                    <option>Select Duration</option>
                                                    <option value="1">15 Minutes</option>
                                                    <option value="2">30 Minutes</option>
                                                    <option value="3">45 Minutes</option>
                                                    <option value="3">1 Hour</option>
                                                </select>

                                            </div>

                                        </div>


                                        <div className="text-end pt-15">
                                            <button type="reset" className="btn btn-light me-3"
                                                data-bs-dismiss="modal">Discard</button>
                                            <button type="submit" className="btn btn-primary"
                                                data-kt-users-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                            </button>
                                        </div>

                                    </form>

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
                                                        style={{ backgroundImage: `url(${images.avatar_300_6})` }}>
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

                </div>

            </>
        </AuthenticatedLayout>
    )
}