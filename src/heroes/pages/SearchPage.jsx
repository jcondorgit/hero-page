import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { getHeroeByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse( location.search);
  const heroes = getHeroeByName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSubmitForm = (event)=>{
    event.preventDefault();
    if(searchText.trim().lenght<=1) return;
      navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4>Buscando...</h4>
            <hr />
            <form action="" onSubmit={onSubmitForm} >
              <input type="text" 
                className="form-control" 
                placeholder="Buscar un héroe"
                name="searchText"
                autoComplete="off"
                onChange={ onInputChange }
                value={searchText}
                />
                <button className="btn btn-outline-primary mt-1">Buscar</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Resultados:</h4>
            <hr />
            {/* {
              ( q === '' )
              ? <div className="alert alert-primary animate__animated animate__bounce">Buscar un héroe</div>
              : ( heroes.length === 0 ) 
                && <div className="alert alert-danger animate__animated animate__bounce">El héroe <b>{q}</b> no forma parte del catálogo</div>
            } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch?'':'none'}}>Buscar un héroe</div>
            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError?'':'none'}}>El héroe <b>{q}</b> no forma parte del catálogo</div>
            
            {
              heroes.map( heroe =>(
                <HeroCard
                  key={heroe.id}
                  {...heroe}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
