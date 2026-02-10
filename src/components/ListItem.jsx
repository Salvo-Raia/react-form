export default function ListItem ({item, deleteFunction}) {
    return <li
                className='list-group-item d-flex justify-content-between align-items-center'
                >
                  <span>{item}</span>
                  <button 
                      onClick={deleteFunction}
                     className='btn btn-danger'>
                    <i className="bi bi-trash-fill"></i>
                  </button></li>
}