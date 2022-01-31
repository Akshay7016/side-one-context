import React, { useState } from "react";

//We can give any name as it is exported default
import PackageContext from './Context';

const Provider = (props) => {
    const [mission, setMission] = useState({
        mname: "Go to Russia",
        agent: "007",
        accept: "Not Accepted"
    })
    return (
        <PackageContext.Provider value={{        //taken as object so {}
            data: mission,
            isMissionAccepted: () => {          //method to change accept value
                setMission({ ...mission, accept: "ACCEPTED" })
            }

        }}>

            {props.children}

        </PackageContext.Provider>
    );
}

export default Provider;