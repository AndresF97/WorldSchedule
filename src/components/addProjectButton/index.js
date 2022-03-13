import React from "react";
import "./style.css";

function AddProjectButton(){
    return(
        <div>
            <button id="addButton">
                +
            </button>
            {/* AS SOON AS THE BUTTON IS CLICKED IT SHOULD DISPLAY THE TIME SELECTION AND PORJECT NAME */}
        </div>
    )
}

export default AddProjectButton;