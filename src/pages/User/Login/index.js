import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AutoStories from "../../../assets/icons/auto_stories_48dp.svg";
import InputFunction from "../../../components/Input";
import { useAuth } from "../../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(password);

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Falha ao acessar a conta.");
    }

    setLoading(false);
  }

  return (
    <div className="Main-Frame">
      <div
        style={{
          width: "100%",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2 style={{ display: "flex", color: "#000", fontSize: "40px" }}>
          <img src={AutoStories} alt="Bookshelf"></img>&nbsp;Bookshelf
        </h2>
      </div>
      {error && <div className="alert alert-warning"> {error} </div>}
      <main>
        <fieldset style={{ padding: "2rem" }}>
          <form onSubmit={handleSubmit}>
            <InputFunction
              name="email"
              type="email"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <InputFunction
              type="password"
              name="password"
              label="Senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button
              className="button-primary"
              type="submit"
              style={{ marginTop: "1rem" }}
              disabled={loading}
            >
              Acessar
            </button>
          </form>
        </fieldset>
        <p
          style={{
            padding: "1rem",
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "#383838",
          }}
        >
          <br />
          Precisa criar uma conta?{" "}
          <Link to="/CreateUser"> Acesse aqui para criar sua conta!</Link>
          <br />
          Esqueceu sua senha?{" "}
          <Link to="/ForgotPassword"> Acesse aqui para recuperar senha!</Link>
        </p>
      </main>
    </div>
  );
}

export default Login;
