import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Allphones = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Link to='/user'>User</Link>
            {
                data.map(data=><div>
                        <li><Link to={`/phones/${data.id}`}>{data.name}</Link></li>
                    </div>
                )
            }
        </div>
    );
};

export default Allphones;