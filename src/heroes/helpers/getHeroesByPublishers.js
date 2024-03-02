import { heroes } from "../data/heroesData";


export const getHeroesByPublishers = ( publisher) =>{

    const validPublishers = ['DC Comics','Marvel Comics'];
    if( !validPublishers.includes( publisher) ){
        throw new Error(`El publisher ${publisher} no existe`);
    }
    return heroes.filter( heroe => heroe.publisher === publisher );

}