import FrontLayout from '@/Layouts/FrontLayout';
import { Head } from '@inertiajs/react';

export default function Front() {
    return (
        <FrontLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Front</h2>}
        >
            <Head title="Front" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're in front end!</div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
