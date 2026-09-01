import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Fleet } from "@/components/fleet";
import { Booking } from "@/components/booking";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Booking />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
