import { useState } from "react";

export default function ChangeName(){
    let name1 = "Alejandro Varela";
    let name2 = "Lucas Parra";

    const [name, setName] = useState(name1);
    const [age, setAge] = useState(15);  
    const [isEmployed, setEmpStatus] = useState(false);

    const handleName = () => {
        if(name === name1){
            setName(name2);  
        }
        else if(name === name2){
            setName(name1);
        }
    }

    const handleAge = () => setAge(age + 1);
    
    return(
        <div className="content">
            <h2>Change the Name and Age</h2>
            <p>Name: {name}</p>
            <button onClick={handleName}>change name</button>
            <p>Age: {age}</p>
            <button onClick={handleAge}>change age</button>
            <p>Employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={() => setEmpStatus(!isEmployed)}>change Employment</button>
        </div>
    );
}

/* const names = ["Alejandro Varela", "Lucas Parra"];
const [name, setName] = useState(names[0]);

const handleChange = () => {
    setName((prevName) => prevName === names[0] ? names[1] : names[0]);
}; */