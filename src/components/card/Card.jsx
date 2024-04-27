import React, { useRef, useState } from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../redux/noteSlice';
import Modal from '../modal/Modal.jsx';

export default function Card({ note }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const [enote, editnote] = useState({ _id: '', etitle: '', edescreption: '', etags: '' });
  const [showModal, setShowModal] = useState(false);
  const handleDelete = (id, e) => {
    e.preventDefault();

    if (window.confirm('Are you sure to delete this blog?')) {
      dispatch(deleteBlog(id));
    } else {
      alert("Blog is not deleted");
    }
  };

  // const handleEdit = (id, title, description, tags) => {
  //   editnote({ _id: id, etitle: title, edescreption: description, etags: tags });
  //   modalRef.current.click();
  //   setShowModal(true);
    
  // };
  const handleEdit = ({ id, title, description, tags }) => {
    editnote({ _id: id, etitle: title, edescreption: description, etags: tags });
    modalRef.current?.click(); 
  };

  return (
    <>
      {/* <Modal Ref={modalRef} editNote={enote} id={enote._id}/> */}
      {modalRef.current && (
        <Modal Ref={modalRef} editNote={enote} id={enote._id}/>
      )}
      <div className="card" key={note._id} style={{ width: '18rem' }}>
        <div className="card-body">
          <h4 className="card-title">{note.title}</h4>
          <p className="card-text">{note.descreption}</p>
          <h5>tags</h5>
          <p>{note.tags}</p>
          <div className='d-flex gap-5'>
            {localStorage.getItem('token') && (
              <>
                <i className="fa-regular fa-pen-to-square c-pointer" onClick={() => handleEdit(note._id, note.title, note.descreption, note.tags)}>e</i>
                <i className="fa-solid fa-trash c-pointer" onClick={(e) => handleDelete(note._id, e)}>d</i>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}












// import React, {useRef, useState} from 'react'
// import './card.css';
// import {useDispatch} from 'react-redux'
// import {deleteBlog} from '../../redux/noteSlice'
// import Modal from '../modal/Modal.jsx';
// export default function Card(props) {
//   const {note}=props;
//   const  dispatch= useDispatch();
//   const modalRef=useRef(null);
//   const [enote, editnote]=useState({_id:'', etitle:'', edescreption:'', etags:''});
//   // console.log(Note)
//   const handleDelete=(id, e)=>{
   
// e.preventDefault();

// if(window.confirm('Are you sure to delete this blog?')){
//   // console.log(id)
//   dispatch(deleteBlog(id))
//   // window.location.reload();
// }else{
//     alert( "blog is not deleted");
//   }
// }

//   const handleEdit=({id, title, description, tags})=>{
// // console.log("notes from edit")
// // console.log({note})
// // console.log({id, title, descreption, tags})
// // console.log(description)

//     editnote({_id:id, etitle : title, edescreption : description, etags : tags})
//     // console.log(Note.title,Note.descreption, note.tags)
//     // console.log({enote})
//     modalRef.current.click();
    
//   }
//   return (
//    <>
//    {/* <Modal Ref={modalRef} id={note.id} title={note.title} descreption={note.descreption} tags={note.tags}/> */}
//    <Modal Ref={modalRef} editNote={enote} id={enote._id}/>
//         <div className="card" key={note._id} style={{width: 18+'rem'}}>
//   <div className="card-body">
//     <h4 className="card-title">{note.title}</h4>
//     <p className="card-text">{note.descreption}</p>
//     <h5>tags</h5>
//     <p>{note.tags}</p>
//     <div className='d-flex gap-5'>
//     {localStorage.getItem('token') &&<><i className="fa-regular fa-pen-to-square c-pointer" onClick={() => handleEdit({ id: note._id, title: note.title, description: note.descreption, tags: note.tags })}
// >e</i>
//     <i className="fa-solid fa-trash c-pointer" onClick={(e)=>handleDelete(note._id, e)}>d</i></>}
//     </div>
//   </div>
// </div>
//    </>
//   )
// }




























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
