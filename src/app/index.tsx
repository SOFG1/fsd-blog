import Providers from "./providers";
import AppRouter from "./router";
import "./ui/main.css";
import Layout from "./layout";

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
