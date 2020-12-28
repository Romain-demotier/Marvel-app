import React , {Fragment, useState , useContext , useEffect} from 'react'
import Logout from "../LogOut/index"
import Quiz from "../Quiz/index"
import {FirebaseContext} from "../FireBase"

const Welcome = (props) => {
    

    const firebase = useContext(FirebaseContext);
    
    const [userSession, setuserSession] = useState(null);

    useEffect(() => {
      let listener =  firebase.auth.onAuthStateChanged(user => {
            user ? setuserSession(user) : props.history.push("/")
        })
        return () => {
            listener()
        }
    }, [])


      return userSession === null ? (
        <Fragment>
            <div className ="loader"></div>
            <p>patienter...</p>
        </Fragment>
    ) : (
        <div className="quiz-bg">
            <div className="container">
                <Logout/>
                <Quiz/>
            </div>
        </div>
    )



    
}

export default Welcome
