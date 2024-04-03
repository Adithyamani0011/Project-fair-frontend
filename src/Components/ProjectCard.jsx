import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
function ProjectCard() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div>
<Card style={{ width: '28rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://www.mooc.org/hubfs/cybersecurity-computer-science.jpg"  height={'300px'} width={'100%'}/>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
                <img  width={'100%'} src="https://www.mooc.org/hubfs/cybersecurity-computer-science.jpg" alt="" />
            </div>
            <div className="col-6 text-center">
          <h4>Project Title</h4>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aut facere voluptatibus quae ea recusandae tenetur voluptates labore repellendus architecto .</p><p>Technology Used:<b>React,Node</b></p>
         
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <div className='d-flex justify-evenly'>
          <Button className='me-5'><a href=""><FaGithub /></a></Button>
          <Button className='me-5'> <a href=""><FaLink /></a></Button>
           
           
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard