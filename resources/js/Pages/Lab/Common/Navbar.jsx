import { Link } from '@inertiajs/react'
import React from 'react'
import SidebarFunctions from '@/Components/Common/SidebarFunctions';
export const Navbar = () => {
    const report_is_active = SidebarFunctions.checkActive('/lab/report')?'show active':'';
    const report_template_is_active = SidebarFunctions.checkActive('/lab/report-templates')?'show active':'';
    return (
        <>
            {/*begin::Navs*/}
            <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-15">
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={`nav-link text-active-primary ms-0 me-10 ${report_is_active}`} href="/lab/report">Reports</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={`nav-link text-active-primary ms-0 me-10 ${report_template_is_active}`} href="/lab/report-templates">Templates</Link>
                </li>
                {/*end::Nav item*/}
            </ul>
            {/*begin::Navs*/}
        </>
    )
}

