import RestarentCard from "./RestarentCard";
import { resDetails } from "../utiles/mockData";
import { useState,useEffect } from "react";
import Search from "./Search";
import TopRatedRes from "./TopRatedRes";
import './Body.css'
import { Link } from "react-router-dom";


export default function Body(){
    // let filterRe = resDetails;
    const [filterRe, setFilterRe] = useState(resDetails);
    const [isTopRated,setIsTopRated]= useState(false);
    const [searchtext,setsearchtext]= useState("");

    function searchRestaurent(searchtext){
      

       setsearchtext(searchtext); 


}
        useEffect(
            ()=>{
        
                 
        let searchrestarent=  resDetails.filter(res=> res.name.toUpperCase().includes(searchtext.toUpperCase()));
       
        setFilterRe(searchrestarent);
            
                if(isTopRated){

                     searchrestarent = searchrestarent.filter(res=>parseFloat(res.rating)>4.5);
                    }
                    setFilterRe(searchrestarent);
            },[searchtext,isTopRated ]
        );

 function TopRatedRestauprent(){
     setIsTopRated(true);
    
 }



    return(

        <>

        <div className="filtering">

               <Search searchFunction={searchRestaurent}/>
               <TopRatedRes  TopRes={TopRatedRestauprent}/>

        </div>
        <div className="container">

        {

            
            filterRe.map(res=>( 
            <Link key={res.id} to= {"/restaurent/"+res.id}  >
            
            <RestarentCard key={res.id} resDetails={res} />
            </Link>
            
        )) }
      
        </div>
        {/* <RestarentCard resDetails={resDetails[1]} />
        <RestarentCard resDetails={resDetails[0]} /> */}
       
   
       
        </>
    );
}