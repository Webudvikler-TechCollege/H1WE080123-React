import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Counter } from './components/Counter/Counter'

function App() {

  return (
    <>
      <Header></Header>    
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>  
      <Footer></Footer>
    </>
  )
}

export default App
