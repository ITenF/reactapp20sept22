import './Shoot.css';

function Shoot(){
    const shoot = ()=>{
        alert("Goed Geschoten zeg!!");
    }

    return(
        <div role="button" className="schotknop"  onClick={shoot}>Take the shot!</div>
    )
        
   
}

export default Shoot;