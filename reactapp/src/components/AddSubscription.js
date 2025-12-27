import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSubscriptions } from "../context/SubscriptionContext";

function AddSubscription() {
  const { addSubscription } = useSubscriptions();
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();

    addSubscription({
      id: Date.now(),
      name,
      price: Number(price),
      status
    });

    history.push("/");
  };

  return (
    <div>
      <h2>Add New Subscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Subscription Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Active</option>
          <option>Paused</option>
          <option>Cancelled</option>
        </select>
        <button type="submit">Add Subscription</button>
      </form>
    </div>
  );
}

export default AddSubscription;
