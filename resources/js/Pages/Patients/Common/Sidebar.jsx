import { Link, usePage } from "@inertiajs/react";

export default function Sidebar({ patient = '' }) {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const getClasses = (link) => {
        return currentPath === link ? "nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0 active" : "nav-link text-muted text-active-primary ms-0 py-0 me-10 ps-9 border-0";
    }
    return (
        <div className="d-lg-flex flex-column flex-lg-row-auto w-lg-275px" data-kt-drawer="true"
            data-kt-drawer-name="start-sidebar" data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '275px': '300px'}"
            data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_social_start_sidebar_toggle" data-kt-drawer-close="#kt_social_start_sidebar_close">

            <div className="card mb-5 mb-xl-8">

                <div className="card-body pt-15 px-0">

                    <div className="d-flex flex-column text-center mb-9 px-9">

                        <div className="symbol symbol-80px symbol-lg-150px mb-4">
                            <img src="/assets/media/avatars/300-1.jpg" className="" alt="" />
                        </div>


                        <div className="text-center">

                            <Link href="#"
                                className="text-gray-800 fw-bold text-hover-primary fs-4">John Smith</Link>


                            <span className="text-muted d-block fw-semibold">johnsmith@gmail.com</span>

                        </div>

                    </div>


                    <div className="row px-9 mb-4">

                        <div className="col-md-6 text-center">
                            <div className="text-gray-800 fw-bold fs-6">
                                <span className="m-0">7894612345</span>
                            </div>
                            <span className="text-gray-500 fs-7 d-block fw-bold">Phone</span>
                        </div>


                        <div className="col-md-6 text-center">
                            <div className="text-gray-800 fw-bold fs-6">
                                SAR<span className="m-2">0</span>
                            </div>
                            <span className="text-gray-500 fs-7 d-block fw-bold">DUE</span>
                        </div>

                    </div>



                    <div className="row px-9 mb-4">

                        <div className="col-md-6 text-center">
                            <div className="text-gray-800 fw-bold fs-6">
                                <span className="m-0">15-09-1992</span>
                            </div>
                            <span className="text-gray-500 fs-7 d-block fw-bold">DOB</span>
                        </div>


                        <div className="col-md-6 text-center">
                            <div className="text-gray-800 fw-bold fs-6">
                                <span className="m-2">Male</span>
                            </div>
                            <span className="text-gray-500 fs-7 d-block fw-bold">Gender</span>
                        </div>

                    </div>



                    <div className="m-0">

                        <ul className="nav nav-pills nav-pills-custom flex-column border-transparent fs-5 fw-bold">

                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}`)}
                                    href={`/patients/patient-detail/${patient.id}`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M2 21V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H3C2.4 22 2 21.6 2 21Z"
                                                fill="currentColor" />
                                            <path
                                                d="M2 10V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H3C2.4 11 2 10.6 2 10Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Appointments

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/documents`)}
                                    href={`/patients/patient-detail/${patient.id}/documents`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                                            <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                                            <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                                            <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                                        </svg>
                                    </span>
                                    Documents

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/case-history`)}
                                    href={`/patients/patient-detail/${patient.id}/case-history`}>

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
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
                                    Case History

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/prescription`)}
                                    href={`/patients/patient-detail/${patient.id}/prescription`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                fill="currentColor" />
                                            <path
                                                d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Prescription

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/timeline`)}
                                    href={`/patients/patient-detail/${patient.id}/timeline`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                fill="currentColor" />
                                            <path
                                                d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Timeline

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/lab`)}
                                    href={`/patients/patient-detail/${patient.id}/lab`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                fill="currentColor" />
                                            <path
                                                d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Lab

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>


                            <li className="nav-item mt-5">
                                <Link className={getClasses(`/patients/patient-detail/${patient.id}/payment-history`)}
                                    href={`/patients/patient-detail/${patient.id}/payment-history`} >

                                    <span className="svg-icon svg-icon-3 svg-icon-muted me-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                                fill="currentColor" />
                                            <path
                                                d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                    Payment History

                                    <span
                                        className="bullet-custom position-absolute start-0 top-0 w-3px h-100 bg-primary rounded-end"></span>

                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    )
}