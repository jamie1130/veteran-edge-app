import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

/**
 * SpeakerCard - A reusable component for displaying speaker information
 * 
 * @param {object} speaker - Speaker data object containing name, title, bio, image
 * @param {function} onPress - Function to call when card is pressed
 * @param {boolean} compact - Whether to show a compact version of the card (optional)
 * @param {object} style - Additional style for the card (optional)
 */
const SpeakerCard = ({ speaker, onPress, compact = false, style }) => {
  return (
    <TouchableOpacity
      style={[styles.card, compact && styles.compactCard, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: speaker.image }} 
        style={compact ? styles.compactImage : styles.image} 
      />
      <View style={styles.content}>
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.title}>{speaker.title}</Text>
        {!compact && (
          <>
            <Text style={styles.bio} numberOfLines={2}>
              {speaker.bio}
            </Text>
            {speaker.sessions && speaker.sessions.length > 0 && (
              <>
                <Text style={styles.sessionsLabel}>Sessions:</Text>
                {speaker.sessions.map((session, index) => (
                  <Text key={index} style={styles.session} numberOfLines={1}>
                    • {session}
                  </Text>
                ))}
              </>
            )}
          </>
        )}
        {compact && (
          <Text style={styles.viewProfile}>View Profile →</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  compactCard: {
    marginBottom: 10,
    height: 80,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  compactImage: {
    width: 60,
    height: 80,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#1E88E5',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  sessionsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 4,
  },
  session: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  viewProfile: {
    fontSize: 14,
    color: '#1E88E5',
    marginTop: 5,
  },
});

export default SpeakerCard;
