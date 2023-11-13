import Hero from "@/components/Hero";
import Others from "@/components/Others";
import Popular from "@/components/Popular";
import Trending from "@/components/Trending";
import './globals.css';
import Updates from "@/components/Updates";
import Happening from "@/components/Happening";

export default function Home() {
  return (
    <>
     <Hero />
     <Trending />
     <Popular />
     <Others />
     <Updates />
     <Happening />
    </>
  )
}
