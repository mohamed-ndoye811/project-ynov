import React from 'react';
import { Leaf, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="font-bold text-xl">IA & Environnement</span>
            </div>
            <p className="text-stone-300 mb-4">
              Sensibilisons aux impacts environnementaux cachés de l'intelligence artificielle pour construire un avenir numérique plus responsable.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation rapide</h3>
            <ul className="space-y-2">
              <li><a href="/enjeux" className="text-stone-300 hover:text-white transition-colors">Enjeux écologiques</a></li>
              <li><a href="/chiffres" className="text-stone-300 hover:text-white transition-colors">Chiffres clés</a></li>
              <li><a href="/alternatives" className="text-stone-300 hover:text-white transition-colors">Alternatives</a></li>
              <li><a href="/quiz" className="text-stone-300 hover:text-white transition-colors">Quiz</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources externes</h3>
            <div className="space-y-3">
              <a 
                href="https://www.ipcc.ch/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-stone-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>IPCC - Groupe d'experts sur l'évolution du climat</span>
              </a>
              <a 
                href="https://www.ademe.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-stone-300 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>ADEME - Transition écologique</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center">
          <p className="text-stone-300">
            © 2025 IA & Environnement. Sensibilisation aux enjeux environnementaux du numérique.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;