import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import images from '@/Misc/image_map';
export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">

                <div className="d-flex flex-center flex-lg-start flex-column">

                    <a href="#" className="mb-7">
                        <img alt="Logo" src={images.logo_white} className="h-150px h-md-100 " />
                    </a>

                </div>

            </div>
            <div className="d-flex flex-center w-lg-50 p-10">

                <div className="card rounded-3 w-md-550px">

                    <div className="card-body p-10 p-lg-20">

                        <div className="d-flex flex-stack py-2">

                            <div className="me-2">
                                <Link href="login" className="btn btn-icon bg-light rounded-circle">

                                    <span className="svg-icon svg-icon-2 svg-icon-gray-800">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M9.6 20V4L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.6 20Z" fill="currentColor"></path>
                                        </svg>
                                    </span>

                                </Link>
                            </div>

                        </div>

                        <form onSubmit={submit} className="form w-100" >

                            <div className="text-center mb-10">

                                <h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>


                                <div className="text-gray-500 fw-semibold fs-6">Enter your email to reset your password.</div>

                            </div>



                            <div className="input-group fv-row mb-5">
                                <span className="input-group-text">
                                    <i className="las la-envelope fs-1"></i>
                                </span>
                                <TextInput
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control bg-transparent"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />


                            </div>
                            {errors.email && <p><InputError message={errors.email} className="mt-2 text-danger" /></p>}

                            <div className="d-grid mb-10">
                                {/* <button type="submit" id="kt_password_reset_submit" className="btn btn-primary me-4">

                                    <span className="indicator-label">Send</span>


                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>

                                </button> */}
                                <PrimaryButton className="btn btn-primary me-4" disabled={processing}>
                                    <span className="indicator-label">Send</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </PrimaryButton>
                            </div>


                        </form>

                    </div>

                </div>

            </div>
        </GuestLayout>
    );
}
