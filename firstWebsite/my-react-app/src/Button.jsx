let myVar = 1;
export default function MyButton(){
  
    
    return(
        <>
        <button onClick={console.log(myVar+= 1)}>Click Me</button>
        <h2>{myVar}</h2>
        </>
    );
}

function whenClick(){
   return console.log(myVar+= 1);
}
