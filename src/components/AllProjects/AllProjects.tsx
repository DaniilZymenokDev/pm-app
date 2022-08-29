import React, {createContext, useState} from 'react';
import Layout from "../../layout/Layout";
import styles from './AllProjects.module.scss'
import ActiveLastBreadcrumb from "../basic-components/Breadcrumb/ActiveLastBreadcrumb";
import Search from "../../design-core/Search";
import {Button} from "@mui/material";
import SvgSelector from "../basic-components/SvgSelector/SvgSelector";
import ConnectionsTable from "./ConnectionsTable/ConnectionsTable";
import HorizontalNonLinearStepper from "../NewConnectionStepper/NewConnection";


const AllProjects: React.FC = () => {
    const [isModal, setIsModal] = useState(false);
    const [connectionsList, setConnectionsList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const openModalWindow = (): void => {
        setIsModal(!isModal)
    }

    
    return (
            <Layout>
                {isModal && <HorizontalNonLinearStepper setList={setConnectionsList} active={isModal} setActive={setIsModal}/>}
                <div className={styles.tableHeader}>
                    <ActiveLastBreadcrumb/>
                    <div className={styles.tableHeaderActions}>
                        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                        <Button variant="contained" onClick={openModalWindow}>
                            <SvgSelector id={"Add"}/>
                            Add new Connection </Button>
                    </div>
                </div>
                <ConnectionsTable  searchValue={searchValue} list = {connectionsList}/>

            </Layout>

    );
};

export default AllProjects;