import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Calendario from "./pages/Calendario";

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 2,
          height: 60,
          borderRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={Calendario}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="calendar" size={size} color={color} />;
            }
            return (
              <Ionicons name="calendar-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
