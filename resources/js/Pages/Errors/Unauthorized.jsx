import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import AddAppointmentModal from "@/Modals/AddAppointmentModal"
import { Head, Link } from "@inertiajs/react"
export default function Unauthorized({ auth, message }) {
  return (
    <AuthenticatedLayout user={auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Unauthorized</h2>}>
      <Head title="Unauthorized" />
      <>
        {/* begin::Main*/}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/* begin::Content wrapper*/}
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <div className="card">
              <div className="card-body">
                <h1 className="text-6xl font-bold text-red-600">403</h1>
                <p className="mt-4 text-lg">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </AuthenticatedLayout>

  );
}
