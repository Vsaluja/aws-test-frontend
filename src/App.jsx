import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [helloMessage, setHelloMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setHelloMessage(data.message));

    fetch(`${API_URL}/api/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch(`${API_URL}/api/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="app">
      <header className="hero">
        <h1>AWS Full Stack Cloud App 🚀</h1>
        <p>{helloMessage}</p>
      </header>

      {profile && (
        <section className="card">
          <h2>Profile</h2>

          <div className="profile-grid">
            <div>
              <span>Name</span>
              <p>{profile.name}</p>
            </div>

            <div>
              <span>Profession</span>
              <p>{profile.profession}</p>
            </div>

            <div>
              <span>Cloud Learning</span>
              <p>{profile.cloudLearning ? "Yes" : "No"}</p>
            </div>
          </div>
        </section>
      )}

      <section className="card">
        <h2>Users</h2>

        <div className="grid">
          {users.map((user) => (
            <div key={user.id} className="item-card">
              <h3>{user.name}</h3>
              <p>{user.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Products</h2>

        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="item-card">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;