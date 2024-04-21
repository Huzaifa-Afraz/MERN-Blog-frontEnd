import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Card from '../../components/card/Card';
import { callReducer,fetchNotes,addNote } from '../../redux/noteSlice';
import Modal from '../../components/modal/Modal';
import Input from '../../components/Input/Input';
import Textarea from '../../components/TextArea/Textarea';
import Button from '../../components/Button/Button';
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
    
const [note, setNote]=useState({title:"",descreption:"", tags:""});
const change= (e)=>{
  console.log(note)
  setNote({...note,[e.target.name]:e.target.value})
}
    const handleSubmit=(e)=>{
       e.preventDefault();
      //  console.log(note.title, note.descreption, note.tags)
        // dispatch(addNote({title:note.title,descreption:note.descreption,tags:note.tags}))
        dispatch(addNote({title:note.title,descreption:note.descreption,tags:note.tags}))
        window.location.reload();
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
      <form onSubmit={handleSubmit}>
        <Input placeholder={'Enter title'} name={'title'} label={'Title'} type={'text'} onChange={change}/>
      {/* <Input placeholder={'Enter description'}/> */}
      <Textarea placeholder={'Enter description'} label={'Description'} name={'descreption'} onChange={change}/>
      <Input placeholder={'Enter tags'} name={'tags'} onChange={change}/>
      <Button btnName={'Add'} btntype={'primary'}/>
      </form>
      {/* <button 
      onClick={handleClick}
      >add note</button> */}
{notes.isLoading && <h1>loding...</h1>}
<Modal/>
  <div className='row gap-3'>
    {notesList}
  </div>

    </div>
  )
}
