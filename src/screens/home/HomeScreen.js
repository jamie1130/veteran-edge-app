import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../utils/theme';
import CustomButton from '../../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: '1',
      title: 'Opening Keynote',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Hall',
    },
    {
      id: '2',
      title: 'Networking Lunch',
      time: '12:00 PM - 1:30 PM',
      location: 'Dining Area',
    },
    {
      id: '3',
      title: 'Breakout Session: Veteran Entrepreneurship',
      time: '2:00 PM - 3:30 PM',
      location: 'Room 101',
    },
  ];

  // Sample announcements
  const announcements = [
    {
      id: '1',
      title: 'Welcome to EDGE Conference 2024!',
      content: 'We\'re excited to have you join us for this year\'s conference.',
    },
    {
      id: '2',
      title: 'WiFi Information',
      content: 'Network: EDGE2024, Password: VeteranSuccess',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>EDGE Conference</Text>
          <Text style={styles.headerSubtitle}>Welcome, Attendee!</Text>
        </View>

        {/* Announcements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Announcements</Text>
          {announcements.map((announcement) => (
            <View key={announcement.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementContent}>{announcement.content}</Text>
            </View>
          ))}
        </View>

        {/* Today's Schedule */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          {upcomingEvents.map((event) => (
            <TouchableOpacity
              key={event.id}
              style={styles.eventCard}
              onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
            >
              <View style={styles.eventInfo}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventTime}>{event.time}</Text>
                <Text style={styles.eventLocation}>{event.location}</Text>
              </View>
              <Text style={styles.viewDetails}>→</Text>
            </TouchableOpacity>
          ))}
          <CustomButton
            title="View Full Agenda"
            type="text"
            onPress={() => navigation.navigate('Agenda')}
            style={styles.viewAllButton}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsContainer}>
            <View style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>🗺️</Text>
              <CustomButton
                title="Venue Map"
                type="text"
                onPress={() => navigation.navigate('Maps')}
                textStyle={styles.quickActionText}
              />
            </View>
            <View style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>👥</Text>
              <CustomButton
                title="Speakers"
                type="text"
                onPress={() => navigation.navigate('Speakers')}
                textStyle={styles.quickActionText}
              />
            </View>
            <View style={styles.quickActionButton}>
              <Text style={styles.quickActionIcon}>📋</Text>
              <CustomButton
                title="My Schedule"
                type="text"
                onPress={() => navigation.navigate('Profile')}
                textStyle={styles.quickActionText}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.primary, // Syracuse Orange
  },
  headerTitle: {
    ...theme.typography.styles.headline,
    color: theme.colors.text.inverse, // White text on orange background
  },
  headerSubtitle: {
    ...theme.typography.styles.subheading,
    color: theme.colors.text.inverse,
    opacity: 0.9,
    marginTop: theme.spacing.xs,
  },
  section: {
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.styles.title,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  announcementCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    ...theme.shadows.sm,
  },
  announcementTitle: {
    ...theme.typography.styles.subtitle,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  announcementContent: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
  },
  eventCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    ...theme.typography.styles.subtitle,
    color: theme.colors.text.primary,
  },
  eventTime: {
    ...theme.typography.styles.body,
    color: theme.colors.primary, // Syracuse Orange
    marginTop: theme.spacing.xs,
  },
  eventLocation: {
    ...theme.typography.styles.body,
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  viewDetails: {
    fontSize: 18,
    color: theme.colors.primary, // Syracuse Orange
  },
  viewAllButton: {
    backgroundColor: 'transparent',
    padding: theme.spacing.sm,
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  viewAllButtonText: {
    color: theme.colors.primary, // Syracuse Orange
    ...theme.typography.styles.button,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xs,
  },
  quickActionButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    width: '30%',
    ...theme.shadows.sm,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: theme.spacing.xs,
  },
  quickActionText: {
    ...theme.typography.styles.caption,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
});

export default HomeScreen;
