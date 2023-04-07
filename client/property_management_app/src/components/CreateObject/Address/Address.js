import './Address.module.css';
import { useState } from "react";
import { Country, State, City }  from 'country-state-city';
import { Link } from "react-router-dom";
import validator from "validator";



export const Address = ({nextStep, handleFormData, values, action, titles}) => {

    //creating error state for validation
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState({
        errStreet: false,
        errStreetNumber: false,
        errCountry: false,
        errState: false,
        errCity: false
    });

    console.log(errors);


    
      const countries = Country.getAllCountries();
      const states = State.getAllStates();
      
      const availableState = countries.find((c) => c.name == values.country)
      //console.log(selectedState);
      const availableCity = states.find((s) => s.name == values.state);
      console.log(availableCity)
      console.log(values)
    

    const submitFormData = (e) => {
        e.preventDefault();
    
        // checking if value of first name and last name is empty show error else take to step 2
        if (
          validator.isEmpty(values.street) ||
          validator.isEmpty(values.streetNumber) ||
          validator.isEmpty(values.country) ||
          validator.isEmpty(values.state) ||
          validator.isEmpty(values.city)
        ) {
          setError(true);
        } else {
          nextStep();
        }
       // nextStep()
      };
     
     
    return (
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">

                <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">{titles.h5Title}</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={"/property"}>My Properties</Link></li>
                                        {action === "edit" ? (<li className="breadcrumb-item"><Link to={`/property/details/${values._id}`}>{titles.detailTitle}</Link></li>) : 
                                        ("")}
                                        <li className="breadcrumb-item"><Link to={"#"}>{titles.currentTitle}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Address</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <form onSubmit={submitFormData}>
                                                        
                                                        <label forHtml="country">Country</label>
                                                        <select 
                                                            className={validator.isEmpty(values.country) && errors.errCountry ? "form-control is-invalid": "form-control"} 
                                                            id="country" 
                                                            name="country"
                                                            value={values.country}
                                                            onChange={handleFormData("country")}
                                                            onBlur={() => setErrors({...errors, errCountry:true})}
                                                            >
                                                                 <option value="ChooseCountry" key="chooseCountry">--Choose Country--</option>
                                                                {countries.map((value, key) => {
                                                                    return (
                                                                     
                                                                    <option value={value.name} key={key}>
                                                                        {value.name}
                                                                    </option>
                                                                    );
                                                                })}
                                                        </select>
                                                        {validator.isEmpty(values.country) && errors.errCountry ? (
                                                                <div className="invalid-feedback">
                                                                    This is a required field
                                                                </div>
                                                                    ) : ("")}

                                                        <label forHtml="state">State</label>
                                                        <select
                                                            id="state"
                                                            name="state"
                                                            className={validator.isEmpty(values.state) && errors.errState ? "form-control is-invalid": "form-control"}  
                                                        
                                                            value={values.state}
                                                            onChange={handleFormData("state")}
                                                            onBlur={() => setErrors({...errors, errState:true})}
                                                            >
                                                            <option value="ChooseState" key="chooseState">--Choose State--</option>
                                                            { State.getStatesOfCountry(availableState?.isoCode).map((e, key) => {
                                                                return (
                                                                <option value={e.name} key={key}>
                                                                    {e.name}
                                                                </option>
                                                                );
                                                            })}
                                                        </select>
                                                        {validator.isEmpty(values.state) && errors.errState ? (
                                                                <div className="invalid-feedback">
                                                                    This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                        
                                                        <label forHtml="city">City</label>
                                                        <select
                                                            id="city"
                                                            name="city"
                                                            className={validator.isEmpty(values.city) && errors.errCity ? "form-control is-invalid": "form-control"}  
                                                            value={values.city}
                                                            onChange={handleFormData("city")}
                                                            onBlur={() => setErrors({...errors, errCity:true})}
                                                            >
                                                            <option value="ChooseCity" key="chooseCity">--Choose City--</option>
                                                            { City.getCitiesOfState(availableCity?.countryCode, availableCity?.isoCode).map((e, key) => {
                                                                return (
                                                                <option value={e.name} key={key}>
                                                                    {e.name}
                                                                </option>
                                                                );
                                                            })}
                                                        </select>
                                                        {validator.isEmpty(values.city) && errors.errCity ? (
                                                                <div className="invalid-feedback">
                                                                    This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="street">Street</label>
                                                                <input 
                                                                type="text" 
                                                                className={validator.isEmpty(values.street) && errors.errStreet ? "form-control is-invalid": "form-control"}  
                                                                name="street" 
                                                                id="street" 
                                                                placeholder="Street"
                                                                value={values.street}
                                                                onChange={handleFormData("street")} 
                                                                onBlur={() => setErrors({...errors, errStreet:true})}/>
                                                                {validator.isEmpty(values.street) && errors.errStreet ? (
                                                                <div className="invalid-feedback">
                                                                This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                            </div>
                                                            <div className="col">
                                                                <label for="streetNumber">Street number</label>
                                                                <input 
                                                                type="number" 
                                                                className={validator.isEmpty(values.streetNumber) && errors.errStreetNumber ? "form-control is-invalid": "form-control"} 
                                                                name="streetNumber" 
                                                                id="streetNumber" 
                                                                placeholder="Street number"
                                                                value={values.streetNumber}
                                                                onChange={handleFormData("streetNumber")}
                                                                onBlur={() => setErrors({...errors, errStreetNumber:true})} />
                                                                {validator.isEmpty(values.streetNumber) && errors.errStreetNumber ? (
                                                                <div className="invalid-feedback">
                                                                    This is a required field
                                                                </div>
                                                                    ) : ("")}
                                                            </div>
                                                        </div>
                                                        
                                                        {validator.isEmpty(values.street) ||
                                                        validator.isEmpty(values.streetNumber) ||
                                                        validator.isEmpty(values.country) ||
                                                         validator.isEmpty(values.state) ||
                                                        validator.isEmpty(values.city) ? (<button type="submit" variant="primary"  className="btn btn-primary" disabled >Continue to Object</button>) :
                                                        (<button type="submit" variant="primary"  className="btn btn-primary">Continue to Object</button>)

                                                        }
                                                        
                                                    </form>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}