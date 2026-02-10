export default function Form ({handleForm, newArticle, handleNewArticle}) {
    return         <form 
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
}