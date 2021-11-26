import React, { useEffect, useState } from "react";
import { GetBookBySituation } from "../../../controllers/BookController";
import { useAuth } from "../../../contexts/AuthContext";

import "./styles.css";

export default function BookList() {

  //default form vars
  const [error, setError] = useState("");

  //user
  const { currentUser } = useAuth();

  GetBooks(currentUser.uid, "1", "");

  async function GetBooks(userKey, situation, searchText){
    var books = await GetBookBySituation(userKey, situation, searchText);
    console.log(books);
  }


  return (
    <div>
      <div className="Main-Frame">
        <div className="Card-Book">
          <p className="p-title">
            <b>Teste de título</b>
          </p>
          <p className="p-subtitle">teste de subtítulo; Vol.: 13</p>
          <p className="p-authoryear">Nome do Autor; Ano 2020</p>
          <p className="p-pages">Páginas: 378</p>
          <p className="p-rate">Avaliação pessoal: 3 de 5</p>
        </div>
        <div className="Card-Book">
          <p className="p-title">
            <b>Teste de título</b>
          </p>
          <p className="p-subtitle">teste de subtítulo; Vol.: 13</p>
          <p className="p-authoryear">Nome do Autor; Ano 2020</p>
          <p className="p-pages">Páginas: 378</p>
          <p className="p-rate">Avaliação pessoal: 3 de 5</p>
        </div>
      </div>
    </div>
  );
}
