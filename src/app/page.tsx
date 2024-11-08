// src/app/page.tsx
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "../components/RenderModel";
import Computer from "../components/models/Computer";
import Navigation from "../components/navigation";
import Header from "../components/Header";

export default async function Home() {
  // Fetch current date on the server-side
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Image */}
      <Image
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-20"
      />

      {/* Model and Navigation Container */}
      <div className="w-full h-screen flex flex-col items-center justify-center">
        {/* Pass currentDate as a prop to Header */}
        <Header currentDate={currentDate} />
        
        {/* 3D Model */}
        <RenderModel className="">
          <Computer />
        </RenderModel>

        {/* Navigation positioned below the 3D model */}
        <Navigation />
      </div>
    </main>
  );
}
