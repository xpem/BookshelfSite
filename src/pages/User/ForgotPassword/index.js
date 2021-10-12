import React, { useState } from "react";
import svgLockOpen from "../../../assets/icons/lock_open.svg";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import InputFunction from "../../../components/Input";
import { auth } from "../../../firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(email);
      alert("Email de alteração de senha enviado!");
      history.push("/");
    } catch {
      setError("Falha ao enviar email de recuperação da conta.");
    }

    setLoading(false);
  }

  return (
    <div className="Main-Frame">
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={svgLockOpen} alt="Recover Password"></img>
      </div>
      {error && <div className="alert alert-warning"> {error} </div>}
      {message && <div className="alert alert-success"> {message} </div>}
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
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: "1rem" }}
              disabled={loading}
            >
              Recuperar Senha
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
          Lembrou sua senha? <Link to="/Login"> Acesse aqui!</Link>
          <br />
          Precisa criar uma conta?
          <Link to="/CreateUser"> Acesse aqui para criar sua conta!</Link>
        </p>
      </main>
    </div>
  );
}

export default ForgotPassword;
