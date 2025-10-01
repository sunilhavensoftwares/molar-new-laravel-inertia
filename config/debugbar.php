<?php

return [
    /*
     |--------------------------------------------------------------------------
     | Debugbar Settings
     |--------------------------------------------------------------------------
     |
     | Debugbar is enabled by default, when debug is set to true in app.php.
     | You can override the value by setting enable to true or false instead of null.
     |
     */

    'enabled' => env('DEBUGBAR_ENABLED', false), // Disable by default for better performance
    'storage' => [
        'enabled'    => false, // Disable storage for better performance
        'driver'     => 'file', // redis, file, pdo, custom
        'path'       => storage_path('debugbar'), // For file driver
        'connection' => null,   // Leave null for default connection (Redis/PDO)
        'provider'   => '', // Instance of StorageInterface for custom driver
    ],

    /*
     |--------------------------------------------------------------------------
     | Vendors
     |--------------------------------------------------------------------------
     |
     | Vendor files are included by default, but can be set to false.
     | This can also be set to 'js' or 'css', to only include javascript or css vendor files.
     | Vendor files are for css: font-awesome (including fonts) and highlight.js (css files)
     | and for js: jquery and and highlight.js
     | So if you want syntax highlighting, set it to true.
     | jQuery is set to not conflict with existing jQuery scripts.
     |
     */

    'include_vendors' => false, // Disable for better performance

    /*
     |--------------------------------------------------------------------------
     | Capture Queries
     |--------------------------------------------------------------------------
     |
     | Whether to capture SQL queries or not.
     |
     */

    'capture_queries' => env('DEBUGBAR_CAPTURE_QUERIES', false), // Disable for better performance

    /*
     |--------------------------------------------------------------------------
     | Collectors
     |--------------------------------------------------------------------------
     |
     | List of collectors to enable/disable
     |
     */

    'collectors' => [
        'phpinfo'         => false, // Disabled for performance
        'messages'        => true,
        'time'            => true,
        'memory'          => true,
        'exceptions'      => true,
        'log'             => true,
        'db'              => false, // Disabled for performance
        'views'           => false, // Disabled for performance
        'route'           => false, // Disabled for performance
        'auth'            => false, // Disabled for performance
        'gate'            => false, // Disabled for performance
        'session'         => false, // Disabled for performance
        'symfony_request' => false, // Disabled for performance
        'mail'            => false, // Disabled for performance
        'laravel'         => false, // Disabled for performance
        'events'          => false, // Disabled for performance
        'default_request' => false, // Disabled for performance
        'logs'            => false, // Disabled for performance
        'files'           => false, // Disabled for performance
        'config'          => false, // Disabled for performance
        'cache'           => false, // Disabled for performance
        'models'          => false, // Disabled for performance
        'livewire'        => false, // Disabled for performance
    ],

    /*
     |--------------------------------------------------------------------------
     | Options
     |--------------------------------------------------------------------------
     |
     | Additional options
     |
     */

    'options' => [
        'auth' => [
            'show_name' => false,   // Also show the users name/email in the debugbar
        ],
        'db' => [
            'with_params'       => false,   // Render SQL with the parameters substituted
            'backtrace'         => false,   // Use a backtrace to find the origin of the query in your files.
            'backtrace_exclude_paths' => [],   // Paths to exclude from backtrace. (in addition to defaults)
            'timeline'          => false,   // Add the queries to the timeline
            'explain' => [                 // Show EXPLAIN output on queries
                'enabled' => false,
                'types' => ['SELECT'],     // Deprecated setting, is always only SELECT
            ],
            'hints'             => false,    // Show hints for common mistakes
            'show_copy'         => false,    // Show copy button next to the query
        ],
        'mail' => [
            'full_log' => false
        ],
        'views' => [
            'timeline' => false,              // Add the views to the timeline
            'data' => false,    //Note: Can slow down the application, because the data can be quite large..
        ],
        'route' => [
            'label' => true  // show complete route on bar
        ],
        'logs' => [
            'file' => null
        ],
        'cache' => [
            'values' => false // collect cache values
        ],
    ],

    /*
     |--------------------------------------------------------------------------
     | Inject Debugbar
     |--------------------------------------------------------------------------
     |
     | Instead of adding the debugbar through middleware, inject it through the response
     |
     */

    'inject' => filter_var(env('DEBUGBAR_INJECT', false), FILTER_VALIDATE_BOOLEAN),

    /*
     |--------------------------------------------------------------------------
     | DebugBar route prefix
     |--------------------------------------------------------------------------
     |
     | Sometimes you want to set route prefix to be used by DebugBar to load
     | its resources from. Usually the need comes from misconfigured web server or
     | from trying to overcome bugs like this: http://trac.nginx.org/nginx/ticket/97
     |
     */
    'route_prefix' => '_debugbar',

    /*
     |--------------------------------------------------------------------------
     | DebugBar route domain
     |--------------------------------------------------------------------------
     |
     | By default DebugBar route served from the same domain that request served.
     | To override default domain, specify it. If enabled, this route domain
     | will be used for DebugBar every time.
     |
     */
    'route_domain' => null,

    /*
     |--------------------------------------------------------------------------
     | DebugBar theme
     |--------------------------------------------------------------------------
     |
     | Switches between light and dark themes. If set to auto it will respect system preferences
     | Possible values: auto, light, dark
     |
     */
    'theme' => env('DEBUGBAR_THEME', 'auto'),

    /*
     |--------------------------------------------------------------------------
     | Backtrace stack limit
     |--------------------------------------------------------------------------
     |
     | By default, the DebugBar limits the number of frames returned by the 'debug_backtrace()' function
     | If you need larger stacktraces, you can increase this number. Setting it to 0 will result in no limit.
     |
     */
    'debug_backtrace_limit' => 50,
];
