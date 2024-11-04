"use client";

import { useParams } from "next/navigation";

const AdventurePage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Adventure page for cruise with id-{id}</h1>
    </>
  );
};

export default AdventurePage;
