import "./styles.css";
import format_list_bulleted from "../../assets/icons/format_list_bulleted.svg";
import auto_stories from "../../assets/icons/auto_stories.svg";
import checklist from "../../assets/icons/checklist.svg";
import collections_bookmark from "../../assets/icons/collections_bookmark.svg";

import archive from "../../assets/icons/inventory.svg";
import sgvlogout from "../../assets/icons/logout.svg";
import next from "../../assets/icons/arrow_forward.svg";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function MainPage() {
  const totals = [10, 12, 14, 16];
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("Erro ao tentar deslogar");
    }
  }

  //para efeito de testes, imprime o current email logado.
  if (currentUser) {
    console.log(currentUser.Email);
  }

  return (
    <div>
      <div className="Main-Frame">
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "70px" }}>
                  <table>
                    <tbody>
                      <tr style={{ display: "flex" }}>
                        <td style={{ height: "36px" }}>
                          <img src={format_list_bulleted} alt="Ill Read"></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="label-icon">Vou Ler</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ width: "auto" }}>
                  <p>
                    <h1>{totals[0]}</h1>
                  </p>
                </td>
                <td style={{ width: "30px" }}>
                  <img src={next} alt="Next"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "70px" }}>
                  <table>
                    <tbody>
                      <tr style={{ display: "flex" }}>
                        <td style={{ height: "36px" }}>
                          <img src={auto_stories} alt="Reading"></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="label-icon">Lendo</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ width: "auto" }}>
                  <p>
                    <h1>{totals[1]}</h1>
                  </p>
                </td>
                <td style={{ width: "30px" }}>
                  <img src={next} alt="Next"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "70px" }}>
                  <table>
                    <tbody>
                      <tr style={{ display: "flex" }}>
                        <td style={{ height: "36px" }}>
                          <img src={checklist} alt="Read"></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="label-icon">Lidos</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ width: "auto" }}>
                  <p>
                    <h1>{totals[2]}</h1>
                  </p>
                </td>
                <td style={{ width: "30px" }}>
                  <img src={next} alt="Next"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "70px" }}>
                  <table>
                    <tbody>
                      <tr style={{ display: "flex" }}>
                        <td style={{ height: "36px" }}>
                          <img
                            src={collections_bookmark}
                            alt="Interrupted"
                          ></img>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p className="label-icon">Suspensos</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ width: "auto" }}>
                  <p>
                    <h1>{totals[3]}</h1>
                  </p>
                </td>
                <td style={{ width: "30px" }}>
                  <img src={next} alt="Next"></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="Main-Frame">
        <div className="grid-btns">
          <Link to="/InsertBook">
            <button className="grid-left btn btn-primary">
              Adicionar Livro
            </button>
          </Link>
          <button className="grid-right btn btn-primary">
            Arquivo
          </button>
        </div>
        <button
          className="btn btn-secondary icon-button"
          onClick={handleLogOut}
        >
          <img src={sgvlogout} alt="LogOut" height="15px"></img> - Sair
        </button>
      </div>
    </div>
  );
}

export default MainPage;