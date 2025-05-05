import {useState} from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  return(
    <>
    <h1>Theme Switcher: Light or Dark Mode</h1>
    <button onClick={()=> {theme === "light" ? setTheme("dark") : theme === "dark" ? setTheme("light") }
    </>

  )
}