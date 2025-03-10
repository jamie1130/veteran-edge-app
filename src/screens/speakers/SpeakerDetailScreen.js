import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SpeakerDetailScreen = ({ route, navigation }) => {
  const { speakerId } = route.params;

  // In a real app, you would fetch speaker details from an API or database
  // For this prototype, we'll use sample data
  const speakerData = {
    id: speakerId,
    name: 'John Smith',
    title: 'CEO, Veteran Ventures',
    bio: 'John Smith is the founder and CEO of Veteran Ventures, a company dedicated to helping veteran entrepreneurs succeed in the business world. After serving 10 years in the military, John founded his company with a mission to bridge the gap between military service and business ownership. He has helped over 200 veterans launch successful businesses and continues to advocate for veteran entrepreneurship across the country.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    sessions: [
      {
        id: '2',
        title: 'Opening Keynote: The Future of Veteran Entrepreneurship',
        time: '9:00 AM - 10:30 AM',
        date: 'March 15, 2024',
        location: 'Main Hall',
      },
    ],
    socialMedia: {
      twitter: '@johnsmith',
      linkedin: 'linkedin.com/in/johnsmith',
      website: 'veteranventures.com',
    },
    expertise: ['Entrepreneurship', 'Business Strategy', 'Veteran Affairs', 'Leadership'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Speaker Profile</Text>
        </View>

        {/* Speaker Profile */}
        <View style={styles.profileContainer}>
          <Image source={{ uri: speakerData.image }} style={styles.profileImage} />
          <Text style={styles.speakerName}>{speakerData.name}</Text>
          <Text style={styles.speakerTitle}>{speakerData.title}</Text>
          
          {/* Social Media */}
          <View style={styles.socialContainer}>
            {speakerData.socialMedia.twitter && (
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Twitter</Text>
              </TouchableOpacity>
            )}
            {speakerData.socialMedia.linkedin && (
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>LinkedIn</Text>
              </TouchableOpacity>
            )}
            {speakerData.socialMedia.website && (
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>Website</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Biography</Text>
          <Text style={styles.bioText}>{speakerData.bio}</Text>
        </View>

        {/* Expertise Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Areas of Expertise</Text>
          <View style={styles.expertiseContainer}>
            {speakerData.expertise.map((item, index) => (
              <View key={index} style={styles.expertiseItem}>
                <Text style={styles.expertiseText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sessions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Speaking Sessions</Text>
          {speakerData.sessions.map((session) => (
            <TouchableOpacity
              key={session.id}
              style={styles.sessionCard}
              onPress={() => navigation.navigate('EventDetails', { eventId: session.id })}
            >
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionTitle}>{session.title}</Text>
                <Text style={styles.sessionTime}>{session.time}</Text>
                <Text style={styles.sessionDate}>{session.date}</Text>
                <Text style={styles.sessionLocation}>{session.location}</Text>
              </View>
              <Text style={styles.viewDetails}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Send Message</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1E88E5',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  speakerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  speakerTitle: {
    fontSize: 16,
    color: '#1E88E5',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 14,
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
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
  bioText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  expertiseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  expertiseItem: {
    backgroundColor: '#e3f2fd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  expertiseText: {
    color: '#1E88E5',
    fontSize: 14,
  },
  sessionCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionInfo: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sessionTime: {
    fontSize: 14,
    color: '#1E88E5',
  },
  sessionDate: {
    fontSize: 14,
    color: '#666',
  },
  sessionLocation: {
    fontSize: 14,
    color: '#666',
  },
  viewDetails: {
    fontSize: 18,
    color: '#1E88E5',
  },
  contactButton: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SpeakerDetailScreen;
