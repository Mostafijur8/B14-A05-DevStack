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
      <Nav />
      <Banner />

      <Suspense fallback={<p>Loading...</p>}>
        <Card cardPromise={cardPromise} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
