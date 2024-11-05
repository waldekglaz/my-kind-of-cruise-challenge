"use server";

async function getAllAdventures() {
  try {
    const adventures = await fetch(
      "https://jjzl6.wiremockapi.cloud/adventures"
    );
    return adventures.json();
  } catch (err) {
    console.log(err);
  }
}

export default getAllAdventures;
