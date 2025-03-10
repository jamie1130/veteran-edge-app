import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Veteran Enterprises',
    role: 'Entrepreneur',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
  });

  // Sample saved events
  const [savedEvents, setSavedEvents] = useState([
    {
      id: '1',
      title: 'Opening Keynote: The Future of Veteran Entrepreneurship',
      time: '9:00 AM - 10:30 AM',
      date: 'March 15, 2024',
      location: 'Main Hall',
    },
    {
      id: '3',
      title: 'Breakout Session: Securing Funding for Your Startup',
      time: '11:00 AM - 12:00 PM',
      date: 'March 15, 2024',
      location: 'Room 101',
    },
    {
      id: '5',
      title: 'Workshop: Business Plan Development',
      time: '1:30 PM - 3:00 PM',
      date: 'March 15, 2024',
      location: 'Room 102',
    },
  ]);

  // Settings state
  const [settings, setSettings] = useState({
    notifications: true,
    reminders: true,
    darkMode: false,
    dataSync: true,
  });

  // Toggle setting
  const toggleSetting = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  // Remove saved event
  const removeEvent = (eventId) => {
    Alert.alert(
      'Remove Event',
      'Are you sure you want to remove this event from your saved list?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setSavedEvents(savedEvents.filter((event) => event.id !== eventId));
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{userData.name}</Text>
            <Text style={styles.profileEmail}>{userData.email}</Text>
            <Text style={styles.profileDetails}>{userData.company}</Text>
            <Text style={styles.profileDetails}>{userData.role}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* My Schedule Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Schedule</Text>
          {savedEvents.length > 0 ? (
            savedEvents.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <View style={styles.eventInfo}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventTime}>{event.time}</Text>
                  <Text style={styles.eventDate}>{event.date}</Text>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeEvent(event.id)}
                >
                  <Text style={styles.removeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                You haven't saved any events to your schedule yet.
              </Text>
              <TouchableOpacity style={styles.browseButton}>
                <Text style={styles.browseButtonText}>Browse Agenda</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch
              value={settings.notifications}
              onValueChange={() => toggleSetting('notifications')}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings.notifications ? '#1E88E5' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Event Reminders</Text>
            <Switch
              value={settings.reminders}
              onValueChange={() => toggleSetting('reminders')}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings.reminders ? '#1E88E5' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              value={settings.darkMode}
              onValueChange={() => toggleSetting('darkMode')}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings.darkMode ? '#1E88E5' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Sync Data</Text>
            <Switch
              value={settings.dataSync}
              onValueChange={() => toggleSetting('dataSync')}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={settings.dataSync ? '#1E88E5' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <TouchableOpacity style={styles.aboutItem}>
            <Text style={styles.aboutItemText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutItem}>
            <Text style={styles.aboutItemText}>Terms of Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutItem}>
            <Text style={styles.aboutItemText}>Contact Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutItem}>
            <Text style={styles.aboutItemText}>App Version 1.0.0</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    backgroundColor: '#1E88E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  profileDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    backgroundColor: 'white',
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#1E88E5',
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    backgroundColor: '#ff5252',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  browseButton: {
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  browseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  aboutItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  aboutItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff5252',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
