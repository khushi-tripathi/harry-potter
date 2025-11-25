// API Integration

import { BOOKS, CHARACTERS, HOUSES, SPELLS, STAFF } from "./constant.js";

async function getApiIntegration(url) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}

async function fetchHouseData(data) {
  const houses = data.map((item, idx) => {
    return item?.house;
  });
  return houses;
}
async function fetchDataByName(name, data) {
  let result = {};
  switch (name) {
    case "house":
      result = fetchHouseData(data);
      break;

    default:
      break;
  }
  return result;
}

async function callApi(name) {
  let url = "";
  switch (name) {
    case "book":
      url = BOOKS;
      break;
    case "house":
      url = HOUSES;
      break;
    case "professor":
      url = STAFF;
      break;
    case "character":
      url = CHARACTERS;
      break;
    case "spell":
      url = SPELLS;
      break;

    default:
      break;
  }
  const data = await getApiIntegration(url);
  const result = await fetchDataByName(name, data);
  return result;
}
function allStudentDetails() {
  console.log("Khushiiii");
  return ["Harry", "Lisa", "Snape"];
}

export { allStudentDetails, getApiIntegration, callApi };
