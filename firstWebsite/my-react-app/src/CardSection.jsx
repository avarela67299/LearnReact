import CardProps from "./CardProps";
import student1 from './assets/pexels-bestbe-models-975242-2100650.jpg'
import student2 from './assets/pexels-doquyen-1520760.jpg'
import student3 from './assets/pexels-manei-2690323.jpg'
export default function CardSection () {
    return(
        <div className ="cardSection content">
            <CardProps 
                image={student1}
                name ="Alejandro" 
                age={26} 
                isStudent={true} 
                description="This is a description of the student Alejandro for his presentation card"
            />
            <CardProps
                image={student2}
                name="Michelle"
                age={25}
                isStudent={false}
                description="This is a description of the student Michelle for his presentation card"
            />
            <CardProps
                image={student3}
                name="Santiago"
                age={27}
                isStudent={true}
                description="This is a description of the student Santiago for his presentation card"
            />
            <CardProps></CardProps>
        </div>
    );
}