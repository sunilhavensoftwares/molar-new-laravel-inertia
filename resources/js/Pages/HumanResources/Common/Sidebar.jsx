import { Link } from "@inertiajs/react";
import SidebarFunctions from "@/Components/Common/SidebarFunctions";
const menuActive = (search) =>{
    return SidebarFunctions.checkActive(search)?'active show':'';
}
export default function Sidebar() {
    return (
        <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-15">
            {/* begin::Nav item */}
            <li className="nav-item mt-2">
                <Link preserveScroll className={`nav-link text-active-primary ms-0 me-10 py-5 ${menuActive("/human-resources/nurse")}`} href="/human-resources/nurse">Nurse</Link>
            </li>
            {/* end::Nav item */}
            {/* begin::Nav item */}
            <li className="nav-item mt-2">
                <Link preserveScroll className={`nav-link text-active-primary ms-0 me-10 py-5 ${menuActive("/human-resources/pharmacist")}`}  href="/human-resources/pharmacist">Pharmacist</Link>
            </li>
            {/* end::Nav item */}
            {/* begin::Nav item */}
            <li className="nav-item mt-2">
                <Link preserveScroll className={`nav-link text-active-primary ms-0 me-10 py-5 ${menuActive("/human-resources/laboratorist")}`}  href="/human-resources/laboratorist">Laboratorist</Link>
            </li>
            {/* end::Nav item */}
            {/* begin::Nav item */}
            <li className="nav-item mt-2">
                <Link preserveScroll className={`nav-link text-active-primary ms-0 me-10 py-5 ${menuActive("/human-resources/accountant")}`}  href="/human-resources/accountant">Accountant</Link>
            </li>
            {/* end::Nav item */}
            {/* begin::Nav item */}
            <li className="nav-item mt-2">
                <Link preserveScroll className={`nav-link text-active-primary ms-0 me-10 py-5 ${menuActive("/human-resources/receptionist")}`}  href="/human-resources/receptionist">Receptionist</Link>
            </li>
            {/* end::Nav item */}
        </ul>
    )
}
