import {withRouter} from 'next/router'
import Link from 'next/link'

const ActiveLink = ({router, href, children, link}) => {
    (function prefetchPages() {
        if (typeof window !== "undefined") {
            router.prefetch(router.pathname)
        }
    })();

    const handleClick = e => {
        e.preventDefault();
        router.push(href)
    };

    const isCurrentPath = router.pathname === href || router.asPath === href;
    // console.log('aspath=' + router.asPath, 'pathname=' + router.pathname, 'href=' + href);

    return (
        <div>
                <a href={href} onClick={handleClick} style={{
                    textDecoration: 'none',
                    margin: 0,
                    padding: 0,
                    fontWeight: isCurrentPath ? "bold" : "normal",
                    color: isCurrentPath ? '#C62828' : '#fff'
                }}
                >
                    {children}
                </a>
        </div>
    );
};

export default withRouter(ActiveLink);
