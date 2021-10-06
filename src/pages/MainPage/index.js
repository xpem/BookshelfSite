import "./styles.css";
import format_list_bulleted from "../../assets/icons/format_list_bulleted.svg";
import auto_stories from "../../assets/icons/auto_stories.svg";
import checklist from "../../assets/icons/checklist.svg";
import collections_bookmark from "../../assets/icons/collections_bookmark.svg";
import book from "../../assets/icons/book.svg";
import archive from "../../assets/icons/inventory.svg";
import logout from "../../assets/icons/logout.svg";
import next from "../../assets/icons/arrow_forward.svg";
import React, { useEffect, useState } from "react";

function MainPage() {
  const totals = [10,12,14,16];

  return (
    <div>
      <div className="Main-Frame">
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
                <table>
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
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
                <table>
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
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
                <table>
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
          </table>
        </div>
        <div className="Card-Item">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "70px" }}>
                <table>
                  <tr style={{ display: "flex" }}>
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
                  <h1>{totals[3]}</h1>
                </p>
              </td>
              <td style={{ width: "30px" }}>
                <img src={next} alt="Next"></img>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="Main-Frame">
        <button className="button-primary icon-button">
          <img src={book} alt="Add a book" height="25px"></img> - Adicionar
        </button>
        <button className="button-primary icon-button">
          <img src={archive} alt="Archive" height="25px"></img> - Arquivo
        </button>
        <button className="button-secondary icon-button">
          <img src={logout} alt="LogOut" height="15px"></img> - Sair
        </button>
      </div>
    </div>
  );
}

export default MainPage;

/*
 
*/
