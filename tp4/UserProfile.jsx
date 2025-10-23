import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  const { user, toggleConnection } = useContext(UserContext);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Profil utilisateur</h3>
      <p>Nom : {user.name}</p>
      <p>Status : {user.connected ? 'Connecté ✅' : 'Déconnecté ❌'}</p>
      <button onClick={toggleConnection}>
        {user.connected ? 'Se déconnecter' : 'Se connecter'}
      </button>
    </div>
  );
}

export default UserProfile;
