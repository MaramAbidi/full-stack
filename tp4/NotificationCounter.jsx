import React, { useState } from 'react';

function NotificationCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: 20 }}>
      <p>Notifications lues : {count}</p>
      <button onClick={() => setCount(count + 1)}>Marquer comme lue</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 10 }}>Réinitialiser</button>
    </div>
  );
}

export default NotificationCounter;
