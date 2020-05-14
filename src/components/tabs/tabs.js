import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, InputGroup, Input, Button, FormGroup } from 'reactstrap';
import classnames from 'classnames';
import "./tabs.css";
import documents from '../../images/documents.png';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="tabs-custom">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
            Personal Information
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
            Education Qualifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
            Language Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}>
            Computer Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}>
            Previous Experience
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>

            <Col sm="8">

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">First Name</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="First Name" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                      <Col sm="5" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Last Name</p><span className="required ml-1">*</span>
                      </Col>
                      <Col sm="7" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Last Name" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Gender</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <div className="radio-cutom">
                        <label className="radio mr-4">
                          <input type="radio" name="type" defaultValue={1} defaultChecked />
                          <span>Male</span>
                        </label>
                        <label className="radio">
                          <input type="radio" name="type" defaultValue={2} />
                          <span>Female</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Email Address</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Email Address" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                      <Col sm="5" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Mobile No.</p><span className="required ml-1">*</span>
                      </Col>
                      <Col sm="7" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Mobile Number" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Date Of Birth</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Date Of Birth" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                      <Col sm="5" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Place Of Birth</p><span className="required ml-1">*</span>
                      </Col>
                      <Col sm="7" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Place Of Birth" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Marital Status</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <div className="radio-cutom">
                        <label className="radio mr-4">
                          <input type="radio" name="status" defaultValue={1} defaultChecked />
                          <span>Single</span>
                        </label>
                        <label className="radio">
                          <input type="radio" name="status" defaultValue={2} />
                          <span>Married</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">National ID</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="National ID" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                      <Col sm="5" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Nationality</p><span className="required ml-1">*</span>
                      </Col>
                      <Col sm="7" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Nationality" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="10">
                  <Row>
                    <Col sm="3" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Military Service</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="9" className="d-flex justify-content-start">
                      <div className="radio-cutom">
                        <label className="radio mr-4">
                          <input type="radio" name="Military" defaultValue={1} defaultChecked />
                          <span>To Be Accomplished</span>
                        </label>
                        <label className="radio mr-4">
                          <input type="radio" name="Military" defaultValue={2} />
                          <span>Accomplished</span>
                        </label>
                        <label className="radio">
                          <input type="radio" name="Military" defaultValue={3} />
                          <span>Exempted</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20 mb-20">
                <Col sm="8">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Accomplishment Date</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Pick a Date" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Col>

            <Col sm="4" className="mt-80">
              <div>
                <img src={documents} className="mr-4" alt="" />
              </div>
            </Col>

          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>

            <Col sm="8">

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Secondary School</p>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Write your school" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">University</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Write your university" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Major</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Write your major" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">From</p>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Pick a date" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="5">
                  <Row>
                      <Col sm="2" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">To</p>
                      </Col>
                      <Col sm="8" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Pick a date" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Graduation Project</p>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Graduation Project" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="5">
                  <Row>
                      <Col sm="5" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">Project Grade</p>
                      </Col>
                      <Col sm="7" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Project Grade" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Advanced Studies</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <div className="radio-cutom">
                        <label className="radio mr-4">
                          <input type="radio" name="studies" defaultValue={1} defaultChecked />
                          <span>Yes</span>
                        </label>
                        <label className="radio">
                          <input type="radio" name="studies" defaultValue={2} />
                          <span>No</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="8">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Accomplishment Date</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Pick a date" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="8">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">University / Faculty / Academy</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Write your university" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="8">
                  <Row>
                    <Col sm="6" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Field Of Study</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="6" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Field Of Study" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="6">
                  <Row>
                    <Col sm="8" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">From</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="4" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="From" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6">
                  <Row>
                    <Col sm="2" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">To</p><span className="required ml-1">*</span>
                    </Col>
                    <Col sm="4" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="To" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>

            </Col>

            <Col sm="4" className="mt-80">
              <div>
                <img src={documents} className="mr-4" alt="" />
              </div>
            </Col>

          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="8">

              <Row className="mt-20">
                <Col sm="10">
                  <p className="large-text">Arabic Language</p>
                </Col>
                
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Writing</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="writing" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="writing" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="writing" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Speaking</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="speaking" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="speaking" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="speaking" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Understanding</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="understanding" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="understanding" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="understanding" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <hr/>

              <Row className="mt-20">
                <Col sm="10">
                  <p className="large-text">English Language</p>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Writing</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="e-writing" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="e-writing" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="e-writing" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Speaking</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="e-speaking" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="e-speaking" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="e-speaking" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10 mb-40">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">Understanding</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="e-understanding" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="e-understanding" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="e-understanding" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

            </Col>
            <Col sm="4" className="mt-80">
              <div>
                <img src={documents} className="mr-4" alt="" />
              </div>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <Col sm="8">

              <Row className="mt-30">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Word</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="word" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="word" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="word" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Excel</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="excel" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="excel" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="excel" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Powerpoint</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="powerpoint" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="powerpoint" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="powerpoint" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Access</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="access" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="access" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="access" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Project</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="project" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="project" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="project" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mt-10">
                <Col sm="3" className="d-flex justify-content-end">
                  <p className="m-0">MS Visio</p>
                </Col>
                <Col sm="7">
                  <div className="radio-cutom">
                    <label className="radio mr-3">
                      <input type="radio" name="visio" defaultValue={1} />
                      <span>Strong</span>
                    </label>
                    <label className="radio mr-3">
                      <input type="radio" name="visio" defaultValue={2} defaultChecked />
                      <span>Average</span>
                    </label>
                    <label className="radio">
                      <input type="radio" name="visio" defaultValue={3} />
                      <span>Poor</span>
                    </label>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm="10" className="d-flex justify-content-center mt-20 add-button">
                  <Button>Add Another Skill</Button>
                </Col>
              </Row>

            </Col>
            <Col sm="4" className="mt-80">
              <div>
                <img src={documents} className="mr-4" alt="" />
              </div>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row>
            <Col sm="8" className="previousExperience">

              <Row className="mt-20">
                  <Col sm="3" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Company Name</p>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start">
                    <InputGroup>
                      <Input placeholder="Company Name" />
                    </InputGroup>
                  </Col>
              </Row>

              <Row className="mt-20">
                  <Col sm="3" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Last Position</p>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start">
                    <InputGroup>
                      <Input placeholder="Last Position" />
                    </InputGroup>
                  </Col>
              </Row>

              <Row className="mt-20">
                <Col sm="7">
                  <Row>
                    <Col sm="5" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">From</p>
                    </Col>
                    <Col sm="7" className="d-flex justify-content-start">
                      <InputGroup>
                        <Input placeholder="Pick a date" />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="5">
                  <Row>
                      <Col sm="2" className="d-flex justify-content-end align-items-center">
                      <p className="m-0">To</p>
                      </Col>
                      <Col sm="9" className="d-flex justify-content-start">
                        <InputGroup>
                          <Input placeholder="Pick a date" />
                        </InputGroup>
                      </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="mt-20">
                  <Col sm="3" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Last Salary</p>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start">
                    <InputGroup>
                      <Input placeholder="Last Salary" />
                    </InputGroup>
                  </Col>
              </Row>

              <Row className="mt-20">
                  <Col sm="3" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Main Dutes</p>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start">
                    <InputGroup>
                      <Input placeholder="Main Dutes" />
                    </InputGroup>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start add-button">
                    <Button>Add More Duty</Button>
                  </Col>
              </Row>

              <Row className="mt-20 mb-40">
                  <Col sm="3" className="d-flex justify-content-end align-items-center">
                    <p className="m-0">Last Salary</p>
                  </Col>
                  <Col sm="4" className="d-flex justify-content-start">
                    <FormGroup>
                      <Input type="textarea" name="text" id="textarea"/>
                    </FormGroup>
                  </Col>
              </Row>

            </Col>

            <Col sm="3" className="mt-80">
              <div>
                <img src={documents} className="mr-4" alt="" />
              </div>
            </Col>
          </Row>
        </TabPane>

      </TabContent>
    </div>
  );
}

export default Example;