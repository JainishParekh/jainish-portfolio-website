import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/navbar"
import CustomPage from "./custom-components/custom_page"
import Parallax from "./components/parallex/Parallex"
import Skills from "./components/skills/Skills"
import Portfolio from "./components/portfolio/Portfolio"

function App() {

  return (
    <>
      <div className="snap-y scroll-smooth main_wrapper">
        <CustomPage className={`flex flex-col`} id="homePage">
          <Navbar />
          <Hero />
        </CustomPage>
        <CustomPage><Parallax type="skills"></Parallax></CustomPage>
        <CustomPage><Skills /></CustomPage>
        <CustomPage><Parallax ></Parallax></CustomPage>
        <Portfolio />
        {/* <CustomPage>Contact</CustomPage> */}
      </div>
    </>
  )
}

export default App
