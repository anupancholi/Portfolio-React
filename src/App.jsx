import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'

/* Hairline gradient rule that softens the jump between sections */
const Rule = () => <div className="section-rule" aria-hidden="true" />

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Rule />
      <Services />
      <Rule />
      <Work />
      <Rule />
      <Contact />
      <Footer />
    </>
  )
}

export default App
