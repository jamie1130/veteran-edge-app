import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';
import { breakoutSessions } from '../../data/agendaData';

const EventDetailsScreen = ({ route, navigation }) => {
  const { event } = route.params;
  
  // Check if this event has detailed breakout session info
  const breakoutDetails = event.id && event.id.startsWith('session-') ? 
    breakoutSessions[`Session ${event.id.split('-')[1]}`] : 
    (event.id && event.id.startsWith('workshop-') ? 
      breakoutSessions[`Workshop ${event.id.split('-')[1]}`] : null);

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

  // Navigate to speaker details if speaker exists
  const goToSpeakerDetails = () => {
    if (event.speaker) {
      navigation.navigate('SpeakerDetail', { 
        speaker: {
          id: event.id,
          name: event.speaker.split(',')[0],
          title: event.speaker.includes(',') ? event.speaker.split(',')[1].trim() : '',
          bio: `Speaker at the session: ${event.title}`,
          expertise: event.tags || [],
          sessions: [event.title]
        } 
      });
    }
  };

  // Function to get color based on event type
  const getEventColor = (type) => {
    switch (type) {
      case 'keynote':
        return theme.colors.primary;
      case 'breakout':
        return theme.colors.secondary;
      case 'workshop':
        return '#6200EA'; // Deep Purple
      case 'networking':
        return '#00897B'; // Teal
      case 'panel':
        return '#F57C00'; // Orange
      case 'meal':
        return '#43A047'; // Green
      default:
        return theme.colors.primary;
    }
  };

  // Generate tags based on event type and title
  const generateTags = () => {
    const tags = [];
    
    // Add event type as a tag
    if (event.type) {
      tags.push(event.type.charAt(0).toUpperCase() + event.type.slice(1));
    }
    
    // Extract potential keywords from title
    const titleWords = event.title.toLowerCase();
    if (titleWords.includes('business')) tags.push('Business');
    if (titleWords.includes('funding') || titleWords.includes('capital')) tags.push('Funding');
    if (titleWords.includes('marketing')) tags.push('Marketing');
    if (titleWords.includes('legal')) tags.push('Legal');
    if (titleWords.includes('pitch')) tags.push('Pitching');
    if (titleWords.includes('entrepreneurship')) tags.push('Entrepreneurship');
    if (titleWords.includes('leadership')) tags.push('Leadership');
    if (titleWords.includes('innovation')) tags.push('Innovation');
    if (titleWords.includes('technology') || titleWords.includes('tech')) tags.push('Technology');
    if (titleWords.includes('health')) tags.push('Health');
    if (titleWords.includes('contract')) tags.push('Contracting');
    if (titleWords.includes('federal') || titleWords.includes('government')) tags.push('Government');
    
    // Return unique tags
    return [...new Set(tags)];
  };

  const eventTags = generateTags();

  // Get the correct date based on day ID
  const getEventDate = (dayId) => {
    switch (dayId) {
      case '1':
        return 'March 20, 2024';
      case '2':
        return 'March 21, 2024';
      case '3':
        return 'March 22, 2024';
      case '4':
        return 'March 23, 2024';
      default:
        return 'March 2024';
    }
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
            <Text style={styles.headerTitle}>{event.title}</Text>
          </View>
        </View>

        {/* Event Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📅</Text>
            <Text style={styles.detailText}>{getEventDate(event.day)}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🕒</Text>
            <Text style={styles.detailText}>{event.time}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📍</Text>
            <Text style={styles.detailText}>{event.location}</Text>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {eventTags.map((tag, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: `${getEventColor(event.type)}20` }]}>
              <Text style={[styles.tagText, { color: getEventColor(event.type) }]}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {breakoutDetails?.description || event.description || 'No description available for this event.'}
          </Text>
        </View>

        {/* Speaker Section (if available) */}
        {(event.speaker || breakoutDetails?.speaker) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Speaker</Text>
            <View style={styles.speakerContainer}>
              <View style={styles.speakerImageContainer}>
                <View style={styles.speakerImagePlaceholder}>
                  <Text style={styles.speakerInitials}>
                    {(breakoutDetails?.speaker || event.speaker).split(' ')[0][0]}
                    {(breakoutDetails?.speaker || event.speaker).split(' ').length > 1 ? 
                      (breakoutDetails?.speaker || event.speaker).split(' ')[1][0] : ''}
                  </Text>
                </View>
              </View>
              <View style={styles.speakerInfo}>
                <Text style={styles.speakerName}>
                  {(breakoutDetails?.speaker || event.speaker).split(',')[0]}
                </Text>
                {(breakoutDetails?.speaker || event.speaker).includes(',') && (
                  <Text style={styles.speakerTitle}>
                    {(breakoutDetails?.speaker || event.speaker).split(',')[1].trim()}
                  </Text>
                )}
                <TouchableOpacity onPress={goToSpeakerDetails}>
                  <Text style={styles.viewProfileText}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Panel Section (if available) */}
        {event.panelists && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Panel</Text>
            {event.speaker && event.speaker.toLowerCase().includes('moderator') && (
              <Text style={styles.moderatorText}>{event.speaker}</Text>
            )}
            <View style={styles.panelistsContainer}>
              {event.panelists.map((panelist, index) => (
                <View key={index} style={styles.panelistItem}>
                  <Text style={styles.panelistBullet}>•</Text>
                  <Text style={styles.panelistName}>{panelist}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Save Button */}
        <TouchableOpacity
          style={[styles.saveButton, isSaved && styles.savedButton]}
          onPress={toggleSave}
        >
          <Text style={styles.saveButtonText}>
            {isSaved ? 'Remove from My Schedule' : 'Add to My Schedule'}
          </Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.primary,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: -15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    paddingTop: 0,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  speakerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakerImageContainer: {
    marginRight: 15,
  },
  speakerImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  speakerInitials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  speakerInfo: {
    flex: 1,
  },
  speakerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  speakerTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  viewProfileText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  moderatorText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
  },
  panelistsContainer: {
    marginTop: 10,
  },
  panelistItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  panelistBullet: {
    fontSize: 16,
    color: theme.colors.primary,
    marginRight: 8,
  },
  panelistName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 30,
    marginTop: 5,
  },
  savedButton: {
    backgroundColor: '#f44336',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventDetailsScreen;
