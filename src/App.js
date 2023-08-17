import "./App.css";
import Header from "./components/Header";
import { CityProvider } from "./context/CityContext";
import WeatherForecast from "./components/WeatherForecast";
function App() {
  return (
    <CityProvider>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <WeatherForecast />
        </main>
      </div>
      <footer style={{ marginTop: "100px" }}>Bu proje Yakup Acar tarafından yapılmıştır</footer>
    </CityProvider>
  );
}

export default App;
