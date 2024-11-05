import Adventures from "./components/Adventures";
import Cruises from "./components/Cruises";
import getAllAdventures from "./actions/getAllAdventures";
import getAllCruises from "./actions/getAllCruises";

export default async function Home() {
  const adventures = await getAllAdventures();
  const cruises = await getAllCruises();
  return (
    <>
      <Adventures data={adventures} />
      <Cruises data={cruises} />
    </>
  );
}
