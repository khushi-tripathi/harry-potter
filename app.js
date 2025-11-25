import { allStudentDetails, callApi } from "./api_integration.js";

// alert("Hi Potter");

let targetDiv = {};
const element = document.querySelector("#clickMe");
element.addEventListener("click", (e) => {
  onclickStudents();
});

const sub_section = document.querySelectorAll(".sub-section");
// sub_section.addEventListener("click", (event) => {
//   console.log("On click of feature : ", event);
// });

sub_section.forEach((section) => {
  section.addEventListener("click", async (event) => {
    console.log("On click -  : ", event);
    targetDiv = event.target.value;
    const data = await callApi(event.target.value);
    const ele = document.querySelector("#" + event.target.value + "s");
    data?.map((item) => {
      const div = document.createElement("div");
      div.textContent = item;
      ele?.append(div);
    });
    // ele.textContent = data;
    // .map((house) => { return (<div> {house}</div>)})
    // debugger;
  });
});

const onclickStudents = () => {
  console.log("onclickStudentsonclickStudents");
  allStudentDetails();
};

export { onclickStudents };
