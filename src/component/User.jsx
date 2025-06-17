import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
    const [user,setuser]=useState()
    const data = useLoaderData()
   
    const handelSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name=form.name.value;
        const email=form.email.value
        const user ={name,email}
        console.log(user)
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
    }
    return (
        <div className="">
            <form onSubmit={handelSubmit} className="grid py-20 border-2  card-body max-w-6/12 md:w-3/12  mx-auto items-center  mt-20 bg-gray-50 p-10 shadow-2xs gap-2 rounded-2xl">
                <input type="text" placeholder="Your name" name="name" className="border-black border-2 h-10 rounded-xl p-2"/>
                <input type="email" placeholder="youremail@gmail.com" name="email" id="" className="border-black border-2 h-10 rounded-xl p-2" />
                <br />
                <input type="submit" value='Add User' name="Submit" className="border-black h-10 hover:bg-blue-700 hover:text-white hover:font-bold bg-purple-500 rounded-xl p-2" />
            </form>
            {
                data.map(data=><div>
                    
                    <p key={data.id}>{data.id} : {data.name}</p>
                    
                </div>)
            }
        </div>
    );
};

export default User;