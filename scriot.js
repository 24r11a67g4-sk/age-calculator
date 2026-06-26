function calculateAge(){

    let dob = new Date(document.getElementById("dob").value);

    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    let month = today.getMonth() - dob.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < dob.getDate())){
        age--;
    }

    document.getElementById("result").innerHTML =
    "Your Age is " + age + " years";
}