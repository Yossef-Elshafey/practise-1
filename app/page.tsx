import {
  About,
  Articles,
  Features,
  Footer,
  Info,
  Landing,
  Navbar,
  Workmates,
} from "./components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-8 container mx-auto text-white">
        <Landing />
        <Workmates />
        <About />
        <Features />
        <Info />
        <Articles />
      </div>
      <Footer />
    </main>
  );
}
