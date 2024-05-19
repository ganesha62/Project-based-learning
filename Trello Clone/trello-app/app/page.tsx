import Image from "next/image";
import Header from "@/Components/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Header */}
      <Header/>

      {/* Board */}

      <h1>Trello Clone</h1>
    </main>
  );
}
