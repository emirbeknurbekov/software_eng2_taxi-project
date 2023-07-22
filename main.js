//*data
let users = [
  {
    name: "Emir",
    password: "pass123",
    age: 20,
    isLogin: false,
    getMessages: [],
    sendMessages: [],
  },
  {
    name: "aaa",
    password: "pass123",
    age: 20,
    isLogin: false,
    getMessages: [],
    sendMessages: [],
  },
];

// *users logic
let inSystem = "";
function changeInSystemUser(userName = "") {
  inSystem = userName;
  let h3 = document.querySelector("h3");
  inSystem
    ? (h3.innerText = `Hello: ${inSystem}!`)
    : (h3.innerText = "No user in system");
}
//!register
function checkUniqueUserName(userName) {
  return users.some((item) => item.name === userName);
}
function checkPasswords(pass, passConfirm) {
  return pass === passConfirm;
}
function createUser() {
  let userName = prompt("Enter user name");
  if (checkUniqueUserName(userName)) {
    alert("User already exist");
    return;
  }
  let pass = prompt(" password");
  let passConfirm = prompt("Confirm password");
  if (!checkPasswords(pass, passConfirm)) {
    alert("Password do not match");
    return;
  }
  let age = +prompt("Enter age");
  let userObj = {
    name: userName,
    password: pass,
    age: age,
    isLogin: false,
    getMessages: [],
    sendMessages: [],
  };
  users.push(userObj);
  console.log(users);
}
//!login
function getUserObj(userName) {
  return users.find((item) => item.name === userName);
}
function checkUserPassword(userName, pass) {
  let user = getUserObj(userName);
  return user.password === pass;
}
function loginUser() {
  let userName = prompt("Enter your name");
  if (!checkUniqueUserName(userName)) {
    alert("User not found!!!");
    return;
  }
  let pass = prompt("Enter your password");
  if (!checkUserPassword(userName, pass)) {
    alert("Password doesn't match!!!");
    return;
  }
  let user = getUserObj(userName);
  user.isLogin = true;
  changeInSystemUser(userName);
  console.log(users);
}
//!logout
function logoutUser() {
  if (!inSystem) {
    alert("Only authorized users can logout");
    return;
  }
  let user = getUserObj(inSystem);
  user.isLogin = false;
  changeInSystemUser();
}
//!delete account
function deleteUser() {
  if (!inSystem) {
    alert("Only authorized users can delete account");
    return;
  }
  if (!confirm("Do you really want to delete account")) {
    return;
  }
  const index = users.findIndex((user) => user.name === inSystem);
  if (index !== -1) {
    users.splice(index, 1);
    changeInSystemUser();
    console.log(users);
  }
}
//!order
const orderButton = document.getElementById("order-button");
const locationInput = document.getElementById("location");
const carTypeSelect = document.getElementById("car-type");
const orderLocation = document.getElementById("order-location");
const orderCarType = document.getElementById("order-car-type");
const orderPrice = document.getElementById("order-price");
const orderDetails = document.getElementById("order-details");

orderButton.addEventListener("click", () => {
  const location = locationInput.value;
  const carType = carTypeSelect.value;
  const price = calculatePrice(carType);

  orderLocation.textContent = location;
  orderCarType.textContent = carType;
  orderPrice.textContent = price;

  orderDetails.style.display = "block";
});

function calculatePrice(carType) {
  let price = 0;
  if (carType === "standard") {
    price = 10;
  } else if (carType === "premium") {
    price = 20;
  } else if (carType === "luxury") {
    price = 30;
  }
  return price;
}
