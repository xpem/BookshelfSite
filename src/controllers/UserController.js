import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

// export async function GetUserProfile(uid) {
//   var data = [];
//   try {
//     db.ref("UsersBeta").orderByChild("uid").equalTo(uid).once("value", (snapshot) => {
//       if (snapshot != null) {
//         snapshot.forEach((childSnapshot) => {
//           data.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//           });
//         });
     
//         console.log(data);
//       }else{
//         console.log("tabela nula")
//       }
//       return data;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function CreateUserProfile(name, email, uid) {
  await db
    .ref("UsersBeta")
    .push({ name, email, uid })
    .then(function () {
      console.log("Adicionado");
    })
    .catch(function (error) {
      console.log("erro ao adicionar" + error);
    });
}
