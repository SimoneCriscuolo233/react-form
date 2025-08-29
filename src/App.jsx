import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "L'Hook useRef di React: Gestione di Valori e DOM: (da Kinsta) " },
    { id: 2, title: "React: Una Libreria JavaScript per Creare Interfacce Utente Dichiarative: (da Legacy React) " },
    { id: 3, title: "Cosa Sono i Componenti di React? Blocchi di Codice Riusabili e Autonomi: (da Aulab) " },
    { id: 4, title: "Introduzione a React: Cos'è e Come Funziona la Libreria di Meta: (da Hostinger) " },
    { id: 5, title: "JSX e Pura JavaScript: Sintassi nei Componenti React: (da Wikipedia) " }
  ]);
  // React: cosa è, come funziona e perché è importante per lo sviluppo web. <--- Articolo di prova per il form

  const [newTitle, setNewTitle] = useState("");
  const newId = (articles.length - 1) + 1;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTitle === "") {
      alert("⚠️ Inserisci un titolo valido per l'articolo!");
      return;
    }

    const newArticle = {
      id: newId,
      title: newTitle
    };

    setArticles([...articles, newArticle]);
    setNewTitle("");
  };
  const handleDelete = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div className="App">
      <div className="container">

        <h1>Blog Articles</h1>
        <ul className="list-unstyled">
          {articles.map(article => (
            <li key={article.id}>
              <div className="card p-3 d-flex ">
                <div className="row justify-space-between">
                  <div className="col-11">
                    <span>
                      {article.title}
                    </span>
                  </div>
                  <div className="col-1">
                    <button className="btn btn-danger" onClick={() => handleDelete(article.id)}>X</button>
                  </div>
                </div>

              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="form-control"
              placeholder="Enter new article title"
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div >
    </div >
  );
}

export default App;