import './App.css';
import Form from './components/form';
import {BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/form" element={<Form />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
// export const Index = () => {
//   return <h1 className="">hellow world</h1>
// }
export default App;
