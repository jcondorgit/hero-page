import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <div className="container">
      <h1>DC</h1> 
      <hr />
      <HeroList publisher={'DC Comics'}/>       
    </div>
  )
}
