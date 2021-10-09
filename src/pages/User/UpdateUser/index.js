import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SvgManageAccounts from "../../../assets/icons/manage_accounts.svg";
import InputFunction from "../../../components/Input";
import LinkBack from "../../../components/LinkBack";
import { useAuth } from "../../../contexts/AuthContext";

function UpdateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(password);

    if (password !== passwordConfirm) {
      return setError("Confirme corretamente sua senha.");
    }

    const promisses = [];
    setLoading(true);
    setError("");
    if (email !== currentUser.email) {
      promisses.push(updateEmail(email));
    }

    if (password) {
      promisses.push(updatePassword(password));
    }

    Promise.all(promisses)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Falha ao atualizar a conta");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="Main-Frame">
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={SvgManageAccounts} alt="Update Profile"></img>
      </div>
      {error && <div className="alert alert-warning"> {error} </div>}
      <main>
        <fieldset style={{ padding: "2rem" }}>
          <form onSubmit={handleSubmit}>
            <InputFunction
              name="email"
              type="email"
              label="Email"
              defaultValue={currentUser.email}
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
            />
            <p
              style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "#464646",
              }}
            >
              *Deixe em branco para manter a senha atual
            </p>
            <InputFunction
              type="password"
              name="password"
              label="Confirme sua senha"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
            <p
              style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: "#464646",
              }}
            >
              *Deixe em branco para manter a senha atual
            </p>
            <button
              className="button-primary"
              type="submit"
              style={{ marginTop: "1rem" }}
              disabled={loading}
            >
              Atualizar Perfil
            </button>
          </form>
        </fieldset>
      </main>
      <LinkBack loading={loading} to="/" />
    </div>
  );
}

export default UpdateUser;
