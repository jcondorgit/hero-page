import { useMemo } from "react";
import 'animate.css';
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";

export const HeroPage = () => {
  const{ id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroeById( id ), [ id ]);
  
  const onNavigateBack = ()=>{
    navigate(-1);
  }
  
  if(!hero)
    return <Navigate to={'/'}/>
  return (
    <>
    <div className="row mt-5 bg-gray">
      <div className="col-4">
        <img src={`/heroes/${hero.id}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__backInUp animate__flash" />
      </div>
      <div className="col-8">
        <h3 className="animate__animated animate__bounce">{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{ hero.publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{ hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>
        <button 
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
          >
          Regresar
        </button>
      </div>
    </div>
    </>
  )
}
