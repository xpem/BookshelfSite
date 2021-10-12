import React, { useState } from "react";
import svgbook from "../../../assets/icons/book.svg";
import InputFunction from "../../../components/Input";
import { Link, useHistory } from "react-router-dom";

export default function InsertBook() {
  //default form vars
  const [error, setError] = useState("");
  const [Continue, setContinue] = useState(false);
  const [loading, setLoading] = useState(false);

//
const [Title, setTitle] = useState("");
const [SubTitle, setSubtitle] = useState("");
const [Volume, setVolume] = useState("");
const [Year, setYear] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      setContinue(false);

      setContinue(true);
    } catch {
      setError("Falha ao criar o livro.");
    }

    setLoading(false);
  }

  return (
    <div className="Main-Frame">
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={svgbook} alt="Add Book"></img>
      </div>
      {error && <div className="alert alert-warning">{error}</div>}
      <main>
        <fieldset style={{ margin: "1rem", padding: "1rem" }}>
          {!Continue ? (
            <>
              <form onSubmit={handleSubmit}>
                <InputFunction
                  name="Title"
                  type="text"
                  label="Título"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
                <InputFunction
                  name="Subtitle"
                  type="text"
                  label="*Subtítulo"
                  onChange={(e) => {
                    setSubtitle(e.target.value);
                  }}
                />
                {/* <InputFunction name="name" label="Nome de Acesso" /> */}
                <InputFunction
                  type="number"
                  name="Volume"
                  label="*Volume"
                  onChange={(e) => {
                    setVolume(e.target.value);
                  }}
                />
                <InputFunction
                  type="number"
                  name="Year"
                  label="*Ano"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
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
             
            </>
          ) : (
            <>
              <div className="alert alert-success">
                Livro adicionado!
              </div>
              <Link to="/">
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
