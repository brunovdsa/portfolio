import Router from './routes/Router';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <Router />
    </>
  );
}

export default App;
