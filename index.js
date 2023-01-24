// Code your solution here


function findMatching(array, driverName){
    let result = array.filter(driver => driver.toLowerCase() === driverName.toLowerCase())
    return result
}

function fuzzyMatch(array, letters){
    let result = array.filter(driver => driver.startsWith(letters))
    return result
}

function matchName(array, name){
    let result = array.filter(element => element.name === name)
    return result
}
