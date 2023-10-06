import React from "react";
import SideNav from "../sideNav/sideNav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch, AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import "./home.css";
function Home() {
  const tableData = [
    {
      ppdId: "PPDID12",
      image: "image1.jpg",
      property: "Plot",
      contact: "7485963214",
      area: "1200 sqft",
      views: "23",
      status: "Sold",
      daysLeft: "02",
    },
    {
      ppdId: "PPDID13",
      image: "image2.jpg",
      property: "Apartment",
      contact: "7894561230",
      area: "900 sqft",
      views: "45",
      status: "Available",
      daysLeft: "10",
    },
    {
      ppdId: "PPDID14",
      image: "image3.jpg",
      property: "House",
      contact: "9876543210",
      area: "1800 sqft",
      views: "15",
      status: "For Sale",
      daysLeft: "30",
    },
    {
      ppdId: "PPDID15",
      image: "image4.jpg",
      property: "Condo",
      contact: "6549873210",
      area: "1100 sqft",
      views: "30",
      status: "Sold",
      daysLeft: "05",
    },
    {
      ppdId: "PPDID16",
      image: "image5.jpg",
      property: "Villa",
      contact: "1234567890",
      area: "2500 sqft",
      views: "60",
      status: "For Sale",
      daysLeft: "15",
    },
    {
      ppdId: "PPDID17",
      image: "image6.jpg",
      property: "Commercial Space",
      contact: "9871234560",
      area: "2000 sqft",
      views: "10",
      status: "Available",
      daysLeft: "25",
    },
    {
      ppdId: "PPDID18",
      image: "image7.jpg",
      property: "Townhouse",
      contact: "3216549870",
      area: "1600 sqft",
      views: "38",
      status: "For Sale",
      daysLeft: "20",
    },

    {
      ppdId: "PPDID20",
      image: "image9.jpg",
      property: "Studio Apartment",
      contact: "7418529630",
      area: "500 sqft",
      views: "20",
      status: "For Sale",
      daysLeft: "18",
    },
  ];

  return (
    <>
      <div className="main_home_container">
        <SideNav />
        <div className="properties_container">
          <div className="serch_and_addProp_container">
            <div className="input_group">
              <InputGroup className="mb-3 serBt">
                <Form.Control
                  placeholder="Search PPD ID"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <AiOutlineSearch />
                </Button>
              </InputGroup>
            </div>
            <div>
              <Button className="addNewButton">
                {" "}
                <AiOutlinePlus />
                Add Property
              </Button>
            </div>
          </div>
          <div className="table_container">
            <table className="propTable">
              <thead className="theader">
                <td>PPD ID</td>
                <td>Image</td>
                <td>Property</td>
                <td>Contact</td>
                <td>Area</td>
                <td>views</td>
                <td>Status</td>
                <td>Days Left</td>
                <td>Action</td>
              </thead>

              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.ppdId}</td>
                  <td>{row.image}</td>
                  <td>{row.property}</td>
                  <td>{row.contact}</td>
                  <td>{row.area}</td>
                  <td>{row.views}</td>
                  <td>{row.status}</td>
                  <td>{row.daysLeft}</td>
                  <td>
                    <AiOutlineEye />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
