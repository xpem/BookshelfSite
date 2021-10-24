import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

export async function GetUserProfile(name) {
  var data = [];
  try {
   await db.ref("UsersBeta").orderByChild("name").equalTo(name).once("value", (snapshot) => {
      if (snapshot != null) {
        snapshot.forEach((childSnapshot) => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });     
      }else{
        console.log("tabela nula")
      }  
    });
  } catch (err) {
    console.log(err);
  }
  return data;
}

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
