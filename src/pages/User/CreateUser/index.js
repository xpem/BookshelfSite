import React from "react";
import PersonAdd from "../../../assets/icons/person_add.svg";
import InputFunction from "../../../components/Input";

function CreateUser() {
  return (
    <div className="Main-Frame">
      <div style={{ textAlign:"center", width:"100%"}}>
      <img src={PersonAdd} alt="Add User"></img>
      </div>
      <main>
        <form>
            <InputFunction name="name" label="Nome" />
            <InputFunction name="name" label="Email" />
            <InputFunction name="name" label="Nome de Acesso" />
            <InputFunction name="name" label="Senha" />
            <InputFunction name="name" label="Confirme sua senha" />
            <button className="button-primary" style={{marginTop: '1rem'}}>
          Cadastrar
        </button>
        </form>
      </main>
    </div>
  );
}
export default CreateUser;
