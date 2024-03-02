import { heroes } from "../data/heroesData"

export const getHeroeById = ( id ) => {

    return heroes.find( hero => hero.id === id );

}

