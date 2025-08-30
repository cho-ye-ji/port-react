import React from "react";
import { useLocation } from "react-router-dom";

const SubTitle = () => {
    const location = useLocation();
    const titles = {
        "/": "Home",
        "/skill" : "Skill"
    };
    const title = titles[location.pathname] || "Title";
    return(
        <h4 className="content-title heding-md">
            {title}
        </h4>
    );
};

export default SubTitle;