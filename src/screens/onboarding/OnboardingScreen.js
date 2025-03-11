import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../../utils/theme';
import CustomButton from '../../components/CustomButton';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  // Onboarding data
  const onboardingData = [
    {
      id: '1',
      title: 'Welcome to EDGE Conference',
      description: 'Your complete guide to the Veteran EDGE Conference experience.',
      image: 'https://via.placeholder.com/400x300?text=Welcome',
    },
    {
      id: '2',
      title: 'Explore the Agenda',
      description: 'Browse sessions, create your personal schedule, and get notified about upcoming events.',
      image: 'https://via.placeholder.com/400x300?text=Agenda',
    },
    {
      id: '3',
      title: 'Connect with Speakers',
      description: 'Learn about industry experts and connect with them during the conference.',
      image: 'https://via.placeholder.com/400x300?text=Speakers',
    },
    {
      id: '4',
      title: 'Navigate with Ease',
      description: 'Use interactive maps to find your way around the venue.',
      image: 'https://via.placeholder.com/400x300?text=Maps',
    },
    {
      id: '5',
      title: 'Ready to Start?',
      description: 'Tap the button below to begin your EDGE Conference experience!',
      image: 'https://via.placeholder.com/400x300?text=Get+Started',
    },
  ];

  // Handle skip or finish
  const handleFinish = async () => {
    try {
      console.log('Finishing onboarding...');
      // Mark onboarding as completed
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      // Navigate to main app
      navigation.replace('Main');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
      // If there's an error, try to navigate anyway
      navigation.navigate('Main');
    }
  };

  // Handle next slide
  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleFinish();
    }
  };

  // Render onboarding item
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  // Render pagination dots
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                { width: dotWidth, opacity },
                currentIndex === index && styles.activeDot,
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />

      {renderPagination()}

      <View style={styles.buttonContainer}>
        {currentIndex < onboardingData.length - 1 ? (
          <>
            <CustomButton
              title="Skip"
              type="text"
              onPress={handleFinish}
              style={styles.skipButton}
            />
            <CustomButton
              title="Next"
              type="filled"
              onPress={handleNext}
              style={styles.nextButton}
            />
          </>
        ) : (
          <CustomButton
            title="Get Started"
            type="filled"
            onPress={handleFinish}
            style={styles.getStartedButton}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  slide: {
    width,
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  title: {
    ...theme.typography.styles.headline,
    color: theme.colors.primary, // Syracuse Orange
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  description: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.md,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary, // Syracuse Orange
    marginHorizontal: theme.spacing.xs,
  },
  activeDot: {
    backgroundColor: theme.colors.primary, // Syracuse Orange
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  skipButton: {
    // Custom button already handles padding
  },
  nextButton: {
    // Custom button already handles styling
  },
  getStartedButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
