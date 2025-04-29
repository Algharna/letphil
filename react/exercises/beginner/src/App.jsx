import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import Profile from "./components/Profile.jsx";
import Toggle from "./components/Toggle.jsx";
import ShowHide from "./components/ShowHide.jsx";
import InputForm from "./components/InputForm.jsx";
import RenderList from "./components/RenderList.jsx";
import Card from "./components/Card.jsx";

function App() {
  const pokemon = ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"];

  return (
    <>
      <Greeting />
      <Counter />
      <Profile />
      <Toggle />
      <ShowHide />
      <InputForm />
      <RenderList />
      <Card pokemon={pokemon} />
    </>
  );
}

export default App;
