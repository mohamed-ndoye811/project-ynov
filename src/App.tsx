import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            {routes.map((route: { path: string; element: React.ReactElement }) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;