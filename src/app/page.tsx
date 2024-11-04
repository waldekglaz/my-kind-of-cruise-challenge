import Adventures from "./components/Adventures";
import Cruises from "./components/Cruises";

export default async function Home() {
  let adventuresData = await fetch(
    "https://jjzl6.wiremockapi.cloud/adventures"
  );
  let adventures = await adventuresData.json();
  let cruisesData = await fetch("https://jjzl6.wiremockapi.cloud/cruises");
  let cruises = await cruisesData.json();
  return (
    <>
      {/* setup and header around 20min */}
      <Adventures data={adventures} />
      <Cruises data={cruises} />
    </>
  );
}
