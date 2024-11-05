"use server";

async function getAllCruises() {
  try {
    const cruises = await fetch("https://jjzl6.wiremockapi.cloud/cruises");
    return cruises.json();
  } catch (err) {
    console.log(err);
  }
}

export default getAllCruises;
