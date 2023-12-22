import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
 export default function Errors() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [navigate]);
  return (
    <>
      <main className="page">
        <h1>!!OH NO</h1>
      </main>
    </>
  );
}
