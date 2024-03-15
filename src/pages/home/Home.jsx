import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { callReducer,fetchNotes,addNote } from '../../redux/noteSlice';
export default function Home() {
  const dispatch=useDispatch();
    const notes=useSelector((state)=>state.note);
    // console.log("notes.notes run")
    // console.log(notes.notes)
    // console.log("notes run")
// console.log(notes.notes.blogs)
    notes.notes.forEach(element => {
      
      element.blogs.forEach(element => {
        console.log(element);
      });
    });

    const handleClick=(e)=>{
e.preventDefault();
        dispatch(addNote({title:'helo',descreption:'helo desc',tags:'personal'}))

    }
    useEffect( ()=>{
       if(!notes.isLoading){
           dispatch(fetchNotes())
       }
       
        
     },[dispatch])
    
  return (
    <div>
      <button 
      onClick={handleClick}
      >add note</button>
{notes.isLoading && <h1>loding...</h1>}

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
