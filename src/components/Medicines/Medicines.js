import React from 'react';
import { Button, Col, FormControl, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';

export default function Medicines() {
  return <div>
       <Row>
           <p>searhching over database</p>
           <input type="text" />
            <Col>
                <img src="" alt="icon1" />
                <h3>Title here</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam quisquam neque, eum totam reprehenderit inventore corrupti laboriosam!
                </p>
            </Col>
            <Col>
                <img src="" alt="icon" />
                <h3>Title here</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam quisquam neque, eum totam reprehenderit inventore corrupti laboriosam!
                </p>
            </Col>

       </Row>
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
