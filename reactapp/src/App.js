
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SubscriptionList from "./components/SubscriptionList";
import SubscriptionDetails from "./components/SubscriptionDetails";
import SubscriptionStatus from "./components/SubscriptionStatus";
import AddSubscription from "./components/AddSubscription";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={SubscriptionList} />
        <Route path="/add-subscription" component={AddSubscription} />
        <Route path="/subscription/:id" component={SubscriptionDetails} />
        <Route path="/subscription-status/:id" component={SubscriptionStatus} />
      </Switch>
    </div>
  );
}

export default App;
