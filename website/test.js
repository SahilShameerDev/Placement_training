
const clicked = () => {
  console.log("Button clicked!");

  const btn = document.getElementById("btnClick");

  btn.style.backgroundColor = btn.style.backgroundColor === "red" ? "yellow" : "red";

  const image = document.getElementById("images");
  image.src = "./assets/image/Full+Campus+View+of+Toc+H+Institute+of+Science+and+Technology+Ernakulam_Campus-View-2229352486.jpg"
  console.log(image); 
}

const sum = (a, b, p) => {
  p(a + b);
}


const printSum = (result) => {
  console.log("Sum is: " + result);
}

sum(10, 20, printSum);


student1 = {
  name: "John Doe",
  age: 20,
  course: "Computer Science",
}

student2 = {
  name: "Jane Smith",
  age: 22,
  course: "Information Technology",
}


const students = [student1, student2];

console.log("Students: ", students[1]);


const checkName = (name) => {
  const nameError = document.getElementById("nameError");
  let regex = /\w+\s\w+/

  nameError.innerHTML = regex.test(name.value) ? "" : "Please enter a valid name with first and last name.";
  name.style.color = regex.test(name.value) ? "black" : "red";
  name.style.borderColor = regex.test(name.value) ? "black" : "red";
}

const checkEmail = (email) => {
  let regex = /mail\.com$/
  const emailError = document.getElementById("emailError");
  emailError.innerHTML = regex.test(email.value) ? "" : "Please enter a valid email ending with mail.com.";
}

const checkPassword = (password) => {
  let regex = /\w{8,}$/
  const passwordError = document.getElementById("passwordError");
  passwordError.innerHTML = regex.test(password.value) ? "" : "Password must be at least 8 characters long.";
}