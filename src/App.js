import AllPages from "./pages/AllPages";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./context/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <CookiesProvider>
        <AllPages />
      </CookiesProvider>
    </AuthContextProvider>
  );
}

export default App;
