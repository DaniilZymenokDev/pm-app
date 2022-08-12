import React from 'react';
import Header from "./Header/Header";
import Table from "./Table/Table";

const Layout = (props:any) => {
    return (
        <div className={'layout'}>
            <div className="sidebar"></div>
            <div className="content">
                <Header/>
                <Table>
                    {props.children}
                </Table>
            </div>
        </div>
    );
};

export default Layout;
