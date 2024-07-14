import './TopRatedRes.css'


export default function TopRatedRes(props){



       return(
    <div className="toprated">

        <button onClick={props.TopRes}  >Top Rated Restarent</button>
    </div>
       );
}