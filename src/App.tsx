import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SubjectProvider } from './context/SubjectContext';

// Subject Index Pages
import ScienceIndex from './pages/science/index';
import LALIndex from './pages/lal/index';
import INSIndex from './pages/ins/index';

function App() {
  return (
    <SubjectProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Default Route */}
            <Route index element={<Navigate to="/science" replace />} />
            
            {/* Base Subject Routes */}
            <Route path="science" element={<ScienceIndex />} />
            <Route path="lal" element={<LALIndex />} />
            <Route path="ins" element={<INSIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SubjectProvider>
  );
}

export default App;