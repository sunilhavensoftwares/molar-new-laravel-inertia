<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <link rel="stylesheet" href="/plugins/select2/dist/css/select2.min.css" />
    <!-- Vite: React & Page JS + CSS -->
    @viteReactRefresh
    @vite([
        'resources/js/app.jsx',
        "resources/js/Pages/{$page['component']}.jsx",
        // You can import CSS in app.jsx as well, but OK to include here:
        
    ])

    @routes
    @inertiaHead
</head>

<body id="kt_app_body"
      data-kt-app-layout="light-sidebar"
      data-kt-app-sidebar-enabled="true"
      data-kt-app-sidebar-fixed="true"
      data-kt-app-sidebar-hoverable="true"
      data-kt-app-sidebar-push-header="true"
      data-kt-app-sidebar-push-toolbar="true"
      data-kt-app-sidebar-push-footer="true"
      data-kt-app-toolbar-enabled="true"
      class="{{ isset($bodyClass) ? $bodyClass : 'app-default' }}">

    @inertia

    <!-- Load Metronic JS from public directory -->
    <!-- <script src="{{ asset('assets/plugins/global/plugins.bundle.js') }}"></script>
    <script>
        window.$ = window.jQuery = jQuery;
    </script> -->
    
    <script src="{{asset('/plugins/jquery/dist/jquery.min.js')}}" ></script>
    <script src="{{asset('/plugins/select2/dist/js/select2.full.min.js')}}"></script>
    <script src="{{ asset('/assets/js/scripts.bundle.js') }}"></script>
   


</body>
</html>
