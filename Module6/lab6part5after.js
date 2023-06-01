// Here not professional way and reusible
// const result = document.getElementById("result");

// function printFullName(e) {
//     e.preventDefault();
//     const firstName = document.getElementById("first--name").value;
//     const lastName = document.getElementById("last--name").value;  
//     let fullname = firstName +" "+ lastName;

//     result.textContent = fullname;
   
// }


(function () {
    const form = document.getElementById("form1");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(e) { 
        e.preventDefault();

        const firstNameInput = document.getElementById("first-name");
        const lastNameInput = document.getElementById("last-name");
        const fullName = getFullName(firstNameInput.value, lastNameInput.value);

        displayResult(fullName);

    });

    function getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    function displayResult(fullName) {
        result.textContent = `Full Name: ${fullName}`;
    }
})();

