
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()
    console.log(data)
    const handelSubmit=(e)=>{
        
        e.preventDefault()
        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email)
        const updateuser = {name,email}
        console.log(updateuser)
        fetch(`http://localhost:5000/userss/${data._id}`,{
            method:"PUT",
            headers:{
                  "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(updateuser)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            form.reset()
        })
    }
    return (
        <div>
             <form onSubmit={handelSubmit} className="grid py-20 text-white border-2  card-body max-w-6/12 md:w-3/12  mx-auto items-center  mt-20 bg-gray-600 p-10 shadow-2xs gap-2 rounded-2xl">
                <input defaultValue={data?.name} type="text" placeholder="Your name" name="name" className="border-white border-2 h-10 rounded-xl w-full p-2"/>
                <input defaultValue={data?.email} type="email" placeholder="youremail@gmail.com" name="email" id="" className="border-white w-full border-2 h-10 rounded-xl p-2" />
                <br />
                <input type="submit" value='Update User' name="Submit" className="border-black h-10 hover:bg-blue-700 font-bold hover:text-white hover:font-bold bg-purple-500 rounded-xl p-2" />
            </form>
        </div>
    );
};

export default Update;