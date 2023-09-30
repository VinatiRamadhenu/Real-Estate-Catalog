import {useContext} from 'react';
import {PropertyContext} from '../Add New Property/Contextprovider';

export default function Pagenavbar(){
    const {pageNav, editPageNav} = useContext(PropertyContext);

    return (
        <div>
            {pageNav == "addnewproperty" && <div className='indicator'>
            {editPageNav == true &&
             <h2 className="navbar_heading">Add New Property</h2>
            }
            <div className="page_navbar" >
                <div className="basic_info">Basic Info</div>
                <div className="prop_details">Property Details</div>
                <div className="general_info">General Info</div>
                <div className="location">Location Info</div>
            </div>
            </div>         
           }
           {pageNav == "basicinfo" && <div className='indicator'>
            {editPageNav == true &&
             <h2 className="navbar_heading">Add New Property</h2>
            }
            <div className="page_navbar" >
                <div className="basic_info">Basic Info</div>
                <div className="prop_details">Property Details</div>
                <div className="general_info">General Info</div>
                <div className="location">Location Info</div>
            </div>
            </div>         
           }
            {pageNav == "propertydetails" && <div className='indicator'>
            {editPageNav == true &&
             <h2 className="navbar_heading">Add New Property</h2>
            }
            <div className="page_navbar" >
                <div className="basic_info">Basic Info</div>
                <div className="prop_details">Property Details</div>
                <div className="general_info">General Info</div>
                <div className="location">Location Info</div>
            </div>
            </div>         
           }
            {pageNav == "generalinfo" && <div className='indicator'>
            {editPageNav == true &&
             <h2 className="navbar_heading">Add New Property</h2>
            }
            <div className="page_navbar" >
                <div className="basic_info">Basic Info</div>
                <div className="prop_details">Property Details</div>
                <div className="general_info">General Info</div>
                <div className="location">Location Info</div>
            </div>
            </div>         
           }
            {pageNav == "locationinfo" && <div className='indicator'>
            {editPageNav == true &&
             <h2 className="navbar_heading">Add New Property</h2>
            }
            <div className="page_navbar" >
                <div className="basic_info">Basic Info</div>
                <div className="prop_details">Property Details</div>
                <div className="general_info">General Info</div>
                <div className="location">Location Info</div>
            </div>
            </div>         
           }
        </div>
    )
}