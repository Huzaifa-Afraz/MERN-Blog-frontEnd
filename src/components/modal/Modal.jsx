import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Input from '../Input/Input'
import Textarea from '../TextArea/Textarea'
import {updateBlog} from '../../redux/noteSlice'
export default function Modal(props) {
  const {Ref, editNote, id}=props;
  const dispatch = useDispatch();
  // const [value, setvalue]=useState(note.title)
  const [value, setvalue]=useState({id:'',title:'',description:'',tags:''})
  // console.log(editNote.title);
 
  const handlechange=(e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
    
  }
  console.log({editNote})
  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log({value})
  
    dispatch(updateBlog({value}))
  }
  return (
    <div>
<button type="button"ref={Ref} className='d-none' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Update Blog {value.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="modal-body">
        
        <Input placeholder={'Title'} name={'title'} type={'text'} label={'Title'} value={value.title} onChange={handlechange}/>
        <Textarea label={"Enter blog description"} placeholder={'Description'} name={'description'} onChange={handlechange}/>
        <Input placeholder={'Enter Tags'} label={"Tags"} type={'text'} name={'tags'} onChange={handlechange}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
        <button type="submit" className="btn btn-primary" >Update</button>
        
      </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
