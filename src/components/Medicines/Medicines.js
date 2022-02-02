import React, {useEffect, useState} from 'react';
import { Accordion, Button, Col, FormControl, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { CgDatabase } from 'react-icons/cg';
import { RiFileInfoFill } from 'react-icons/ri';
import './medicines.css'


export default function Medicines() {
    const [toxicos, setToxicos] = useState([])
    const [antidotos, setAntidotos] = useState([])
    const [toxindromes, setToxindromes] = useState([])
    const [selected, setSelected] = useState('')
    const [search, setSearch] = useState('')
    const url = 'http://localhost:1122/'
    useEffect(()=>{
            fetch(url+'toxicos')
            .then(data=>data.json())
            .then(data=>{
                setToxicos(data)
            })

            fetch(url+'antidotos')
            .then(data=>data.json())
            .then(data=>{
                setAntidotos(data)
            })

            fetch(url+'toxindromes')
            .then(data=>data.json())
            .then(data=>{
                setToxindromes(data)
            })
    },[])

  return <div >
       <Row className='d-flex justify-content-center align-items-center'>
            <Col xs='10' md='5' className='d-flex align-items-center flex-column text-center medicineCol'>
                <CgDatabase style={{ fontSize: '70px', color:'lightgray'}}/>
                <h3 className='py-1'>Base de datos</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam 
                </p>
            </Col>
            <Col xs='10' md='5' className='d-flex align-items-center flex-column text-center medicineCol '>
                <BsFillCheckCircleFill style={{ fontSize: '70px', color:'lightgray'}}/>
                <h3 className='py-2'>Oficialidad</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, error ex. Aperiam 
                </p>
            </Col>

       </Row>
           <Row >
                <Col className="searchContainer">
                   <div>
                   <p className="searchTitle">Searhching over database</p>
                    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Paracitamol" />
                   </div>
                </Col>
           </Row>
       {
           !(selected || search) &&
           <Row>
           <Col className="d-flex justify-content-center mt-4">
            <div className="category">
                <div onClick={()=>setSelected('toxicos')}>
                    Toxicos
                </div>
                <div onClick={()=>setSelected('antidotos')}>
                    Antidots
                </div>
                <div onClick={()=>setSelected('toxindromes')}>
                    Toxindromes
                </div>
            </div>
           </Col>
       </Row>
       }
       
       {
           (!!selected || !!search) &&
           <Row>
           <Col md={6} className='m-auto mt-5 tabContainer'>
            <Tabs
                id="controlled-tab-example"
                defaultActiveKey='toxicos'
                // activeKey={selected}
                onSelect={(k) => setSelected(k)}
                className="mb-3"
                >
                <Tab eventKey="toxicos" title="Toxicos">
                    <Accordion>
                        {   
                            toxicos.filter(item=>{
                                return item.name.indexOf(search) > -1
                            })
                            .map((item, index)=>{
                                return <Accordion.Item eventKey={index} key={index}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                <b>Description: </b>
                                                {item.description}
                                            </div>
                                            <div>
                                                <b>Pos Kids: </b>
                                                {item.poskids}
                                            </div>
                                            <div>
                                                <b>Pos Adults: </b>
                                                {item.posadults}
                                            </div>
                                            <div>
                                                <b>Toxicocinetic: </b>
                                                {item.toxicocinetic}
                                            </div>
                                            <div>
                                                <b>Actionmec: </b>
                                                {item.actionmec}
                                            </div>
                                            <div>
                                                <b>Toxicmec: </b>
                                                {item.toxicmec}
                                            </div>
                                            <div>
                                                <b>Toxic dose kids: </b>
                                                {item.toxicdosekids}
                                            </div>
                                            <div>
                                                <b>Toxic dose adult: </b>
                                                {item.toxicdoseadult}
                                            </div>
                                            <div>
                                                <b>Phase 1: </b>
                                                {item.phase1}
                                            </div>
                                            <div>
                                                <b>Phase 2: </b>
                                                {item.phase2}
                                            </div>
                                            <div>
                                                <b>Phase 3: </b>
                                                {item.phase3}
                                            </div>
                                            <div>
                                                <b>Phase 4: </b>
                                                {item.phase4}
                                            </div>
                                            <div>
                                                <b>General: </b>
                                                {item.general}
                                            </div>
                                            <div>
                                                <b>Descontamination: </b>
                                                {item.descontamination}
                                            </div>
                                            <div>
                                                <b>Anti dote use: </b>
                                                {item.antidoteuse}
                                            </div>
                                           
                                        </Accordion.Body>
                                </Accordion.Item>
                            })
                        }
                    </Accordion>
                
                </Tab>
                <Tab eventKey="antidotos" title="Antidotos">
                <Accordion>
                {   
                    antidotos.filter(item=>{
                        return item.name.indexOf(search) > -1
                        })
                        .map((item, index)=>{
                            return <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <b>Description: </b>
                                            {item.description}
                                        </div>
                                        <div>
                                            <b>Mechanism: </b>
                                            {item.mechanism}
                                        </div>
                                        <div>
                                            <b>Indications: </b>
                                            {item.indications}
                                        </div>
                                        <div>
                                            <b>Doses: </b>
                                            {item.doses}
                                        </div>
                                        <div>
                                            <b>Counterindic: </b>
                                            {item.counterindic}
                                        </div>
                                        <div>
                                            <b>Effects: </b>
                                            {item.effects}
                                        </div>
                                    </Accordion.Body>
                            </Accordion.Item>
                        })
                }
                </Accordion>
                </Tab>
                <Tab eventKey="toxindromes" title="toxindromes">
                <Accordion>
                {
                    toxindromes.filter(item=>{
                            return item.name.indexOf(search) > -1
                        })
                        .map((item, index)=>{
                            return <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <b>Signs: </b>
                                            {item.signs}
                                        </div>
                                        <div>
                                            <b>Treatment: </b>
                                            {item.treatment}
                                        </div>
                                        <div>
                                            <b>Decontamination: </b>
                                            {item.decontamination}
                                        </div>
                                        <div>
                                            <b>Anti dote use: </b>
                                            {item.antidoteuse}
                                        </div>
                                    </Accordion.Body>
                            </Accordion.Item>
                        })
                }
                </Accordion>
                </Tab>
                {/* <Tab eventKey="profile" title="Profile">
                </Tab> */}
               
            </Tabs>
           </Col>
       </Row>
       }

  </div>;
}
