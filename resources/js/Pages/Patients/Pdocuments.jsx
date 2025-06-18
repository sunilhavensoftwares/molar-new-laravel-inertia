import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
export default function Pdocuments({ auth }) {
    const { patient } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">patients</h2>} >
            <Head title="patients" />
            <>
            </>
            </AuthenticatedLayout>
    )
}