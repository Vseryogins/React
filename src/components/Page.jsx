import React from 'react';
import Sidebar from './pageComponents/Sidebar';
import News from './pageComponents/News';

const Page = () => {
    return(
        <div className="page">
            <Sidebar />
            <News />
        </div>
    );
}

export default Page;
