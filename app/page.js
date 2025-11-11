import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Header />
                <About />
                <Services />
                <Work />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
