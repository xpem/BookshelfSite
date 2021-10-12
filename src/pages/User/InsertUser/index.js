import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PersonAdd from "../../../assets/icons/person_add.svg";
import InputFunction from "../../../components/Input";
import { useAuth } from "../../../contexts/AuthContext";
import {
  CreateUserProfile,
  GetUserProfile,
} from "../../../controllers/UserController";

export default function InsertUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Continue, setContinue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(password);

    if (password !== passwordConfirm) {
      return setError("Confirme corretamente sua senha.");
    }

    try {
      setError("");
      setLoading(true);
      setContinue(false);

      //cria o usuário
      var newuser = await signup(email, password);
      console.log(newuser.user.uid);

      //var uid = "jeGy9cvZ2BR0rmUzNxTxBih6j862";

      //salva o perfil do usuário
      var resp = CreateUserProfile(name, email, newuser.user.uid);
      console.log(resp);

      setContinue(true);
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
          {!Continue ? (
            <>
              <form onSubmit={handleSubmit}>
                <InputFunction
                  name="UserName"
                  type="text"
                  label="Nome"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <InputFunction
                  name="Email"
                  type="email"
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
                  name="password"
                  label="Confirme sua senha"
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                  required
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: "1rem" }}
                  disabled={loading}
                >
                  Cadastrar
                </button>
              </form>
              <p
          style={{
            padding: "1rem",
            fontSize: "1.5rem",
            fontStyle: "italic",
            color: "#383838",
          }}
        >
                Já tem uma conta? <Link to="/Login"> Acesse aqui!</Link>
              </p>
            </>
          ) : (
            <>
              <div className="alert alert-success">
                Conta Criada com sucesso!
              </div>
              <Link to="/Login">
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "1rem" }}
                >
                  Continuar
                </button>
              </Link>
            </>
          )}
        </fieldset>
      </main>
    </div>
  );
}
 
