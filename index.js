// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
    }

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intgr){
    return function(fare){
        return fare * intgr;
    };
}
// define fareDoubler() function 
const fareDoubler = createFareMultiplier(2);

// define fareMultiplier() function 
const fareTripler = createFareMultiplier(3);



const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);

function selectDifferentDrivers(drivers, selection) {
if (selection == returnFirstTwoDrivers) {
    return drivers.slice(0, 2);
    } else {
     return drivers.slice(-2);
   }
}