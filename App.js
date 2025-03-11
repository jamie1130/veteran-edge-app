import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import theme
import theme from './src/utils/theme';

// Import Firebase configuration
import { auth } from './firebase';

// Import navigation
import AppNavigator from './src/navigation/AppNavigator';

// Create a Query Client for React Query
const queryClient = new QueryClient();

// Create a custom navigation theme based on Syracuse University colors
const SyracuseNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.surface,
    card: theme.colors.surface,
    text: theme.colors.text.primary,
    border: theme.colors.border,
    notification: theme.colors.error,
  },
};

// Main app component
export default function App() {

  // Main app structure
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={SyracuseNavigationTheme}>
          <StatusBar style="auto" backgroundColor={theme.colors.surface} />
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...theme.typography.styles.body,
    color: theme.colors.text.primary,
  },
});
