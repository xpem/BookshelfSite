import React, { useEffect, useState } from "react";
import { GetBooks } from "../../../controllers/BookController";
import { useAuth } from "../../../contexts/AuthContext";
import BookCard from "../../../components/BookCard";

import "./styles.css";

export default function BookList() {
  //default form vars
  const [error, setError] = useState("");

  //user
  const { currentUser, currentUserProfile } = useAuth();
  const [Books, setBooks] = useState([]);
  const [Situation, setSituation] = useState(0);

  useEffect(() => {
    setSituation(1);
    console.log(currentUser);
    console.log(currentUserProfile);
    GetBooksList(currentUser.uid);
  }, []);

  async function GetBooksList(userKey) {
    console.log("teste");
    await GetBooks(userKey).then((d) => setBooks(d));
  }

  return (
    <div>
      <div className="Main-Frame">
        {Books.map((bookItem) => {
          if (bookItem.BooksSituations.Situation == 1) {
            return (
              <BookCard
                Title={bookItem.Title}
                SubTitle={bookItem.SubTitle}
                Volume={bookItem.Volume}
                Authors={bookItem.Authors}
                Year={bookItem.Year}
                Pages={bookItem.Pages}
                Rate={bookItem.Rate}
              ></BookCard>
            );
          }
        })}
      </div>
    </div>
  );
}
