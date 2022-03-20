//jshint esversion:8
import profilesData from '../data/berlin.json';
import { useState } from 'react';

export const FaceBook = () => {

    const [profiles, setProfiles] = useState(profilesData);
   


    const countryList = [...new Set(profiles.map(person => person.country))];
    const countryListArr = countryList.map(item => {
        return {name: item, color: ""};
    });
    
    const [country, setCountry] = useState(countryListArr);

    
    const selectProfiles = (countryName) => {
        let faceProfiles;
        let btns;

        if(countryName === "All"){
            document.querySelector('.all').style.backgroundColor = 'lightblue';
            btns = country.map(element => {
                element.color = "";
                return element;
            });

            faceProfiles = profiles.map(element => {
                element.color = "lightblue";
                return element;
            });


        } else {
            document.querySelector('.all').style.backgroundColor = '';
            btns = country.map(element => {
                if (element.name === countryName){
                    element.color = "lightblue";
                    return element;
                } else {
                    element.color = "";
                    return element;
                }
            });

            faceProfiles = profiles.map(element => {
                if (element.country === countryName){
                    element.color = "lightblue";
                    return element;
                } else {
                    element.color = "";
                    return element;
                }
            });
        }
        
        setCountry(btns);
        setProfiles(faceProfiles);
    };


    return(
        <div className='FaceBook containers'>
            <div className='listOfCountry'>
                <button onClick={() => selectProfiles("All")} className={'all'}>All</button>
                {country.map((country, index) => <button className={country.name} key={index.toString()} style={{backgroundColor: country.color}} onClick={() => selectProfiles(country.name)}>{country.name} </button>)}

            </div>
            {profiles.map((person, index) => {
                return(

                    <div className={`Id-card ${person.country}`} key={index.toString()} style={{backgroundColor: person.color}}>
                        <img src={person.img} alt="Profile card" />
                        <div>
                            <span><b>First Name:</b> {person.firstName}</span> <br />
                            <span><b>Last Name:</b> {person.lastName}</span> <br />
                            <span><b>Country:</b> {person.country}</span> <br />
                            <span><b>Type:</b> {person.type}</span>
                        </div>
                    </div>

                );
            })}

        </div>

    );
}