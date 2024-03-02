import { HeroList } from "../components"

export const MarevelPage = () => {
  return (
    <div className="container">
      <h1>Marvel</h1> 
      <hr />
      <HeroList publisher={'Marvel Comics'}/>       
    </div>
  )
}
