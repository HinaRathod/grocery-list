import React, {useState} from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState("")
  const [list, setList] = useState([])


 const remove = (index) => {
  const newList = []
  for (let i = 0; i<list.length; i++){
    if (index != i){
      newList.push(list[i])
    }
  }
  setList(newList)
  }

const handleChange = (event) => {
setItem(event.target.value)
}

const handleSubmit = (event) => {
  const newList = [...list,{title: item}]
  setList(newList)
  setItem('')
}

  return (
   <div className ='App'>
    <h1>Grocery List</h1>
    <div className='input'>
<input type ='text' value={item} onChange={handleChange}></input>
<button type='submit' onClick={handleSubmit}>ADD</button>
    </div>
    <div className='List'>
      {list.map((input,index) => {
        return(
          <div>
            
              <p key={index} onClick={() => {remove(index)}}>{input.title}</p>
            
          </div>
          )
        
        })}
      </div>
    </div>
  )
  
}

export default App;
