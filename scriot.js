function calculateAge() {
    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("Please select your date of birth.");
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())
    ) {
        age--;
    }

    document.getElementById("result").textContent =
        "Your age is " + age + " years.";
}