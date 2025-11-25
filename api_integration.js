// API Integration

import { BOOKS } from "./constant.js";

async function getApiIntegration(url) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}

function allStudentDetails() {
  console.log("Khushiiii");
  return ["Harry", "Lisa", "Snape"];
}

export { allStudentDetails, getApiIntegration };
