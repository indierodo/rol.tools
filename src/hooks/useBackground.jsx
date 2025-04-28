import { useEffect } from 'react';

const useBackgroundImage = (imageUrl) => {
    useEffect(() => {
        const originalBackground = document.body.style.backgroundImage;

        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center center';

        return () => {
            document.body.style.backgroundImage = originalBackground;
        };
    }, [imageUrl]);
};

export default useBackgroundImage;