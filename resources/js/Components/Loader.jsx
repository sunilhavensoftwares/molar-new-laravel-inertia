import React from 'react';

const Loader = ({
    variant = 'default',
    size = 'medium',
    message = 'Loading...',
    fullScreen = false,
    color = 'primary',
    overlay = true
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'small': return '1.5rem';
            case 'medium': return '3rem';
            case 'large': return '4rem';
            case 'extra-large': return '6rem';
            default: return '3rem';
        }
    };

    const getColorClass = () => {
        switch (color) {
            case 'primary': return 'text-primary';
            case 'secondary': return 'text-secondary';
            case 'success': return 'text-success';
            case 'danger': return 'text-danger';
            case 'warning': return 'text-warning';
            case 'info': return 'text-info';
            case 'dark': return 'text-dark';
            default: return 'text-primary';
        }
    };

    const sizeClass = getSizeClasses();
    const colorClass = getColorClass();

    // Inject minimal CSS only once
    if (!document.head.querySelector('style[data-lightweight-loader-styles]')) {
        const style = document.createElement('style');
        style.textContent = `
            .spinner {
                display: inline-block;
                width: var(--size);
                height: var(--size);
                border: 3px solid rgba(0, 0, 0, 0.1);
                border-left-color: currentColor;
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        // Add this to your style.textContent (append to the existing spinner CSS)
        style.textContent += `
                .dots-loader {
                    display: inline-flex;
                    gap: 0.3rem;
                    align-items: center;
                    justify-content: center;
                }

                .dots-loader span {
                    width: 0.6em;
                    height: 0.6em;
                    background-color: currentColor;
                    border-radius: 50%;
                    animation: dotsBounce 0.8s infinite ease-in-out;
                }

                .dots-loader span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .dots-loader span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes dotsBounce {
                    0%, 100% {
                    transform: translateY(0);
                    }
                    50% {
                    transform: translateY(-0.4em);
                    }
                }
                `;

        style.setAttribute('data-lightweight-loader-styles', 'true');
        document.head.appendChild(style);
    }

    // Render the lightweight spinner
    const renderSpinner = () => {
        if (variant === 'dots') {
            return (
                <div className={`dots-loader ${colorClass}`} style={{ fontSize: sizeClass }}>
                    <span></span><span></span><span></span>
                </div>
            );
        }

        // default spinner
        return (
            <div
                className={`spinner ${colorClass}`}
                style={{ '--size': sizeClass }}
                role="status"
                aria-label="Loading"
            />
        );
    };

    const containerClasses = fullScreen
        ? 'position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'
        : 'd-flex justify-content-center align-items-center p-4';

    const overlayClasses = overlay && fullScreen
        ? 'bg-white bg-opacity-75'
        : '';

    const overlayStyle = overlay && fullScreen
        ? { zIndex: 9999 }
        : {};

    return (
        <div className={`${containerClasses} ${overlayClasses}`} style={overlayStyle}>
            <div className="text-center">
                <div className="mb-3">
                    {renderSpinner()}
                </div>
                {message && (
                    <div className="small text-muted fw-medium">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Loader;
