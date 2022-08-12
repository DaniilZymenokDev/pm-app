import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from '../basicComponents.module.scss'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    // console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
    return (
        <div className={styles.breadCrumbs} role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    All Projects
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Project details
                </Link>
                <Link
                    color="inherit"
                    underline="hover"
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Connections
                </Link>
            </Breadcrumbs>
        </div>
    );
}
