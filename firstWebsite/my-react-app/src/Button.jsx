
export default function MyButton(){

    const handleClick = () => console.log("you clicked");
    const handleClick2 = (name) => console.log(`stop clicking ${name}`);

  
    
    return(
        <>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick2("lucas")}>click with parameters</button>
        <p>Check the console to see changes</p>
        </>
    );
}


