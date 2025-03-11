import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../utils/theme';

// Import screens
import HomeScreen from '../screens/home/HomeScreen';
import AgendaScreen from '../screens/agenda/AgendaScreen';
import SpeakersScreen from '../screens/speakers/SpeakersScreen';
import SpeakerDetailScreen from '../screens/speakers/SpeakerDetailScreen';
import MapsScreen from '../screens/maps/MapsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EventDetailsScreen from '../screens/event/EventDetailsScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';

// Create navigation stacks and tabs
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main tab navigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary, // Syracuse Orange
        tabBarInactiveTintColor: theme.colors.secondary, // Dark Gray
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          elevation: 8,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          ...theme.typography.styles.caption,
          fontWeight: theme.typography.fontWeight.medium,
        },
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color, fontSize: size }}>🏠</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="AgendaTab" 
        component={AgendaScreen} 
        options={{
          tabBarLabel: 'Agenda',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color, fontSize: size }}>📅</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="SpeakersTab" 
        component={SpeakersScreen} 
        options={{
          tabBarLabel: 'Speakers',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color, fontSize: size }}>👥</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="MapsTab" 
        component={MapsScreen} 
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color, fontSize: size }}>🗺️</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color, fontSize: size }}>👤</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main stack navigator that includes the tab navigator and other screens
const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first launch
    const checkFirstLaunch = async () => {
      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');
        if (hasCompletedOnboarding === null) {
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking first launch:', error);
        setIsFirstLaunch(false);
        setIsLoading(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isLoading) {
    // You could return a loading screen here
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isFirstLaunch ? (
        // First launch - show onboarding first
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
          <Stack.Screen name="SpeakerDetail" component={SpeakerDetailScreen} />
        </>
      ) : (
        // Not first launch - go straight to main app
        <>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
          <Stack.Screen name="SpeakerDetail" component={SpeakerDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
