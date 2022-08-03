let $ = document
let stateList = $.querySelector('#statesList')
let citiesList = $.querySelector('#citiesList')

let stateArray = [
    'Select Your State',
    'Tehran',
    'Mazandaran',
    'Fars',
    'Hormozgan'
]

let citiesObject = {
    Tehran : ['Tehran','Ray'],
    Mazandaran : ['Sari','Qaemshahr','Babolsar','Fereydunkenar'],
    Fars : ['Shiraz','Marvdasht'],
    Hormozgan : ['BandarAbbas','Minab','BnadarLengeh'],
}

stateArray.forEach(function(states){
    let creatStates = "<option value='"+states+"'>"+states+"</option>"
    stateList.innerHTML+= creatStates
})


function addCities(){
    citiesList.innerHTML=''
    if(stateList.value === 'Select Your State'){
        citiesList.innerHTML = "<option>"+'Not State Selected Yet'+"</option>"
    }
    else{
        citiesObject[stateList.value].forEach(function(items){
            citiesList.innerHTML+="<option value='"+items+"'>"+items+"</option>"
    })
    }
}
stateList.addEventListener('change',addCities)