import React from 'react';
import { Leaf, Lightbulb, Recycle, Users, Shield, Zap } from 'lucide-react';

const EcoAlternatives: React.FC = () => {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-700 to-forest-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Alternatives Écoresponsables
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto">
              Des solutions concrètes pour une intelligence artificielle respectueuse de l'environnement
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Green AI Technologies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Leaf className="w-8 h-8 text-green-600" />
              <span>Technologies IA Vertes</span>
            </h2>
            <p className="text-xl text-stone-600">Innovations techniques pour réduire l'impact environnemental</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Algorithmes Efficaces</h3>
              <p className="text-stone-600 mb-4">
                Développement d'algorithmes moins gourmands en ressources, optimisation des architectures neurales.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-green-800 mb-1">Réduction possible :</div>
                <div className="text-2xl font-bold text-green-700">-85%</div>
                <div className="text-xs text-green-600">de consommation énergétique</div>
              </div>
            </div>

            <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Federated Learning</h3>
              <p className="text-stone-600 mb-4">
                Entraînement distribué qui évite la centralisation massive des données et des calculs.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-blue-800 mb-1">Économie :</div>
                <div className="text-2xl font-bold text-blue-700">-60%</div>
                <div className="text-xs text-blue-600">transferts de données</div>
              </div>
            </div>

            <div className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Edge Computing</h3>
              <p className="text-stone-600 mb-4">
                Traitement local qui réduit la dépendance aux data centers centralisés.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-purple-800 mb-1">Réduction :</div>
                <div className="text-2xl font-bold text-purple-700">-70%</div>
                <div className="text-xs text-purple-600">latence et consommation</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Techniques d'optimisation avancées</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Compression de modèles</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Quantization : réduction de la précision</li>
                  <li>• Pruning : suppression des connexions inutiles</li>
                  <li>• Knowledge distillation : modèles étudiants</li>
                  <li>• Sparsity : matrices creuses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Calcul efficient</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• Hardware spécialisé (NPU, TPU verts)</li>
                  <li>• Calcul approximatif</li>
                  <li>• Parallélisation optimisée</li>
                  <li>• Cache intelligent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Renewable Energy Solutions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-yellow-600" />
              <span>Énergies Renouvelables</span>
            </h2>
            <p className="text-xl text-stone-600">Alimenter l'IA avec des sources d'énergie propre</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Data Centers Solaires</h3>
                <p className="text-yellow-700 mb-4">
                  Installation de fermes solaires dédiées aux data centers, avec stockage par batteries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">100%</div>
                    <div className="text-xs text-yellow-600">Énergie renouvelable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">-95%</div>
                    <div className="text-xs text-yellow-600">Émissions CO2</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Hydroélectricité</h3>
                <p className="text-blue-700 mb-4">
                  Localisation des data centers près de sources hydroélectriques propres.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-blue-600">Disponibilité</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$0.03</div>
                    <div className="text-xs text-blue-600">kWh (Québec)</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-3">Éolien Offshore</h3>
                <p className="text-green-700 mb-4">
                  Data centers flottants alimentés par éoliennes offshore, refroidissement naturel.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-xs text-green-600">Facteur de charge</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">-80%</div>
                    <div className="text-xs text-green-600">Coûts refroidissement</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Transition énergétique des géants tech</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Google</span>
                    <span className="text-green-300">100% renouvelable 2030</span>
                  </div>
                  <div className="text-sm opacity-80">Investissement : 15 Md$ dans l'éolien/solaire</div>
                </div>
                
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Microsoft</span>
                    <span className="text-green-300">Carbone négatif 2030</span>
                  </div>
                  <div className="text-sm opacity-80">Fonds climat : 1 Md$ + compensation totale</div>
                </div>
                
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Meta</span>
                    <span className="text-green-300">Net zéro 2030</span>
                  </div>
                  <div className="text-sm opacity-80">Contrats éoliens : 5.6 GW capacity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Economy */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Recycle className="w-8 h-8 text-green-600" />
              <span>Économie Circulaire</span>
            </h2>
            <p className="text-xl text-stone-600">Réduire, réutiliser, recycler les infrastructures numériques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Reconditionnement</h3>
              <p className="text-stone-600 mb-4">
                Prolonger la durée de vie des serveurs et équipements par la remise à neuf.
              </p>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• Durée de vie +50%</li>
                <li>• Coût -70%</li>
                <li>• Impact carbone -80%</li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Éco-conception</h3>
              <p className="text-stone-600 mb-4">
                Concevoir hardware et software pour la durabilité et l'efficacité énergétique.
              </p>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• Matériaux recyclables</li>
                <li>• Modularité réparable</li>
                <li>• Optimisation énergétique</li>
              </ul>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">Recyclage Avancé</h3>
              <p className="text-stone-600 mb-4">
                Technologies de récupération des terres rares et métaux précieux.
              </p>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>• Récupération 95% métaux</li>
                <li>• Traitement écologique</li>
                <li>• Filières locales</li>
              </ul>
            </div>
          </div>

          <div className="bg-stone-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-forest-900 mb-6">Initiatives circulaires existantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Programmes constructeurs</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-forest-900">Dell Technologies</div>
                    <div className="text-sm text-stone-600">Programme de reprise et reconditionnement, objectif 2030 : 100% packaging recyclable</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-forest-900">HP Inc.</div>
                    <div className="text-sm text-stone-600">75% plastique recyclé dans nouveaux produits, réduction emballages 75%</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Coopératives de recyclage</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-forest-900">Closing the Loop</div>
                    <div className="text-sm text-stone-600">Collecte smartphones Afrique, recyclage Europe, compensation carbone</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-forest-900">Urban Mining</div>
                    <div className="text-sm text-stone-600">Extraction urbaine métaux rares, technologies sans solvants chimiques</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Actions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-900 mb-4 flex items-center justify-center space-x-3">
              <Users className="w-8 h-8 text-blue-600" />
              <span>Actions Individuelles</span>
            </h2>
            <p className="text-xl text-stone-600">Ce que chacun peut faire pour réduire son impact IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-forest-900 mb-6">Usage Responsable</h3>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Limiter les requêtes</h4>
                  <p className="text-green-700 text-sm">
                    Éviter les conversations inutiles avec les IA, privilégier les recherches traditionnelles pour les questions simples.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Choisir des modèles efficaces</h4>
                  <p className="text-blue-700 text-sm">
                    Préférer les IA légères (GPT-3.5) aux versions lourdes (GPT-4) quand c'est suffisant.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Optimiser les prompts</h4>
                  <p className="text-purple-700 text-sm">
                    Formuler des demandes précises et complètes pour éviter les allers-retours.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Éviter la génération d'images/vidéos</h4>
                  <p className="text-orange-700 text-sm">
                    L'IA générative multimédia consomme 10 à 100 fois plus d'énergie que le texte.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Impact de vos choix</h3>
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-lg font-semibold mb-2">Réduire de 50% vos requêtes IA</div>
                  <div className="text-3xl font-bold text-green-300">-790g CO2/mois</div>
                  <div className="text-sm opacity-80">= 3,5 km en voiture évités</div>
                </div>
                
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-lg font-semibold mb-2">Choisir GPT-3.5 vs GPT-4</div>
                  <div className="text-3xl font-bold text-green-300">-85% énergie</div>
                  <div className="text-sm opacity-80">par requête équivalente</div>
                </div>
                
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <div className="text-lg font-semibold mb-2">Éviter génération d'images</div>
                  <div className="text-3xl font-bold text-green-300">-2,4 kg CO2/mois</div>
                  <div className="text-sm opacity-80">= 11 km en voiture évités</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-forest-900 mb-6">Calculateur d'impact personnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Usage quotidien</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>10 requêtes ChatGPT</span>
                    <span className="font-semibold">43g CO2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>5 images DALL-E</span>
                    <span className="font-semibold">215g CO2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2h vidéo générée</span>
                    <span className="font-semibold">1,2kg CO2</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total/jour</span>
                      <span>1,46kg CO2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold mb-4">Usage optimisé</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>5 requêtes ciblées</span>
                    <span className="font-semibold">21g CO2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Images existantes</span>
                    <span className="font-semibold">0g CO2</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vidéo traditionnelle</span>
                    <span className="font-semibold">50g CO2</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-green-600">
                      <span>Total/jour</span>
                      <span>71g CO2</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 p-6 rounded-xl">
                <h4 className="font-semibold mb-4 text-green-800">Économie réalisée</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">-95%</div>
                  <div className="text-sm text-green-700 mb-4">d'impact carbone</div>
                  <div className="text-xs text-green-600">
                    Soit 1,39kg CO2 économisés par jour = 507kg CO2 par an
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-forest-800 to-green-700 p-12 rounded-2xl text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ensemble, Construisons une IA Responsable
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Chaque action compte. En adoptant ces alternatives et en sensibilisant notre entourage, 
            nous pouvons forcer l'industrie tech à prendre ses responsabilités environnementales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="font-bold text-lg mb-2">Sensibiliser</h3>
              <p className="text-sm opacity-90">Partager ces informations dans votre réseau</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="font-bold text-lg mb-2">Adopter</h3>
              <p className="text-sm opacity-90">Mettre en pratique ces alternatives au quotidien</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="font-bold text-lg mb-2">Exiger</h3>
              <p className="text-sm opacity-90">Demander transparence et engagement aux entreprises</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcoAlternatives;