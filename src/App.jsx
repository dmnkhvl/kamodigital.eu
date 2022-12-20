import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Goal from "./components/Goal";

export default function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen bg-kamo-black text-kamo-white">
        <Navbar />
        <Header />
        <Goal />
        <Services />
      </div>
    </div>
  );
}
