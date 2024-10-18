import ProfileCard from './Component/ProfileCard'
import './App.css'
import Navbar from './Component/Navbar'
import Information from './Component/Information'
import ContactForm from './Component/ContactForm'
function App({ }) {


  return (
    <>
      <Navbar />
      <ProfileCard />
      <Information />
      <ContactForm />
    </>
  )
}

export default App
