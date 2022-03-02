import React,{useState} from "react"
import './App.css';

function App() {
  const [name,setName]= useState("")
  const [comment,setComment]= useState("")
  const [post,setPost]= useState([])

  const addPost= ()=>{
    const items={
        id:post.length+1,
        name:name,
        comment:comment
      }
    
      setName("")
      setComment("")
    setPost([...post,items])
  }
  return (
    <div className="App">
     <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" autocomplete="off"/>
     <textarea value={comment} onChange={(e)=>setComment(e.target.length)} placeholder="say your mind"/>
     {post.map((props)=>(
      <div class="card">
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>{props.comment}</p>
      </div>
  ))
  }
    </div>
   
  );
}

export default App;
