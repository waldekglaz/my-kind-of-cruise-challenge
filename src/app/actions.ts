"use server";

export async function getAdventures() {
  const res = await fetch("https://jjzl6.wiremockapi.cloud/adventures");
  const adventures = await res.json();
  return adventures;
}
