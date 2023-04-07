import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { NavigationMenu } from "../Navigation/NavigationMenu";
import { Header } from "../Header/Header";
import { Address } from "../CreateObject/Address/Address";
import { Object } from "../CreateObject/Object/Object";
import { AuthContext } from "../../contexts/AutoContext";
import { ObjectConfirm } from "../CreateObject/ObjectConfirm/ObjectConfirm";


export const EditProperty = ({propertyService}) => {
    const { userId } = useContext(AuthContext);
    const { propertyId } = useParams();
    console.log(propertyId);


    //const { userId } = useContext(AuthContext);
    const titleButton = "Edit Property";
    const action = "edit";

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

    useEffect(() => {
        propertyService.getPropertyById(propertyId)
            .then(result => {
                const newResult = {
                    _id: result._id,
                    street: result.street,
                    streetNumber: String(result.streetNumber),
                    country: result.country,
                    state: result.state,
                    city: result.city,
                    objectRelation: result.objectRelation,
                    objectType: result.objectType,
                    userId: userId
                }
                console.log("###################");
                console.log(newResult);
                setFormData(newResult);
                //state => ({...state, [e.target.name]: e.target.value})
                //console.log(formData);
            });
    }, [propertyId]);

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
       
        <Address nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </>
           
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <>
           
            <Object nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </>
      );
      case 3:
      return (
        <>
            
            <ObjectConfirm prevStep={prevStep} values={formData} titleButton={titleButton} action={action}/>
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