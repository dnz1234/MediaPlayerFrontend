import React from 'react'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'
import  Card  from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-item-center'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome To <span className='text-warning '>Media Player</span></h3>
        <p className='mt-3' style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veniam recusandae optio nam rem ex doloribus illum deleniti in voluptates tenetur odio vitae, necessitatibus itaque ipsum maiores laudantium velit dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti doloremque impedit quae similique iste sit maiores omnis voluptates voluptas, quasi ratione repudiandae voluptatem sapiente quam aperiam, eveniet magnam sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga ipsam nisi voluptatibus aut. Aspernatur odio sint ducimus, sed voluptatibus, suscipit facilis eaque omnis magnam quisquam, sequi ipsa nemo fugit.
        </p>
        <button onClick={()=>navigateByUrl('/Home')} className='mt-5 btn btn-warning'>Get Started <i class ="fa-solid fa-arrow-right ms-2" ></i> </button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="No Image" />
      </Col>
    </Row>
    <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-item-center">
      <h3 className="mb-5">Features</h3>
      <div className="cards d-flex justify-content-evenly align-item-center w-100">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'200px'} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className='container border w-100 align-items-center border-black d-flex justify-content-between '>
        <Row>
          <Col lg={5}>
            <h3 className='mb-5'> Simple fast and powerfull</h3>
            <h6 className='mb-3'><span className='fw-border fs-5'>Play Everthing</span>:lorem10
            ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates.ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates</h6>  
            
            <h6 className='mb-3'><span className='fw-border fs-5'>Play Everthing</span>:lorem10
            ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates.ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates</h6>
         
            <h6 className='mb-3'><span className='fw-border fs-5'>Play Everthing</span>:lorem10
            ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates.ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptates</h6>
           </Col>
          <Col></Col>
          <Col lg={6} className='d-flex justify-content-center align-items-center'>
          <iframe width="600" height="326" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>

    </div>
    
    </>
  )
}

export default LandingPage