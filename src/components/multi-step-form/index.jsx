import React from "react";

import Sidebar from "../sidebar";
import Step1 from "../step-1";

import * as S from "./styled"

function MultiStepForm(){

    return(
        <S.MultiStepForm>
            <Sidebar></Sidebar>
            <Step1></Step1>
        </S.MultiStepForm>
    )
}


export default MultiStepForm;