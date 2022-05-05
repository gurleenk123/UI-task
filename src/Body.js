
import { Navbar, Container, Nav, Row, Button, Col,Badge, ButtonGroup, Table, NavDropdown } from 'react-bootstrap'
import './Body.css'
import logoo from './logoo.png'
import { AiOutlineBell, AiOutlineStar, AiOutlineFork, AiOutlinePullRequest, AiOutlineProject, AiOutlineSecurityScan, AiOutlineCheck } from 'react-icons/ai';
import { BsCode, BsPlayCircle, BsBook } from 'react-icons/bs';
import { VscGraphLine } from 'react-icons/vsc'
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { FaRegDotCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
export default function Body() {

    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/react/issues')
            .then(res => res.json())
            .then(res => { setValues(res) })
    }, [])

    console.log(values);
    return (
        <>
            <Container fluid className="p-3 mb-2 bg-light text-dark">
                <Row style={{ padding: "5px" }}>
                    <Col style={{ textAlign: 'left', paddingLeft: '40px' }} xs={4}><p style={{ color: 'blue', fontSize: '20px' }}> <img src={logoo} width="13px" />facebook/<b>react</b> <Badge pill bg="light" text="dark" style={{border: '1px solid black'}} size="sm">
    Public
  </Badge></p></Col>
                    <Col style={{ textAlign: 'right', paddingRight: '40px' }} xs={8}>
                        <Button style={{ borderRadius: "5px" }} variant="outline-secondary" size="sm"><AiOutlineBell />Notifications</Button>{' '}
                        <ButtonGroup aria-label="Basic example" style={{ marginLeft: '10px' }}>
                            <Button style={{ borderRadius: "5px" }} variant="outline-secondary" size="sm"><AiOutlineStar />Star</Button>
                            <Button style={{ borderRadius: "5px", backgroundColor: 'white' }} variant="outline-secondary" size="sm">175K</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="Basic example" style={{ marginLeft: '10px' }}>
                            <Button style={{ borderRadius: "5px" }} variant="outline-secondary" size="sm"><AiOutlineFork />Fork</Button>
                            <Button style={{ borderRadius: "5px", backgroundColor: 'white' }} variant="outline-secondary" size="sm">35.3k</Button>
                        </ButtonGroup>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Container>

                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="" className='links'><BsCode /> Code </Nav.Link>
                                        <Nav.Link href="" className='links'><IoIosRemoveCircleOutline /> Issues <Badge pill  bg="secondary" >625</Badge></Nav.Link>
                                        <Nav.Link href="" className='links'><AiOutlinePullRequest /> Pull request <Badge pill  bg="secondary" >208</Badge></Nav.Link>
                                        <Nav.Link href="" className='links'><BsPlayCircle /> Actions</Nav.Link>
                                        <Nav.Link href="" className='links'><AiOutlineProject /> Project</Nav.Link>
                                        <Nav.Link href="" className='links'><BsBook /> Wiki</Nav.Link>
                                        <Nav.Link href="" className='links'><AiOutlineSecurityScan /> Security</Nav.Link>
                                        <Nav.Link href="" className='links'><VscGraphLine /> Insight</Nav.Link>

                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>


                </Row>



            </Container>
            <Container style={{ marginTop: '40px' }}>
                <Row style={{ padding: "5px" }} className="p-3 mb-2 bg-light text-dark">
                    <Col style={{ textAlign: 'left', paddingLeft: '35px', paddingTop: "15px" }} md ={5} > <p ><FaRegDotCircle /> <b>625 Open </b> <span> <AiOutlineCheck /> 10,104 Closed</span></p></Col>
                    <Col md = {7} >
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">

                                        <Nav.Link href="" className='links'>Author <IoMdArrowDropdown /> </Nav.Link>
                                        <Nav.Link href="" className='links'>Label <IoMdArrowDropdown /> </Nav.Link>
                                        <Nav.Link href="" className='links'>Projects <IoMdArrowDropdown /> </Nav.Link>
                                        <Nav.Link href="" className='links'>Milestones <IoMdArrowDropdown /> </Nav.Link>
                                        <Nav.Link href="" className='links'>Assignee <IoMdArrowDropdown /> </Nav.Link>

                                        <Nav.Link href="" className='links'>Sort <IoMdArrowDropdown /> </Nav.Link>


                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>

                {values.map((val, index) => {
                    return <>
                        <Row style={{ padding: '10px', border: "1px solid lightgrey" }}>

                            <Col md={9}>
                            <p>  <b><FaRegDotCircle style={{color : "green" , fontSize: '18px'}}/>  {val.title}</b></p>
                            <p style={{color:'grey'}}>#{val.number} {val.title.includes("Bug") ? <Badge  bg="danger">Type : Bug</Badge> : null }
                            {val.author_association=="NONE" ? <Badge style={{backgroundColor:'purple'}}>Status : Unconfirmed</Badge>: null}
                            </p>

                            </Col>
                            <Col md={3}>
                               {val.title.includes("Bug") ?
                               <>
                            
                               <Avatar alt="Remy Sharp" src={val.user.avatar_url} />
                               </>
                               : null}
                            </Col>
                        </Row>
                    </>
                })}



<Row>
    <Col className="footer">Terms
    </Col>
    <Col className="footer">Privacy</Col>
    <Col className="footer">Security</Col>
    <Col className="footer">Status</Col>
    <Col className="footer">Docs</Col>
    <Col className="footer">Contact Github</Col>
    <Col className="footer">Pricing</Col>
    <Col className="footer">API</Col>
    <Col className="footer">Training</Col>
    <Col className="footer">Blog</Col>
    <Col className="footer">Contact</Col>
</Row>

            </Container>
        </>

    )


}