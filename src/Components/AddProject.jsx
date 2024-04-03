import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <button className='btn btn-light text-dark m-5' onClick={handleShow}>Add</button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6 mt-4 p-5'>
          <label>
                <input type="file" style={{display:'none'}} />
                <img width={'200px'} src="https://media.giphy.com/media/zKNxmEraPcoKI/giphy.gif" alt="" />
            </label>
          </div>
          <div className='col-6 text-center'>
          <input type="text" placeholder='Project title' className='form-control mb-2' />
          <input type="text" placeholder='Language used' className='form-control mb-2' />
          <input type="text" placeholder='Git hub link' className='form-control mb-2' />
          <input type="text" placeholder='Overview' className='form-control mb-2' />
          {/* <input type="text" placeholder='Name' className='form-control mb-2' /> */}
          
          </div>
      </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
   
  )
}

export default AddProject