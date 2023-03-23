import './Address.module.css';
import { useState } from "react";
import { Country, State, City }  from 'country-state-city';



export const Address = ({nextStep, handleFormData, values}) => {

    //creating error state for validation
    const [error, setError] = useState(false);

    // const [selectedCountry, setSelectedCountry] = useState("");
    // const [selectedState, setSelectedState] = useState("");
    // const [selectedCity, setSelectedCity] = useState("");



      //let Country = require('country-state-city').Country;
      //let State = require('country-state-city').State;

    
      const countries = Country.getAllCountries();
      const states = State.getAllStates();
      //const cities = City.getAllCities()
     //console.log(cities);
      //console.log(countries);
      //const states = State.get;
      //console.log(states);
      const availableState = countries.find((c) => c.name == values.country)
      //console.log(selectedState);
      const availableCity = states.find((s) => s.name == values.state);
      console.log(availableCity)
      console.log(values)
    //   values.city = selectedCity;
    //   values.state = selectedState;
    //   values.country = selectedCountry;
      //const citiesTest = City.getCitiesOfState(availableCity?.countryCode, availableCity?.isoCode)
      //console.log(citiesTest)

    //   const updatedCountries = countries.map((country) => ({
    //     key: country.id,
    //     label: country.name,
    //     value: country.id,
    //     ...country
    //   }));

    //   const onCountryChange = (e) => {
    //     setSelectedCountry(e.target.value);
    //     //handleFormData(e.target.value);
    //     }

    //     const onSelectedState = (e) => {
    //         setSelectedState(e.target.value);
    //      //   handleFormData(e.target.value);
    //         }
    //     const onSelectedCity = (e) => {
    //         setSelectedCity(e.target.value);
    //       //  handleFormData(e.target.value);
    //     }

    const submitFormData = (e) => {
        e.preventDefault();
    
        // checking if value of first name and last name is empty show error else take to step 2
        // if (
        //   validator.isEmpty(values.firstName) ||
        //   validator.isEmpty(values.lastName)
        // ) {
        //   setError(true);
        // } else {
        //   nextStep();
        // }
        nextStep()
      };

        //const availableState = countries.find((c) => c.name === selectedCountry);
       

        //console.log(selectedCountry);
        
        //console.log(State.getStatesOfCountry(selectedCountry));
    //   const updatedStates = () =>
    //   State
    //       .getStatesOfCountry(selectedCountry)
    //       .map((state, key) => ({ key: state.id, label: state.name, value: state.id, ...state }));
    //       console.log(updatedStates)

    //   const updatedCities = (stateId) =>
    //   City
    //       .getCitiesOfState(stateId)
    //       .map((city) => ({ key: city.id, label: city.name, value: city.id, ...city }));
    //       console.log(updatedCities)
    return (
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Create Object</h5>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <form onSubmit={submitFormData}>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="street">Street</label>
                                                                <input type="text" className="form-control" name="street" id="street" placeholder="Street" />
                                                            </div>
                                                            <div className="col">
                                                                <label for="streetNumber">Street number</label>
                                                                <input type="text" className="form-control" name="streetNumber" id="streetNumber" placeholder="Street number" />
                                                            </div>
                                                        </div>
                                                        <label forHtml="country">Country</label>
                                                        <select 
                                                            className="form-control"
                                                            id="country" 
                                                            name="country"
                                                            value={values.country}
                                                            onChange={handleFormData("country")}
                                                            >
                                                                 <option>--Choose Country--</option>
                                                                {countries.map((value, key) => {
                                                                    return (
                                                                     
                                                                    <option value={value.name} key={key}>
                                                                        {value.name}
                                                                    </option>
                                                                    );
                                                                })}
                                                        </select>

                                                        <label forHtml="state">State</label>
                                                        <select
                                                            id="state"
                                                            name="state"
                                                            className="form-control"
                                                        
                                                            value={values.state}
                                                            onChange={handleFormData("state")}
                                                            >
                                                            <option>--Choose State--</option>
                                                            { State.getStatesOfCountry(availableState?.isoCode).map((e, key) => {
                                                                return (
                                                                <option value={e.name} key={key}>
                                                                    {e.name}
                                                                </option>
                                                                );
                                                            })}
                                                        </select>
                                                        
                                                        <label forHtml="city">City</label>
                                                        <select
                                                            id="city"
                                                            name="city"
                                                            className="form-control"
                                                            value={values.city}
                                                            onChange={handleFormData("city")}
                                                            >
                                                            <option>--Choose City--</option>
                                                            { City.getCitiesOfState(availableCity?.countryCode, availableCity?.isoCode).map((e, key) => {
                                                                return (
                                                                <option value={e.name} key={key}>
                                                                    {e.name}
                                                                </option>
                                                                );
                                                            })}
                                                        </select>
                                                        
                                                        <button type="submit" id="btn_address" className="btn btn-primary">Continue</button>
                                                            
                                                        
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