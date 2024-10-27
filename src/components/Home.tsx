import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Enjoy a delicious meal</h1>
      <Link to="/menu">Go</Link>
    </div>
  );
};
