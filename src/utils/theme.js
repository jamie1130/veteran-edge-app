/**
 * Theme configuration for the EDGE Conference App
 * This file contains color schemes, typography, spacing, and other UI constants
 */

// Color palette
export const colors = {
  // Primary colors
  primary: '#1E88E5',
  primaryDark: '#1565C0',
  primaryLight: '#64B5F6',
  
  // Secondary colors
  secondary: '#FF5722',
  secondaryDark: '#E64A19',
  secondaryLight: '#FF8A65',
  
  // Accent colors
  accent: '#4CAF50',
  accentDark: '#388E3C',
  accentLight: '#81C784',
  
  // Neutral colors
  background: '#FFFFFF',
  surface: '#F5F5F5',
  card: '#FFFFFF',
  
  // Text colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    hint: '#9E9E9E',
    inverse: '#FFFFFF',
  },
  
  // Status colors
  status: {
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#F44336',
    info: '#2196F3',
  },
  
  // Event type colors
  eventType: {
    keynote: '#FF5722',
    breakout: '#4CAF50',
    workshop: '#2196F3',
    networking: '#9C27B0',
    other: '#757575',
  },
  
  // Border colors
  border: '#E0E0E0',
  
  // Misc
  divider: '#EEEEEE',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

// Typography
export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 42,
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Border radius
export const borderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  round: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

// Common styles
export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
};

// Theme object that combines all the above
const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  commonStyles,
};

export default theme;
