import propTypes from 'prop-types'

export default function CardProps (props){
    return(
        <div className ="cardProps">
            <img alt="Student image" src={props.image}></img>
            <h2>{props.name}</h2>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "Yes" : "no"}</p>
            <p>{props.description}</p>          
        </div>
    );
}

CardProps.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    age: propTypes.number,
    student: propTypes.bool,
    description: propTypes.string,
}

CardProps.defaultProps  = {
    image: "https://placehold.co/640x640",
    name: "Guest",
    age: 0,
    student: false,
    description: "no description available"
}
