import { Routes, Route } from "react-router-dom" 
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarevelPage, SearchPage} from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path="dc" element={<DcPage/>}/>
            <Route path="marvel" element={<MarevelPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="hero/:id" element={<HeroPage/>}/>
            <Route path="/" element={<DcPage/>}/>
        </Routes>
      </div>
    </>
  )
}