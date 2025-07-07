import { Link } from "@inertiajs/react";
import SidebarFunctions from '@/Components/Common/SidebarFunctions';
export default function Navbar() {
    
    function getClasses (href){
        return SidebarFunctions.checkActive(href)?'nav-link text-active-primary ms-0 me-10 show active':'nav-link text-active-primary ms-0 me-10';
    }


    return (
        <>
            <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-2">
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/reports/financial-report")} href="/reports/financial-report">Financial Reports</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/reports/doctors-commission")} href="/reports/doctors-commission">Doctors Commission</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/reports/user-activity-report")} href="/reports/user-activity-report">User Activity Report</Link>
                </li>
                {/*end::Nav item*/}
            </ul>
        </>
    )
}