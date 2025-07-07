
import './bootstrap';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PageLoader from '@/Components/PageLoader';
import '@assets/plugins/global/plugins.bundle.css';
import '@assets/css/style.bundle.css';
import '@assets/css/custom.css';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PageLoader>
                <App {...props} />
            </PageLoader>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
