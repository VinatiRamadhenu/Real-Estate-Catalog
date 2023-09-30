import { useState } from "react";
import { createContext } from "react";

export const PropertyContext = createContext(""); 

export function Context({ children }) {
    const [BasicDetail, SetBasicDetail] = useState({ 
        property_type : "",
        negotiable : "",
        price : "",
        ownership : "",
        property_age : "",
        property_approved: "",
        property_description: "",
        bank_loan:""
    })
    const [PropertyDetail, SetPropertyDetail] = useState({
        length: "",
        breath: "",
        total_area : "",
        area_unit : "",
        no_of_bhk : "",
        no_of_floors : "",
        attached: "",
        western: "",
        furnished: "",
        car_parking: "",
        lift: "",
        electricity: "",
        facing: "",
    })
    const [GeneralInfo, SetGeneralInfo] = useState({
        owner_name: "",
        mobile: "",
        postedby: "",
        saletype: "",
        featured_pkg: "",
        ppd_pkg: "",
    })

    const[LocationInfo, SetLocationInfo] = useState({
        email: "",
        city: "",
        area_address: "",
        landmark : "",
        latitude : "",
        longitude : "",  
    })

    const [AddProperty, SetAddProperty] = useState({
    })

    const [newData, SetnewData] = useState();

    const [pageNav, editPageNav] = useState("Basic")
    const [IsEdit, SetIsEdit] = useState();
    console.log(IsEdit)

    console.log(pageNav);

    return <PropertyContext.Provider
        value={{
            BasicDetail,
            SetBasicDetail,
            PropertyDetail,
            SetPropertyDetail,
            GeneralInfo,
            SetGeneralInfo,
            LocationInfo,
            SetLocationInfo,
            AddProperty,
            SetAddProperty,
            newData,
            SetnewData,
            pageNav,
            editPageNav,
            IsEdit,
            SetIsEdit
        }}>
        {children}
    </PropertyContext.Provider>
}
