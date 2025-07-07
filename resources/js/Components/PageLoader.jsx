import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import Loader from './Loader';

const PageLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Loading...');

    useEffect(() => {
        const handleStart = () => {
            setIsLoading(true);
            setLoadingMessage('Loading page...');
        };

        const handleProgress = (progress) => {
            if (progress.percentage) {
                setLoadingMessage(`Loading... ${Math.round(progress.percentage)}%`);
            }
        };

        const handleFinish = () => {
            // Add a small delay to show completion
            setTimeout(() => {
                setIsLoading(false);
                setLoadingMessage('Loading...');
            }, 200);
        };

        const handleError = () => {
            setLoadingMessage('Loading failed');
            setTimeout(() => {
                setIsLoading(false);
                setLoadingMessage('Loading...');
            }, 1000);
        };

        // Listen to Inertia events
        router.on('start', handleStart);
        router.on('progress', handleProgress);
        router.on('finish', handleFinish);
        router.on('error', handleError);

        return () => {
            router.off('start', handleStart);
            router.off('progress', handleProgress);
            router.off('finish', handleFinish);
            router.off('error', handleError);
        };
    }, []);

    return (
        <>
            {isLoading && (
                <Loader
                    variant="dots"
                    size="extra-large"
                    message={loadingMessage}
                    fullScreen={true}
                    color="primary"
                    overlay={true}
                />
            )}
            {children}
        </>
    );
};

export default PageLoader;
