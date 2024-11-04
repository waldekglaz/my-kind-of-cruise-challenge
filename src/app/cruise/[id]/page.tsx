"use client";
import { useParams } from "next/navigation";
const CruisePage = () => {
  const { id } = useParams();
  return <div>Cruise {id}</div>;
};

export default CruisePage;
