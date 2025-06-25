import React, { lazy, ReactElement } from 'react';

const Home = lazy(() => import('./pages/Home'));
const EcologicalIssues = lazy(() => import('./pages/EcologicalIssues'));
const KeyFigures = lazy(() => import('./pages/KeyFigures'));
const EcoAlternatives = lazy(() => import('./pages/EcoAlternatives'));
const Quiz = lazy(() => import('./pages/Quiz'));
const NotFound = lazy(() => import('./pages/NotFound'));

interface RouteConfig {
  path: string;
  element: ReactElement;
}

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/enjeux', element: <EcologicalIssues /> },
  { path: '/chiffres', element: <KeyFigures /> },
  { path: '/alternatives', element: <EcoAlternatives /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '*', element: <NotFound /> },
];

export default routes; 