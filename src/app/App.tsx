import { Providers } from "./Providers";
import { AppRouter } from "./AppRouter";
import "./ui/main.css";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
