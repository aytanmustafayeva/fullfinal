import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Eventspage from "./pages/Eventspage/Eventspage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Eventcard from "./components/Main/Eventspage/Events/Eventcard/Eventcard";
import EventDetail from "./pages/Eventspage/Detail/EventDetail";
import News from "./pages/News/News";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import FAQ from "./pages/FAQ/FAQ";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import Contacts from "./pages/Contacts/Contacts";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import RefundExchange from "./pages/RefundExchange/RefundExchange";
import Privacy from "./pages/Privacy/Privacy";
import Eticket from "./pages/Eticket/Eticket";
import Favorites from "./pages/Favorites/Favorites";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/refundExchange" element={<RefundExchange />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/eticket" element={<Eticket />} />
          <Route path="/News" element={<News />} />
          <Route path="/News/:id" element={<NewsDetails />} />
          <Route path="/cart" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
