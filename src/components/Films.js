import React from "react";

const Films =( {name, children } ) =>{

    return(
        <>
        <li><a href ={children}>{name}</a></li>
        </>
    );
};

export default Films;