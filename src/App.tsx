import "./App.css";
import { getGreetingByDateClass } from "./timezones/getGreetingByDateClass";
import { getGreetingByHour } from "./timezones/getGreetingByHour";

function App() {
  const hour = new Date().getHours();
  const greeting = getGreetingByHour(hour);

  const date = new Date();
  const greeting2 = getGreetingByDateClass(date);

  return (
    <div className="App">
      <p>{greeting}</p>
      <p>{greeting2}</p>
    </div>
  );
}

export default App;
