import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "L'Hook useRef di React: Gestione di Valori e DOM: (da Kinsta) " },
    { id: 2, title: "React: Una Libreria JavaScript per Creare Interfacce Utente Dichiarative: (da Legacy React) " },
    { id: 3, title: "Cosa Sono i Componenti di React? Blocchi di Codice Riusabili e Autonomi: (da Aulab) " },
    { id: 4, title: "Introduzione a React: Cos'è e Come Funziona la Libreria di Meta: (da Hostinger) " },
    { id: 5, title: "JSX e Pura JavaScript: Sintassi nei Componenti React: (da Wikipedia) " }
  ]);
  // React: cosa è, come funziona e perché è importante per lo sviluppo web articolo di prova per il form
  return (
    <div className="App">
      <div className="container">

        <h1>Blog Articles</h1>
        <ul className="list-unstyled">
          {articles.map(article => (
            <li key={article.id}>
              <div className="card py-3 ps-3 d-flex ">
                <div className="row justify-space-between">
                  <div className="col-11">
                    <span>
                      {article.title}
                    </span>
                  </div>
                  <div className="col-1 ">
                    <button className="btn btn-danger">X</button>
                  </div>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div >
    </div >
  );
}

export default App;