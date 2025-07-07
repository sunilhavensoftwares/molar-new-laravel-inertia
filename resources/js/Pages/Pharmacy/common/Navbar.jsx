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
                    <Link className={getClasses("/pharmacy/dashboard")} href="/pharmacy/dashboard">Dashboard</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/pharmacy/sales")} href="/pharmacy/sales">Sales</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/pharmacy/expense")} href="/pharmacy/expense">Expense</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/pharmacy/expense-categories")} href="/pharmacy/expense-categories">Expense Categories</Link>
                </li>
                {/*end::Nav item*/}
                {/*begin::Nav item*/}
                <li className="nav-item mt-2">
                    <Link className={getClasses("/pharmacy/pharmacy-report")} href="/pharmacy/pharmacy-report">Pharmacy Report</Link>
                </li>
                {/*end::Nav item*/}
            </ul>
        </>
    )
}