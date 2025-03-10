import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('Agenda')}
          >
            <Text style={styles.viewAllButtonText}>View Full Agenda</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsContainer}>
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('Maps')}
            >
              <Text style={styles.quickActionIcon}>🗺️</Text>
              <Text style={styles.quickActionText}>Venue Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('Speakers')}
            >
              <Text style={styles.quickActionIcon}>👥</Text>
              <Text style={styles.quickActionText}>Speakers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.quickActionIcon}>📋</Text>
              <Text style={styles.quickActionText}>My Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#1E88E5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  announcementCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  announcementContent: {
    fontSize: 14,
    color: '#666',
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventTime: {
    fontSize: 14,
    color: '#1E88E5',
    marginTop: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  viewDetails: {
    fontSize: 18,
    color: '#1E88E5',
  },
  viewAllButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  viewAllButtonText: {
    color: '#1E88E5',
    fontSize: 16,
    fontWeight: '500',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  quickActionButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '30%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
