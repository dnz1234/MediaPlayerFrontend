import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteAVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';

function VideoCard({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = async() => {
  setShow(true);

  const {caption,embedLink} = displayVideo
  const today = new Date()
  let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit',
 minute:'2-digit' , second:'2-digit'}).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption, embedLink,timestamp
    }
    const response =await addToHistory (videoDetails)
    console.log(response);
   }
  const removeVideo = async (id)=>{
    const response= await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }
  
  //function to drag a particular card 
  const dragStart=(e,id)=>{
    console.log(`card that Dargged is : ${id}`);
 
    //to transfer id from videocard to category
    e.dataTransfer.setData("videoID",id)
 
  }
  return (
    <>
    <Card style={{ width: '100%', height:'380px' }} className='mb-4' draggable onDragStart={(e)=>dragStart(e,displayVideo?.id)}>
      <Card.Img  onClick={handleShow} height={'280px'} variant="top" src={displayVideo.url} />
      <Card.Body className='d-flex justify-content-center aalign-items-center'>
        <Card.Title>{displayVideo.caption}</Card.Title>
        
        <Button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger rounded-3 ms-3' variant="primary"><i class="fa-solid fa-trash"></i></Button>
      </Card.Body>
    </Card>
    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="530" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    
    
    
    
    
    
    </>
  )
}

export default VideoCard