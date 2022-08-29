import { useEffect, useState } from 'react'
import './App.css'
import About from './sections/about'
import Features from './sections/features'
import Features2 from './sections/features2'
import Footer from './sections/footer'
import Hero from './sections/hero'
import Me from './sections/me'
import Services from './sections/services'
import Support from './sections/support'
import Team from './sections/team'

function App() {
  const [offset, setOffset] = useState(0);

  function handleClick() {
    window.open("https://www.avon.com.br/institucional/seja-representante/cadastro?codigo-self-appointment=77933549", "_blank")
  }

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className="App">
      <Hero />
      <Features />
      <Services />
      <Features2 />
      <About />
      <Support />
      <Team />
      <Me />
      <Footer />
      {
        offset > 200 && (
          <div className='FloatingContactButtonContainer'>
            <button className='FloatingContactButton' onClick={handleClick}>Quero Iniciar Agora</button>
          </div>
        )
      }
    </div>
  )
}

export default App
