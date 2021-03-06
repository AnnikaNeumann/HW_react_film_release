import React from "react";
import Films from "./Films";

const FilmList = ( {films} ) => {

    const filmNodes = films.map(films =>{
        return (
            <Films name ={films.name} key={films.id}>{films.url}</Films>
        );

    });

    return(
    <div className="list">
    <>
    {filmNodes}
    </>
    </div>
 );
}

export default FilmList;