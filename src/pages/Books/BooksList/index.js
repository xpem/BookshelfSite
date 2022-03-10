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

  useEffect(() => {
    setLoading(true);
    console.log(currentUser);
    console.log(currentUserProfile);
    GetBooksList(currentUser.uid);

    DefineHeaderText().then(()=> console.log(HeaderText));
    setLoading(false);
  }, []);

 async function DefineHeaderText() {
    switch (Situation) {
      case '0':
        setHeaderText("Livros do arquivo");
        return;
      case '1':
        setHeaderText("Livros que vou ler");
        return;
      case '2':
        setHeaderText("Livros que estou lendo");
        return;
      case '3':
        setHeaderText("Livros lidos");
        return;
      case '4':
        setHeaderText("Livros interrompidos");
        return;
    }
  }

  async function GetBooksList(userKey) {
    console.log("teste");
    await GetBooks(userKey).then((d) => setBooks(d));
  }

  return (
    <>
      <Header Label={HeaderText} loading={loading} to="/" />
      <div className="Main-Frame">
        {Books.map((bookItem) => {
          console.log(bookItem.id);
          if (
            bookItem.BooksSituations.Situation == Situation ||
            Situation == 4
          ) {
            return (
              <Link
                to={`/BookDetail/${bookItem.id}`}
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
          }
        })}
      </div>
    </>
  );
}
