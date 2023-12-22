import { Link } from "react-router-dom";
import { ITEAM } from "../data/itemdata";
function Items() {
  return (
    <>
      <main className="page">
        <h1>Items Page</h1>
      </main>
      <ol>
        {ITEAM.map((item, i) => (
         <Link key={i} to={`/item/${item.id}`}><li>{item.id}</li> </Link>
        ))}
      </ol>
    </>
  );
}

export default Items;
