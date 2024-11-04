"use client";

import { useParams } from "next/navigation";

export const CruisePage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Cruise page for cruise with id-{id}</h1>
    </>
  );
};

export default CruisePage;
