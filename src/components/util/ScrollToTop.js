import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * @return {null}
 */
export default function ScrollToTop(props) {
    const {pathname} = useLocation();

    useEffect(() => {
        // setTimeout(() => window.scrollTo(0, 0));
        window.scrollTo(0, 0);
    }, [pathname]);

    return props.children;
}