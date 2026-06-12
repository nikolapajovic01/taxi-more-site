import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Fleet } from "@/components/fleet";
import { Transfers } from "@/components/transfers";
import { AppAndReviews } from "@/components/app-reviews";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Fleet />
        <Transfers />
        <AppAndReviews />
      </main>
      <Footer />
    </>
  );
}
