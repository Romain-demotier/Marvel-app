import React , {useRef , useEffect , useState , Fragment} from 'react'
import {Link} from "react-router-dom"

const Landing = () => {

   const [btn , setbtn] = useState (false) //Togle pour l'affichage des griffe

   
    const refWolverine = useRef(null);
    
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        

    setTimeout(() => {
        refWolverine.current.classList.remove("startingImg"); 
        setbtn(true);
      }, 1000);
    }, [])

    const handleLeftImg = ()=>{
        refWolverine.current.classList.add("leftImg");
    }

    const handleRightImg = ()=>{
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = ()=>{
        if ( refWolverine.current.classList.contains("leftImg")){
            refWolverine.current.classList.remove("leftImg")
        }
        else if (refWolverine.current.classList.contains("rightImg")){
            refWolverine.current.classList.remove("rightImg")
        }
    };
    
  const displayBtn =  btn&&  (

    <Fragment>
        <div className ="leftBox">
            <Link to="/login" onMouseOver={handleLeftImg} onMouseOut={clearImg} className = "btn-welcome">
             Connexion
            </Link>
        </div>

        <div className ="rightBox">
            <Link to="/signUp" onMouseOver={handleRightImg} onMouseOut={clearImg} className = "btn-welcome">
            Inscription
            </Link>
        </div>
    </Fragment>)
  

    return (
       <main ref = {refWolverine}  className = "welcomePage">

            {displayBtn}

       </main>
    )
}

export default Landing
