import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import HomeScreen from 'App/Containers/TabHome/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import RecommendedScreen from 'App/Containers/TabRecommended/RecommendedScreen'
import TimelineScreen from 'App/Containers/TabTimeline/TimelineScreen'

import React from 'react'
import { Image } from 'react-native'
import { Images } from 'App/Theme'
import Colors from 'App/Theme/Colors'

const RecommendedStack = createStackNavigator(
  {
    RecommendedScreen: RecommendedScreen,
  },
  {
    headerMode: 'none',
  }
)

const TimelineStack = createStackNavigator(
  {
    TimelineScreen: TimelineScreen,
  },
  {
    headerMode: 'none',
  }
)

const HomeStack = createStackNavigator(
  {
    MainScreen: {
      screen: HomeScreen,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      title: `Places`,
    }),
  }
)

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: {
      screen: SplashScreen,
    },

    TabHostScreen: {
      screen: createBottomTabNavigator(
        {
          Home: HomeStack,
          Recommended: RecommendedStack,
          Timeline: TimelineStack,
        },
        {
          navigationOptions: () => ({
            title: `A`,
            headerBackTitle: 'A much too long text for back button from B to A',
            headerTruncatedBackTitle: `Home`,
            header: null,
          }),
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state
              if (routeName === 'Recommended') {
                return (
                  <Image
                    source={Images.tab_recommended}
                    style={{ width: 25, height: 25, tintColor: tintColor }}
                  />
                )
              } else if (routeName === 'Timeline') {
                return (
                  <Image
                    source={Images.tab_planning}
                    style={{ width: 25, height: 25, tintColor: tintColor }}
                  />
                )
              } else {
                return (
                  <Image
                    source={Images.tab_places}
                    style={{ width: 25, height: 25, tintColor: tintColor }}
                  />
                )
              }
            },
          }),
          tabBarOptions: {
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.inactive,
          },
        }
      ),
    },
  },

  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen', // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'screen',
  }
)

export default createAppContainer(StackNavigator)
