import { Orderlist } from "./Components";
import { Arraylist } from "./List";
import { Homepage } from "./Menucard";
import { Form } from "./MyForm";
import { OperatorTernary } from "./TernaryOpe";
import { Firsthook } from "./UseState";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Homepage />
        <Routes>
          <Route path="home" exact element={<Form />} />
          <Route path="about" exact element={<Orderlist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;