import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * EventCard - A reusable component for displaying event information
 * 
 * @param {object} event - Event data object containing title, time, date, location
 * @param {function} onPress - Function to call when card is pressed
 * @param {string} type - Event type for color coding (optional)
 * @param {object} style - Additional style for the card (optional)
 */
const EventCard = ({ event, onPress, type, style }) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {type && (
        <View 
          style={[
            styles.typeIndicator, 
            { backgroundColor: getEventColor(type) }
          ]} 
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {event.title}
        </Text>
        <Text style={styles.time}>
          {event.time}
        </Text>
        {event.date && (
          <Text style={styles.date}>
            {event.date}
          </Text>
        )}
        <Text style={styles.location}>
          {event.location}
        </Text>
        {event.speaker && (
          <Text style={styles.speaker}>
            {event.speaker}
          </Text>
        )}
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
};

// Helper function to get color based on event type
const getEventColor = (type) => {
  switch (type) {
    case 'keynote':
      return '#FF5722'; // Orange
    case 'breakout':
      return '#4CAF50'; // Green
    case 'workshop':
      return '#2196F3'; // Blue
    case 'networking':
      return '#9C27B0'; // Purple
    default:
      return '#757575'; // Grey
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  typeIndicator: {
    width: 5,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#1E88E5',
    marginBottom: 2,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  speaker: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  arrow: {
    fontSize: 18,
    color: '#1E88E5',
    alignSelf: 'center',
    marginRight: 15,
  },
});

export default EventCard;
