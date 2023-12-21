import {Link} from "react-router-dom"
function Items() {
  return (
    <>
      <main className="page">
        <h1>Items Page</h1>
       
      </main>
      <ul>
         <Link to="/item/item-1"><li>Item-1</li></Link><br/>
         <Link to="/item/item-2"><li>Item-2</li></Link><br/>
         <Link to="/item/item-3"><li>Item-3</li></Link>
        </ul>
    </>
  );
}

export default Items;
