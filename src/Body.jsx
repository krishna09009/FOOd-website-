import RestarentCard from "./RestarentCard";
import { resDetails } from "../utiles/mockData";
import { useState } from "react";
import Search from "./Search";
import TopRatedRes from "./TopRatedRes";
import './Body.css'


export default function Body(){
    // let filterRe = resDetails;
    const [filterRe, setFilterRe] = useState(resDetails);

    function searchRestaurent(searchtext){
        console.log(searchtext);
        let searchrestarent=  resDetails.filter(res=> res.name.toUpperCase().includes(searchtext.toUpperCase()));
       console.log(searchrestarent);
       setFilterRe(searchrestarent);


}

 function TopRatedRestauprent(){

    let topRated = filterRe.filter(res=>parseFloat(res.rating)>4.5);
    setFilterRe(topRated);
 }



    return(

        <>

        <div className="filtering">

               <Search searchFunction={searchRestaurent}/>
               <TopRatedRes  TopRes={TopRatedRestauprent}/>

        </div>
        <div className="container">

        {
            filterRe.map(res=><RestarentCard key={res.id} resDetails={res} />)
        }
      
        </div>
        {/* <RestarentCard resDetails={resDetails[1]} />
        <RestarentCard resDetails={resDetails[0]} /> */}
       
   
       
        </>
    );
}