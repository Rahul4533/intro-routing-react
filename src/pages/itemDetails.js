import {useParams } from "react-router-dom";
import { ITEAM } from "../data/itemdata";
export default function ItemDetails() {
  const {id}=useParams();
   const item= ITEAM.find((item)=> item.id===id);
    return (
        <>
        <div className="page">
        <h1>ItemsDeatils page</h1>
        </div>
        <h1>{item.id}</h1>
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        </>
    )
}