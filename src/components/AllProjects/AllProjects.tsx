import React from 'react';
import Layout from "../../layout/Layout";
import styles from './AllProjects.module.scss'
import ActiveLastBreadcrumb from "../basic-components/Breadcrumb/ActiveLastBreadcrumb";
import Search from "../../design-core/Search";
import {Button} from "@mui/material";
import SvgSelector from "../basic-components/SvgSelector/SvgSelector";

const AllProjects = (props: any) => {
    return (
        <Layout>
            <div className={styles.tableHeader}>
                <ActiveLastBreadcrumb/>
                <div className={styles.tableHeaderActions}>
                    <Search/>
                    <Button variant="contained">
                        <SvgSelector id={"Add"}/>
                        Add new Connection </Button>
                </div>
            </div>
        </Layout>
    );
};

export default AllProjects;
