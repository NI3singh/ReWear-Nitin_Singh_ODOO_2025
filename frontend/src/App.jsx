import Router from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router />
    </>
  );
}

export default App;
