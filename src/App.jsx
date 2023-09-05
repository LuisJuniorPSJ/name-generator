import "./App.css";
import Titulo from "./componentes/Titulo";
import Gerador from "./componentes/Gerador";

export default function App() {
  return (
    <>
      <div className="container">
        <Titulo />
        <Gerador />
      </div>
    </>
  );
}
