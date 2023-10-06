import React from "react";
import { BiHome } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrDownload, GrUpload } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { Navigation } from "react-minimal-side-navigation";
import { BsTag } from "react-icons/bs";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { useNavigate } from "react-router-dom";
import "./sideNav.css";
import logo from "../../realEstateLogo.png";
export default function SideNav() {
  const navigate = useNavigate();
  return (
    <div className="nav_container">
      <img
        style={{
          width: "20%",

          marginLeft: "40%",
          marginRight: "40%",
        }}
        src={logo}
        alt="Logo"
      />
      <Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={[
          {
            title: "Property",
            itemId: "/dashboard",

            elemBefore: () => <BiHome />,
          },
          {
            title: "Assistance",
            itemId: "/assistance",
            elemBefore: () => <IoIosNotificationsOutline />,
          },
          {
            title: "Received Interest",
            itemId: "/receivedInterest",
            elemBefore: () => <GrDownload />,
          },
          {
            title: "Sent Interest",
            itemId: "/sentInterest",
            elemBefore: () => <GrUpload />,
          },
          {
            title: "Property Views",
            itemId: "/propertyViews",
            elemBefore: () => <AiOutlineEye />,
          },
          {
            title: "Tariff Plan",
            itemId: "/tariffPlan",
            elemBefore: () => <BsTag />,
          },
        ]}
      />
    </div>
  );
}
