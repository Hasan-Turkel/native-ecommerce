import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyBasket from "./pages/MyBasket";
import MyPurchases from "./pages/MyPurchases";
import Ionicons from "@expo/vector-icons/Ionicons";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function Me() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="MyBasket" component={MyBasket} />
      <Drawer.Screen name="MyPurchases" component={MyPurchases} />
    </Drawer.Navigator>
  );
}

const Router = () => {
  const  user  = false

  return (
    <>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 50,
              backgroundColor: "black",
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Me"
            component={Me}
            options={{
              headerShown: false,
              tabBarLabel: "Me",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
      )}
    </>
  );
};

export default Router;