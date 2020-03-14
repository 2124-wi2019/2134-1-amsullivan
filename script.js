/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    3/13/2020
*/
window.addEventListener('load', function() {
    /* Write your solution between this comment */
    let select = this.document.getElementById("age"); //select the age element
    let ageNum = [100]; //array containing ages from 1-100

    //for loop to populate the array containg ages from 1-100
    for(let i = 0; i <= 100; i++){
        ageNum[i] = i;
    }

    //for loop to add the ages onto the element age options on the bottom
    for (let i = 0; i < ageNum.length; i++){
        let num = ageNum[i]; //create num variable to equal the array
        let el = document.createElement("option"); //create element option
        el.textContent = num; //set the textContent to num
        el.value = num; //set the value to num
        select.appendChild(el); //add the element onto the age option
    }

    const form = document.querySelector("form"); //select the form and store in form const
    const fName = document.getElementById("first-name"); //select the firstname id and store in fName const
    const lName = document.getElementById("last-name"); //select the lastname id and store in lName const
    const ageSub = document.getElementById("age"); //select the age id and store in ageSub const
    const error = document.getElementById("error-holder"); //select the errorholder id and store in error const

    //event listener on submit event to check the first name last name and age fields 
    form.onsubmit = function(e) {
        if (fName.value === '' && lName.value === '' && ageSub.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>First name cannot be blank!</li><li>Last name cannot be blank!</li><li>Age must be selected</li></ul>"; 
            //create error text in div element called error-holder for all 3 missing
        }else if (fName.value === '' && lName.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>First name cannot be blank!</li><li>Last name cannot be blank!</li></ul>"; 
            //create error text in div element called error-holder for last and first name missing
        }else if (fName.value === '' && ageSub.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text 
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>First name cannot be blank!</li><li>Age must be selected</li></ul>"; 
            //create error text in div element called error-holder for first name and age missing
        }else if (lName.value === '' && ageSub.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>Last name cannot be blank!</li><li>Age must be selected</li></ul>"; 
            //create error text in div element called error-holder for last name and age missing
        }else if (fName.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>First name cannot be blank!</li></ul>"; 
            //create error text in div element called error-holder for first name missing
        }else if (lName.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>Last name cannot be blank!</li></ul>"; 
            //create error text in div element called error-holder for last name missing
        }else if (ageSub.value === ''){
            e.preventDefault(); //prevent the default action
            error.classList.add("error-box"); //add class error-box to the error text
            error.innerHTML = "Error! Please correct the following items before you can submit the form:<ul><li>Age must be selected</li></ul>"; 
            //create error text in div element called error-holder for age missing
        }
    }

    /* and this comment */
});