import React from 'react';
import { Button, Col, FormControl, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { CgDatabase } from 'react-icons/cg';
import './medicines.css'


export default function Medicines() {
  return <div  >
       <Row className='d-flex justify-content-center align-items-center'>
            <Col xs='10' md='4' className='d-flex align-items-center flex-column text-center medicineCol'>
                <CgDatabase style={{ fontSize: '70px', color:'lightgray'}}/>
                <h3 className='py-1'>Title here</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam 
                </p>
            </Col>
            <Col xs='10' md='4' className='d-flex align-items-center flex-column text-center medicineCol '>
                <BsFillCheckCircleFill style={{ fontSize: '70px', color:'lightgray'}}/>
                <h3 className='py-2'>Title here</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam 
                </p>
            </Col>

       </Row>
           <div >
                <p>searhching over database</p>
                <input type="text" />
           </div>
       <div>
           <div>
               Toxics
           </div>
           <div>
               Antidots
           </div>
           <div>
               Toxindromes
           </div>
       </div>
       
       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nihil veniam facere delectus tenetur nobis necessitatibus, ducimus earum eos reiciendis.
        </Tab>
        <Tab eventKey="profile" title="Profile">
            nesciunt numquam ad doloremque ullam praesentium consequatur sequi officiis quibusdam eum voluptatibus natus repellat, autem libero dolores.
        </Tab>
        <Tab eventKey="contact" title="Contact" >
            velit consequuntur sequi amet facere quas tenetur ratione. Dicta officia animi commodi asperiores repellat labore necessitatibus est odit temporibus. Exercitationem et porro ipsam?
        </Tab>
    </Tabs>
  </div>;
}
