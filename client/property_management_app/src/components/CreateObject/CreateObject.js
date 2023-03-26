import React, { useContext, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";

import { Address } from "./Address/Address";
import { Object } from "./Object/Object";
import { ObjectConfirm } from "./ObjectConfirm/ObjectConfirm";
import { AuthContext } from "../../contexts/AutoContext";


export const CreateObject = () => {
    const { userId } = useContext(AuthContext);

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        street: "",
        streetNumber: "",
        country: "",
        state: "",
        city: "",
        objectRelation: "",
        objectType: "",
        userId
       
    });

    const nextStep = () => {
        setStep(step + 1);
      };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleInputData = (input) => (e) => {
        // input value from the form
        const {value } = e.target;
    
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
          ...prevState,
          [input]: value
      }));
    }
    
    // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <>
        <NavigationMenu />
        <Header />
        <Address nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </>
           
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <>
            <NavigationMenu />
            <Header />
            <Object nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </>
      );
      case 3:
      return (
        <>
            <NavigationMenu />
            <Header />
            <ObjectConfirm prevStep={prevStep} values={formData} />
        </>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }

}