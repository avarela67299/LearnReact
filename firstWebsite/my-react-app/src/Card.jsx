import profilePic from './assets/foto-Alejandro.jpg'

function Card(){
    return(
        <div className="Card">
            <img alt="profilePic" src={profilePic}></img>
            <h2>Alejandro Varela</h2>
            <p>Student of web development and working on graphics</p>
        </div>
    );

}

export default Card