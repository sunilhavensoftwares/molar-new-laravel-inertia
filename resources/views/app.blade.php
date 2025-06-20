<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <!-- Fonts -->
    @if(!isset($guestLayout))
    <link rel="stylesheet" href="{{ asset('assets/plugins/custom/fullcalendar/fullcalendar.bundle.css') }}">
    @endif
    <link rel="stylesheet" href="{{ asset('assets/plugins/global/plugins.bundle.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.bundle.css') }}">
    @if(!isset($guestLayout))
    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">
    @endif
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body id="kt_app_body" data-kt-app-layout="light-sidebar" data-kt-app-sidebar-enabled="true"
    data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true"
    data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true"
    class="{{ isset($bodyClass) && !empty($bodyClass) ? $bodyClass : 'app-default' }}">
    @inertia

    <!-- Global Scripts -->
    <script src="{{ asset('assets/plugins/global/plugins.bundle.js') }}"></script>
    <script>
        window.$ = window.jQuery = jQuery;
    </script>
    <script src="{{ asset('assets/js/scripts.bundle.js') }}"></script>
</body>

</html>