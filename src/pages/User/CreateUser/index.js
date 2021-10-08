import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonAdd from "../../../assets/icons/person_add.svg";
import InputFunction from "../../../components/Input";
import { useAuth } from "../../../contexts/AuthContext";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(password);

    if (password !== passwordConfirm) {
      return setError("Confirme corretamente sua senha.");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/");
    } catch {
      setError("Falha ao criar a conta.");
    }

    setLoading(false);
  }

  return (
    <div className="Main-Frame">
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={PersonAdd} alt="Add User"></img>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <main>
        <fieldset style={{ margin: "1rem", padding: "1rem" }}>
          <form onSubmit={handleSubmit}>
            {/* <InputFunction name="name" label="Nome" /> */}
            <InputFunction
              name="name"
              type="text"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            {/* <InputFunction name="name" label="Nome de Acesso" /> */}
            <InputFunction
              type="password"
              name="name"
              label="Senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <InputFunction
              type="password"
              name="name"
              label="Confirme sua senha"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              required
            />
            <button
              className="button-primary"
              type="submit"
              style={{ marginTop: "1rem" }}
              disabled={loading}
            >
              Cadastrar
            </button>
          </form>
        </fieldset>
        <p style={{ padding: "2rem" }}>
          Já tem uma conta? <Link to="/Login"> Acesse aqui!</Link>
        </p>
      </main>
    </div>
  );
}
export default CreateUser;
