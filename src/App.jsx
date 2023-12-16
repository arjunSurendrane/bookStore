import store from "./redux/store";
import RouterBody from "./routes";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <RouterBody />
      </Provider>
    </>
  );
}

export default App;
