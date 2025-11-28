// API Integration

import { BOOKS, CHARACTERS, HOUSES, SPELLS, STAFF } from "./constant.js";

async function getApiIntegration(url) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}

function fetchHouseData(data, name) {
  console.log(" Data - ", data);
  const start = `We have ${data?.length} houses in Harry Potter Series...`;
  return [name, start, ...data];
}
function fetchListOfBooks(data, name) {
  console.log("Khushi Tripathi Data - ", data);
  let start = `We have ${data?.length} parts of Harry Potter. We will explore more below - `;
  return [name, start, ...data];
}

function fetchDataByName(name, data) {
  let result = {};
  switch (name) {
    case "house":
      result = fetchHouseData(data, name);
      break;
    case "book":
      result = fetchListOfBooks(data, name);
      break;
    case "professor":
      result = fetchListOfBooks(data);
      break;
    case "character":
      result = fetchListOfBooks(data);
      break;
    case "spell":
      result = fetchListOfBooks(data);
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
  const result = fetchDataByName(name, data);
  return result;
}
function allStudentDetails() {
  console.log("Khushiiii");
  return ["Harry", "Lisa", "Snape"];
}

export { allStudentDetails, getApiIntegration, callApi };
