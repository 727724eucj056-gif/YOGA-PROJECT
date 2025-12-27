  import React, { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Hatha Yoga", price: 1200, status: "Active" },
    { id: 2, name: "Vinyasa Yoga", price: 1500, status: "Paused" },
    { id: 3, name: "Ashtanga Yoga", price: 1800, status: "Active" }
  ]);

  const addSubscription = (sub) => {
    setSubscriptions([...subscriptions, sub]);
  };

  const updateStatus = (id, status) => {
    setSubscriptions(
      subscriptions.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  return (
    <SubscriptionContext.Provider
      value={{ subscriptions, addSubscription, updateStatus }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptions = () => useContext(SubscriptionContext);
