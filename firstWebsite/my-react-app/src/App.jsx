import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CardSection from './CardSection.jsx'
import ConditionalSection from './ConditionalSection.jsx'
import MyButton from './Button.jsx'
import ChangeName from './LearnUseState.jsx' 
import PizzaOrder from './Pizza.jsx'

function App() {

  return(
    <>  
      <Header></Header>
      <Card></Card>
      <Card></Card>
      <CardSection/>
      <ConditionalSection conditional={false}/>
      <MyButton/>
      <ChangeName></ChangeName>
      <PizzaOrder/>
      <Footer/>
    </>
  )

}

export default App
