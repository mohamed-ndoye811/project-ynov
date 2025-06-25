import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-white text-forest-900">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-8">Page non trouvée</p>
    <Link to="/" className="bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-forest-800 transition">Retour à l'accueil</Link>
  </main>
);

export default NotFound; 