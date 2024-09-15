import CustomPage from "./custom-components/custom_page"

function App() {

  return (
    <>
      <div className="snap-y scroll-smooth main_wrapper">
        <CustomPage>Hero</CustomPage>
        <CustomPage>Parallex</CustomPage>
        <CustomPage>Services</CustomPage>
        <CustomPage>Parallex</CustomPage>
        <CustomPage>Portfolio1</CustomPage>
        <CustomPage>Portfolio2</CustomPage>
        <CustomPage>Portfolio3</CustomPage>
        <CustomPage>Contact</CustomPage>
      </div>
    </>
  )
}

export default App
