
 import React, { useEffect } from 'react'
 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { Card } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { Col,Row } from 'react-bootstrap';

 function Category() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName]= useState ([]);

  const [categories,setCategory]=useState('')

  /// function to add  category 
  const handleAddCategory= async()=>{
    console.log(CategoryName);
    if(CategoryName){
      let body ={
        CategoryName,
        allvideos:[]
      }
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.CategoryName}video uploaded successfully`)
        allCategory()
        /* alert ('Catergory Add Sucessfully') */
        ///to empty the state
        setCategoryName("")
        ///closeModal
        handleClose() 
      }
    }
    else{
      toast.error('Please fill the field')
      /* alert("Please fill the Category Name") */
    }
    }

    // function to get all categories
    const allCategory = async()=>{
      const {data} = await getAllCategory()
      /* console.log(data); */
      setCategory(data)
    }
    console.log(categories);

    ///function to delete category
    const removeCategory = async(id)=>{
      await deleteACategory (id)
      /// to get the remaing category
      allCategory()
    }
    useEffect(()=>{
    allCategory()
  },[])
  
//function to prevent reload
 const dragOver =(e)=>{
  e.preventDefault()
 }
 //function to drop video card to category
 const VideoDrop=async (e,Categoryid)=>{
  console.log(`Category in Which videoCard is Dropped:${Categoryid}`);
 let videoID= e.dataTransfer.getData("videoID")
 console.log(videoID); 
 /// api to get a  video
 const {data}= await getAVideo (videoID)
 console.log(data);

 let selectedCategory = categories.find((item)=>item?.id==Categoryid)
 selectedCategory.allvideos.push(data)
 console.log(selectedCategory);

 await updateCategory (Categoryid,selectedCategory)
 allCategory()
}


  return (
  <>
     <div className='d-grid ms-3'> 
     <button className='btn btn-warning' onClick={handleShow}>Add New category</button></div>


     {categories?.length>0?
      categories?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e, item?.id)}>
      <div className='d-flex justify-content-between align-items-center'>
          <h6>{item.CategoryName}</h6>
          <button className='btn btn-danger' 
          onClick={()=>{removeCategory(item?.id)}}>
            <i class="fa-solid fa-trash"></i></button>
      </div>
      <Row>
          <Col>
          {
            item?.allvideos.length>0?
            item?.allvideos.map((card)=>(
            <VideoCard displayVideo={card}/>))
            :
            <p>Nothing to display</p>
          }
          </Col>
        </Row>

      </div>))
      : <p className=' fw-bolder fs-5 text-danger m-3'>Nothing TO Display </p>
     }
     
      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title> <i class="fa-solid fa-video"></i> Upload New Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form  className='border border-secondary rounded p-3 border-secondary'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
      <Form.Control onChange={(e)=>setCategoryName (e.target.value)}  type="text" placeholder="Enter the Category name"  />
      </Form.Group>
      
      
     
    
       
        </form>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddCategory}>Add</Button>
      </Modal.Footer>
    </Modal>

    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    
    </>  
  )
} 

export default Category
