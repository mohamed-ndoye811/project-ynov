import React from 'react';
import { Zap, Droplets, Mountain, Trash2, Factory, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const EcologicalIssues: React.FC = () => {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-700 to-orange-700 text-white py-16 relative overflow-hidden floating-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Les Enjeux Écologiques de l'IA
              </h1>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
                Une analyse détaillée des impacts environnementaux cachés de l'intelligence artificielle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Issues */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          
          {/* Energy Consumption */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center animate-breathe">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-forest-900">Consommation Énergétique Massive</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-lg">
                  L'entraînement d'un modèle d'IA comme GPT-3 consomme autant d'énergie que 126 foyers danois pendant un an entier.
                </p>
                <p>
                  Les data centers abritant ces modèles fonctionnent 24h/24, 7j/7, nécessitant une alimentation électrique constante et massive. Cette consommation ne cesse de croître avec la complexité des modèles.
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 hover-leaf">
                  <h3 className="font-semibold text-yellow-800 mb-2">Exemple concret :</h3>
                  <p className="text-yellow-700">
                    Une seule requête à ChatGPT consomme 2,9 Wh d'électricité, soit 10 fois plus qu'une recherche Google traditionnelle.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer opacity-10"></div>
              <h3 className="text-2xl font-bold mb-6">Sources d'énergie</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Charbon</span>
                  <span className="font-bold">28%</span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full animate-shimmer" style={{ width: '28%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Gaz naturel</span>
                  <span className="font-bold">23%</span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full animate-shimmer" style={{ width: '23%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Renouvelables</span>
                  <span className="font-bold">12%</span>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full animate-shimmer" style={{ width: '12%' }}></div>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">
                Plus de 50% de l'énergie des data centers provient encore de sources fossiles.
              </p>
            </AnimatedSection>
          </div>

          {/* Water Consumption */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="order-2 lg:order-1 bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 animate-wave opacity-10"></div>
              <h3 className="text-2xl font-bold mb-6">Consommation d'eau par data center</h3>
              <div className="space-y-6">
                <div className="text-center animate-pulse-green">
                  <div className="text-4xl font-bold">1,8 milliard</div>
                  <div className="text-sm opacity-90">litres par jour (Google)</div>
                </div>
                <div className="text-center animate-pulse-green animate-delay-100">
                  <div className="text-4xl font-bold">2,2 milliards</div>
                  <div className="text-sm opacity-90">litres par jour (Microsoft)</div>
                </div>
                <div className="text-center animate-pulse-green animate-delay-200">
                  <div className="text-4xl font-bold">7,8 milliards</div>
                  <div className="text-sm opacity-90">litres par jour (Meta)</div>
                </div>
              </div>
              <p className="text-sm mt-6 opacity-90">
                Équivalent à la consommation de centaines de milliers de foyers.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-wave">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-forest-900">Consommation d'Eau Critique</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-lg">
                  Les data centers nécessitent d'énormes quantités d'eau pour refroidir leurs serveurs en fonctionnement permanent.
                </p>
                <p>
                  Cette consommation massive aggrave la pénurie d'eau dans de nombreuses régions, entrant en concurrence directe avec les besoins humains et agricoles.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 hover-leaf">
                  <h3 className="font-semibold text-blue-800 mb-2">Impact local :</h3>
                  <p className="text-blue-700">
                    En Arizona, les data centers consomment jusqu'à 1% de toute l'eau de l'État, dans une région en stress hydrique permanent.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Mining and Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center animate-float">
                  <Mountain className="w-6 h-6 text-brown-600" />
                </div>
                <h2 className="text-3xl font-bold text-forest-900">Extraction Minière Destructrice</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-lg">
                  L'IA repose sur des composants électroniques nécessitant des terres rares et métaux précieux dont l'extraction ravage les écosystèmes.
                </p>
                <p>
                  Lithium, cobalt, néodyme, tantale : ces matériaux sont extraits dans des conditions environnementales et humaines dramatiques.
                </p>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 hover-leaf">
                  <h3 className="font-semibold text-red-800 mb-2">Cas du cobalt (RDC) :</h3>
                  <p className="text-red-700">
                    70% du cobalt mondial provient de mines qui détruisent les forêts tropicales et polluent les cours d'eau avec des métaux lourds.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="space-y-6">
              <div className="bg-stone-800 text-white p-6 rounded-xl hover-grow">
                <h3 className="font-bold text-lg mb-4">Matériaux critiques pour l'IA</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center animate-pulse-green">
                    <div className="text-2xl font-bold text-orange-400">60%</div>
                    <div className="text-sm">Terres rares (Chine)</div>
                  </div>
                  <div className="text-center animate-pulse-green animate-delay-100">
                    <div className="text-2xl font-bold text-blue-400">70%</div>
                    <div className="text-sm">Cobalt (RDC)</div>
                  </div>
                  <div className="text-center animate-pulse-green animate-delay-200">
                    <div className="text-2xl font-bold text-green-400">58%</div>
                    <div className="text-sm">Lithium (Chili)</div>
                  </div>
                  <div className="text-center animate-pulse-green animate-delay-300">
                    <div className="text-2xl font-bold text-purple-400">42%</div>
                    <div className="text-sm">Tantale (RDC)</div>
                  </div>
                </div>
              </div>
              <div className="bg-brown-50 p-6 rounded-xl border-l-4 border-brown-400 hover-leaf">
                <h4 className="font-semibold text-brown-800 mb-2">Impact sur la biodiversité</h4>
                <p className="text-brown-700 text-sm">
                  L'extraction minière pour les technologies détruit chaque année 5 000 km² d'habitats naturels, contribuant à la 6e extinction de masse.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* E-waste */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="order-2 lg:order-1 bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer opacity-10"></div>
              <h3 className="text-2xl font-bold mb-6">Déchets électroniques globaux</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">54 millions</div>
                  <div className="text-sm opacity-90">tonnes de déchets électroniques par an</div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">5%</div>
                  <div className="text-sm opacity-90">croissance annuelle</div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">20%</div>
                  <div className="text-sm opacity-90">taux de recyclage mondial</div>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">
                L'IA accélère l'obsolescence des équipements, aggravant cette crise.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center animate-breathe">
                  <Trash2 className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-forest-900">Déchets Électroniques Exponentiels</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-lg">
                  L'IA pousse à l'obsolescence rapide des équipements, créant une montagne croissante de déchets toxiques.
                </p>
                <p>
                  Les composants des data centers et dispositifs IA contiennent des substances dangereuses qui polluent sol et nappes phréatiques pendant des décennies.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 hover-leaf">
                  <h3 className="font-semibold text-purple-800 mb-2">Exemple d'Agbogbloshie (Ghana) :</h3>
                  <p className="text-purple-700">
                    Plus grande décharge électronique du monde, où des milliers de personnes brûlent des composants à mains nues, libérant des toxines mortelles.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Manufacturing Pollution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center animate-float">
                  <Factory className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-3xl font-bold text-forest-900">Pollution Industrielle Massive</h2>
              </div>
              <div className="space-y-4 text-stone-600">
                <p className="text-lg">
                  La fabrication des puces et composants pour l'IA génère des pollutions chimiques majeures dans l'air, l'eau et les sols.
                </p>
                <p>
                  Les usines de semi-conducteurs utilisent des centaines de produits chimiques toxiques et consomment des quantités astronomiques d'eau ultra-pure.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 hover-leaf">
                  <h3 className="font-semibold text-gray-800 mb-2">Fabrication d'une puce :</h3>
                  <p className="text-gray-700">
                    Nécessite 32 tonnes d'eau, 700 kg de matériaux et génère 7 kg de déchets chimiques dangereux.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="bg-gradient-to-br from-gray-700 to-stone-800 p-8 rounded-2xl text-white hover-grow">
              <h3 className="text-2xl font-bold mb-6">Pollution par fabricant</h3>
              <div className="space-y-4">
                <div className="border-b border-white border-opacity-20 pb-4 hover-leaf">
                  <div className="flex justify-between items-center mb-2">
                    <span>TSMC</span>
                    <span className="font-bold">156 000 tonnes CO2/an</span>
                  </div>
                  <div className="text-sm opacity-70">Premier fabricant mondial de puces</div>
                </div>
                <div className="border-b border-white border-opacity-20 pb-4 hover-leaf">
                  <div className="flex justify-between items-center mb-2">
                    <span>Samsung</span>
                    <span className="font-bold">127 000 tonnes CO2/an</span>
                  </div>
                  <div className="text-sm opacity-70">Semiconducteurs et mémoires</div>
                </div>
                <div className="pb-4 hover-leaf">
                  <div className="flex justify-between items-center mb-2">
                    <span>Intel</span>
                    <span className="font-bold">89 000 tonnes CO2/an</span>
                  </div>
                  <div className="text-sm opacity-70">Processeurs et composants IA</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Global Impact */}
          <AnimatedSection className="bg-gradient-to-br from-red-800 to-orange-800 text-white p-12 rounded-2xl relative overflow-hidden floating-particles">
            <div className="text-center mb-8 relative z-10">
              <Globe className="w-16 h-16 mx-auto mb-4 text-red-200 animate-float" />
              <h2 className="text-3xl font-bold mb-4">Impact Global Cumulé</h2>
              <p className="text-xl text-red-100">
                Quand tous ces impacts se combinent, l'IA devient l'une des technologies les plus polluantes de notre époque
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center animate-pulse-green">
                <div className="text-4xl font-bold mb-2">4%</div>
                <div className="text-red-200">des émissions mondiales</div>
                <div className="text-sm mt-2 opacity-80">Le numérique représente déjà plus que l'aviation civile</div>
              </div>
              <div className="text-center animate-pulse-green animate-delay-200">
                <div className="text-4xl font-bold mb-2">8%</div>
                <div className="text-red-200">d'ici 2030</div>
                <div className="text-sm mt-2 opacity-80">Projection si la croissance actuelle continue</div>
              </div>
              <div className="text-center animate-pulse-green animate-delay-300">
                <div className="text-4xl font-bold mb-2">20%</div>
                <div className="text-red-200">d'ici 2040</div>
                <div className="text-sm mt-2 opacity-80">Dans le pire scénario de développement de l'IA</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default EcologicalIssues;