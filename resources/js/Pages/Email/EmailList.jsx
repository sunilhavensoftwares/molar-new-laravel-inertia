import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import FlatpickrInput from "@/Components/FlatpickrInput"
import CKEditor from "@/Components/CKEditor"
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import AddPrescription from '@/Modals/AddPrescription'
import AddPatient from "@/Modals/AddPatient"
import AddDoctor from "@/Modals/AddDoctor"
import images from '@/Misc/image_map';
import Navbar from '@/Pages/Report/common/Navbar'
export default function Index({ auth }) {

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report
        </h2>}
        >

            <Head title="Report - User Activity Report" />
            <>
            
            </>
        </AuthenticatedLayout>
    );
}