import "./styles.css";
import format_list_bulleted from "../assets/icons/format_list_bulleted.svg";
import auto_stories from "../assets/icons/auto_stories.svg";
import checklist from "../assets/icons/checklist.svg";
import collections_bookmark from "../assets/icons/collections_bookmark.svg";

function App() {
  return (
    <div>
      <div className="Main-Frame">
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
                <table>
                  <tr style={{display: "flex"}}>
                    <td style={{ height: "36px" }}>
                      <img src={format_list_bulleted} alt="Ill Read"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="label-icon">Vou Ler</p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ width: "auto" }}>
                <p>
                  <h1>14</h1>
                </p>
              </td>
              <td style={{ width: "30px" }}>{">"}</td>
            </tr>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
              <table>
                  <tr style={{display: "flex"}}>
                    <td style={{ height: "36px" }}>
                      <img src={auto_stories} alt="Reading"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="label-icon">Lendo</p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ width: "auto" }}>
                <p>
                  <h1>15</h1>
                </p>
              </td>
              <td style={{ width: "30px" }}>{">"}</td>
            </tr>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
              <table>
                  <tr style={{display: "flex"}}>
                    <td style={{ height: "36px" }}>
                      <img src={checklist} alt="Read"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="label-icon">Lidos</p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ width: "auto" }}>
                <p>
                  <h1>17</h1>
                </p>
              </td>
              <td style={{ width: "30px" }}>{">"}</td>
            </tr>
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
              <table>
                  <tr style={{display: "flex"}}>
                    <td style={{ height: "36px" }}>
                      <img src={collections_bookmark} alt="Interrupted"></img>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="label-icon">Suspensos</p>
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ width: "auto" }}>
                <p>
                  <h1>14</h1>
                </p>
              </td>
              <td style={{ width: "30px" }}>{">"}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="Main-Frame">
        <button className="button-primary">Cadastrar Livro</button>
        <button className="button-primary">Arquivo</button>
        <button className="button-secondary">Sair</button>
      </div>
    </div>
  );
}

export default App;

/*
 
*/
