import './components/todo/todo.css'

import Header from './layout/Header'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App