/**
 * Theme configuration for the EDGE Conference App
 * This file contains color schemes, typography, spacing, and other UI constants
 * Based on Syracuse University design guidelines with Material 3 principles
 */

// Color palette based on Syracuse University brand guidelines
export const colors = {
  // Primary colors
  primary: '#D44500', // Syracuse Orange
  primaryDark: '#B33A00', // Darker variant of Syracuse Orange
  primaryLight: '#FF6D33', // Lighter variant of Syracuse Orange
  
  // Secondary/Neutral colors
  secondary: '#3E3D3C', // Dark Gray
  secondaryDark: '#2A2928', // Darker variant of Dark Gray
  secondaryLight: '#B5BABF', // Medium Gray
  
  // Surface and background colors
  background: '#F0F0F0', // Light Gray background
  surface: '#FFFFFF', // White surface
  card: '#FFFFFF', // White card background
  surfaceVariant: '#EAEAEA', // Light Gray variant for surfaces
  
  // Text colors
  text: {
    primary: '#3E3D3C', // Dark Gray for primary text
    secondary: '#5F5E5D', // Medium Dark Gray for secondary text
    disabled: '#B5BABF', // Medium Gray for disabled text
    hint: '#B5BABF', // Medium Gray for hint text
    inverse: '#FFFFFF', // White text for dark backgrounds
    onPrimary: '#FFFFFF', // White text on primary color
  },
  
  // Status colors
  status: {
    success: '#4CAF50', // Standard Material success color
    warning: '#FFC107', // Standard Material warning color
    error: '#F44336', // Standard Material error color
    info: '#2196F3', // Standard Material info color
  },
  
  // Event type colors - based on Syracuse Orange with complementary colors
  eventType: {
    keynote: '#D44500', // Syracuse Orange for keynotes
    breakout: '#4A6B8A', // Blue-gray for breakout sessions
    workshop: '#8A4A6B', // Purple-ish for workshops
    networking: '#6B8A4A', // Green for networking events
    other: '#3E3D3C', // Dark Gray for other events
  },
  
  // Border and outline colors
  border: '#B5BABF', // Medium Gray for borders
  outline: '#B5BABF', // Medium Gray for outlines
  
  // Misc
  divider: '#EEEEEE', // Light Gray for dividers
  shadow: 'rgba(0, 0, 0, 0.1)', // Subtle shadow
};

// Typography based on Syracuse University guidelines with Material 3 principles
export const typography = {
  fontFamily: {
    // Using system fonts as fallbacks for Sherman fonts
    serif: 'Georgia', // Fallback for Sherman Serif
    sansSerif: 'Arial', // Fallback for Sherman Sans
    display: 'Georgia', // For display and headlines (serif)
    headline: 'Georgia', // For headlines (serif)
    title: 'Arial', // For titles (sans-serif)
    body: 'Arial', // For body text (sans-serif)
    label: 'Arial', // For labels (sans-serif)
    caption: 'Arial', // For captions (sans-serif)
  },
  fontSize: {
    // Material 3 type scale
    caption: 12, // Caption
    label: 14, // Label
    body: 16, // Body
    bodyLarge: 18, // Body Large
    title: 20, // Title
    titleLarge: 22, // Title Large
    headline: 24, // Headline
    headlineLarge: 28, // Headline Large
    display: 34, // Display
    displayLarge: 40, // Display Large
  },
  lineHeight: {
    caption: 16, // 1.33 ratio
    label: 20, // 1.43 ratio
    body: 24, // 1.5 ratio
    bodyLarge: 28, // 1.56 ratio
    title: 30, // 1.5 ratio
    titleLarge: 32, // 1.45 ratio
    headline: 36, // 1.5 ratio
    headlineLarge: 40, // 1.43 ratio
    display: 48, // 1.41 ratio
    displayLarge: 56, // 1.4 ratio
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  // Material 3 typography styles
  styles: {
    display: {
      fontFamily: 'Georgia', // Sherman Serif fallback
      fontSize: 34,
      lineHeight: 48,
      fontWeight: '700',
      letterSpacing: 0,
    },
    headline: {
      fontFamily: 'Arial', // Sherman Sans fallback
      fontSize: 24,
      lineHeight: 36,
      fontWeight: '700',
      letterSpacing: 0,
    },
    title: {
      fontFamily: 'Arial', // Sherman Sans fallback
      fontSize: 20,
      lineHeight: 30,
      fontWeight: '600',
      letterSpacing: 0,
    },
    body: {
      fontFamily: 'Arial', // Sherman Sans fallback
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      letterSpacing: 0.15,
    },
    label: {
      fontFamily: 'Arial', // Sherman Sans fallback
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      letterSpacing: 0.1,
    },
    caption: {
      fontFamily: 'Arial', // Sherman Sans fallback
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      letterSpacing: 0.4,
    },
  },
};

// Spacing - Material 3 uses 4dp increments for spacing
export const spacing = {
  // Basic spacing scale
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  // Component-specific spacing
  buttonPadding: 16,
  cardPadding: 16,
  sectionPadding: 24,
  screenPadding: 16,
};

// Border radius - Material 3 uses medium rounded corners
export const borderRadius = {
  xs: 4, // Very subtle rounding
  sm: 8, // Subtle rounding
  md: 12, // Medium rounding for most components
  lg: 16, // More pronounced rounding
  xl: 24, // Very pronounced rounding
  pill: 9999, // Pill-shaped (fully rounded)
};

// Shadows - Material 3 uses subtle elevation
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.14,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 2.0,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 3.0,
    elevation: 4,
  },
};

// Button styles based on Material 3 and Syracuse guidelines
export const buttonStyles = {
  // Filled button (high emphasis)
  filled: {
    backgroundColor: colors.primary,
    color: colors.text.inverse,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    ...shadows.sm,
  },
  // Outlined button (medium emphasis)
  outlined: {
    backgroundColor: 'transparent',
    color: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  // Text button (low emphasis)
  text: {
    backgroundColor: 'transparent',
    color: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
};

// Common styles
export const commonStyles = {
  // Layout containers
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },
  // Card component
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.cardPadding,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  // Layout helpers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  // Dividers
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  // Typography styles using Material 3 typography
  displayText: {
    ...typography.styles.display,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  headlineText: {
    ...typography.styles.headline,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  titleText: {
    ...typography.styles.title,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  bodyText: {
    ...typography.styles.body,
    color: colors.text.primary,
  },
  labelText: {
    ...typography.styles.label,
    color: colors.text.primary,
  },
  captionText: {
    ...typography.styles.caption,
    color: colors.text.secondary,
  },
  // Section headers
  sectionTitle: {
    ...typography.styles.headline,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  // Syracuse branded elements
  syracuseBranding: {
    color: colors.primary,
    ...typography.styles.title,
    fontWeight: typography.fontWeight.bold,
  },
};

// Theme object that combines all the above
const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  buttonStyles,
  commonStyles,
};

export default theme;
