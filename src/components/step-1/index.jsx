import { useState } from "react";
import Step from "../step"

 


function Step1(props){
    console.log(props)
    return (
        <Step {...props}>
             Step1
         </Step>
    )
}

export default Step1;