import { useState } from 'react';
import './css/App.css'

export default function App() {
  const articleList = ["Transumanesimo 2026", "Roadmap to Mars", "Robot and Humans boundaries"]; 
  const [newArticle, setNewArticle] = useState("");

  return (
    <div className='container py-3'>
      <div>
      <h1>Latest articles</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit itaque consequatur perspiciatis sapiente asperiores culpa hic. Pariatur, nemo. Ipsum magnam alias at sunt sed blanditiis esse accusantium rerum in?</p>
      </div>    
      <div className='list-group'>
        <ul>
          {articleList.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <hr />
        <form 
          onSubmit={(e) => {
          e.preventDefault(); 
          console.log("nuovo articolo aggiunto:", newArticle);
        }} className="input-group mb-3">
          <input 
          value={newArticle}
          onChange={e => setNewArticle(e.target.value)}
          type="text" 
          className="form-control" 
          placeholder="Titolo nuovo articolo" 
          aria-label="New article" 
          aria-describedby="button-new-articles" />
          <button 
          className="btn btn-success" 
          id="button-new-article">
            Aggiungi
            </button>
        </form>
      </div>
    </div>
  )
}


