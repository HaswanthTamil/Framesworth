// Home.jsx
import { useState } from "react"
import Header from "./components/header"
import Content from "./components/content"
import Search from "./components/search"
import SideBar from "./components/sideBar"

const Home = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <>
      {sideBarOpen && (
        <div className="blurOverlay" onClick={() => setSideBarOpen(false)} />
      )}
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

      <Header toggleSideBar={() => setSideBarOpen(!sideBarOpen)} />
      <Search />
      <Content />
    </>
  )
}

export default Home
