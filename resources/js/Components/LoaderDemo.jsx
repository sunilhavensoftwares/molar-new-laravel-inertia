import React, { useState } from 'react';
import Loader from './Loader';

const LoaderDemo = () => {
    const [activeLoader, setActiveLoader] = useState(null);

    const variants = [
        { key: 'default', name: 'Default Spinner' },
        { key: 'dots', name: 'Bouncing Dots' },
        { key: 'pulse', name: 'Pulse' },
        { key: 'bars', name: 'Loading Bars' },
        { key: 'ring', name: 'Ring Spinner' },
        { key: 'medical', name: 'Medical Cross' },
        { key: 'dental', name: 'Dental Location' }
    ];

    const sizes = ['small', 'medium', 'large', 'extra-large'];
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

    const showFullScreenLoader = (variant, color = 'primary') => {
        setActiveLoader({ variant, color });
        setTimeout(() => setActiveLoader(null), 3000);
    };

    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Loader Component Demo</h3>
                            <p className="text-muted mb-0">Beautiful loaders for your medical application</p>
                        </div>
                        <div className="card-body">
                            
                            {/* Variants Section */}
                            <div className="mb-5">
                                <h4 className="mb-4">Loader Variants</h4>
                                <div className="row g-4">
                                    {variants.map((variant) => (
                                        <div key={variant.key} className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card h-100 border">
                                                <div className="card-body text-center">
                                                    <h6 className="card-title">{variant.name}</h6>
                                                    <div className="my-4" style={{ height: '80px' }}>
                                                        <Loader 
                                                            variant={variant.key} 
                                                            size="medium"
                                                            color="primary"
                                                            message=""
                                                        />
                                                    </div>
                                                    <button 
                                                        className="btn btn-sm btn-primary"
                                                        onClick={() => showFullScreenLoader(variant.key)}
                                                    >
                                                        Preview Fullscreen
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sizes Section */}
                            <div className="mb-5">
                                <h4 className="mb-4">Different Sizes</h4>
                                <div className="row g-4">
                                    {sizes.map((size) => (
                                        <div key={size} className="col-lg-3 col-md-6">
                                            <div className="card h-100 border">
                                                <div className="card-body text-center">
                                                    <h6 className="card-title text-capitalize">{size}</h6>
                                                    <div className="my-4" style={{ height: '100px' }}>
                                                        <Loader 
                                                            variant="ring" 
                                                            size={size}
                                                            color="primary"
                                                            message=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Colors Section */}
                            <div className="mb-5">
                                <h4 className="mb-4">Color Variants</h4>
                                <div className="row g-3">
                                    {colors.map((color) => (
                                        <div key={color} className="col-lg-2 col-md-3 col-sm-4 col-6">
                                            <div className="card h-100 border">
                                                <div className="card-body text-center p-3">
                                                    <h6 className="card-title small text-capitalize">{color}</h6>
                                                    <div className="my-3" style={{ height: '60px' }}>
                                                        <Loader 
                                                            variant="medical" 
                                                            size="medium"
                                                            color={color}
                                                            message=""
                                                        />
                                                    </div>
                                                    <button 
                                                        className={`btn btn-sm btn-${color === 'dark' ? 'dark' : color}`}
                                                        onClick={() => showFullScreenLoader('medical', color)}
                                                    >
                                                        Test
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Usage Examples */}
                            <div className="mb-5">
                                <h4 className="mb-4">Usage Examples</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h6 className="card-title mb-0">Inline Loader</h6>
                                            </div>
                                            <div className="card-body">
                                                <p>Loading content...</p>
                                                <Loader 
                                                    variant="dots" 
                                                    size="small"
                                                    color="primary"
                                                    message="Fetching data..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-header">
                                                <h6 className="card-title mb-0">Button with Loader</h6>
                                            </div>
                                            <div className="card-body">
                                                <button className="btn btn-primary d-flex align-items-center">
                                                    <div className="me-2">
                                                        <Loader 
                                                            variant="ring" 
                                                            size="small"
                                                            color="light"
                                                            message=""
                                                        />
                                                    </div>
                                                    Processing...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Examples */}
                            <div className="mb-4">
                                <h4 className="mb-4">Code Examples</h4>
                                <div className="accordion" id="codeExamples">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#basicUsage">
                                                Basic Usage
                                            </button>
                                        </h2>
                                        <div id="basicUsage" className="accordion-collapse collapse" data-bs-parent="#codeExamples">
                                            <div className="accordion-body">
                                                <pre className="bg-light p-3 rounded"><code>{`import Loader from '@/Components/Loader';

// Basic usage
<Loader />

// With custom variant and size
<Loader variant="medical" size="large" color="primary" />

// Fullscreen overlay
<Loader 
  variant="dots" 
  fullScreen={true} 
  message="Loading..." 
  overlay={true} 
/>`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pageLoader">
                                                Page Loader Integration
                                            </button>
                                        </h2>
                                        <div id="pageLoader" className="accordion-collapse collapse" data-bs-parent="#codeExamples">
                                            <div className="accordion-body">
                                                <pre className="bg-light p-3 rounded"><code>{`import PageLoader from '@/Components/PageLoader';

// In your layout component
export default function Layout({ children }) {
    return (
        <PageLoader>
            <div className="app">
                {children}
            </div>
        </PageLoader>
    );
}`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Fullscreen Loader */}
            {activeLoader && (
                <Loader 
                    variant={activeLoader.variant}
                    size="large"
                    color={activeLoader.color}
                    message="Demo loading..."
                    fullScreen={true}
                    overlay={true}
                />
            )}
        </div>
    );
};

export default LoaderDemo;
