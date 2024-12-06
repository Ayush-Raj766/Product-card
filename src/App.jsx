import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeButton from './component/ThemeButton'
import Card from './component/Card'

function App() {
  const [themeMode, setTheme] = useState('light')
  const lightTheme =()=>{
    setTheme("light")
  }
  const darkTheme =()=>{
    setTheme("dark")
  }
  useEffect(()=>{
    const classes=document.querySelector('html').classList
    classes.remove("light" , "dark")
    classes.add(themeMode)
  } ,[themeMode])

  return (
    <ThemeProvider value={{themeMode ,darkTheme ,lightTheme}}>
    <div className=" flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
