import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import theme from '../utils/theme';

/**
 * CustomButton - A reusable button component with Syracuse University styling
 * 
 * @param {string} title - Button text
 * @param {function} onPress - Function to call when button is pressed
 * @param {string} type - Button type: 'filled', 'outlined', 'text' (default: 'filled')
 * @param {boolean} isLoading - Whether to show a loading indicator (default: false)
 * @param {boolean} disabled - Whether the button is disabled (default: false)
 * @param {object} style - Additional style for the button (optional)
 * @param {object} textStyle - Additional style for the button text (optional)
 */
const CustomButton = ({
  title,
  onPress,
  type = 'filled',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  // Determine button style based on type
  const getButtonStyle = () => {
    switch (type) {
      case 'outlined':
        return styles.outlinedButton;
      case 'text':
        return styles.textButton;
      default:
        return styles.filledButton;
    }
  };

  // Determine text style based on type
  const getTextStyle = () => {
    switch (type) {
      case 'outlined':
        return styles.outlinedText;
      case 'text':
        return styles.textButtonText;
      default:
        return styles.filledText;
    }
  };

  // Determine loading indicator color based on button type
  const getLoaderColor = () => {
    switch (type) {
      case 'outlined':
      case 'text':
        return theme.colors.primary; // Syracuse Orange
      default:
        return theme.colors.text.inverse; // White
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator 
          size="small" 
          color={getLoaderColor()} 
        />
      ) : (
        <Text 
          style={[
            styles.text, 
            getTextStyle(), 
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    ...theme.typography.styles.label,
  },
  // Filled button (high emphasis) - Syracuse Orange background
  filledButton: {
    backgroundColor: theme.colors.primary,
    ...theme.shadows.sm,
  },
  // Outlined button (medium emphasis) - Transparent with Syracuse Orange border
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  // Text button (low emphasis) - Text only
  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  // Disabled state
  disabledButton: {
    backgroundColor: theme.colors.secondaryLight,
    borderColor: theme.colors.secondaryLight,
    opacity: 0.7,
  },
  // Text styling
  text: {
    fontSize: theme.typography.fontSize.label,
    fontWeight: theme.typography.fontWeight.medium,
    letterSpacing: 0.1,
  },
  // Text colors for different button types
  filledText: {
    color: theme.colors.text.inverse, // White text on Syracuse Orange
  },
  outlinedText: {
    color: theme.colors.primary, // Syracuse Orange text
  },
  textButtonText: {
    color: theme.colors.primary, // Syracuse Orange text
  },
  disabledText: {
    color: theme.colors.text.disabled,
  },
});

export default CustomButton;
