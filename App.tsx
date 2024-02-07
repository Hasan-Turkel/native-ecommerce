
import Router from './Router';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from './app/store'

export default function App() {

  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
     </Provider>
  );
}


