import { db } from "../firebase";

//create book in firebase with the model of existig books in database
export async function CreateBook(
  Authors,
  BooksSituations,
  Genre,
  Inactive,
  Isbn,
  Key,
  LastUpdate,
  Pages,
  SubTitle,
  Title,
  UserKey,
  Volume,
  Year
) {
  await db
    .ref("BooksBeta")
    .push({
      Authors,
      BooksSituations,
      Genre,
      Inactive,
      Isbn,
      Key,
      LastUpdate,
      Pages,
      SubTitle,
      Title,
      UserKey,
      Volume,
      Year,
    })
    .then(function () {
      console.log("Adicionado");
    })
    .catch(function (error) {
      console.log("erro ao adicionar" + error);
    });
}

export async function GetBookBySituation(userKey, situation, searchText) {
  var data = [];
  try {
    await db
      .ref("BooksBeta")
      .orderByChild("UserKey")
      .equalTo(userKey)
      .orderByChild("situation")
      .equalTo(situation)
      .once("value", (snapshot) => {
        if (snapshot != null) {
          snapshot.forEach((childSnapshot) => {
            data.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          });
        } else {
          console.log("tabela nula");
        }
      });
  } catch (err) {
    console.log(err);
  }
  return data;
}

// export async function GetBookByTitleAndSubtitle(Title, Subtitle) {
//   var data = [];
//   try {
//     await db
//       .ref("UsersBeta")
//       .orderByChild("Title")
//       .equalTo(Title)
//       .orderByChild("Subtitle")
//       .equalTo(Subtitle)
//       .once("value", (snapshot) => {
//         if (snapshot != null) {
//           snapshot.forEach((childSnapshot) => {
//             data.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val(),
//             });
//           });
//         } else {
//           console.log("tabela nula");
//         }
//       });
//   } catch (err) {
//     console.log(err);
//   }
//   return data;
// }
