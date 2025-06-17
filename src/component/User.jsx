import { useLoaderData } from "react-router-dom";

const User = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {
                data.map(data=><p key={data.id}>{data.name}</p>)
            }
        </div>
    );
};

export default User;