let empArr = [],
    userInput = document.getElementById('dob'),
    showAge = document.getElementById('shwAge'),
    smlPoint = document.getElementById('smlPoint'),
    country = document.getElementById('country'),
    selctCountry = document.getElementById('countryName'),
    shwCntint = document.getElementById('shwCntint'),
    shwContPoint = document.getElementById('shwContPoint'),
    holdSubjects = document.getElementById('subjects'),
    datalists = document.querySelectorAll('.subjects'),
    holdSubjects2 = document.
        // holdSubjects2 = document.getElementById('subjects2'),
        subjInput = document.getElementsByClassName('subjInpt'),
    scr1 = document.getElementById('scr1'),
    scr2 = document.getElementById('scr2'),
    scr3 = document.getElementById('scr3'),
    scr4 = document.getElementById('scr4'),
    scr5 = document.getElementById('scr5'),
    scr6 = document.getElementById('scr6'),
    scr7 = document.getElementById('scr7'),
    scr8 = document.getElementById('scr8'),
    acadInfo = document.getElementById('acadInfo'),
    sumP = document.getElementById('sumP'),
    averageP = document.getElementById('averageP'),
    pointP = document.getElementById('pointP'),
    dateToday,
    realAge,
    userInputValue,
    point,
    countryNames,
    continentName,
    continentPrefix,
    createContinentName,
    denom,
    average;


let countryList = [
    { name: "Nigeria", class: "AF" },
    { name: "Afghanistan", class: "AS" },
    { name: "Albania", class: "EU" },
    { name: "Algeria", class: "AF" },
    { name: "American Samao", class: "OC" },
    { name: "Andorra", class: "EU" },
    { name: "Angola", class: "AF" },
    { name: "Antarctica", class: "AN" },
    { name: "Antigua and Barbuda", class: "NA" },
    { name: "Argentina", class: "SA" },
    { name: "Armenia", class: "AS" },
    { name: "Australia", class: "OC" },
    { name: "Austria", class: "EU" },
    { name: "Azerbaijan", class: "EU" },
    { name: "Bahamas", class: "NA" },
    { name: "Bahrain", class: "AS" },
    { name: "Bangladesh", class: "AS" },
    { name: "Barbados", class: "NA" },
    { name: "Belarus", class: "EU" },
    { name: "Belgium", class: "EU" },
    { name: "Belize", class: "NA" },
    { name: "Benin", class: "AF" },
    { name: "Bhutan", class: "AS" },
    { name: "Bolivia", class: "SA" },
    { name: "Bosnia and Herzegovina", class: "EU" },
    { name: "Botswana", class: "AF" },
    { name: "Brazil", class: "SA" },
    { name: "Brunei", class: "AS" },
    { name: "Bulgaria", class: "EU" },
    { name: "Burkina Faso", class: "AF" },
    { name: "Burundi", class: "AF" },
    { name: "Cambodia", class: "AS" },
    { name: "Cameroon", class: "AF" },
    { name: "Canada", class: "NA" },
    { name: "Cape Verde", class: "AF" },
    { name: "Central African Republic", class: "AF" },
    { name: "Chad", class: "AF" },
    { name: "Chile", class: "SA" },
    { name: "China", class: "AS" },
    { name: "Colombia", class: "SA" },
    { name: "Comoros", class: "AF" },
    { name: "Congo, Democratic Republic of the", class: "AF" },
    { name: "Costa Rica", class: "NA" },
    { name: "Cote d'Ivoire", class: "AF" },
    { name: "Croatia", class: "EU" },
    { name: "Cuba", class: "NA" },
    { name: "Cyprus", class: "AS" },
    { name: "Czech Republic", class: "EU" },
    { name: "Denmark", class: "EU" },
    { name: "Djibouti", class: "AF" },
    { name: "Dominica", class: "NA" },
    { name: "Dominican Republic", class: "NA" },
    { name: "East Timor (Timor-Leste)", class: "AS" },
    { name: "Ecuador", class: "SA" },
    { name: "Egypt", class: "AF" },
    { name: "El Salvador", class: "NA" },
    { name: "Equatorial Guinea", class: "AF" },
    { name: "Eritrea", class: "AF" },
    { name: "Estonia", class: "EU" },
    { name: "Ethiopia", class: "AF" },
    { name: "Fiji", class: "OC" },
    { name: "Finland", class: "EU" },
    { name: "France", class: "EU" },
    { name: "Gabon", class: "AF" },
    { name: "Gambia", class: "AF" },
    { name: "Georgia", class: "AS" },
    { name: "Germany", class: "EU" },
    { name: "Ghana", class: "AF" },
    { name: "Greece", class: "EU" },
    { name: "Grenada", class: "NA" },
    { name: "Guatemala", class: "NA" },
    { name: "Guinea", class: "AF" },
    { name: "Guinea-Bissau", class: "AF" },
    { name: "Guyana", class: "SA" },
    { name: "Haiti", class: "NA" },
    { name: "Honduras", class: "NA" },
    { name: "Hungary", class: "EU" },
    { name: "Iceland", class: "EU" },
    { name: "India", class: "AS" },
    { name: "Indonesia", class: "AS" },
    { name: "Iran", class: "AS" },
    { name: "Iraq", class: "AS" },
    { name: "Ireland", class: "EU" },
    { name: "Israel", class: "AS" },
    { name: "Italy", class: "EU" },
    { name: "Jamaica", class: "NA" }
    //  id = ""
    // Japan id = "AS"
    // Jordan id = "AS"
    // Kazakhstan id = "AS"
    // Kenya id = "AF"
    // Kiribati id = "0C"
    // Korea, North id = "AS"
    // Korea, South id = "AS"
    // Kosovo id = "EU"
    // Kuwait id = "AS"
    // Kyrgyzstan id = "AS"
    // Laos id = "AS"
    // Latvia id = "EU"
    // Lebanon id = "AS"
    // Lesotho id = "AF"
    // Liberia id = "AF"
    // Libya id = "AF"
    // Liechtenstein id = "EU"
    // Lithuania id = "EU"
    // Luxembourg id = "EU"
    // Macedonia id = "EU"
    // Madagascar id = "AF"
    // Malawi id = "AF"
    // Malaysia id = "AS"
    // Maldives id = "AS"
    // Mali id = "AF"
    // Malta id = "EU"
    // Marshall Islands id = "OC"
    // Mauritania id = "AF"
    // Mauritius id = "AF"
    // Mexico id = "NA"
    // Micronesia, Federated States of * 
    // Moldova id = "OC"
    // Monaco id = "EU"
    // Mongolia id = "AS"
    // Montenegro id = "EU"
    // Morocco id = "AF"
    // Mozambique id = "AF"
    // Myanmar (Burma) id = "AS"
    // Namibia id = "AF"
    // Nauru id = "OC"
    // Nepal id = "AS"
    // Netherlands id = "EU"
    // New Zealand id = "OC"
    // Nicaragua id = "NA"
    // Niger id = "AF"
    // Nigeria id = "AF"
    // Norway id = "EU"
    // Oman id = "AS"
    // Pakistan id = "AS"
    // Palau id = "OC"
    // Panama id = "NA"
    // Papua New Guinea id = "OC"
    // Paraguay id = "SA"
    // Peru id = "SA"
    // Philippines id = "AS"
    // Poland id = "EU"
    // Portugal id = "EU"
    // Qatar id = "AS"
    // Romania id = "EU"
    // Russia id = "AS"
    // Rwanda id = "AF"
    // Saint Kitts and Nevis id = "NA"
    // Saint Lucia id = "NA"
    // Saint Vincent and the Grenadines id = "NA"
    // Samoa id = "OC"
    // San Marino id = "EU"
    // Sao Tome and Principe id = "AF"
    // Saudi Arabia id = "AS"
    // Senegal id = "AF"
    // Serbia id = "EU"
    // Seychelles id = "AF"
    // Sierra Leone id = "AF"
    // Singapore id = "AS"
    // Slovakia id = "EU"
    // Slovenia id = "EU"
    // Solomon Islands id = "OC"
    // Somalia id = "AF"
    // South  id = "AF"
    // South Sudan id = "AF"
    // Spain id = "OC"
    // Sri Lanka id = "AS"
    // Sudan id = "AF"
    // Suriname id = "SA"
    // Swaziland id = "AF"
    // Sweden id = "EU"
    // Switzerland id = "EU"
    // Syria id = "EU"
    // Taiwan id = "AS"
    // Tajikistan id = "AS"
    // Tanzania id = "AF"
    // Thailand id = "AS"
    // Togo id = "AF"
    // Tonga id = "OC"
    // Trinidad and Tobago id = "NA"
    // Tunisia id = "AF"
    // Turkey id = "EU"
    // Turkmenistan id = "AS"
    // Tuvalu id = "OC"
    // Uganda id = "AF"
    // Ukraine id = "EU"
    // United Arab Emirates id = "AS"
    // United Kingdom id = "EU"
    // United States of America id = "NA"
    // Uruguay id = "SA"
    // Uzbekistan id = "AS"
    // Vanuatu id = "OC"
    // Vatican City (Holy See) id = "EU"
    // Venezuela id = "SA"
    // Vietnam id = "AS"
    // Yemen id = "AS"
    // Zambia id = "AF"
    // Zimbabwe id = "AF"

];

let allSubjects = [
    { name: 'Accounting and Finance' },
    { name: 'Agricultural Science' },
    { name: 'Arabic' },
    { name: 'Arts (Fine and Creative)' },
    { name: 'Biology' },
    { name: 'Commerce' },
    { name: 'Chemistry' },
    { name: 'Economics' },
    { name: 'Food and Nutrition' },
    { name: 'Geography' },
    { name: 'Government' },
    { name: 'History' },
    { name: 'Home Management' },
    { name: 'Literature' },
    { name: 'Music' },
    { name: 'Physics' },
    { name: 'Technical Drawing' }
];


userInput.onchange = () => {
    dateToday = new Date().getFullYear();
    userInputValue = new Date(userInput.value).getFullYear();
    console.log(userInputValue);
    realAge = dateToday - userInputValue;
    showAge.innerHTML = `${realAge} years old`;
    // showAge.innerHTML = realAge + ' years old';
    if (realAge < 18) {
        point = `Not eligible for the scholarship`;
        smlPoint.innerHTML = point;
        smlPoint.style.color = 'red';
    } else if (realAge >= 18 && realAge <= 24) {
        point = 100;
        smlPoint.innerHTML = point;
    } else if (realAge >= 25 && realAge <= 30) {
        point = 80;
        smlPoint.innerHTML = point;
    } else if (realAge >= 31 && realAge <= 35) {
        point = 50;
        smlPoint.innerHTML = point;
    } else if (realAge >= 36 && realAge <= 40) {
        point = 30;
        smlPoint.innerHTML = point;
    } else {
        point = 10;
        smlPoint.innerHTML = point;
    };
};

// function to loop through the array of objects and append the country names to the html 
let mapCountry = countryList.map((cntryLst) => {
    // declaring variables 
    countryNames = cntryLst.name,
        continentPrefix = cntryLst.class;
    // appending to html elements 
    let createOption = document.createElement('option');
    createOption.setAttribute("value", countryNames);
    country.appendChild(createOption);
    document.body.appendChild(country);
});

selctCountry.addEventListener('change', () => {
    let value = selctCountry.value;
    let choiceCountry = countryList.find(x => x.name == value);
    console.log(choiceCountry);

    if (choiceCountry.class == 'AF') {
        point = 50,
            continentName = "Africa";
        shwCntint.innerHTML = continentName;
        shwContPoint.innerHTML = point;
    } else if (choiceCountry.class == 'AS') {
        point = 40,
            continentName = "Asia";
        shwCntint.innerHTML = continentName;
        shwContPoint.innerHTML = point;
    } else if (choiceCountry.class == 'SA') {
        point = 30,
            continentName = "South America";
        shwCntint.innerHTML = continentName;
        shwContPoint.innerHTML = point;
    } else if (choiceCountry.class == 'NA') {
        point = 20,
            continentName = "North America";
        shwCntint.innerHTML = continentName;
        shwContPoint.innerHTML = point;
    } else {
        point = 10,
            continentName = "Others";
        shwCntint.innerHTML = continentName;
        shwContPoint.innerHTML = point;
    }
});

// let subjects = allSubjects.forEach((subj) => {
//     // map can be used in above instead of forEach
//     let subjectNames = subj.name;
//     let createOption = document.createElement('option');
//     createOption.setAttribute('value', subjectNames);
//     holdSubjects.appendChild(createOption);
//     document.body.appendChild(holdSubjects);

render(allSubjects);
function reset(){
    datalists.forEach(data=>{
        data.innerHTML='';
    })
}

function render(arr) {
    datalists.forEach(data => {
        arr.forEach(subject =>{
            let option = document.createElement('option')
            let text = document.createTextNode(subject.name)
            option.appendChild(text)
            data.appendChild(option)
        })
    })
}

for(i=0; i<subjInput.length; i++){
    subjInput[i].onchange=function(e){
        reset()
        for (let j=0; j<allSubjects.length; j++){
            if (allSubjects[j].name==e.target.value){
                index=j;
                console.log(index);
                break;
            }
        }
        allSubjects.splice(index,1)
        render(allSubjects)
    }
};


// calculating score average
acadInfo.onclick = () => {
    scrVal1 = parseInt(scr1.value);
    empArr.push(scrVal1);

    scrVal2 = parseInt(scr2.value);
    empArr.push(scrVal2);

    scrVal3 = parseInt(scr3.value);
    empArr.push(scrVal3);

    scrVal4 = parseInt(scr4.value);
    empArr.push(scrVal4);

    scrVal5 = parseInt(scr5.value);
    empArr.push(scrVal5);

    scrVal6 = parseInt(scr6.value);
    empArr.push(scrVal6);

    scrVal7 = parseInt(scr7.value);
    empArr.push(scrVal7);

    scrVal8 = parseInt(scr8.value);
    empArr.push(scrVal8);

    sum = empArr.reduce((p, c) => {
        return p + c;
    }, 0);
    sumP.innerHTML = sum;
    denom = empArr.length;

    average = Math.ceil(sum / denom);
    // Math.floor-----to round down 
    averageP.innerHTML = average;
    console.log(sum)
    console.log(average)
};