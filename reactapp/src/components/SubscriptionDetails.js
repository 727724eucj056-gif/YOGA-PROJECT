import { Link, useParams } from "react-router-dom";
import { useSubscriptions } from "../context/SubscriptionContext";

function SubscriptionDetails() {
  const { id } = useParams();
  const { subscriptions } = useSubscriptions();

  const sub = subscriptions.find(
    (s) => s.id === Number(id)
  );

  if (!sub) return <h3>Subscription not found!</h3>;

  return (
    <div>
      <h3>{sub.name}</h3>
      <p>Price: {sub.price}</p>
      <p>Status: {sub.status}</p>

      <Link to={`/subscription-status/${sub.id}`}>
        Update Subscription Status
      </Link>
      <br />
      <Link to="/">Back to Subscription List</Link>
    </div>
  );
}

export default SubscriptionDetails;
