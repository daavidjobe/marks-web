import React from 'react';
import PublicMarkList from '../marks/PublicMarkList';
import './home.less';
import Sidebar from '../sidebar/Sidebar';
export default () => {
    return (
        <section className="home">
            <PublicMarkList />
            <Sidebar />
        </section>
    )
}