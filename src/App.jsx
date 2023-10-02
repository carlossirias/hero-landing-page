import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/navbar'
import './App.css'

function App() {
  const {theme, toggleTheme, themeClasses, bgClass} = useTheme()


  return (
    <motion.div layout className={`${theme === 'dark' ? 'dark' : ''} ${bgClass} w-full flex items-center flex-col min-h-screen`}>
      <Navbar></Navbar>
      <motion.main layout className={`${themeClasses} px-[30px] md:px-[72px] flex-1 w-full max-w-7xl`}>
        <h1>HOLA</h1>
        <button onClick={toggleTheme}>Toggle</button>
      </motion.main>
    </motion.div>
  )
}

export default App
