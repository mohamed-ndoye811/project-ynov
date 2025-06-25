import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, TrendingUp, Server, Zap, Leaf } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-green-900 text-white floating-particles overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                L'Intelligence Artificielle
                <span className="block text-red-400 animate-pulse-green">
                  Cache une Réalité Alarmante
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <p className="text-xl lg:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto leading-relaxed">
                Derrière les promesses de l'IA se cache un coût environnemental
                dramatique que l'industrie tech préfère taire.
              </p>
            </div>
            <nav aria-label="Accès rapide">
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-500">
                <Link
                  to="/enjeux"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Découvrir les impacts
                </Link>
                <Link
                  to="/chiffres"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-forest-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Voir les chiffres
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-20 left-10 animate-float" aria-hidden="true">
          <Leaf className="w-8 h-8 text-green-400 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float animate-delay-200" aria-hidden="true">
          <Server className="w-6 h-6 text-red-400 opacity-30" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float animate-delay-100" aria-hidden="true">
          <Zap className="w-7 h-7 text-yellow-400 opacity-30" />
        </div>
      </header>

      {/* Alarming Stats Section */}
      <section className="py-16 bg-white" aria-labelledby="stats-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 id="stats-title" className="text-3xl lg:text-4xl font-bold text-forest-900 mb-4">
              Des Chiffres qui Font Froid dans le Dos
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              L'empreinte carbone de l'IA explose silencieusement, pendant que
              nous célébrons ses prouesses.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection
              delay={100}
              className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover-grow"
            >
              <div className="flex items-center justify-between mb-4">
                <Server className="w-12 h-12 text-red-600 animate-pulse-green" />
                <AlertTriangle className="w-6 h-6 text-red-500 animate-wave" />
              </div>
              <h3 className="text-2xl font-bold text-red-700 mb-2">626 TWh</h3>
              <p className="text-stone-700">
                Consommation annuelle des data centers mondiaux - équivalent à
                la consommation de la France
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={200}
              className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 hover-grow"
            >
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-12 h-12 text-orange-600 animate-pulse-green" />
                <AlertTriangle className="w-6 h-6 text-orange-500 animate-wave" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700 mb-2">+300%</h3>
              <p className="text-stone-700">
                Augmentation de la consommation énergétique de l'IA depuis 2018
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={300}
              className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 hover-grow"
            >
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-12 h-12 text-yellow-600 animate-pulse-green" />
                <AlertTriangle className="w-6 h-6 text-yellow-500 animate-wave" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">
                552 tonnes
              </h3>
              <p className="text-stone-700">
                CO2 émis pour l'entraînement d'un seul modèle de langage comme
                GPT-3
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={400}
              className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover-grow"
            >
              <div className="flex items-center justify-between mb-4">
                <Server className="w-12 h-12 text-purple-600 animate-pulse-green" />
                <AlertTriangle className="w-6 h-6 text-purple-500 animate-wave" />
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-2">4%</h3>
              <p className="text-stone-700">
                Part du numérique dans les émissions mondiales de GES, en
                croissance exponentielle
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-16 bg-stone-100" aria-labelledby="problem-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-forest-900 mb-6">
                Une Catastrophe Environnementale Silencieuse
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in-up animate-delay-100">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-breathe">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-900 mb-2">
                      Consommation énergétique exponentielle
                    </h3>
                    <p className="text-stone-600">
                      Les data centers consomment déjà 1% de l'électricité
                      mondiale. L'IA pourrait tripler cette consommation d'ici
                      2030.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animate-delay-200">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-breathe">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-900 mb-2">
                      Extraction minière intensive
                    </h3>
                    <p className="text-stone-600">
                      Terres rares, lithium, cobalt : l'IA nécessite des
                      matériaux dont l'extraction ravage les écosystèmes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-fade-in-up animate-delay-300">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-breathe">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-forest-900 mb-2">
                      Déchets électroniques croissants
                    </h3>
                    <p className="text-stone-600">
                      Obsolescence rapide des équipements, pollution toxique,
                      recyclage insuffisant : un cercle vicieux destructeur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/enjeux"
                  className="bg-forest-700 hover:bg-forest-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 hover:shadow-lg"
                >
                  <span>Comprendre les enjeux</span>
                  <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="slide-right"
              className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 animate-shimmer opacity-10"></div>
              <h3 className="text-2xl font-bold mb-6">
                Impact d'une simple recherche IA
              </h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">4,32g CO2</div>
                  <div className="text-sm opacity-90">Par requête ChatGPT</div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">×10</div>
                  <div className="text-sm opacity-90">
                    Plus qu'une recherche Google
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg hover-leaf">
                  <div className="text-3xl font-bold">1,7 billion</div>
                  <div className="text-sm opacity-90">
                    Requêtes IA par jour dans le monde
                  </div>
                </div>
              </div>
              <p className="text-sm mt-4 opacity-90">
                Soit l'équivalent de 7 300 tonnes de CO2 par jour, uniquement
                pour les requêtes textuelles.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-forest-800 text-white relative overflow-hidden floating-particles" aria-labelledby="cta-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 id="cta-title" className="text-3xl lg:text-4xl font-bold mb-6">
              Il Est Temps d'Agir Avant qu'il ne Soit Trop Tard
            </h2>
            <p className="text-xl mb-8 text-green-100">
              L'industrie tech nous vend le rêve d'un futur connecté, mais à
              quel prix pour notre planète ? Découvrez les alternatives et
              testez vos connaissances pour un numérique vraiment responsable.
            </p>
            <nav aria-label="Appels à l'action">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/alternatives"
                  className="bg-white text-forest-800 hover:bg-stone-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Découvrir les alternatives
                </Link>
                <Link
                  to="/quiz"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-forest-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Tester mes connaissances
                </Link>
              </div>
            </nav>
          </AnimatedSection>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 animate-float animate-delay-100" aria-hidden="true">
          <div className="w-4 h-4 bg-green-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float animate-delay-300" aria-hidden="true">
          <div className="w-6 h-6 bg-white rounded-full opacity-10"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
