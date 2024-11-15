// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './components/courses/CourseDetail';

function App() {
    return (
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          </Routes>
      </div>
    </Router>
    );
}

export default App;
