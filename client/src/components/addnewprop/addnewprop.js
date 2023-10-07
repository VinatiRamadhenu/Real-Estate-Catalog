// import React, { useRef, useState } from 'react';
import { Tabs,Tab,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './addnewprop.css';
import { useFormContext } from '../../context/Formcontext';
import { useEffect } from 'react';


 export function BasicInfoForm() {
    const { saveFormData } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {}; 
    saveFormData('basicInfo', data);
  };
   
    return (
        <form onSubmit={handleSubmit}>
        <div className='form-container'>
      <Form>
        <Row>
          <Col>
          <Form.Group controlId="propertyType">
            <Form.Label>Select Property Type</Form.Label>
            <Form.Control placeholder="Select Property Type" />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="negotiable">
            <Form.Label>Negotiable</Form.Label>
            
            
              <Form.Control placeholder=" Select Negotiable" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="Example:10000" />
            </Form.Group>
          </Col>
          <Col>
         < Form.Group controlId="ownership">
            <Form.Label>Ownership</Form.Label>
            <Form.Control placeholder=" Select Ownership" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group controlId="prop_age">
            <Form.Label>Property Age</Form.Label>
            <Form.Control placeholder=" Select Property Age" />
            </Form.Group>

          </Col>
          <Col>
          <Form.Group controlId="prop_approved">
            <Form.Label>Property Approved</Form.Label>
            <Form.Control placeholder="Property Approved" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Group controlId="prop_desc">
            <Form.Label>Property Description</Form.Label>
            <Form.Control placeholder="" />
            </Form.Group>

          </Col>
          <Col>
          <Form.Group controlId="bank_loan">
            <Form.Label>Bank Loan</Form.Label>
            <Form.Control placeholder="Bank Loan" />
            </Form.Group>

          </Col>
        </Row>
        <Row>
            <Col>
            <div style={{display:"flex", float:"left"}}>
        <Button style={{display:"inline-block", margin:"20px"}}>
                Previous
            </Button>
            <Button type="submit" style={{display:"inline-block",margin:"20px"}}>Save and Continue</Button>

            </div>

            </Col>

      </Row>
      </Form>
      </div>
      </form>
    );
  }

export function PropertyDetailsForm (){
    const { saveFormData } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {}; 
    saveFormData('basicInfo', data);
  };
    
    return (
    <form onSubmit={handleSubmit}>

        <Form>
          <Row>
            <Col>
            <Form.Group controlId="length">
              <Form.Label>Length</Form.Label>
              <Form.Control placeholder="Example:1000" />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="breadth">
              <Form.Label>Breadth</Form.Label>           
                <Form.Control placeholder="Example:1000" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="total_area">
              <Form.Label>Total Area</Form.Label>
              <Form.Control placeholder="Example:7500" />
              </Form.Group>
            </Col>
            <Col>
           < Form.Group controlId="area_unit">
              <Form.Label>Area Unit</Form.Label>
              <Form.Control placeholder="Area Unit" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="bhk">
              <Form.Label>No of BHK</Form.Label>
              <Form.Control placeholder=" Select No of BHK" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="floor">
              <Form.Label>No of Floors</Form.Label>
              <Form.Control placeholder="Select No of Floors" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="attached">
              <Form.Label>Attached</Form.Label>
              <Form.Control placeholder="Select Attached" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="toilet">
              <Form.Label>Western Toilet</Form.Label>
              <Form.Control placeholder="Select Western Toilet" />
              </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="furnished">
              <Form.Label>Furnished</Form.Label>
              <Form.Control placeholder="Select Furnished" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="parking">
              <Form.Label>Car Parking</Form.Label>
              <Form.Control placeholder="Select Car Parking" />
              </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="lift">
              <Form.Label>Lift</Form.Label>
              <Form.Control placeholder="Select Lift" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="electricity">
              <Form.Label>Electricity</Form.Label>
              <Form.Control placeholder="Example 3 phase" />
              </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="facing">
              <Form.Label>Facing</Form.Label>
              <Form.Control placeholder="Select Facing" />
              </Form.Group>
            </Col>
            
          </Row>
          <Row>
</Row>
<Col>
            <div style={{display:"flex", float:"left"}}>
        <Button style={{display:"inline-block", margin:"20px"}}>
                Previous
            </Button>
            <Button type="submit" style={{display:"inline-block",margin:"20px"}}>Save and Continue</Button>
            </div>

            </Col>
        </Form>
        </form>
        
      );

}

export function GeneralInfoForm() {
    const { saveFormData } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {}; 
    saveFormData('basicInfo', data);
  };
    return (
    <form onSubmit={handleSubmit}>

        <Form>
          <Row>
            <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Owner" />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>           
                <Form.Control placeholder="Enter Mobile Number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="posted_by">
              <Form.Label>Posted By</Form.Label>
              <Form.Control placeholder="Posted By" />
              </Form.Group>
            </Col>
            <Col>
           < Form.Group controlId="sale_type">
              <Form.Label>Sale Type</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="ft_package">
              <Form.Label>Featured Package</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="ppd_pkg">
              <Form.Label>PPD Package</Form.Label>
              <Form.Control placeholder=""/>
              </Form.Group>
            </Col>
            </Row>
            <Row>
        
      </Row>
      <Col>
            <div style={{display:"flex", float:"left"}}>
        <Button style={{display:"inline-block", margin:"20px"}}>
                Previous
            </Button>
            <Button  style={{display:"inline-block",margin:"20px"}}>Save and Continue</Button>
            </div>

            </Col>
          </Form>
          </form>
          )
}

export function LocationInfo(){
    const { saveFormData, setFormData, formData} = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {}; 
    saveFormData('basicInfo', data);
  };

  useEffect(()=>{
    console.log(formData);
  },[formData])
    return (
    <form onSubmit={handleSubmit}>

        <Form>
          <Row>
            <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e)=>{setFormData(...formData,e.target.value)}} name='email'  value={formData.email} placeholder="Email" />
              </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>           
                <Form.Control placeholder="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>
            </Col>
            <Col>
           < Form.Group controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control placeholder="Select Pincode"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Address" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="landmark">
              <Form.Label>Landmark</Form.Label>
              <Form.Control placeholder="Landmark"/>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group controlId="latitude">
              <Form.Label>Latitude</Form.Label>
              <Form.Control placeholder="Latitude" />
              </Form.Group>
  
            </Col>
            <Col>
            <Form.Group controlId="longitude">
              <Form.Label>Longitude</Form.Label>
              <Form.Control placeholder="Longitude"/>
              </Form.Group>
            </Col>
            </Row>
            <Row>
       
      </Row>
      <Col>
            <div style={{display:"flex", float:"left"}}>
        <Button style={{display:"inline-block", margin:"20px"}}>
                Previous
            </Button>
            <Button type='submit' style={{display:"inline-block",margin:"20px"}}>Add New Property</Button>
            </div>

            </Col>
          </Form>
          </form>
          )
}

function addNewProperty() {

  return (
    
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      >
      <Tab eventKey="home" title="Basic Info">
      <BasicInfoForm
       />
      </Tab>
      <Tab eventKey="profile" title="Property Details">
        <PropertyDetailsForm 
        />
      </Tab>
      <Tab eventKey="contact" title="General Info">
        <GeneralInfoForm 
        />
      </Tab>
      <Tab eventKey="location" title="Location Info">
        <LocationInfo 
        />
      </Tab>
    </Tabs>
    
  );
}

export default addNewProperty;