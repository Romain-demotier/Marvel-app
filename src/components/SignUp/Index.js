import React ,{useState , useContext} from 'react'
import {firebaseContexte} from "../FireBase"
import {Link} from "react-router-dom"

function SignUp(props) {
console.log(props)
const firebase = useContext(firebaseContexte)

    const data = {
        pseudo: "",
        email: "",
        password: "",
        confirmpassword: ""
        
    }
    const [logIn, setlogIn] = useState(data);

    const [error, seterror] = useState("");

    const handleChange = (event)=>{
        setlogIn({...logIn, [event.target.id]:event.target.value })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const {email , password} = logIn;
        firebase.signUpUser(email , password)
        .then(user => {
            setlogIn({...data})
            props.history.push("/welcome");
        })
        .catch(error =>{
            seterror(error)
            setlogIn({...data})
        })
    }
    const {pseudo , email, password, confirmpassword} = logIn;

    const btn = pseudo=== "" || email === "" || password === "" || password !== confirmpassword
    ? <button disabled>Inscription</button>
    :<button>Inscription</button>

    // gestionErreur

   const errorMsg = error !== "" && <span>{error.message} </span>



    return (
        <div className = "signUpLoginBox">
            <div className = "slContainer">
                <div className ="formBoxLeftSignup">

                </div>
                <div className = "formBoxRight">
                    <div className = "formContent">
                        <form  onSubmit={handleSubmit}>
                            <h2>inscription</h2>
                            {errorMsg}

                            <div className = "inputBox">
                                <input autoComplete="off" onChange={handleChange} value={pseudo} required type="text" id = "pseudo"></input>
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className = "inputBox">
                                <input autoComplete="new-email" onChange={handleChange} value={email} required type="email" id = "email"></input>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className = "inputBox">
                                <input autoComplete="new-password" onChange={handleChange} value={password} required type="password" id = "password"></input>
                                <label htmlFor="password">Mot de pass</label>
                            </div>

                            <div className = "inputBox">
                                <input  onChange={handleChange} value={confirmpassword} required type="password" id = "confirmpassword"></input>
                                <label htmlFor="confirmPassword">Confirmer le Mot de pass</label>
                            </div>
                            {btn}
                        </form>
                        <div className ="linkContainer">
                            <Link className="simpleLink" to ="/login">Deja Inscrit? Connecte toi</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp
