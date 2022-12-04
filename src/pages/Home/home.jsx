import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Home = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home</h1>
      <p>{String(authenticated)}</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
