import './App.scss'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Footer } from './Components/Partials/Footer/Footer'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'

function App() {

  return (
    <>
      <Header></Header>    
      <Main>
        <AppRouter />
      </Main>
      <Footer></Footer>
    </>
  )
}

export default App
