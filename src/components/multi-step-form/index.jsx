import React, { useState } from "react";

import Sidebar from "../sidebar";
import Step1 from "../step-1";
import Step2 from "../step-2";
import Step3 from "../step-3";
import Step4 from "../step-4";

import * as S from "./styled"

const Steps = {
    step1: {
        component: Step1,
        title:"Personal Info",
        subtitle:"Please provide your name, email address, and phone number.",
        hasNexButton: true,
    },
    step2: {
        component: Step2,
        title: "Select your plan",
        subtitle: "You have the option of monthly or yearly billing",
        hasNexButton: true,
        hasBackButton: true
    },
    step3: {
        component: Step3,
        title: "Pick add-ons",
        subtitle: "Add-ons help enhance your gaming experiance.",
        hasNexButton: true,
        hasBackButton: true
    },
    step4: {
        component: Step4,
        title: "Finishing up",
        subtitle: "Double-check everything looks OK before confirming.",
        hasBackButton: true
    },
}


function MultiStepForm(){

    const [activeStep, setActiveStep] = useState("step1");
    const ActiveStep = Steps[activeStep].component

    return(
        <S.MultiStepForm>
            <Sidebar></Sidebar>
            <ActiveStep {...Steps[activeStep]}></ActiveStep>
        </S.MultiStepForm>
    )
}


export default MultiStepForm;