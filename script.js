function validateForm(){
    const submitButton= document.getElementById("submit-button");
submitButton.addEventListener("click", function validate(event)
{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const userMessage = document.getElementById("userMessage").value;
    const Pink = document.getElementById("Pink");
    const LightGray = document.getElementById("LightGray");
    const OCS = document.getElementById("OCS");
    if(!name || !phonenumber || !email || !(email.endsWith("dal.ca")) || !userMessage){
        window.alert("There is one or more error(s) in your form.");
    }
    //^Checks for errors and alerts user if there is one
    if(Pink.checked){
        document.body.style.backgroundColor = "pink";
    }
    if(LightGray.checked){
        document.body.style.backgroundColor = "#DDDDDD";
        // ^Light gray hex code
    }
    if(White.checked){
        document.body.style.backgroundColor = "white";
    }
//         This is the code that checks each colour
// 
}
)
}
validateForm();