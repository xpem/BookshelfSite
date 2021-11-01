import { db } from "../firebase";

export async function CreateBook(book) {
    await db
      .ref("BooksBeta")
      .push({ book })
      .then(function () {
        console.log("Adicionado");
      })
      .catch(function (error) {
        console.log("erro ao adicionar" + error);
      });
  }
  