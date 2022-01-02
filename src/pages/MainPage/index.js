import "./styles.css";
import format_list_bulleted from "../../assets/icons/format_list_bulleted.svg";
import auto_stories from "../../assets/icons/auto_stories.svg";
import checklist from "../../assets/icons/checklist.svg";
import collections_bookmark from "../../assets/icons/collections_bookmark.svg";
import { GetBooks } from "../../controllers/BookController";
import archive from "../../assets/icons/inventory.svg";
import sgvlogout from "../../assets/icons/logout.svg";
import next from "../../assets/icons/arrow_forward.svg";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function MainPage() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [totals, setTotals] = useState([]);

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
    console.log(currentUser);
    console.log(currentUser.email);
  }

  function SetTotals(books) {
    var vIllRead = 0;
    var vReading = 0;
    var vRead = 0;
    var vInterrupted = 0;
    books.map((book) => {
      if (book.BooksSituations.Situation == 1) {
        console.log("vou ler:" + vIllRead);
        vIllRead = vIllRead + 1;
      }
      if (book.BooksSituations.Situation == 2) {
        console.log("lendo:" + vReading);
        vReading = vReading + 1;
      }
      if (book.BooksSituations.Situation == 3) {
        console.log("lido:" + vRead);
        vRead = vRead + 1;
      }
      if (book.BooksSituations.Situation == 4) {
        console.log("Interrompido:" + vInterrupted);
        vInterrupted = vInterrupted + 1;
      }
    });
    setTotals([vIllRead, vReading, vRead, vInterrupted]);
  }

  useEffect(() => {
    GetBooks(currentUser.uid).then((d) => SetTotals(d));
  }, []);

  return (
    <div>
      <div className="Main-Frame">
        {/* card link para vou ler */}
        <Link to={`/BookList/${1}`} className="Link-Card-Item">
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
                              src={format_list_bulleted}
                              alt="Ill Read"
                            ></img>
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
                    <h1>{totals[0]}</h1>
                  </td>
                  <td style={{ width: "30px" }}>
                    <img src={next} alt="Next"></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
        {/* card link para lendo */}
        <Link to={`/BookList/${2}`} className="Link-Card-Item">
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
                    <h1>{totals[1]}</h1>
                  </td>
                  <td style={{ width: "30px" }}>
                    <img src={next} alt="Next"></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
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
                  <h1>{totals[2]}</h1>
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
                  <h1>{totals[3]}</h1>
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
          <button className="grid-right btn btn-primary">Arquivo</button>
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
