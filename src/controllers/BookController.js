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

  //
  // export async function GetBookByTitleAndSubtitle(Title,Subtitle) {
  //   var data = [];
  //   try {
  //    await db.ref("UsersBeta").orderByChild("Title").equalTo(Title).orderByChild("Subtitle").equalTo(Subtitle).once("value", (snapshot) => {
  //       if (snapshot != null) {
  //         snapshot.forEach((childSnapshot) => {
  //           data.push({
  //             id: childSnapshot.key,
  //             ...childSnapshot.val(),
  //           });
  //         });     
  //       }else{
  //         console.log("tabela nula")
  //       }  
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   return data;
  // }

  