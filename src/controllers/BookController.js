import { db } from "../firebase";

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
    .ref("BooksBeta").child(Id)
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

export async function GetBooks(userKey) {
  var data = [];
  try {
    await db
      .ref("BooksBeta")
      .orderByChild("UserKey")
      .equalTo(userKey)
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
  console.log(data);
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
