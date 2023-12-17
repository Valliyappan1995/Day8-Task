//Table Creation using DOM Manipulation

const tableElement = document.createElement("table");
const tHeadElement = document.createElement("thead");
const tBody = document.createElement("tbody");
const thFirstName = document.createElement("th");
thFirstName.innerHTML = "FirstName";

const thLastName = document.createElement("th");
thLastName.innerHTML = "LastName";

const thAddress = document.createElement("th");
thAddress.innerHTML = "Address";

const thPincode = document.createElement("th");
thPincode.innerHTML = "Pincode";

const thChoiceOfFood = document.createElement("th");
thChoiceOfFood.innerHTML = "ChoiceOfFood";

const trHead = document.createElement("tr");
trHead.append(thFirstName, thLastName, thAddress, thPincode, thChoiceOfFood);

tHeadElement.append(trHead);
tableElement.append(tHeadElement, tBody);

//Form Creation using DOM manipulation

const formElement = document.createElement("form");

const inpElemOne = document.createElement("input");
inpElemOne.type = "text";
inpElemOne.placeholder = "Enter your first name";
inpElemOne.required = true;
inpElemOne.style.margin = "16px";

const inpElemTwo = document.createElement("input");
inpElemTwo.type = "text";
inpElemTwo.placeholder = "Enter your Last name";
inpElemTwo.required = true;
inpElemTwo.style.margin = "16px";

const inpElemThree = document.createElement("input");
inpElemThree.type = "text";
inpElemThree.placeholder = "Enter your Address";
inpElemThree.required = true;
inpElemThree.style.margin = "16px";

const inpElemFour = document.createElement("input");
inpElemFour.type = "number";
inpElemFour.placeholder = "pincode";
inpElemFour.required = true;
inpElemFour.style.margin = "16px";

const inpElemFive = document.createElement("input");
inpElemFive.type = "text";
inpElemFive.placeholder = "Enter your choice of food";
inpElemFive.required = true;
inpElemFive.style.margin = "16px";

const inpSubmit = document.createElement("input");
inpSubmit.type = "submit";
inpSubmit.style.margin = "16px";

formElement.className = "form-container";
formElement.append(
  inpElemOne,
  inpElemTwo,
  inpElemThree,
  inpElemFour,
  inpElemFive,
  inpSubmit
);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const tr = document.createElement("tr");
  const tdFirstName = document.createElement("td");
  tdFirstName.innerHTML = inpElemOne.value;

  const tdLastName = document.createElement("td");
  tdLastName.innerHTML = inpElemTwo.value;

  const tdAddress = document.createElement("td");
  tdAddress.innerHTML = inpElemThree.value;

  const tdPincode = document.createElement("td");
  tdPincode.innerHTML = inpElemFour.value;

  const tdChoiceOfFood = document.createElement("td");
  tdChoiceOfFood.innerHTML = inpElemFive.value;

  tr.append(tdFirstName, tdLastName, tdAddress, tdPincode, tdChoiceOfFood);

  tBody.appendChild(tr);

  formElement.reset();
});

document.body.append(formElement, tableElement);
