import React, {useRef, useState} from 'react'
import './card.css';
import {useDispatch} from 'react-redux'
import {deleteBlog} from '../../redux/noteSlice'
import Modal from '../modal/Modal.jsx';
export default function Card({id, title, descreption, tags}) {
  const  dispatch= useDispatch();
  const modalRef=useRef(null);
  const [note, editnote]=useState({id, title, descreption, tags});
  const handleDelete=(id, e)=>{
   
e.preventDefault();

if(window.confirm('Are you sure to delete this blog?')){
  console.log(id)
  dispatch(deleteBlog(id))
  // window.location.reload();
}else{
    alert( "blog is not deleted");
  }
}

  const handleEdit=(id, title, descreption, tags)=>{

    editnote({id, title, descreption, tags})
    modalRef.current.click();
  }
  return (
   <>
   <Modal Ref={modalRef} id={note.id} title={note.title} descreption={note.descreption} tags={note.tags}/>
        <div className="card" key={id} style={{width: 18+'rem'}}>
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">{descreption}</p>
    <h5>tags</h5>
    <p>{tags}</p>
    <div className='d-flex gap-5'>
    {localStorage.getItem('token') &&<><i className="fa-regular fa-pen-to-square c-pointer" onClick={()=>handleEdit(id,title, descreption, tags)}>e</i>
    <i className="fa-solid fa-trash c-pointer" onClick={(e)=>handleDelete(id, e)}>d</i></>}
    </div>
  </div>
</div>
   </>
  )
}
// import React, { useRef, useState } from 'react';
// import './card.css';
// import { useDispatch } from 'react-redux';
// import { deleteBlog } from '../../redux/noteSlice';
// import Modal from '../modal/Modal.jsx';

// export default function Card({ id, title, description, tags }) {
//   const dispatch = useDispatch();
//   const modalRef = useRef(null);
//   const [note, editNote] = useState({ id, title, description, tags });

//   const handleDelete = (id, e) => {
//     if (window.confirm('Are you sure to delete this blog?')) {
//       dispatch(deleteBlog(id));
//       window.location.reload();
//     } else {
//       alert("Blog is not deleted");
//     }
//   };

//   const handleEdit = () => {
//     modalRef.current.click();
//   };

//   return (
//     <>
//       <Modal
//         ref={modalRef}
//         id={note.id}
//         title={note.title}
//         description={note.description}
//         tags={note.tags}
//       />
//       <div className="card" key={id} style={{ width: '18rem' }}>
//         <div className="card-body">
//           <h4 className="card-title">{title}</h4>
//           <p className="card-text">{description}</p>
//           <h5>Tags</h5>
//           <p>{tags}</p>
//           <div className='d-flex gap-5'>
//             {localStorage.getItem('token') && (
//               <>
//                 <i className="fa-regular fa-pen-to-square c-pointer" onClick={handleEdit}></i>
//                 <i className="fa-solid fa-trash c-pointer" onClick={(e) => handleDelete(id, e)}></i>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
