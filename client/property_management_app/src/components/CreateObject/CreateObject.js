import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationMenu } from "../Navigation/NavigationMenu";

import { Country, State, City }  from 'country-state-city';


import Select from "react-select";


export const CreateObject = () => {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");



      //let Country = require('country-state-city').Country;
      //let State = require('country-state-city').State;

    
      const countries = Country.getAllCountries();
      const states = State.getAllStates();
      //const cities = City.getAllCities()
     //console.log(cities);
      //console.log(countries);
      //const states = State.get;
      //console.log(states);
      const availableState = countries.find((c) => c.name == selectedCountry)
      //console.log(selectedState);
      const availableCity = states.find((s) => s.name == selectedState);
      //console.log(availableCity)
      //const citiesTest = City.getCitiesOfState(availableCity?.countryCode, availableCity?.isoCode)
      //console.log(citiesTest)

    //   const updatedCountries = countries.map((country) => ({
    //     key: country.id,
    //     label: country.name,
    //     value: country.id,
    //     ...country
    //   }));

      const onCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        }

        const onSelectedState = (e) => {
            setSelectedState(e.target.value);
            }
        const onSelectedCity = (e) => {
            setSelectedCity(e.target.value);
        }

        //const availableState = countries.find((c) => c.name === selectedCountry);
       

        console.log(selectedCountry);
        console.log(State.getStatesOfCountry(selectedCountry));
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
    <>
    <NavigationMenu />
    <Header />
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
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="street">Street</label>
                                                                <input type="text" className="form-control" name="street" id="street" placeholder="First name" />
                                                            </div>
                                                            <div className="col">
                                                                <label for="streetNumber">Street number</label>
                                                                <input type="text" className="form-control" name="streetNumber" id="streetNumber" placeholder="Last name" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col">
                                                                <label for="">Last Name</label>
                                                                <input type="text" className="form-control" placeholder="Last name" />
                                                            </div>
                                                        </div>
                                                        
                                                        <label forHtml="country">Country</label>
                                                        <select 
                                                        class="form-control"
                                                        id="country" 
                                                        name="country"
                                                    
                                                       
                                                        value={selectedCountry}
                                                        onChange={onCountryChange}
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
                                                        class="form-control"
                                                      
                                                        value={selectedState}
                                                        onChange={onSelectedState}
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
                                                        class="form-control"
                                                        value={selectedCity}
                                                        onChange={onSelectedCity}
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
                                                       
                                                            
                                                       
                                                        <button type="submit" className="btn btn-primary">Submit</button>
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

    
    
    </>
    );
}