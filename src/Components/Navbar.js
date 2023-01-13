import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";


export const Navbar=()=>{

    const [user]=useAuthState(auth);

    const logOut= async()=>{
        await signOut(auth);
    }

    return(
         
        <div className="navbar">
         <h1 className="heading">Social Media App React</h1>   
        <Link to="/" className="links">Home</Link>
        <Link to="/login" className="links">Login</Link>
        {user &&<button onClick={logOut} className="logout">Log Out</button>}
        
        {user && <div className="user">
            
            <p >{user?.displayName}</p>
            <img src={user?.photoURL} width="20" height="20" alt="not signed in"/>
            
        </div>
        }
        </div>
    
    );
}