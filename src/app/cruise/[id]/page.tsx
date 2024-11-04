"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
const CruisePage = () => {
  const { id } = useParams();
  return (
    <>
      <Link href="/">Back to home</Link>
      <h1>Cruise page for cruise with id-{id}</h1>
    </>
  );
};

export default CruisePage;
