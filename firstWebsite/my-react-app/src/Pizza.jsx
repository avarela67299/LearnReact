import {useState} from "react";

export default function PizzaOrder() {

    const [name, setName] = useState();
    const handleName = (event) => setName(event.target.value); //onChange returns an event with info that we can access
    
    const [flavour, setFlavour] = useState("margarita");
    const handleFlavour = (event) => setFlavour(event.target.value);

    const [extra, setExtra] = useState(false);
    const handleExtra = () => setExtra(!extra);

   
   
    return(
        <div className="content">
            <h2>Pizza Order</h2>
            <p>Use the onChange handeler mainly for form elements</p>
            <div className="formContainer">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleName}></input>
                    <br/>

                    <label htmlFor="flavour">Flavour</label>
                    <select id="flavour" onChange={handleFlavour}>
                        <option value={"margarita"}>margarita</option>
                        <option value="peperoni">peperoni</option>
                        <option value="veggie">veggie</option>
                    </select>
                    <br/>
                    
                    <label htmlFor="extraCheese">Extra Cheese?</label>
                    <input type="checkbox" id="extraCheese" onChange={handleExtra}/>



                    <p>{name}</p>
                    <p>{flavour}</p>
                    <p>{extra ? "yes" : "no"}</p>
                </form>
            </div>
        </div>
    );
}