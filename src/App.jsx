import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Whitepaper from './Components/Whitepaper'
import Tokenomics from './Components/Tokenomics'
import TokenInfo from './Components/TokenInfo'
import Roadmap from './Components/Roadmap'
import ContractAddress from './Components/ContractAddress'
import Community from './Components/Community'
import Footer from './Components/Footer'
import FeaturesSlider from './Components/FeaturesSlider'
import Marquees from './Components/Marquees'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Home/>
      <Marquees/>
      <About/>
      <Whitepaper/>
       <FeaturesSlider/>
      <Tokenomics/>
        <TokenInfo/>
        <Roadmap/>
        <ContractAddress/> 
      
      <Community/>
      <Footer/>  
     
      
    </>
  )
}

export default App
