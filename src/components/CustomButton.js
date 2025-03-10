import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * CustomButton - A reusable button component with consistent styling
 * 
 * @param {string} title - Button text
 * @param {function} onPress - Function to call when button is pressed
 * @param {string} type - Button type: 'primary', 'secondary', 'outline', 'text' (default: 'primary')
 * @param {boolean} isLoading - Whether to show a loading indicator (default: false)
 * @param {boolean} disabled - Whether the button is disabled (default: false)
 * @param {object} style - Additional style for the button (optional)
 * @param {object} textStyle - Additional style for the button text (optional)
 */
const CustomButton = ({
  title,
  onPress,
  type = 'primary',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}) => {
  // Determine button style based on type
  const getButtonStyle = () => {
    switch (type) {
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      case 'text':
        return styles.textButton;
      default:
        return styles.primaryButton;
    }
  };

  // Determine text style based on type
  const getTextStyle = () => {
    switch (type) {
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      case 'text':
        return styles.textButtonText;
      default:
        return styles.primaryText;
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
          color={type === 'primary' ? 'white' : '#1E88E5'} 
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  primaryButton: {
    backgroundColor: '#1E88E5',
  },
  secondaryButton: {
    backgroundColor: '#E3F2FD',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1E88E5',
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#1E88E5',
  },
  outlineText: {
    color: '#1E88E5',
  },
  textButtonText: {
    color: '#1E88E5',
  },
  disabledText: {
    color: '#9E9E9E',
  },
});

export default CustomButton;
