import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailsphone = () => {
    const data = useLoaderData();
    return (
        <div style={{border:'3px solid', padding:'20px', backgroundColor:'gray'}}>
             <h3>{data.name}</h3>
            <img style={{width:"100px", height:"100px"}} src={data.image} alt="" />
        </div>
    );
};

export default Detailsphone;