import React, { useEffect, useState } from "react";
import { GetBooks } from "../../../controllers/BookController";
import { useAuth } from "../../../contexts/AuthContext";
import BookCard from "../../../components/BookCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";

import "./styles.css";

export default function BookList() {
  //default form vars
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //user
  const { currentUser, currentUserProfile } = useAuth();
  const [Books, setBooks] = useState([]);
  const { Situation } = useParams();
  const [HeaderText, setHeaderText] = useState("");
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    GetBooksList("")
    DefineHeaderText("");
    setLoading(false);
  }, []);

  async function DefineHeaderText() {
    switch (Situation) {
      case "0":
        setHeaderText("Livros do arquivo");
        return;
      case "1":
        setHeaderText("Livros que vou ler");
        return;
      case "2":
        setHeaderText("Livros que estou lendo");
        return;
      case "3":
        setHeaderText("Livros lidos");
        return;
      case "4":
        setHeaderText("Livros interrompidos");
        return;
    }
  }
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  async function GetBooksList(searchText) {
    await GetBooks(currentUser.uid,Situation,searchText).then((d) => setBooks(d));
  } 

  async function handleSubmit(e) {
    e.preventDefault();
    GetBooksList(SearchText);
  }

  return (
    <>
      <Header Label={HeaderText} loading={loading} to="/" />
      <div className="Main-Frame">
        <form onSubmit={handleSubmit}>
          <div className="pnl-search-group ">
            <input
              type="text"
              placeholder="Busque pelo nome do livro"
              className="search-input"
              aria-label="Busque pelo nome do livro"
              aria-describeby="btn-search"
              id="input-search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
               type="submit"
              className="btn btn-secondary btn-search"
              id="button-search"
            >
              Buscar
            </button>
          </div>
        </form>
        {Books.map((bookItem) => {         
            return (
              <Link
                to={`/BookDetail/${bookItem.BooksSituations.Situation}/${bookItem.id}`}
                className="Link-Card-Item"
              >
                <BookCard
                  Title={bookItem.Title}
                  SubTitle={bookItem.SubTitle}
                  Volume={bookItem.Volume}
                  Authors={bookItem.Authors}
                  Year={bookItem.Year}
                  Pages={bookItem.Pages}
                  Rate={bookItem.Rate}
                ></BookCard>
              </Link>
            );
          
        })}
      </div>
    </>
  );
}
