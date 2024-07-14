import './Search.css'
import {resDetails} from '../utiles/mockData'
import { useState } from 'react';
export default function Search(props){

const [search,setSearch]=useState("");

  



    return(
     <div className="searchh">

        <input type="text"
          onChange={(e)=> setSearch(e.target.value)}
           placeholder="Search for a restarent..."
        />
        <button  onClick={(e)=> props.searchFunction(search)}>Search</button>
       
     </div>
    );
}