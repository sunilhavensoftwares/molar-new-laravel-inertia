import Select2Input from '@/Components/Select2Input';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Sidebar from './Common/sidebar';
import images from '@/Misc/image_map';
export default function TimeLine({ auth }) {
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
                                        Timeline</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Timeline</li>

                                    </ul>

                                </div>


                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-row">

                                    <Sidebar patient={patient} />



                                    <div className="w-100 flex-lg-row-fluid mx-lg-13">

                                        <div className="d-flex d-lg-none al..6
                            2-ign-items-center justify-content-end mb-10">
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

                                            <div className="card-header card-header-stretch">

                                                <div className="card-title d-flex align-items-center">

                                                    <span className="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3"
                                                                d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                    <h3 className="fw-bold m-0 text-gray-800">Timeline History</h3>
                                                </div>

                                            </div>


                                            <div className="card-body">

                                                <div className="card-body p-0">

                                                    <div className="timeline">

                                                        <div className="timeline">

                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                                                    <div className="symbol-label bg-light">

                                                                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3"
                                                                                    d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                                                                                    fill="currentColor" />
                                                                                <path
                                                                                    d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n1">

                                                                    <div className="pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">File Created</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">Added at 14 Feb 2023,
                                                                                4:23 PM
                                                                            </div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">

                                                                            <a href="#"
                                                                                className="fs-5 text-dark text-hover-primary fw-semibold w-120px min-w-150px">Saud</a>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span
                                                                                    className="badge badge-light text-info">8559072770</span>
                                                                            </div>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span className="badge badge-light-primary">By Admin</span>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">

                                                                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3"
                                                                                    d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                                                                                    fill="currentColor" />
                                                                                <path
                                                                                    d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                                                                                    fill="currentColor" />
                                                                            </svg>
                                                                        </span>

                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">Case History</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">Created at 14 Feb
                                                                                2023, 4:23 PM</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">
                                                                            <div className="d-flex flex-aligns-center pe-10 pe-lg-20">

                                                                                <div className="symbol symbol-circle symbol-60px">
                                                                                    <img alt="Doctor" className="me-3"
                                                                                        src={images.avatar_300_1} />
                                                                                </div>


                                                                                <div className="ms-1 fw-semibold">

                                                                                    <a href="#"
                                                                                        className="fs-6 text-hover-primary fw-bold">Dr
                                                                                        Faisal</a>


                                                                                    <div className="text-gray-400">pt. want clean and
                                                                                        polish and whitening ... i explained for him
                                                                                        the befit of veneers due to has multiple
                                                                                        restorations ..</div>

                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>


                                                            </div>



                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">


                                                                        <i className="fa-regular fa-money-bill-1"></i>


                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">All Bills</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">14 Feb
                                                                                2023, 4:23 PM</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">


                                                                            <div className="min-w-175px pe-2">
                                                                                <span className="badge badge-light text-info fs-5">SAR
                                                                                    200</span>
                                                                            </div>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span className="badge badge-light-primary">
                                                                                    rofida@molar.clinic</span>
                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>


                                                            </div>



                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">
                                                                        <i className="fa-regular fa-calendar-check"></i>
                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">Appointment</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">14 Feb 2023</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-600px px-7 py-3 mb-5">

                                                                            <a href="#"
                                                                                className="fs-5 text-dark text-hover-primary fw-semibold w-350 min-w-150px ">Dr
                                                                                Faisal</a>


                                                                            <div className="min-w-175px pe-2">
                                                                                <span className="badge badge-light text-info">8:00 pm
                                                                                    9:00pm</span>
                                                                            </div>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span className="badge badge-light-primary">
                                                                                    rofida@molar.clinic</span>
                                                                            </div>

                                                                            <div className="min-w-125px pe-2">
                                                                                <button className="btn btn-sm btn-success">
                                                                                    Confirm</button>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>


                                                            </div>



                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">
                                                                        <i className="fa-regular fa-file"></i>
                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">Document</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">Created at 14 Feb
                                                                                2023, 4:23 PM</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">
                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">
                                                                            <div className="min-w-175px pe-2">
                                                                                <div className="symbol symbol-60px mb-5">
                                                                                    <img src={images.pdf}
                                                                                        className="theme-light-show" alt="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="min-w-175px pe-2">
                                                                                <span className="badge badge-info">Download</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>


                                                            </div>



                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">
                                                                        <i className="fa-solid fa-money-bill-transfer"></i>
                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">Deposit</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">14 Feb
                                                                                2023, 4:23 PM</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">


                                                                            <div className="min-w-175px pe-2">
                                                                                <span className="badge badge-light text-info fs-5">SAR
                                                                                    200</span>
                                                                            </div>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span className="badge badge-light-primary">
                                                                                    rofida@molar.clinic</span>
                                                                            </div>
                                                                        </div>


                                                                    </div>

                                                                </div>


                                                            </div>



                                                            <div className="timeline-item">

                                                                <div className="timeline-line w-40px"></div>


                                                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                                                    <div className="symbol-label bg-light">
                                                                        <i className="fa-solid fa-bell"></i>
                                                                    </div>
                                                                </div>


                                                                <div className="timeline-content mb-10 mt-n2">

                                                                    <div className="overflow-auto pe-3 mb-5">

                                                                        <div className="fs-5 fw-semibold mb-2">Notification History</div>


                                                                        <div className="d-flex align-items-center mt-1 fs-6">

                                                                            <div className="text-muted me-2 fs-7">14 Feb 2023</div>

                                                                        </div>

                                                                    </div>


                                                                    <div className="overflow-auto pb-5">

                                                                        <div
                                                                            className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-450px px-7 py-3 mb-5">

                                                                            <a href="#"
                                                                                className="fs-5 text-dark text-hover-primary fw-semibold w-350 min-w-150px ">Dr
                                                                                Faisal</a>


                                                                            <div className="min-w-175px pe-2">
                                                                                <span className="badge badge-light text-info">8:00 pm
                                                                                    9:00pm</span>
                                                                            </div>


                                                                            <div className="min-w-150px pe-2">
                                                                                <span className="badge badge-light-primary">
                                                                                    rofida@molar.clinic</span>
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

                </div>
            </>
        </AuthenticatedLayout>
    )
}