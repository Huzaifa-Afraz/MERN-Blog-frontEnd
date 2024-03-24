import React from 'react'
import Input from '../Input/Input'
import Textarea from '../TextArea/Textarea'
export default function Modal({Ref}) {
  return (
    <div>
<button type="button" ref={Ref} className='d-none' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Update Blog</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <Input placeholder={'Title'} name={'title'} type={'text'} label={'Title'}/>
        <Textarea label={"Enter blog description"} placeholder={'Description'} name={'Descreption'}/>
        <Input placeholder={'Enter Tags'} label={"Tags"} type={'text'} name={'tags'}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
        <button type="button" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
