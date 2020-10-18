import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ShopScreen from '../screens/ShopScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MainScreen from '../screens/MainScreen'
import LeaderboardScreen from '../screens/LeaderboardScreen'
import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const TabNavigator = createMaterialBottomTabNavigator()

export const TabsMainNavigation = () => (
    <TabNavigator.Navigator
        barStyle={styles.barStyle}
        initialRouteName="Home"
    >
        <TabNavigator.Screen
            name="Shop"
            component={ShopScreen}
            options={{
                tabBarLabel: 'Магазин',
                tabBarIcon: ({ color }) => <MaterialIcons name="store" color={color} size={26}/>
            }}
        />
        <TabNavigator.Screen
            name="Home"
            component={MainScreen}
            options={{
                tabBarLabel: 'Главная',
                tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={26}/>
            }}
        />
        <TabNavigator.Screen
            name="Leaderboard"
            component={LeaderboardScreen}
            options={{
                tabBarLabel: 'Лидеры',
                tabBarIcon: ({ color }) => <MaterialIcons name="emoji-events" color={color} size={26}/>
            }}
        />
    </TabNavigator.Navigator>
)

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: colors.background.menu
    }
})
