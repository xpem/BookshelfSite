import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Textarea from "../../../components/TextArea";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { GetBook } from "../../../controllers/BookController";
import "./styles.css";

export default function BookDetail() {
  //default form vars
  const [error, setError] = useState("");
  const [Continue, setContinue] = useState(false);
  const [FieldsetRate, setFieldsetRate] = useState(false);
  const [loading, setLoading] = useState(false);
  //

  //user
  const { currentUser, currentUserProfile } = useAuth();

  //params
  const { BookId } = useParams();

  //
  const [Book, setBook] = useState([]);
  const [Situation, setSituation] = useState("");
  const [Rate, setRate] = useState(0);
  const [Comment, setComment] = useState("");

  //select itens temp
  const options = [
    { value: "0", label: "Nenhuma" },
    { value: "1", label: "Vou ler" },
    { value: "2", label: "Lendo" },
    { value: "3", label: "Lido" },
    { value: "4", label: "Interrompido" },
  ];

  useEffect(() => {
    console.log("BookId:" + BookId);
    console.log(currentUser);
    console.log(currentUserProfile);
    GetBookItem(currentUser.uid, BookId);
    console.log("teste book:" + Book);
  }, []);

  async function GetBookItem(userKey, bookKey) {
    await GetBook(userKey, bookKey).then((v) => setBook(v));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      setContinue(false);
      //setConfirmMessage("Livro e avaliação Cadastratos");
      setContinue(true);
    } catch (error) {
      console.log(error);
      setError("Falha ao alterar a situação do livro.");
    }

    setLoading(false);
  }

  return (
    <div className="Main-Frame">
      {error && <div className="alert alert-warning">{error}</div>}
      <main>
        {!Continue ? (
          <>
            <p className="p-title">
              <b>{Book.length > 0 ? Book[0].Title : ""}</b>
            </p>
            <p className="p-subtitle">
              {Book.length > 0 ? Book[0].SubTitle : ""}; Vol.:{" "}
              {Book.length > 0 ? Book[0].Volume : ""}
            </p>
            <p className="p-label">Autores:</p>
            <p className="p-text">{Book.length > 0 ? Book[0].Authors : ""}</p>
            <div className="grid-one-row-two-columns">
              <div className="grid-left">
                <p className="p-label">Páginas:</p>
                <p className="p-text">{Book.length > 0 ? Book[0].Pages : ""}</p>
              </div>
              <div className="grid-right">
                <p className="p-label">Categoria:</p>
                <p className="p-text">{Book.length > 0 ? Book[0].Genre : ""}</p>
              </div>
            </div>
            <hr></hr>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <h5 style={{ padding: ".5rem", color: "black" }}>Situação</h5>
                <div
                  style={{ width: "200px", fontSize: "15px", color: "black" }}
                >
                  <Select
                    options={options}
                    styles={{ color: "black" }}
                    onChange={(e) => {
                      setSituation(e.value);

                      //case read set fildset rate visibility true
                      if (e.value == 3) {
                        setFieldsetRate(true);
                      } else {
                        setFieldsetRate(false);
                      }
                    }}
                    required
                  />
                </div>
                {FieldsetRate ? (
                  <fieldset
                    style={{
                      margin: "1rem",
                      padding: "1rem",
                      fontSize: "20px",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "grid", justifyContent: "center" }}>
                      <p>Avaliação pessoal: {Rate} de 5</p>
                      <ReactStars
                        count={5}
                        onChange={setRate}
                        size={24}
                        activeColor="black"
                      />
                    </div>
                    <br />
                    <Textarea
                      name="Comment"
                      label="*Comentários"
                      resize="vertical"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </fieldset>
                ) : (
                  <></>
                )}
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginTop: "1rem" }}
                disabled={loading}
              >
                Alterar Situação
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="alert alert-warning">Situação Alterada!</div>
            <Link to="/">
              <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
                Continuar
              </button>
            </Link>
          </>
        )}
      </main>
    </div>
  );
}
