import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Textarea from "../../../components/TextArea";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import {
  GetBook,
  UpdateBook,
  DeleteBook,
} from "../../../controllers/BookController";
import Header from "../../../components/Header";
import moment from "moment";
import "./styles.css";

export default function BookDetail() {
  //default form vars
  const [error, setError] = useState("");
  const [Continue, setContinue] = useState(false);
  const [Exclusion, setExclusion] = useState(false);
  const [ConfirmDeleteBook, setConfirmDeleteBook] = useState(false);
  const [FieldsetRate, setFieldsetRate] = useState(false);
  const [loading, setLoading] = useState(false);
  //

  //user
  const { currentUser, currentUserProfile } = useAuth();
  console.log(useParams());
  //params
  const { SituationOri, BookId } = useParams();

  //
  const [Book, setBook] = useState([]);
  const [Situation, setSituation] = useState(0);
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

  useEffect(async () => {
    await GetBookItem(currentUser.uid, BookId);
  }, []);

  async function GetBookItem(userKey, bookKey) {
    GetBook(userKey, bookKey).then((v) => BuildBookItem(v));
  }

  async function BuildBookItem(v) {
    setBook(v);
    setSituation(v[0].BooksSituations.Situation);
    setRate(v[0].BooksSituations.Rate);
    DefineFildsetRate(v[0].BooksSituations.Rate);
    setComment(v[0].BooksSituations.Comment);
    console.table(v);
  }

  function DefineFildsetRate(v) {
    //case read set fildset rate visibility true
    if (v == 3) {
      setFieldsetRate(true);
    } else {
      setFieldsetRate(false);
    }
  }

  async function DeleteBookAsync() {
    DeleteBook(BookId);
  }

  async function HandleConfirmDeleteBookButton() {
    setContinue(true);
    setConfirmDeleteBook(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      setContinue(false);

      var vSituationBook;

      //build situation book object
      if (Situation > 0) {
        var vRate;
        var vComment;
        if (Situation == 3) {
          vRate = Rate;
          vComment = Comment;
        } else {
          vRate = 0;
          vComment = "";
        }

        vSituationBook = {
          Situation: Situation,
          Rate: vRate,
          Comment: vComment,
        };
      }

      var lastUpdate = moment().format("YYYY-MM-DDThh:mm:ss");

      UpdateBook(
        Book[0].id,
        Book[0].Authors,
        vSituationBook,
        Book[0].Genre,
        false,
        Book[0].Isbn,
        Book[0].id,
        lastUpdate,
        Book[0].Pages,
        Book[0].SubTitle,
        Book[0].Title,
        Book[0].UserKey,
        Book[0].Volume,
        Book[0].Year
      );

      setContinue(true);
    } catch (error) {
      console.log(error);
      setError("Falha ao alterar a situação do livro.");
    }
    setLoading(false);
  }

  return (
    <>
      <Header
        Label="Detalhes do livro"
        loading={loading}
        to={`/BookList/${SituationOri}`}
      />
      <div className="Main-Frame BookDetail-Main-Frame">
        {error && <div className="alert alert-warning">{error}</div>}
        <main>
          {!Continue ? (
            <>
              <p className="p-title">
                <b>{Book.length > 0 ? Book[0].Title : ""}</b>
              </p>
              <p className="p-subtitle">
                {Book.length > 0
                  ? Book[0].SubTitle != ""
                    ? Book[0].SubTitle + ";"
                    : ""
                  : ""}{" "}
                Vol.: {Book.length > 0 ? Book[0].Volume : ""}
              </p>
              <p className="p-label">Autores:</p>
              <p className="p-text">{Book.length > 0 ? Book[0].Authors : ""}</p>
              <div className="grid-one-row-two-columns">
                <div className="grid-left">
                  <p className="p-label">Páginas:</p>
                  <p className="p-text">
                    {Book.length > 0 ? Book[0].Pages : ""}
                  </p>
                </div>
                <div className="grid-right">
                  <p className="p-label">Categoria:</p>
                  <p className="p-text">
                    {Book.length > 0 ? Book[0].Genre : ""}
                  </p>
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
                    style={{
                      width: "200px",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    <Select
                      options={options}
                      styles={{ color: "black" }}
                      onChange={(e) => {
                        setSituation(e.value);
                        DefineFildsetRate(e.value);
                      }}
                      value={options.filter(({ value }) => value == Situation)}
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
                      <div
                        style={{
                          display: "grid",
                          justifyContent: "center",
                        }}
                      >
                        <p>Avaliação pessoal: {Rate} de 5</p>
                        <ReactStars
                          value={Rate}
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
                        value={Comment}
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
              <button
                className="btn btn-danger"
                disabled={loading}
                onClick={() => setExclusion(true)}
              >
                Excluir Livro
              </button>
              {Exclusion ? (
                <>
                  <div id="myModal" className="modal">
                    <div className="modal-content">
                      <span className="close">&times;</span>
                      <div className="alert alert-warning">
                        Deseja excluir o livro{" "}
                        <b>{Book.length > 0 ? Book[0].Title : ""}</b>?
                      </div>
                      <button
                        className="btn btn-danger"
                        style={{ marginTop: "1rem" }}
                        onClick={() =>
                          DeleteBookAsync().then(() =>
                            HandleConfirmDeleteBookButton()
                          )
                        }
                      >
                        Confirmar Exclusão
                      </button>
                      <button
                        className="btn btn-secondary"
                        style={{ padding: "7px", color: "#fefefe" }}
                        onClick={() => setExclusion(false)}
                      >
                        Voltar
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              {ConfirmDeleteBook ? (
                <>
                  <div className="alert alert-danger">Livro Excluido!</div>
                </>
              ) : (
                <>
                  <div className="alert alert-warning">Situação Alterada!</div>
                </>
              )}
              <Link to={`/BookList/${SituationOri}`}>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: "1rem" }}
                >
                  Continuar
                </button>
              </Link>
            </>
          )}
        </main>
      </div>
    </>
  );
}
