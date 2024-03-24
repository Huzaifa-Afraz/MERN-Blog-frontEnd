import React, {useRef} from 'react'
import './card.css';
import {useDispatch} from 'react-redux'
import {deleteBlog} from '../../redux/noteSlice'
import Modal from '../modal/Modal.jsx';
export default function Card({id, title, descreption}) {
  const  dispatch= useDispatch();
  const modalRef=useRef(null);
  const handleDelete=(id, e)=>{
   
e.preventDefault();

if(window.confirm('Are you sure to delete this blog?')){
  dispatch(deleteBlog(id))
}else{
    alert( "blog is not deleted");
  }
}

  const handleEdit=()=>{
    modalRef.current.click();
  }
  return (
   <>
   <Modal Ref={modalRef}/>
        <div className="card" key={id} style={{width: 18+'rem'}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{descreption.substr(0, 30)+'...'}</p>
    <div className='d-flex gap-5'>
    <i className="fa-regular fa-pen-to-square c-pointer" onClick={handleEdit}></i>
    <i className="fa-solid fa-trash c-pointer" onClick={(e)=>handleDelete(id, e)}></i>
    </div>
  </div>
</div>
   </>
  )
}
