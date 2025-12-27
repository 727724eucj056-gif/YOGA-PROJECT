import { useParams, useHistory } from "react-router-dom";
import { useSubscriptions } from "../context/SubscriptionContext";
import { useState } from "react";

function SubscriptionStatus() {
  const { id } = useParams();
  const history = useHistory();
  const { subscriptions, updateStatus } = useSubscriptions();

  const sub = subscriptions.find(
    (s) => s.id === Number(id)
  );

  const [status, setStatus] = useState(sub?.status || "Active");

  const handleUpdate = () => {
    updateStatus(sub.id, status);
    history.push(`/subscription/${sub.id}`);
  };

  return (
    <div>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Active</option>
        <option>Paused</option>
        <option>Cancelled</option>
      </select>
      <button onClick={handleUpdate}>Update Status</button>
    </div>
  );
}

export default SubscriptionStatus;
