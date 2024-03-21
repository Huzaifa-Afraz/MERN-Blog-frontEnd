import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Card from '../../components/card/Card';
import { callReducer,fetchNotes,addNote } from '../../redux/noteSlice';

export default function Home() {
  const dispatch=useDispatch();
    const notes=useSelector((state)=>state.note);
    // console.log(notes.notes)
// console.log(notes.notes.blogs)

    // notes.notes.forEach(element => {
      
    //   element.blogs.forEach(element => {
    //     console.log(element);
    //   });
    // });
    

    const handleClick=(e)=>{
e.preventDefault();
        dispatch(addNote({title:'new hello word blog 2',descreption:'helo from hello world blog',tags:'testing'}))
    }
    useEffect( ()=>{
       if(!notes.isLoading){
           dispatch(fetchNotes())
       
       }
        
     },[dispatch])
    //  const notesList = notes.notes.flatMap(note => note.blogs).map(note => (
       const notesList =notes.notes && notes.notes.blogs ? notes.notes.blogs.map(note => (
      // <div className='card' key={note.id}>
      //   <h1>{note.title}</h1>
      //   <h2>{note.descreption}</h2> 
      //   <h3>{note.tags}</h3>
      <>
      {/* {console.log(note._id)} */}
        <Card id={note._id} title={note.title} descreption={note.descreption} />
        </>
      // </div>
    )):[];
  return (
    <div className='container'>
      <button 
      onClick={handleClick}
      >add note</button>
{notes.isLoading && <h1>loding...</h1>}

{/* {notes.notes.flatMap(note => note.blogs).forEach(note =>
// console.log(note.title+note.tags)
  <div className='card' key={note._id}>
    <h1>{note.title}</h1>
    <h2>{note.descreption}</h2> 
    <h3>{note.tags}</h3>
  </div>
  )
  } */}
  <div className='row gap-3'>
    {notesList}
  </div>
   {/* { notes.notes.map(note => (
     note.blogs.map(note=>{
  
  })
))} */}
    </div>
  )
}
