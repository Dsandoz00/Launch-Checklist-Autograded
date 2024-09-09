// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    let missionDestination = document.getElementById("missionTarget");
    missionDestination.innerHTML = 
    `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${image}">`;
                 
    
 }
 
 function validateInput(testInput) {
    let numberInput = Number(testInput)
    if (testInput === "" ) {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (isNaN(numberInput) === false) {
        return "Is a Number";
    };
    //return "Empty", "Not a Number", "Is a Number";
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
        return alert("All fields are required");
    } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number") {
        return alert("Please enter valid data");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus")
        if(fuelLevel <10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else if(fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML =  "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else if(fuelLevel < 10000 && cargoLevel >10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red"
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.style.color = "green"
        }
    }
    //retype conditionals in form submission lines 47-65
    //Dont change text just retype string text!


    //if
    //else if
    //else (conditions of cargo mass and fuel level => if, else if, else if, else)
 }
//Set variables for fuel status and cargo status, pilotstatus and copilotstatus (document.getelementbyid)



 //Pass these into validateInput to check data types
 //Checks: All fields have something in them (call validateInput()), logical or
 //Checks: Is the data valid-correct? call validateInput 
    //else if (validateInput(pilot)==="Is a Number" || 
                //validate) 
 //Checks: Are the levels correct? Else, hidden list to visible, status of variables (update with innerhtml)
    //iF fuel level is too low and cargo mass is okay => use (&&) (innerhtml document.)
    //If fuel is okay but cargo is too high =>(else if) (&&) (innerhtml)
    //If fuel is too low and cargo is too high => && (innerhtml)
    //else =>everything is good to go (innerhtml)

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error("bad response");
        } else {
            return response.json();
        }
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;