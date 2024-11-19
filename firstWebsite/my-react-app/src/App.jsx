import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CardSection from './CardSection.jsx'
import ConditionalSection from './ConditionalSection.jsx'

function App() {

  return(
    <>
      
      <Header></Header>
      <Card></Card>
      <Card></Card>
      <hr/>
      <CardSection/>
      <hr/>
      <ConditionalSection></ConditionalSection>
      <Footer/>
    </>
  )

}

export default App
