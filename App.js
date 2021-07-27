import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from 'expo-font';

// screens
import { Home } from "./screens/";

import { images, icons, COLORS, FONTS, SIZES } from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    'CarmenSans-Thin': require('./assets/fonts/CarmenSans-Thin.otf'),
    'CarmenSans-Regular': require('./assets/fonts/CarmenSans-Regular.otf'),
    'CarmenSans-SemiBold': require('./assets/fonts/CarmenSans-SemiBold.otf'),
  });

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'NIKE STORE',
            headerStyle: {
              //backgroundColor: '#f4511e',
            },
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={() => console.log("Pressed menu")}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Pressed search")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default () => {
  return <App />;
};
