import React from 'react';
import { TrendingUp, Zap, Droplets, Thermometer, Globe, AlertTriangle } from 'lucide-react';

const KeyFigures: React.FC = () => {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-800 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Chiffres Clés de l'Impact IA
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Les données factuelles qui révèlent l'ampleur de la catastrophe environnementale
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Energy Consumption Stats */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-yellow-600" />
              <span>Consommation Énergétique</span>
            </h2>
            <p className="text-xl text-stone-600">L'explosion de la demande énergétique du secteur IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-700 mb-2">626 TWh</div>
              <div className="text-sm text-stone-600">Consommation annuelle des data centers mondiaux</div>
              <div className="text-xs text-stone-500 mt-2">= Consommation de la France entière</div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-700 mb-2">1 287 MWh</div>
              <div className="text-sm text-stone-600">Énergie pour entraîner GPT-3</div>
              <div className="text-xs text-stone-500 mt-2">= 126 foyers danois pendant 1 an</div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-red-700 mb-2">2,9 Wh</div>
              <div className="text-sm text-stone-600">Par requête ChatGPT</div>
              <div className="text-xs text-stone-500 mt-2">× 10 plus qu'une recherche Google</div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-700 mb-2">+300%</div>
              <div className="text-sm text-stone-600">Croissance énergétique IA depuis 2018</div>
              <div className="text-xs text-stone-500 mt-2">Doublement chaque 3,4 mois</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Projection de consommation énergétique</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-yellow-100">1 000 TWh</div>
                <div className="text-sm opacity-80">+60% vs aujourd'hui</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2030</div>
                <div className="text-yellow-100">2 100 TWh</div>
                <div className="text-sm opacity-80">= 3% électricité mondiale</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2040</div>
                <div className="text-yellow-100">8 000 TWh</div>
                <div className="text-sm opacity-80">= 12% électricité mondiale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Carbon Emissions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Thermometer className="w-8 h-8 text-red-600" />
              <span>Émissions de CO2</span>
            </h2>
            <p className="text-xl text-stone-600">L'empreinte carbone explosive de l'intelligence artificielle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-700 mb-2">552 tonnes CO2</div>
                <div className="text-sm text-stone-600">Entraînement de GPT-3</div>
                <div className="text-xs text-stone-500 mt-2">≈ 123 voitures pendant 1 an</div>
              </div>
              
              <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="text-3xl font-bold text-orange-700 mb-2">25 200 tonnes CO2</div>
                <div className="text-sm text-stone-600">Entraînement de GPT-4 (estimation)</div>
                <div className="text-xs text-stone-500 mt-2">≈ 5 600 voitures pendant 1 an</div>
              </div>
              
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-700 mb-2">4,32g CO2</div>
                <div className="text-sm text-stone-600">Par requête ChatGPT</div>
                <div className="text-xs text-stone-500 mt-2">1,7 milliard de requêtes/jour = 7 300 tonnes CO2/jour</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-pink-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Comparaison sectorielle</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white border-opacity-20 pb-2">
                  <span>Numérique total</span>
                  <span className="font-bold">4%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-20 pb-2">
                  <span>Aviation civile</span>
                  <span className="font-bold">2,5%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-20 pb-2">
                  <span>IA seule (2024)</span>
                  <span className="font-bold">0,9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>IA projection 2030</span>
                  <span className="font-bold text-yellow-300">2,8%</span>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">
                % des émissions mondiales de gaz à effet de serre
              </p>
            </div>
          </div>
        </section>

        {/* Water Consumption */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Droplets className="w-8 h-8 text-blue-600" />
              <span>Consommation d'Eau</span>
            </h2>
            <p className="text-xl text-stone-600">L'impact hydrique méconnu des infrastructures IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">1,8 Md</div>
              <div className="text-sm text-stone-600">Litres/jour (Google)</div>
              <div className="text-xs text-stone-500 mt-2">= 720 000 foyers</div>
            </div>
            
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-cyan-700 mb-2">2,2 Md</div>
              <div className="text-sm text-stone-600">Litres/jour (Microsoft)</div>
              <div className="text-xs text-stone-500 mt-2">= 880 000 foyers</div>
            </div>
            
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-teal-700 mb-2">7,8 Md</div>
              <div className="text-sm text-stone-600">Litres/jour (Meta)</div>
              <div className="text-xs text-stone-500 mt-2">= 3,1 M foyers</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Stress hydrique par région</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Arizona (USA)</span>
                    <span className="font-bold text-red-300">Critique</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Singapour</span>
                    <span className="font-bold text-orange-300">Élevé</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Irlande</span>
                    <span className="font-bold text-yellow-300">Modéré</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Efficacité hydrique</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-semibold">PUE moyen : 1,67</div>
                    <div className="text-sm opacity-80">Power Usage Effectiveness</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">WUE moyen : 2,3L/kWh</div>
                    <div className="text-sm opacity-80">Water Usage Effectiveness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span>Impact Économique Environnemental</span>
            </h2>
            <p className="text-xl text-stone-600">Le coût caché de la pollution numérique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">85€/tonne</div>
              <div className="text-sm text-stone-600">Prix du carbone EU ETS</div>
              <div className="text-xs text-stone-500 mt-2">Coût réel : 180€/tonne</div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-700 mb-2">2,1 Md€</div>
              <div className="text-sm text-stone-600">Coût carbone GPT-4 (non payé)</div>
              <div className="text-xs text-stone-500 mt-2">Au prix réel du carbone</div>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-700 mb-2">24 Md€</div>
              <div className="text-sm text-stone-600">Dommages environnementaux annuels</div>
              <div className="text-xs text-stone-500 mt-2">Secteur numérique global</div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="text-3xl font-bold text-orange-700 mb-2">120 Md€</div>
              <div className="text-sm text-stone-600">Coût transition énergétique IA</div>
              <div className="text-xs text-stone-500 mt-2">Pour atteindre la neutralité carbone</div>
            </div>
          </div>
        </section>

        {/* Global Projections */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-800 to-orange-800 p-12 rounded-2xl text-white">
            <div className="text-center mb-8">
              <Globe className="w-16 h-16 mx-auto mb-4 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Projections Mondiales</h2>
              <p className="text-xl text-red-100">
                Si rien ne change, voici où nous mène la croissance actuelle de l'IA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">2030</div>
                <div className="text-red-200 text-lg mb-2">8% émissions mondiales</div>
                <div className="text-sm opacity-80">Plus que tous les transports réunis</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">2035</div>
                <div className="text-red-200 text-lg mb-2">15% électricité mondiale</div>
                <div className="text-sm opacity-80">Nécessitera 500 nouvelles centrales</div>
              </div>
              <div className="text-center bg-white bg-opacity-10 p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2">2040</div>
                <div className="text-red-200 text-lg mb-2">20% émissions mondiales</div>
                <div className="text-sm opacity-80">Incompatible avec les accords de Paris</div>
              </div>
            </div>

            <div className="bg-red-900 bg-opacity-50 p-6 rounded-xl border-l-4 border-yellow-400">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-300 mb-2">Point de non-retour</h3>
                  <p className="text-red-100">
                    Selon le GIEC, si le secteur numérique atteint 8% des émissions mondiales d'ici 2030, 
                    il sera impossible de limiter le réchauffement à 1,5°C, même si tous les autres secteurs 
                    atteignent la neutralité carbone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparative Analysis */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4">Comparaisons Parlantes</h2>
            <p className="text-xl text-stone-600">Pour mieux comprendre l'ampleur des impacts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-forest-900 mb-4">Équivalences énergétiques</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">Entraîner GPT-3</span>
                    <span className="font-semibold">126 foyers × 1 an</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">Data centers mondiaux</span>
                    <span className="font-semibold">Consommation de la France</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-stone-600">1 requête ChatGPT</span>
                    <span className="font-semibold">Ampoule LED × 1 heure</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-forest-900 mb-4">Équivalences carbone</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">GPT-3 training</span>
                    <span className="font-semibold">123 voitures × 1 an</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">IA mondiale (2024)</span>
                    <span className="font-semibold">280 millions de voitures</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">            
                    <span className="text-stone-600">1000 requêtes IA</span>
                    <span className="font-semibold">1 km en voiture thermique</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-forest-900 mb-4">Équivalences hydriques</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">Google (quotidien)</span>
                    <span className="font-semibold">720 000 foyers</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">GAFAM total</span>
                    <span className="font-semibold">12 millions de foyers</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-stone-600">1 data center moyen</span>
                    <span className="font-semibold">Piscine olympique × 2/jour</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-forest-900 mb-4">Surfaces impactées</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">Extraction minière/an</span>
                    <span className="font-semibold">5 000 km² détruits</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                    <span className="text-stone-600">Data centers mondiaux</span>
                    <span className="font-semibold">Surface de Paris</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-stone-600">Décharges e-waste</span>
                    <span className="font-semibold">1 200 km² pollués</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeyFigures;