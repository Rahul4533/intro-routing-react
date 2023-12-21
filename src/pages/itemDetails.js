import {useParams } from "react-router-dom";

export default function ItemDetails() {
  const parms=useParams();
  console.log(parms);
    return (
        <>
        <div className="page">
        <h1>ItemsDeatils page</h1>
        </div>
        <h1>{parms.id}</h1>
        </>
    )
}