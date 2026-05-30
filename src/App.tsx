import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SubjectProvider } from './context/SubjectContext';
import { Home } from './pages/Home';

// Subject Index Pages
import ScienceIndex from './pages/science/index';
// import LALIndex from './pages/lal/index';
import INSIndex from './pages/ins/index';

function App() {
  return (
    <SubjectProvider>
      <BrowserRouter>
        <Routes>
          {/* Home Route - No Layout */}
          <Route path="/" element={<Home />} />

          {/* Subject Routes - Wrapped in Layout */}
          <Route element={<Layout />}>
            <Route path="science" element={<ScienceIndex />} />
            {/* <Route path="lal" element={<LALIndex />} /> */}
            <Route path="ins" element={<INSIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SubjectProvider>
  );
}

export default App;