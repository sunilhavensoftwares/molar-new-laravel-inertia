import { Link } from "@inertiajs/react";
import user_logo from '@assets/media/avatars/300-1.jpg';
import images from "@/Misc/image_map";
export default function Header({user}) {
const header_logo = images.logo;
    return (
        <>
            <style>{`
                .logout-btn{
                text-decoration: none;
                width: 100%;
                border: none;
                background: none;
                }`}
            </style>
            <div id="kt_app_header" className="app-header">

                <div className="app-container container-fluid d-flex align-items-stretch justify-content-between no-print"
                    id="kt_app_header_container">

                    <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                        <div className="btn btn-icon btn-active-color-primary w-35px h-35px"
                            id="kt_app_sidebar_mobile_toggle">

                            <span className="svg-icon svg-icon-2 svg-icon-md-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                        fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                        fill="currentColor" />
                                </svg>
                            </span>

                        </div>
                    </div>


                    <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                        <Link href="/dashboard" className="d-lg-none">
                            <img alt="Logo" src={header_logo} className="h-30px" />
                        </Link>
                    </div>


                    <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1 no-print"
                        id="kt_app_header_wrapper">

                        <div className="app-header-menu app-header-mobile-drawer align-items-stretch" 
                            data-kt-drawer="true"
                            data-kt-drawer-name="app-header-menu" 
                            data-kt-drawer-activate="{default: false, lg: false}"
                            data-kt-drawer-width="250px" 
                            data-kt-drawer-direction="end"
                            data-kt-drawer-toggle="#kt_app_header_menu_toggle" 
                            data-kt-swapper="true"
                            data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                            data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">

                            <div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
                                id="kt_app_header_menu" data-kt-menu="true">

                            </div>

                        </div>


                        <div className="app-navbar flex-shrink-0">


                            <div className="app-navbar-item ms-1 ms-md-3">

                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
                                    id="kt_activities_toggle">

                                    <span className="svg-icon svg-icon-2 svg-icon-md-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                                            <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5"
                                                fill="currentColor" />
                                            <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                                            <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                                        </svg>
                                    </span>

                                </div>

                            </div>


                            <div className="app-navbar-item ms-1 ms-md-3">

                                <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
                                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                    data-kt-menu-placement="bottom-end">

                                    <span className="svg-icon svg-icon-2 svg-icon-md-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                                                fill="currentColor" />
                                            <path
                                                d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                                                fill="currentColor" />
                                            <path opacity="0.3"
                                                d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                                                fill="currentColor" />
                                            <path opacity="0.3"
                                                d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>

                                </div>

                                <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
                                    data-kt-menu="true">

                                    <div className="d-flex flex-column bgi-no-repeat rounded-top"
                                        style={{ backgroundImage: `url(${images.menu_header_bg})` }} >

                                        <h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
                                            <span className="fs-8 opacity-75 ps-3">24 reports</span>
                                        </h3>


                                        <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                                    data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                                                    data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                                                    data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                            </li>
                                        </ul>

                                    </div>


                                    <div className="tab-content">

                                        <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">

                                            <div className="scroll-y mh-325px my-5 px-8">

                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-primary">

                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                                Alice</a>
                                                            <div className="text-gray-400 fs-7">Phase 1 development</div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">1 hr</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-danger">

                                                                <span className="svg-icon svg-icon-2 svg-icon-danger">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.3" x="2" y="2" width="20"
                                                                            height="20" rx="10" fill="currentColor" />
                                                                        <rect x="11" y="14" width="7" height="2" rx="1"
                                                                            transform="rotate(-90 11 14)"
                                                                            fill="currentColor" />
                                                                        <rect x="11" y="17" width="2" height="2" rx="1"
                                                                            transform="rotate(-90 11 17)"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">HR
                                                                Confidential</a>
                                                            <div className="text-gray-400 fs-7">Confidential staff documents
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">2 hrs</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-warning">

                                                                <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Company
                                                                HR</a>
                                                            <div className="text-gray-400 fs-7">Corporeate staff profiles
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">5 hrs</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-success">

                                                                <span className="svg-icon svg-icon-2 svg-icon-success">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z"
                                                                            fill="currentColor" />
                                                                        <path opacity="0.3"
                                                                            d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                                Redux</a>
                                                            <div className="text-gray-400 fs-7">New frontend admin theme
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">2 days</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-primary">

                                                                <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Project
                                                                Breafing</a>
                                                            <div className="text-gray-400 fs-7">Product launch status update
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">21 Jan</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-info">

                                                                <span className="svg-icon svg-icon-2 svg-icon-info">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner
                                                                Assets</a>
                                                            <div className="text-gray-400 fs-7">Collection of banner images
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">21 Jan</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center">

                                                        <div className="symbol symbol-35px me-4">
                                                            <span className="symbol-label bg-light-warning">

                                                                <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                                    <svg width="24" height="25" viewBox="0 0 24 25"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3"
                                                                            d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                                                                            fill="currentColor" />
                                                                        <path
                                                                            d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div className="mb-0 me-2">
                                                            <a href="#"
                                                                className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon
                                                                Assets</a>
                                                            <div className="text-gray-400 fs-7">Collection of SVG icons
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <span className="badge badge-light fs-8">20 March</span>

                                                </div>

                                            </div>


                                            <div className="py-3 text-center border-top">
                                                <a href="../../demo1/dist/pages/user-profile/activity.html"
                                                    className="btn btn-color-gray-600 btn-active-color-primary">View All

                                                    <span className="svg-icon svg-icon-5">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2"
                                                                rx="1" transform="rotate(-180 18 13)"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>


                                        <div className="tab-pane fade show active" id="kt_topbar_notifications_2"
                                            role="tabpanel">

                                            <div className="d-flex flex-column px-9">

                                                <div className="pt-10 pb-0">

                                                    <h3 className="text-dark text-center fw-bold">Get Pro Access</h3>


                                                    <div className="text-center text-gray-600 fw-semibold pt-1">Outlines
                                                        keep you honest. They stoping you from amazing poorly about
                                                        drive</div>


                                                    <div className="text-center mt-5 mb-9">
                                                        <a href="#" className="btn btn-sm btn-primary px-6"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                    </div>

                                                </div>


                                                <div className="text-center px-4">
                                                    {/* <img className="mw-100 mh-200px" alt="image"
                                                                    src="assets/media/illustrations/sketchy-1/1.png" /> */}
                                                </div>

                                            </div>

                                        </div>


                                        <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">

                                            <div className="scroll-y mh-325px my-5 px-8">

                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-success me-4">200
                                                            OK</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">New
                                                            order</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Just now</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-danger me-4">500
                                                            ERR</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">New
                                                            customer</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">2 hrs</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-success me-4">200
                                                            OK</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Payment
                                                            process</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">5 hrs</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-warning me-4">300
                                                            WRN</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Search
                                                            query</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">2 days</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-success me-4">200
                                                            OK</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">API
                                                            connection</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">1 week</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-success me-4">200
                                                            OK</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Database
                                                            restore</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Mar 5</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-warning me-4">300
                                                            WRN</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">System
                                                            update</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">May 15</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-warning me-4">300
                                                            WRN</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Server
                                                            OS update</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Apr 3</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-warning me-4">300
                                                            WRN</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">API
                                                            rollback</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Jun 30</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-danger me-4">500
                                                            ERR</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Refund
                                                            process</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Jul 10</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-danger me-4">500
                                                            ERR</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Withdrawal
                                                            process</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Sep 10</span>

                                                </div>


                                                <div className="d-flex flex-stack py-4">

                                                    <div className="d-flex align-items-center me-2">

                                                        <span className="w-70px badge badge-light-danger me-4">500
                                                            ERR</span>


                                                        <a href="#"
                                                            className="text-gray-800 text-hover-primary fw-semibold">Mail
                                                            tasks</a>

                                                    </div>


                                                    <span className="badge badge-light fs-8">Dec 10</span>

                                                </div>

                                            </div>


                                            <div className="py-3 text-center border-top">
                                                <a href="../../demo1/dist/pages/user-profile/activity.html"
                                                    className="btn btn-color-gray-600 btn-active-color-primary">View All

                                                    <span className="svg-icon svg-icon-5">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2"
                                                                rx="1" transform="rotate(-180 18 13)"
                                                                fill="currentColor" />
                                                            <path
                                                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>


                            <div className="app-navbar-item ms-1 ms-md-3" id="kt_header_user_menu_toggle">

                                <div className="cursor-pointer symbol symbol-30px symbol-md-40px"
                                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                                    data-kt-menu-placement="bottom-end">
                                    <img src={user_logo} alt="user" />
                                </div>

                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                                    data-kt-menu="true">

                                    <div className="menu-item px-3">
                                        <div className="menu-content d-flex align-items-center px-3">

                                            <div className="symbol symbol-50px me-5">
                                                <img alt="Logo" src={user_logo} />
                                            </div>


                                            <div className="d-flex flex-column">
                                                <div className="fw-bold d-flex align-items-center fs-5">Admin</div>
                                                <a href="#"
                                                    className="fw-semibold text-muted text-hover-primary fs-7">{user.email}</a>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="separator my-2"></div>


                                    <div className="menu-item px-5">
                                        <a href="#;" className="menu-link px-5">My Profile</a>
                                    </div>


                                    <div className="separator my-2"></div>


                                    <div className="menu-item px-5 my-1">
                                        <a href="#;" className="menu-link px-5">Account Settings</a>
                                    </div>


                                    <div className="menu-item px-5">
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            className="menu-link px-5 logout-btn"
                                            as="button"
                                        >
                                            Log Out
                                        </Link>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}