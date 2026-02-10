import { useState } from 'react';
import Header from './components/header';
import ListItem from './components/ListItem';
import './css/App.css'
import Form from './components/Form';

// Array iniziale
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
      <Header />
      <main>
        <div className='article-container'>
          <ul className='list-group'>
            {articleList.map((item, index) => 
              (<ListItem key={index} 
                item={item} 
                deleteFunction={() => setArticleList(articleList.filter((_, i) => i !== index)) }/>))}
          </ul>
          <hr />
          <Form handleForm ={handleForm} 
                newArticle={newArticle} 
                handleNewArticle={handleNewArticle}/>
        </div>
      </main>
    </div>
  )
}


