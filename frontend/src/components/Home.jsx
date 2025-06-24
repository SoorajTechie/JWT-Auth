import {useState , useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Home()
{

    const[user,setUser] = useState(null);
    const navigate = useNavigate();

    ///fetchdata on mount

    useEffect(()=>{
        axios.get("http://localhost:8000/api/user/profile",{
                  withCredentials: true, // ✅ Send cookie (JWT)
        })
        .then((res)=> setUser(res.data))
        .catch(()=>{
            alert("Not authenticated");
            navigate("/login");

        });
    },[navigate]);


    //logout

    const HandleLogout = async () =>{

        try {
            
            await axios.get("http://localhost:8000/api/user/logout",{
                 withCredentials: true,
            });
            alert("logged out");
            navigate("/login");

        } catch (error) {
            alert("logout failed");
        }

    };


    return(
       <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>

          {/* 🚪 Logout Button */}
          <button onClick={HandleLogout} style={{ marginTop: "1rem" }}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )



}
export default Home