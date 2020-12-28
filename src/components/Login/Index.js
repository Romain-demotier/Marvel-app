import React , {useState , useEffect , useContext} from 'react'
import {Link} from "react-router-dom"
import {FirebaseContext} from "../FireBase"


function Login(props) {

    const firebase = useContext(FirebaseContext)

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [btn, setbtn] = useState(false);
    const [error, seterror] = useState("");


    //verification bouton cliquable?
    useEffect(() => {
        if (password.length>5 && email !== "") {
            setbtn(true)
            
        }
        else if (btn){
            setbtn(false)
        }
    }, [password , email , btn])
   
    const bouton =  btn ? <button>Connexion</button> : <button disabled>Connexion</button> 

    //Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        firebase.loginUser(email ,password)
        .then(user =>{
            props.history.push("/welcome");
            setemail("");
            setpassword("");;
        })
        .catch(error =>{
            seterror(error);
            setemail("");
            setpassword("");
        })
    }
    //Gestion erreur
    const erreur = error !== "" && <span>{error.message}</span>
    
    return (
        <div className="signUpLoginBox">
        
            <div className="slContainer">
            <div className ="formBoxLeftLogin">
                    
                    </div>
                    <div className = "formBoxRight">
                        <div className = "formContent">
                            <form onSubmit={handleSubmit} >

                                <h2>Connexion</h2>
                                {erreur}
    
                                <div className = "inputBox">
                                    <input onChange={e => setemail(e.target.value)} value ={email} autoComplete="off"  required type="email"></input>
                                    <label htmlFor="email">Email</label>
                                </div>
    
                                <div className = "inputBox">
                                    <input onChange ={e => setpassword(e.target.value)} value={password} autoComplete="off"  required type="password"></input>
                                    <label htmlFor="password">Mot de pass</label>
                                </div>
                                
                                {bouton}
    

                            </form>
                            <div className ="linkContainer">
                                <Link className="simpleLink" to ="/signUp">Nouveau sur l'app marvel ? Incrit toi.</Link>
                            </div>
                        </div>
                    </div>
                   </div>
            
        </div>
    )
    }

export default Login
