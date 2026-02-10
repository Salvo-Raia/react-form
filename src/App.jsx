import './css/App.css'

export default function App() {
  const articleList = ["Transumanesimo 2026", "Roadmap to Mars", "Robot and Humans boundaries"]; 

  return (
    <div className='container py-3'>
      <div>
      <h1>Latest articles</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit itaque consequatur perspiciatis sapiente asperiores culpa hic. Pariatur, nemo. Ipsum magnam alias at sunt sed blanditiis esse accusantium rerum in?</p>
      </div>    
      <div className='list-group'>
        <ul>
          {articleList.map((todo) => <li>{todo}</li>)}
        </ul>
        <hr />
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
           <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
      </div>
    </div>
  )
}


