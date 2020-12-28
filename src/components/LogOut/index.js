import React , {useState , useEffect ,useContext} from 'react';
import { FirebaseContext } from "../FireBase/index";


const Logout = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setchecked] = useState(false);



    useEffect(() => {
        if (checked === true) {
            console.log(firebase.signOutUser);
            firebase.signOutUser();
        }
       
    }, [checked, firebase]);

    const handleChange = (e) =>{
        console.log(e.target.checked)
        setchecked(e.target.checked)
    }

    return (
        <div className = "logoutContainer">
            <label className ="switch">
                <input onChange = {handleChange} type ="checkbox" checked= {checked}/>

                <span className="slider round"></span>

                
            </label>
        </div>
    )
}

export default Logout
