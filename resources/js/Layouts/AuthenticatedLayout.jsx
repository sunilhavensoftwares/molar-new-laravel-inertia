
import { useEffect, useState } from 'react';
import * as bootstrap from 'bootstrap';
import * as Popper from '@popperjs/core';
window.Popper = Popper;
window.bootstrap = bootstrap; // If legacy code still expects it globally
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Sidebar from '@/Components/Sidebar';
import './css/AuthenticatedLayout.css';
// import '@assets/js/widgets.bundle.js';
// import '@assets/js/custom/widgets.js';
// import '@assets/js/custom/apps/chat/chat.js';
// import '@assets/js/custom/utilities/modals/upgrade-plan.js';
// import '@assets/js/custom/utilities/modals/create-app.js';
// import '@assets/js/custom/utilities/modals/users-search.js';
import images from "@Misc/image_map";
import { useMetronicInit } from '@/Misc/useMetronicInit';
export default function Authenticated({ user, header, children, bodyClass = 'app-default' }) {
const header_logo = images.logo;
const blank_image = images.blank_image;
const blank_image_dark = images.blank_image_dark;
    // useEffect(() => {
    //     const loadPlugins = async () => {
    //         await import('@/metronic/globalPlugins.js');
    //     };
    //     loadPlugins();
    // }, []);
    useMetronicInit();
    useEffect(() => {
        document.body.className = bodyClass;
    }, [bodyClass]);
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(el => {
            new bootstrap.Tooltip(el);
        });
    }, []);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                document.body.setAttribute("data-kt-scrolltop", "on");
            } else {
                document.body.removeAttribute("data-kt-scrolltop");
            }
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        if (window.KTToggle) {
            const el = document.querySelector('[data-kt-toggle="true"]');
            if (el) {
                new window.KTToggle(el);
            }
        }
    }, []);

    return (
        <>
            {/* begin::Image placeholder*/}
            <style>
                {`
                .image-input-placeholder {
                    background-image: url(${blank_image});
                }

                [data-theme="dark"] .image-input-placeholder {
                    background-image: url(${blank_image_dark});
                } `}
            </style>
            {/* end::Image placeholder*/}
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">

                    <Header />

                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">


                        <div id="kt_app_sidebar"
                            className="app-sidebar flex-column no-print"
                            data-kt-drawer="true"
                            data-kt-drawer-name="app-sidebar"
                            data-kt-drawer-activate="{default: true, lg: false}"
                            data-kt-drawer-width="{default:'180px'}"
                            data-kt-drawer-direction="start"
                            data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">

                            <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">

                                <a href="dashboard">
                                    <img alt="Logo" src={header_logo}
                                        className="h-50px app-sidebar-logo-default theme-light-show" />
                                    <img alt="Logo" src={header_logo}
                                        className="h-30px app-sidebar-logo-minimize" />
                                </a>


                                <div id="kt_app_sidebar_toggle"
                                    className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
                                    data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
                                    data-kt-toggle-name="app-sidebar-minimize">

                                    <span className="svg-icon svg-icon-2 rotate-180">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.5"
                                                d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                                                fill="currentColor" />
                                            <path
                                                d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>

                                </div>

                            </div>


                            <div className="app-sidebar-menu overflow-hidden flex-column-fluid">

                                <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y "
                                    data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto"
                                    data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-save-state="true">

                                    <Sidebar />

                                </div>

                            </div>

                        </div>



                        {children}


                        <div id="kt_app_footer" className="app-footer">

                            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">

                                <div className="text-dark order-2 order-md-1">
                                    <span className="text-muted fw-semibold me-1">2022&copy;</span>
                                    <a href="https://keenthemes.com" target="_blank"
                                        className="text-gray-800 text-hover-primary">Molar Clinic</a>
                                </div>

                            </div>

                        </div>
                    </div>

                    <Footer />

                </div>


            </div>



            <div onClick={scrollToTop} className="scrolltop" data-kt-scrolltop="true">
                <span className="svg-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                    </svg>
                </span>
            </div>

        </>
    );
}
