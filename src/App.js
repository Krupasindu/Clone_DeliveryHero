import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./Pages/Aboutpage";
import BlogPage from "./Pages/BlogPage";
import CareerPage from "./Pages/CareerPage";
import ContactPage from "./Pages/ContactPage";
import DiversityPage from "./Pages/DiversityPage";
import InvestorPage from "./Pages/InvestorPage";
import NewsRoomPage from "./Pages/NewsRoomPage";
import SustainabilityPage from "./Pages/SustainabilityPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" exact>
          <HomePage />
        </Route>

        <Route path="/About" exact>
          <AboutPage />
        </Route>

        <Route path="/Blog" exact>
          <BlogPage />
        </Route>

        <Route path="/Career" exact>
          <CareerPage />
        </Route>

        <Route path="/Contact" exact>
          <ContactPage />
        </Route>

        <Route path="/Diversity" exact>
          <DiversityPage />
        </Route>

        <Route path="/Investor" exact>
          <InvestorPage />
        </Route>

        <Route path="/NewsRoom" exact>
          <NewsRoomPage />
        </Route>

        <Route path="/Sustainability" exact>
          <SustainabilityPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
