import React,{useRef} from "react";
import PersonAdd from "../../../assets/icons/person_add.svg";
import InputFunction from "../../../components/Input";
import {useAuth} from "../../../contexts/AuthContext";



function CreateUser() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()

function handleSubmit(e){
  e.preventDefault()
  signup(emailRef.current.value, passwordRef.current.value)
}


  return (
    <div className="Main-Frame">
      <div style={{ textAlign: "center", width: "100%" }}>
        <img src={PersonAdd} alt="Add User"></img>
      </div>
      <main>
        <form>
          {/* <InputFunction name="name" label="Nome" /> */}
          <InputFunction name="name" label="Email" ref={emailRef}/>
          {/* <InputFunction name="name" label="Nome de Acesso" /> */}
          <fieldset style={{ margin: "1rem", padding: "1rem" }}>
            <InputFunction name="name" label="Senha" ref={passwordRef}/>
            <InputFunction name="name" label="Confirme sua senha" ref={passwordConfirmRef}/>
          </fieldset>
          <button className="button-primary" type="submit" style={{ marginTop: "1rem" }}>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
export default CreateUser;
