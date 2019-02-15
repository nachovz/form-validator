window.onload = () => {
    const validate = (e) => {
        e.preventDefault();
        var errorBox = document.querySelector('.alert');
        !errorBox.classList.contains('d-none') && errorBox.classList.toggle('d-none');
        errorBox.innerHTML = '';
        
        var accountField = document.querySelector('#exampleAccount');
        var cvcField = document.querySelector('#exampleCvc');
        var amountField = document.querySelector('#exampleAmount');
        var nameField = document.querySelector('#exampleFirst');
        var lastField = document.querySelector('#exampleLast');
        var cityField = document.querySelector('#exampleCity');
        var stateField = document.querySelector('#exampleState');
        var postalField = document.querySelector('#exampleZip');
        
        
        if ( accountField.value < 1000000000000000){ //16 numbers
            addError("Credit Card number is invalid, it must be 16 numbers long.");
        }
        
        if( cvcField.value.length < 3 ){
            addError("CVC number is invalid, it must be 3 numbers long.");
        }
        
        if ( amountField.value < 1){
            addError("Invalid amount value.");
        }
        
        if( nameField.value.length < 2 ){
            addError("Invalid name.");
        }
        
        if( lastField.value.length < 2){
            addError("Invalid last name.");
        }
        
        if( cityField.value.length < 2){
            addError("Invalid city name.");
        }
        
        if( stateField.value === 'Pick a state'){
            addError("Invalid state picked.");
        }
        
        if( postalField.value.length < 5){
            addError("Invalid Postal code.");
        }

    };
    
    const addError = (message) =>{
        var errorBox = document.querySelector('.alert');
        errorBox.classList.contains('d-none') && errorBox.classList.toggle('d-none');
        errorBox.innerHTML += `<p>${message}<p>`;
        
    };
    
    document.querySelector("#theForm").addEventListener("submit", validate);
};