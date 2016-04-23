import React from 'react';
import './home.less';
import Marks from '../marks/Marks';
import Sidebar from '../sidebar/Sidebar';
export default () => {
    return (
        <section className="home">
            <Marks />
            <Sidebar />
        </section>
    )
}