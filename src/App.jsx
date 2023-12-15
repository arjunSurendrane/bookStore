import store from "./redux/store";
import RouterBody from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterBody />
      </Provider>
    </>
  );
}

export default App;
