import React, {useState} from "react";
import FilmList from "../components/FilmList";


const FilmBox = () =>{
// Box is always on top of the hierachy in the Comment Application Structure

    const [films, setFilms] = useState( [

        {
            id: 1,
            name: "Alien I",
            url: "https://www.imdb.com/title/tt0078748/?ref_=fn_al_tt_1"
        },

        {
            id: 2,
            name: "Last Action Hero",
            url: "https://www.imdb.com/title/tt0107362/?ref_=fn_al_tt_1"
        },

        {
            id: 3,
            name: "The Shining",
            url: "https://www.imdb.com/title/tt0081505/?ref_=fn_al_tt_1"
        },
        {
            id: 4,
            name: "Some Like It Hot",
            url: "https://www.imdb.com/title/tt0053291/?ref_=fn_al_tt_1"
        },
        {

            id: 5,
            name: "Eat Pray Love",
            url: "https://www.imdb.com/title/tt0879870/?ref_=fn_al_tt_1"
        }

    ]
 );

 return(

    // add a div to style this part 
    <>
    <h1>Film Releases</h1>
    <ul>
    <FilmList films = {films}/>
    <a href="https://www.imdb.com/calendar/?region=gb" >View more upcoming films</a>
    </ul>
    </>

);
}

export default FilmBox;