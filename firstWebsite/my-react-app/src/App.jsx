import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CardSection from './CardSection.jsx'
import ConditionalSection from './ConditionalSection.jsx'
import MyButton from './Button.jsx'

function App() {

  return(
    <>  
      <Header></Header>
      <Card></Card>
      <Card></Card>
      <CardSection/>
      <ConditionalSection conditional={false}/>
      <MyButton></MyButton>
      <Footer/>
    </>
  )

}

export default App
