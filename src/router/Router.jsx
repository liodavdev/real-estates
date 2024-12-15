import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../views/home/Home";
import Buy from "../views/buy/Buy";
import Sell from "../views/sell/Sell";
import Invest from "../views/invest/Invest";
import Rent from "../views/rent/Rent";
import Services from "../views/services/Services";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
