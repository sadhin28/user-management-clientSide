import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Addnewuser = () => {
   
    const handelSubmit=(e)=>{
        e.preventDefault();
       const form = e.target;
       const name= form.name.value;
       const email=form.email.value;
        const user={name,email}
      fetch('http://localhost:5000/users',{ 
       
        method:'POST',
            body:JSON.stringify(user),
            headers:{
                 "Content-type":"application/json; charset=UTF-8"
            }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }
    const [user,setuser]=useState([])

     const mongoData= useLoaderData();
    useEffect(()=>{
       
        setuser(mongoData)
    },[])
    return (
        <div>
            {
              user.map(data=><li>{data.name}</li>)
            }
             <form onSubmit={handelSubmit} className="grid py-20 border-2  card-body max-w-6/12 md:w-3/12  mx-auto items-center  mt-20 bg-gray-50 p-10 shadow-2xs gap-2 rounded-2xl">
                <input type="text" placeholder="Your name" name="name" className="border-black border-2 h-10 rounded-xl w-full p-2"/>
                <input type="email" placeholder="youremail@gmail.com" name="email" id="" className="border-black w-full border-2 h-10 rounded-xl p-2" />
                <br />
                <input type="submit" value='Add User' name="Submit" className="border-black h-10 hover:bg-blue-700 hover:text-white hover:font-bold bg-purple-500 rounded-xl p-2" />
            </form>
        </div>
    );
};

export default Addnewuser;