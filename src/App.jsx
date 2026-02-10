import { useState } from 'react';
import './css/App.css'

const starterList = ["Transumanesimo 2026", "Roadmap to Mars", "Robot and Humans boundaries"];

export default function App() {
  const [articleList, setArticleList] = useState(starterList); 
  const [newArticle, setNewArticle] = useState("");

  const handleForm = (e) => {
          e.preventDefault(); 
          if(newArticle !=="") {
            setArticleList([...articleList, newArticle])
            setNewArticle("");
          } 
        };

  const handleNewArticle = (e) => setNewArticle(e.target.value)

  return (
    <div className='container py-3'>
      <div>
      <h1>Latest articles</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit itaque consequatur perspiciatis sapiente asperiores culpa hic. Pariatur, nemo. Ipsum magnam alias at sunt sed blanditiis esse accusantium rerum in?</p>
      </div>    
      <div className='article-container'>
        <ul>
          {articleList.map((item, index) => <li key={index} className='d-flex justify-content-between my-2'><span>{item}</span><button className='btn btn-danger'><i class="bi bi-trash-fill"></i></button></li>)}
        </ul>
        <hr />
        <form 
          onSubmit={handleForm} className="input-group mb-3">
          <input 
          value={newArticle}
          onChange={handleNewArticle}
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


