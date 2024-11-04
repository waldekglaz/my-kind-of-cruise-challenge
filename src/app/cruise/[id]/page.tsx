"use client";
import { useParams } from "next/navigation";
const CruisePage = () => {
  const { id } = useParams();
  return <h1>Cruise page for cruise with id-{id}</h1>;
};

export default CruisePage;
