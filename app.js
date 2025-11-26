import { allStudentDetails, callApi } from "./api_integration.js";

let targetDiv = {};

const alignBookDiv = (div, data) => {
  debugger;
  const title = document.createElement("h3");
  title.className = "book-title";
  title.textContent = data?.title;
  div.appendChild(title);

  const originalTitle = document.createElement("h4");
  originalTitle.textContent = data?.originalTitle;
  div.appendChild(originalTitle);

  const descriptionLabel = document.createElement("h4");
  descriptionLabel.textContent = "Description : ";
  div.append(descriptionLabel);

  const description = document.createElement("p");
  description.textContent = data?.description;
  div.append(description);

  const pages = document.createElement("p");
  pages.className = "book-last";
  pages.textContent = `We have ${data?.pages} number of pages in this part`;
  div.appendChild(pages);
};

const iterateData = (type, div, data) => {
  switch (type) {
    case "book":
      console.log("Bookss");
      alignBookDiv(div, data);
      break;

    default:
      break;
  }
};

const sub_section = document.querySelectorAll(".sub-section");

sub_section.forEach((section) => {
  section.addEventListener("click", async (event) => {
    console.log("On click -  : ", event);
    targetDiv = event.target.value;
    const data = await callApi(event.target.value);
    // const ele = document.querySelector("#" + event.target.value + "s");
    const ele = document.querySelector(".detail");
    ele.innerHTML = null;
    data?.map((item) => {
      const div = document.createElement("div");
      if (typeof item === "object") {
        console.log("itemmm ", item);
        iterateData(data[0], div, item);
      } else {
        div.textContent = item;
      }
      ele?.append(div);
    });
  });
});

const onclickStudents = () => {
  console.log("onclickStudentsonclickStudents");
  allStudentDetails();
};

export { onclickStudents };
