import { useParams } from "react-router-dom";


export default function RestaruntDetails(){

    const params = useParams();
    return(
        <>
          <h1>retaurn ejjmgv</h1>
          <h4>restarent id : {params.resId}</h4>
        </>
    );
}