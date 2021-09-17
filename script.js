let form = document.getElementById("form-id");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let x = form.elements;
  console.log("First Name: ", x["fname"].value);
  console.log("Last Name: ", x["lname"].value);
  console.log("Email: ", x["email"].value);
  console.log("Password: ", x["password"].value);
  console.log("Re-entered Password: ", x["password1"].value);
  let pass1 = x["password"].value;
  let pass2 = x["password1"].value;
  if (pass1 != pass2) {
    console.error("Passwords Doesn't Match. Please try again!");
    alert(`Passwords doesn't match. Please try again!`);
  } else {
    alert(`Form Submitted Successfully!`);
    Array.from(form).forEach(function (e) {
      if (e.id == "submit-btn") {
      } else {
        e.value = "";
      }
    });
  }
});
