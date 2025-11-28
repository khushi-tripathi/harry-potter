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
  pages.className = "div-last";
  pages.textContent = `We have ${data?.pages} number of pages in this part`;
  div.appendChild(pages);
};

const alignHousesDiv = (div, data) => {
  //   data = {
  //     "house": "Slytherin",
  //     "emoji": "🐍",
  //     "founder": "Salazar Slytherin",
  //     "colors": [
  //         "green",
  //         "silver"
  //     ],
  //     "animal": "Snake",
  //     "index": 3
  // }

  const title = document.createElement("h1");
  title.className = "house-title-label";
  title.textContent = "House - ";
  div.appendChild(title);

  const houseTitle = document.createElement("h2");
  houseTitle.className = "house-title";
  houseTitle.textContent = data?.house;
  div.appendChild(houseTitle);

  const symbolTitle = document.createElement("h3");
  symbolTitle.textContent = "House Symbol: ";
  div.appendChild(symbolTitle);

  const symbol = document.createElement("h2");
  symbol.textContent = data?.emoji;
  div.appendChild(symbol);

  const FounderLabel = document.createElement("h3");
  FounderLabel.textContent = "Founder: ";
  div.append(FounderLabel);

  const founder = document.createElement("p");
  founder.textContent = data?.founder;
  div.append(founder);

  const denotedAnimal = document.createElement("h3");
  denotedAnimal.textContent = "Denoted Animal: ";
  div.append(denotedAnimal);

  const animal = document.createElement("p");
  animal.textContent = data?.animal;
  div.append(animal);

  const hr = document.createElement("hr");
  div.append(hr);
};

const iterateData = (type, div, data) => {
  switch (type) {
    case "book":
      console.log("Bookss");
      alignBookDiv(div, data);
      break;

    case "house":
      console.log("Housess");
      alignHousesDiv(div, data);
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
    data?.map((item, idx) => {
      if (idx !== 0) {
        const div = document.createElement("div");

        if (typeof item === "object") {
          if (data[0] === "house") {
            div.className = "detail-house";
          }
          console.log("itemmm ", item);
          iterateData(data[0], div, item);
        } else {
          div.textContent = item;
        }
        ele?.append(div);
      } else if (typeof item === "string") {
        const h1 = document.createElement("h1");
        const content = (item?.charAt(0)?.toUpperCase() + item?.slice(1) + "s")
          .length
          ? item?.charAt(0)?.toUpperCase() + item?.slice(1) + "s"
          : "";
        h1.textContent = content;
        ele.append(h1);
      }
    });
  });
});

const onclickStudents = () => {
  console.log("onclickStudentsonclickStudents");
  allStudentDetails();
};

export { onclickStudents };
