import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { callReducer } from '../../redux/noteSlice';
export default function Home() {
    const notes=useSelector((state)=>state.note);
    console.log("notes.notes run")
    console.log(notes.notes)
    console.log("notes run")
    console.log(notes)
    const dispatch=useDispatch();
    const handleClick=(e)=>{
e.preventDefault();
        dispatch(callReducer({title:'helo',descreption:'helo desc',tags:'personal'}))

    }
  return (
    <div>
      <button 
      onClick={handleClick}
      >add note</button>
   {notes && notes.notes.map(note => (
  <div >
    <h1>{note.title}</h1>
    <h2>{note.descreption}</h2> 
    <h3>{note.tags}</h3>
  </div>
))}
    </div>
  )
}
