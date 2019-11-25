import {useEffect, useState} from "react";
import {breakPoints} from "../utils/Config";

export const useDevice = () => {
    const [device, setDevice] = useState(null);

    const updateDimensions = () => {
        let _device = 'desktop';
        if (window.innerWidth <= breakPoints.DESKTOP)
            _device = 'table';

        if (window.innerWidth <= breakPoints.TABLET)
            _device = 'phone';

        setDevice(_device);
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions)
    }, []);

    return device;
};

