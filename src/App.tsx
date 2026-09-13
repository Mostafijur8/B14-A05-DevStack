import { Suspense } from "react";
import Banner from "./component/Banner";
import Card from "./component/card/Card";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

const getData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const cardPromise = getData();
  return (
    <div>
      <Suspense
        fallback={
          <p className="fixed top-0 left-0 z-50 w-full bg-black py-3 text-center text-2xl font-bold text-white">
            Loading...
          </p>
        }
      >
        <Nav />
        <Banner />
        <Card cardPromise={cardPromise} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
