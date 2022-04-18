import "./App.css";
import InputForm from "./InputForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
