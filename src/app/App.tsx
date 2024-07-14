import { Providers } from "./Providers";
import { AppRouter } from "./AppRouter";
import "./ui/main.css";
import { Layout } from "./Layout";

function App() {
  return (
    <Providers>
      <Layout>
        <AppRouter />
      </Layout>
    </Providers>
  );
}

export default App;
