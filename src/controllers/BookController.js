import { db } from "../firebase";

//doc
// let key = "-LlouZxkW1N3Llt6h5nm"
// firebase.database().ref(`users/${userUid}/collection/${key}`).remove()

//create book in firebase with the model of existig books in database
export async function CreateBook(
  Authors,
  BooksSituations,
  Genre,
  Inativo,
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
      Inativo,
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

//update book in firebase
export async function UpdateBook(
  Id,
  Authors,
  BooksSituations,
  Genre,
  Inativo,
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
    .child(Id)
    .update({
      Authors,
      BooksSituations,
      Genre,
      Inativo,
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
      console.log("Atualizado!");
    })
    .catch(function (error) {
      console.log("erro ao atualizar" + error);
    });
}

export async function DeleteBook(Id) {
  await db
    .ref("BooksBeta")
    .child(Id)
    .remove()
    .then(function () {
      console.log("Deletado!");
    })
    .catch(function (error) {
      console.log("erro ao deletar" + error);
    });
}

export async function GetBooks(userKey, Situation, TextSearch) {
  var data = [];
  try {
    await db
      .ref("BooksBeta")
      .orderByChild("UserKey")
      .equalTo(userKey)
      .once("value", (snapshot) => {
        if (snapshot != null) {
          snapshot.forEach((childSnapshot) => {
            if (
              Situation == "" ||
              childSnapshot.val().BooksSituations.Situation == Situation ||
              Situation == 4
            ) {
              console.table("teste" + TextSearch);
              if (
                TextSearch == "" ||
                childSnapshot.val().Title.includes(TextSearch)
              ) {
                console.table(childSnapshot.val());
                data.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val(),
                });
              }
            }
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

export async function GetBook(userKey, bookId) {
  var data = [];
  try {
    await db
      .ref("BooksBeta")
      .orderByChild("UserKey")
      .equalTo(userKey)
      .once("value", (snapshot) => {
        if (snapshot != null) {
          snapshot.forEach((childSnapshot) => {
            if (childSnapshot.key === bookId) {
              data.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
              });
            }
          });
        } else {
          console.log("tabela nula");
        }
      });
  } catch (err) {
    console.log(err);
  }
  console.log(data);
  return data;
}
