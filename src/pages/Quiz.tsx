import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award, Brain, Leaf } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

const questions: Question[] = [
  {
    id: 1,
    question: "Combien d'énergie consomme l'entraînement du modèle GPT-3 ?",
    options: [
      "127 MWh (équivalent à 12 foyers pendant 1 an)",
      "1 287 MWh (équivalent à 126 foyers pendant 1 an)",
      "12 870 MWh (équivalent à 1 260 foyers pendant 1 an)",
      "128 700 MWh (équivalent à 12 600 foyers pendant 1 an)"
    ],
    correctAnswer: 1,
    explanation: "L'entraînement de GPT-3 a consommé 1 287 MWh, soit l'équivalent de la consommation électrique de 126 foyers danois pendant une année entière.",
    difficulty: 'moyen'
  },
  {
    id: 2,
    question: "Quelle est la consommation d'eau quotidienne des data centers de Google ?",
    options: [
      "180 millions de litres",
      "1,8 milliard de litres",
      "18 milliards de litres",
      "180 milliards de litres"
    ],
    correctAnswer: 1,
    explanation: "Google consomme 1,8 milliard de litres d'eau par jour pour refroidir ses data centers, soit l'équivalent de 720 000 foyers.",
    difficulty: 'difficile'
  },
  {
    id: 3,
    question: "Combien de fois plus d'énergie consomme une requête ChatGPT par rapport à une recherche Google ?",
    options: [
      "2 fois plus",
      "5 fois plus",
      "10 fois plus",
      "20 fois plus"
    ],
    correctAnswer: 2,
    explanation: "Une requête ChatGPT consomme environ 10 fois plus d'énergie qu'une recherche Google traditionnelle (2,9 Wh vs 0,3 Wh).",
    difficulty: 'facile'
  },
  {
    id: 4,
    question: "Quel pourcentage des émissions mondiales de CO2 représente actuellement le secteur numérique ?",
    options: [
      "1%",
      "2,5%",
      "4%",
      "7%"
    ],
    correctAnswer: 2,
    explanation: "Le secteur numérique représente actuellement 4% des émissions mondiales de gaz à effet de serre, soit plus que l'aviation civile (2,5%).",
    difficulty: 'moyen'
  },
  {
    id: 5,
    question: "Combien de tonnes de CO2 ont été émises pour l'entraînement de GPT-3 ?",
    options: [
      "55 tonnes",
      "155 tonnes",
      "552 tonnes",
      "1 552 tonnes"
    ],
    correctAnswer: 2,
    explanation: "L'entraînement de GPT-3 a généré 552 tonnes de CO2, soit l'équivalent de 123 voitures roulant pendant un an.",
    difficulty: 'moyen'
  },
  {
    id: 6,
    question: "Quel pays produit 70% du cobalt mondial nécessaire aux technologies numériques ?",
    options: [
      "La Chine",
      "Le Chili",
      "La République Démocratique du Congo",
      "L'Australie"
    ],
    correctAnswer: 2,
    explanation: "La RDC produit 70% du cobalt mondial, souvent dans des conditions environnementales et humaines dramatiques, avec destruction des forêts tropicales.",
    difficulty: 'difficile'
  },
  {
    id: 7,
    question: "Combien de déchets électroniques sont produits chaque année dans le monde ?",
    options: [
      "24 millions de tonnes",
      "34 millions de tonnes",
      "44 millions de tonnes",
      "54 millions de tonnes"
    ],
    correctAnswer: 3,
    explanation: "54 millions de tonnes de déchets électroniques sont produits chaque année, avec seulement 20% de taux de recyclage mondial.",
    difficulty: 'moyen'
  },
  {
    id: 8,
    question: "Selon les projections, quel pourcentage des émissions mondiales l'IA pourrait-elle représenter en 2030 ?",
    options: [
      "2%",
      "5%",
      "8%",
      "12%"
    ],
    correctAnswer: 2,
    explanation: "Si la croissance actuelle continue, l'IA pourrait représenter 8% des émissions mondiales d'ici 2030, rendant impossible l'objectif de 1,5°C.",
    difficulty: 'difficile'
  },
  {
    id: 9,
    question: "Quelle technique permet de réduire jusqu'à 85% la consommation énergétique des modèles d'IA ?",
    options: [
      "L'augmentation de la taille des modèles",
      "L'optimisation des algorithmes et la compression",
      "L'utilisation de plus de serveurs",
      "L'augmentation de la fréquence d'entraînement"
    ],
    correctAnswer: 1,
    explanation: "L'optimisation des algorithmes, la compression de modèles (quantization, pruning) et les architectures efficaces peuvent réduire jusqu'à 85% la consommation énergétique.",
    difficulty: 'moyen'
  },
  {
    id: 10,
    question: "Combien de km² d'habitats naturels sont détruits chaque année par l'extraction minière pour les technologies ?",
    options: [
      "500 km²",
      "1 500 km²",
      "5 000 km²",
      "15 000 km²"
    ],
    correctAnswer: 2,
    explanation: "L'extraction minière pour les technologies détruit 5 000 km² d'habitats naturels chaque année, contribuant à la 6e extinction de masse.",
    difficulty: 'difficile'
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { message: "Expert en impact environnemental de l'IA !", color: "text-green-600", icon: Award };
    if (percentage >= 60) return { message: "Bonne connaissance des enjeux écologiques", color: "text-blue-600", icon: Brain };
    if (percentage >= 40) return { message: "Sensibilisé aux problématiques environnementales", color: "text-yellow-600", icon: Leaf };
    return { message: "Il est temps d'approfondir vos connaissances !", color: "text-red-600", icon: Brain };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (quizCompleted) {
    const scoreInfo = getScoreMessage();
    const ScoreIcon = scoreInfo.icon;

    return (
      <div className="py-12">
        <div className="bg-gradient-to-br from-green-700 to-forest-800 text-white py-16 relative overflow-hidden floating-particles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Quiz Terminé !
                </h1>
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto">
                  Découvrez votre niveau de connaissance sur l'impact environnemental de l'IA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <ScoreIcon className={`w-24 h-24 mx-auto mb-6 ${scoreInfo.color} animate-breathe`} />
            <h2 className="text-3xl font-bold text-forest-900 mb-4">
              Votre Score : {score}/{questions.length}
            </h2>
            <div className="text-6xl font-bold mb-4 text-forest-700 animate-pulse-green">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className={`text-xl font-semibold mb-8 ${scoreInfo.color}`}>
              {scoreInfo.message}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl hover-grow">
                <div className="text-2xl font-bold text-green-600 mb-2 animate-pulse-green">{score}</div>
                <div className="text-sm text-green-700">Bonnes réponses</div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl hover-grow">
                <div className="text-2xl font-bold text-red-600 mb-2 animate-pulse-green">{questions.length - score}</div>
                <div className="text-sm text-red-700">Erreurs</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl hover-grow">
                <div className="text-2xl font-bold text-blue-600 mb-2 animate-pulse-green">{questions.length}</div>
                <div className="text-sm text-blue-700">Questions totales</div>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-xl mb-8 hover-leaf">
              <h3 className="text-xl font-bold text-forest-900 mb-4">Pourquoi ce quiz ?</h3>
              <p className="text-stone-600 mb-4">
                Comprendre l'impact environnemental de l'IA est crucial pour faire des choix éclairés. 
                Chaque requête, chaque modèle entraîné a un coût écologique réel.
              </p>
              <p className="text-stone-600">
                Partagez vos connaissances et sensibilisez votre entourage aux enjeux environnementaux 
                du numérique pour construire un avenir plus responsable.
              </p>
            </div>

            <button
              onClick={resetQuiz}
              className="bg-forest-700 hover:bg-forest-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 hover:shadow-lg"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Recommencer le quiz</span>
            </button>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-700 to-blue-800 text-white py-16 relative overflow-hidden floating-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Quiz Impact Environnemental IA
              </h1>
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto">
                Testez vos connaissances sur les enjeux écologiques de l'intelligence artificielle
              </p>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Brain className="w-8 h-8 text-purple-300 opacity-30" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float animate-delay-200">
          <Leaf className="w-6 h-6 text-green-300 opacity-30" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Bar */}
        <AnimatedSection className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-stone-600">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(question.difficulty)} animate-pulse-green`}>
              {question.difficulty}
            </span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500 animate-shimmer"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </AnimatedSection>

        {/* Question Card */}
        <AnimatedSection className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover-grow">
          <h2 className="text-2xl font-bold text-forest-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 hover-leaf ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800 animate-grow-leaf'
                      : index === selectedAnswer && index !== question.correctAnswer
                      ? 'border-red-500 bg-red-50 text-red-800'
                      : 'border-stone-200 bg-stone-50 text-stone-600'
                    : selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 text-blue-800 animate-breathe'
                    : 'border-stone-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    showResult
                      ? index === question.correctAnswer
                        ? 'border-green-500 bg-green-500'
                        : index === selectedAnswer && index !== question.correctAnswer
                        ? 'border-red-500 bg-red-500'
                        : 'border-stone-300'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-stone-300'
                  }`}>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle className="w-4 h-4 text-white animate-grow-leaf" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="w-4 h-4 text-white" />
                    )}
                    {!showResult && selectedAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-green"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500 animate-fade-in-up">
              <h3 className="font-semibold text-blue-800 mb-2">Explication :</h3>
              <p className="text-blue-700">{question.explanation}</p>
            </div>
          )}

          {!showResult && (
            <div className="mt-8 text-center">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  selectedAnswer !== null
                    ? 'bg-forest-700 hover:bg-forest-800 text-white hover:scale-105 hover:shadow-lg'
                    : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
              </button>
            </div>
          )}
        </AnimatedSection>

        {/* Score Display */}
        <AnimatedSection className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl text-white text-center hover-grow">
          <div className="text-lg font-semibold animate-pulse-green">
            Score actuel : {score}/{currentQuestion + (showResult ? 1 : 0)}
          </div>
          <div className="text-sm opacity-90">
            {Math.round((score / Math.max(currentQuestion + (showResult ? 1 : 0), 1)) * 100)}% de bonnes réponses
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Quiz;