import { Link } from "react-router-dom";
import { useSubscriptions } from "../context/SubscriptionContext";

function SubscriptionList() {
  const { subscriptions } = useSubscriptions();

  return (
    <div>
      <h2>Subscription List</h2>
      <ul>
        {subscriptions.map((s) => (
          <li key={s.id}>
            <Link to={`/subscription/${s.id}`}>
              {s.name}
            </Link>{" "}
            - {s.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubscriptionList;
