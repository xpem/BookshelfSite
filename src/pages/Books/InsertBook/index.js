import React, { useState } from "react";
import svgbook from "../../../assets/icons/book.svg";
import InputFunction from "../../../components/Input";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import LinkBack from "../../../components/LinkBack";
import Select from "react-select";
import ReactStars from "react-rating-stars-component";
import Textarea from "../../../components/TextArea";

export default function InsertBook() {
  //default form vars
  const [error, setError] = useState("");
  const [Continue, setContinue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [FieldsetRate, setFieldsetRate] = useState(false);
  //
  const [Title, setTitle] = useState("");
  const [SubTitle, setSubtitle] = useState("");
  const [Volume, setVolume] = useState("");
  const [Year, setYear] = useState("");
  const [Authors, setAuthors] = useState("");
  const [Pages, setPages] = useState("");
  const [Genre, setGenre] = useState("");
  const [Isbn, setIsbn] = useState("");
  const [Rate, setRate] = useState(0);
  const [Comment, setComment] = useState("");
  const [Situation, setSituation] = useState("");

  //select itens temp
  const options = [
    { value: "0", label: "Nenhuma" },
    { value: "1", label: "Vou ler" },
    { value: "2", label: "Lendo" },
    { value: "3", label: "Lido" },
    { value: "4", label: "Interrompido" },
  ];

  //
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
                <div className="grid-two-columns">
                  <div className="grid-left" style={{ width: "150px" }}>
                    <InputFunction
                      type="number"
                      name="Volume"
                      label="*Volume"
                      onChange={(e) => {
                        setVolume(e.target.value);
                      }}
                    />
                  </div>
                  <div className="grid-right" style={{ width: "150px" }}>
                    <InputFunction
                      name="Year"
                      label="*Ano"
                      type="number"
                      min="1800"
                      max="2050"
                      step="1"
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <InputFunction
                  name="Authors"
                  type="text"
                  label="Autor(a)(es)"
                  onChange={(e) => {
                    setAuthors(e.target.value);
                  }}
                  required
                />
                <div className="grid-two-columns">
                  <div className="grid-left" style={{ width: "100px" }}>
                    <InputFunction
                      name="Pages"
                      label="Páginas"
                      type="number"
                      min="1"
                      max="3000"
                      step="1"
                      onChange={(e) => {
                        setPages(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="grid-right">
                    <InputFunction
                      name="Genre"
                      type="text"
                      label="*Gênero"
                      onChange={(e) => {
                        setGenre(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <InputFunction
                  name="Isbn"
                  type="text"
                  label="*Isbn"
                  onChange={(e) => {
                    setIsbn(e.target.value);
                  }}
                />
                <hr
                  style={{
                    height: "1px",
                    borderWidth: 0,
                    marginTop: "1rem",
                    color: "black",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <h3 style={{ padding: ".5rem" }}>Situação</h3>
                  <div style={{ width: "200px", fontSize: "15px" }}>
                    <Select
                      options={options}
                      styles={{ color: "black" }}
                      onChange={(e) => {
                        console.log(e.value);
                        setSituation(e.value);

                        //case read set fildset rate visibility true
                        if (e.value == 3) {
                          setFieldsetRate(true);
                        } else {
                          setFieldsetRate(false);
                        }
                      }}
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
                        style={{ display: "grid", justifyContent: "center" }}
                      >
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
                  Adicionar Livro
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="alert alert-success">Livro adicionado!</div>
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
        <LinkBack loading={loading} to="/" />
      </main>
    </div>
  );
}
