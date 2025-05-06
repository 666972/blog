import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import PostList from './components/PostList';
import Post from './components/Post';


function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;