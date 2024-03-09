import Image from "next/image";
import Header from "./_components/Header";
import Todos from "./_components/Todos";

export default function Home() {
  return (
    <main className="">
      <Todos />      
    </main>
  );
}
