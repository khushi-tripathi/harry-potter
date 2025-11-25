import { allStudentDetails } from "./api_integration.js";

// alert("Hi Potter");

const element = document.querySelector("#clickMe");
element.addEventListener("click", (e) => {
  onclickStudents();
});

const onclickStudents = () => {
  console.log("onclickStudentsonclickStudents");
  allStudentDetails();
};

export { onclickStudents };
