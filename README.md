# age-calculator
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Age Calculator</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 50px; }
    input, button { padding: 8px; margin: 5px; }
    #result { margin-top: 15px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Age Calculator</h1>
  <label for="dob">Enter your date of birth:</label>
  <input type="date" id="dob">
  <button onclick="calculateAge()">Calculate Age</button>
  <div id="result"></div>

  <script>
    function calculateAge() {
      const dob = document.getElementById("dob").value;
      if (!dob) {
        document.getElementById("result").innerText = "Please select a date.";
        return;
      }
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      document.getElementById("result").innerText = `You are ${age} years old.`;
    }
  </script>
</body>
</html>
