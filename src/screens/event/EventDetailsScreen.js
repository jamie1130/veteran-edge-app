import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EventDetailsScreen = ({ route, navigation }) => {
  const { eventId } = route.params;

  // In a real app, you would fetch event details from an API or database
  // For this prototype, we'll use sample data
  const eventData = {
    id: eventId,
    title: 'Opening Keynote: The Future of Veteran Entrepreneurship',
    date: 'March 15, 2024',
    time: '9:00 AM - 10:30 AM',
    location: 'Main Hall',
    description:
      'Join us for an inspiring keynote address on the future of veteran entrepreneurship. This session will explore emerging opportunities, challenges, and strategies for success in the evolving business landscape.',
    speaker: {
      id: '1',
      name: 'John Smith',
      title: 'CEO, Veteran Ventures',
      bio: 'John Smith is the founder and CEO of Veteran Ventures, a company dedicated to helping veteran entrepreneurs succeed in the business world.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    tags: ['Keynote', 'Entrepreneurship', 'Business Strategy'],
    attendees: 120,
    capacity: 200,
  };

  // State for saved status
  const [isSaved, setIsSaved] = useState(false);

  // Toggle save status
  const toggleSave = () => {
    setIsSaved(!isSaved);
    Alert.alert(
      isSaved ? 'Removed from Schedule' : 'Added to Schedule',
      isSaved
        ? 'This event has been removed from your schedule.'
        : 'This event has been added to your schedule.',
      [{ text: 'OK' }]
    );
  };

  // Navigate to speaker details
  const goToSpeakerDetails = () => {
    navigation.navigate('SpeakerDetail', { speakerId: eventData.speaker.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Event Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{eventData.title}</Text>
          </View>
        </View>

        {/* Event Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📅</Text>
            <Text style={styles.detailText}>{eventData.date}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🕒</Text>
            <Text style={styles.detailText}>{eventData.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📍</Text>
            <Text style={styles.detailText}>{eventData.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>👥</Text>
            <Text style={styles.detailText}>
              {eventData.attendees} attending ({eventData.capacity} capacity)
            </Text>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {eventData.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{eventData.description}</Text>
        </View>

        {/* Speaker */}
        {eventData.speaker && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Speaker</Text>
            <TouchableOpacity
              style={styles.speakerCard}
              onPress={goToSpeakerDetails}
            >
              <Image
                source={{ uri: eventData.speaker.image }}
                style={styles.speakerImage}
              />
              <View style={styles.speakerInfo}>
                <Text style={styles.speakerName}>{eventData.speaker.name}</Text>
                <Text style={styles.speakerTitle}>{eventData.speaker.title}</Text>
                <Text style={styles.speakerBio} numberOfLines={2}>
                  {eventData.speaker.bio}
                </Text>
                <Text style={styles.viewProfile}>View Profile →</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Related Sessions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>You Might Also Be Interested In</Text>
          <TouchableOpacity
            style={styles.relatedEventCard}
            onPress={() => navigation.navigate('EventDetails', { eventId: '3' })}
          >
            <View style={styles.relatedEventContent}>
              <Text style={styles.relatedEventTitle}>
                Breakout Session: Securing Funding for Your Startup
              </Text>
              <Text style={styles.relatedEventDetails}>
                11:00 AM - 12:00 PM • Room 101
              </Text>
            </View>
            <Text style={styles.viewDetails}>→</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.relatedEventCard}
            onPress={() => navigation.navigate('EventDetails', { eventId: '5' })}
          >
            <View style={styles.relatedEventContent}>
              <Text style={styles.relatedEventTitle}>
                Workshop: Business Plan Development
              </Text>
              <Text style={styles.relatedEventDetails}>
                1:30 PM - 3:00 PM • Room 102
              </Text>
            </View>
            <Text style={styles.viewDetails}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.locationButton]}
          onPress={() => navigation.navigate('Maps')}
        >
          <Text style={styles.locationButtonText}>View on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.saveButton,
            isSaved && styles.savedButton,
          ]}
          onPress={toggleSave}
        >
          <Text style={styles.saveButtonText}>
            {isSaved ? 'Remove from Schedule' : 'Add to My Schedule'}
          </Text>
        </TouchableOpacity>
      </View>
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
    padding: 15,
    backgroundColor: '#1E88E5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tag: {
    backgroundColor: '#e3f2fd',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#1E88E5',
    fontSize: 14,
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  speakerCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  speakerImage: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
  },
  speakerInfo: {
    flex: 1,
    padding: 15,
  },
  speakerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  speakerTitle: {
    fontSize: 14,
    color: '#1E88E5',
    marginBottom: 5,
  },
  speakerBio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  viewProfile: {
    fontSize: 14,
    color: '#1E88E5',
    marginTop: 5,
  },
  relatedEventCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  relatedEventContent: {
    flex: 1,
  },
  relatedEventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  relatedEventDetails: {
    fontSize: 14,
    color: '#666',
  },
  viewDetails: {
    fontSize: 18,
    color: '#1E88E5',
  },
  actionContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationButton: {
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  locationButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: '#1E88E5',
    flex: 2,
  },
  savedButton: {
    backgroundColor: '#4CAF50',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EventDetailsScreen;
