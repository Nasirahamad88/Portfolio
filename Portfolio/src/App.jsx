import { useState } from 'react'

// import './App.css'
import Header from './component/Header/Header'
import Body from './component/Body/Body'
import AboutMe from './component/AboutMe/AboutMe'
import ProjectSection from './component/ProjectSection/ProjectSection'
import SkillSection from './component/Skill/SkillSection'
import Contact from './component/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Header></Header>
        <AboutMe></AboutMe>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <Contact></Contact>
        {/* <Body></Body> */}
    </div>
    </div>
  )
}

export default App
