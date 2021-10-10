import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

export async function CreateUserProfile(name,email,uid){
    await db
    .ref("UsersBeta")
    .push({ name, email,uid })
    .then(function () {
      console.log("Adicionado");
    })
    .catch(function (error) {
      console.log("erro ao adicionar" + error);
    });
}