import React, {useState} from "react";
import FilmList from "../components/FilmList";


const FilmBox = () =>{
// Box is always on top of the hierachy in the Comment Application Structure

    const [films, setFilms] = useState( [

        {
            id: 1,
            name: "Alien I (1979)",
            url: "https://www.imdb.com/title/tt0078748/?ref_=fn_al_tt_1"
        },

        {
            id: 2,
            name: "Last Action Hero (1993)",
            url: "https://www.imdb.com/title/tt0107362/?ref_=fn_al_tt_1"
        },

        {
            id: 3,
            name: "The Shining (1980)",
            url: "https://www.imdb.com/title/tt0081505/?ref_=fn_al_tt_1"
        },
        {
            id: 4,
            name: "Some Like It Hot (1953)",
            url: "https://www.imdb.com/title/tt0053291/?ref_=fn_al_tt_1"
        },
        {

            id: 5,
            name: "Eat Pray Love (2010)",
            url: "https://www.imdb.com/title/tt0879870/?ref_=fn_al_tt_1"
        }

    ]
 );

 return(

    // add a div to style this part 
    <div className="Upcoming">
    <h2>Coming to the UK this year !!</h2>
    <h3>Sit back, relax and get lost in the latest new releases</h3>

    <hr></hr>
    <FilmList films = {films}/>
    <hr></hr>
    <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming films</a>
    </div>
      

);
};

export default FilmBox;