import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = ()=>{

    const users ={
        username:"",
        password:"",
    };

    const[user,setUser] = useState(users);

    const navigate = useNavigate();

    const HandleInput = (e)=>{
        
        const{name,value} = e.target;

        setUser({...user,[name]:value});

    };

    const loginHandle = async (e)=>{
        
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/user/login",user,{
                 withCredentials: true,
            });
            navigate("/");

        if(!res)
        {
            console.log("not logined");

        }
        } catch (error) {
            
        }
    };

    return(
        <>
        <div>
        <form onSubmit={loginHandle}>
             <div>username</div>
            <input type="text" name="username" onChange={HandleInput}/>
            <div>password</div>
            <input type="password" name="password" onChange={HandleInput}/>

            <button type="submit">Login</button>
        
        </form>

        </div>
      
       
        </>
    )

}

export default Login