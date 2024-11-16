export default function CardProps (props){
    return(
        <div className ="cardProps">
            <img alt="imageProps" src={props.image}></img>
            <h2>{props.name}</h2>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "Yes" : "no"}</p>
            <p>{props.description}</p>          
        </div>
    );
}