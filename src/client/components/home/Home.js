import React from 'react';
import './home.less';
import PublicMarkList from '../marks/PublicMarkList';
import Sidebar from '../sidebar/Sidebar';
export default () => {
    return (
        <section className="home">
            <PublicMarkList />
            <Sidebar />
        </section>
    )
}