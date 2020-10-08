import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MainScreen from '../screens/MainScreen'
import LeaderboardScreen from '../screens/LeaderboardScreen'
import ShopScreen from '../screens/ShopScreen'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createMaterialBottomTabNavigator()

export const AppNavigation = () => (
    <NavigationContainer>
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
    </NavigationContainer>
)

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: '#2E1351'
    }
})
