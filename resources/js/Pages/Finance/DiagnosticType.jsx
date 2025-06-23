import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { AddAppointmentModal } from "@/Modals/AddAppointmentModal"
import { Head } from "@inertiajs/react"
export default function Index ({ auth }){
    return (
        <AuthenticatedLayout user={auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Finance</h2>}>
            <Head title="Finance" />
            <>
            </>
            </AuthenticatedLayout>
    )
}