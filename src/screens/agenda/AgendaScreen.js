import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AgendaScreen = ({ navigation }) => {
  // Sample conference days
  const days = [
    { id: '1', date: 'March 15, 2024', day: 'Day 1' },
    { id: '2', date: 'March 16, 2024', day: 'Day 2' },
    { id: '3', date: 'March 17, 2024', day: 'Day 3' },
  ];

  // Sample event types for filtering
  const eventTypes = [
    { id: 'all', label: 'All' },
    { id: 'keynote', label: 'Keynotes' },
    { id: 'breakout', label: 'Breakouts' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'networking', label: 'Networking' },
  ];

  // Sample events data
  const eventsData = [
    {
      id: '1',
      title: 'Registration & Breakfast',
      time: '8:00 AM - 9:00 AM',
      location: 'Main Lobby',
      type: 'networking',
      day: '1',
    },
    {
      id: '2',
      title: 'Opening Keynote: The Future of Veteran Entrepreneurship',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Hall',
      speaker: 'John Smith, CEO of Veteran Ventures',
      type: 'keynote',
      day: '1',
    },
    {
      id: '3',
      title: 'Breakout Session: Securing Funding for Your Startup',
      time: '11:00 AM - 12:00 PM',
      location: 'Room 101',
      speaker: 'Sarah Johnson, Angel Investor',
      type: 'breakout',
      day: '1',
    },
    {
      id: '4',
      title: 'Networking Lunch',
      time: '12:00 PM - 1:30 PM',
      location: 'Dining Area',
      type: 'networking',
      day: '1',
    },
    {
      id: '5',
      title: 'Workshop: Business Plan Development',
      time: '1:30 PM - 3:00 PM',
      location: 'Room 102',
      speaker: 'Michael Brown, Business Consultant',
      type: 'workshop',
      day: '1',
    },
    {
      id: '6',
      title: 'Breakout Session: Marketing Strategies for Small Businesses',
      time: '3:30 PM - 4:30 PM',
      location: 'Room 103',
      speaker: 'Lisa Chen, Marketing Director',
      type: 'breakout',
      day: '1',
    },
    {
      id: '7',
      title: 'Day 1 Closing Remarks',
      time: '4:30 PM - 5:00 PM',
      location: 'Main Hall',
      type: 'keynote',
      day: '1',
    },
    {
      id: '8',
      title: 'Welcome Reception',
      time: '5:00 PM - 7:00 PM',
      location: 'Rooftop Terrace',
      type: 'networking',
      day: '1',
    },
    // Day 2 events
    {
      id: '9',
      title: 'Breakfast',
      time: '8:00 AM - 9:00 AM',
      location: 'Main Lobby',
      type: 'networking',
      day: '2',
    },
    {
      id: '10',
      title: 'Day 2 Keynote: Scaling Your Business',
      time: '9:00 AM - 10:30 AM',
      location: 'Main Hall',
      speaker: 'Robert Davis, Successful Entrepreneur',
      type: 'keynote',
      day: '2',
    },
  ];

  // State for selected day and event type
  const [selectedDay, setSelectedDay] = useState(days[0].id);
  const [selectedType, setSelectedType] = useState('all');

  // Filter events based on selected day and type
  const filteredEvents = eventsData.filter(
    (event) =>
      event.day === selectedDay &&
      (selectedType === 'all' || event.type === selectedType)
  );

  // Group events by time
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const time = event.time.split(' - ')[0]; // Group by start time
    if (!acc[time]) {
      acc[time] = [];
    }
    acc[time].push(event);
    return acc;
  }, {});

  // Convert grouped events to array for rendering
  const timeSlots = Object.keys(groupedEvents).sort((a, b) => {
    // Sort by time (assuming format like "9:00 AM")
    const timeA = new Date(`1/1/2021 ${a}`);
    const timeB = new Date(`1/1/2021 ${b}`);
    return timeA - timeB;
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Conference Agenda</Text>
      </View>

      {/* Day selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.daySelector}
        contentContainerStyle={styles.daySelectorContent}
      >
        {days.map((day) => (
          <TouchableOpacity
            key={day.id}
            style={[
              styles.dayButton,
              selectedDay === day.id && styles.selectedDayButton,
            ]}
            onPress={() => setSelectedDay(day.id)}
          >
            <Text
              style={[
                styles.dayButtonText,
                selectedDay === day.id && styles.selectedDayButtonText,
              ]}
            >
              {day.day}
            </Text>
            <Text
              style={[
                styles.dayDateText,
                selectedDay === day.id && styles.selectedDayDateText,
              ]}
            >
              {day.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Event type filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.typeSelector}
        contentContainerStyle={styles.typeSelectorContent}
      >
        {eventTypes.map((type) => (
          <TouchableOpacity
            key={type.id}
            style={[
              styles.typeButton,
              selectedType === type.id && styles.selectedTypeButton,
            ]}
            onPress={() => setSelectedType(type.id)}
          >
            <Text
              style={[
                styles.typeButtonText,
                selectedType === type.id && styles.selectedTypeButtonText,
              ]}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Events list */}
      <ScrollView style={styles.eventsContainer}>
        {timeSlots.length > 0 ? (
          timeSlots.map((timeSlot) => (
            <View key={timeSlot} style={styles.timeSlot}>
              <View style={styles.timeIndicator}>
                <Text style={styles.timeText}>{timeSlot}</Text>
                <View style={styles.timeLine} />
              </View>
              <View style={styles.eventsGroup}>
                {groupedEvents[timeSlot].map((event) => (
                  <TouchableOpacity
                    key={event.id}
                    style={styles.eventCard}
                    onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
                  >
                    <View style={[styles.eventTypeIndicator, { backgroundColor: getEventColor(event.type) }]} />
                    <View style={styles.eventContent}>
                      <Text style={styles.eventTitle}>{event.title}</Text>
                      <Text style={styles.eventTime}>{event.time}</Text>
                      <Text style={styles.eventLocation}>{event.location}</Text>
                      {event.speaker && (
                        <Text style={styles.eventSpeaker}>{event.speaker}</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noEventsContainer}>
            <Text style={styles.noEventsText}>No events found for the selected filters.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
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
  daySelector: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  daySelectorContent: {
    paddingHorizontal: 10,
  },
  dayButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E88E5',
  },
  dayButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  selectedDayButtonText: {
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  dayDateText: {
    fontSize: 12,
    color: '#757575',
    marginTop: 4,
  },
  selectedDayDateText: {
    color: '#1E88E5',
  },
  typeSelector: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  typeSelectorContent: {
    paddingHorizontal: 10,
  },
  typeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedTypeButton: {
    backgroundColor: '#1E88E5',
  },
  typeButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTypeButtonText: {
    color: 'white',
  },
  eventsContainer: {
    flex: 1,
    padding: 15,
  },
  timeSlot: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeIndicator: {
    width: 80,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#757575',
  },
  timeLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    marginLeft: 5,
  },
  eventsGroup: {
    flex: 1,
  },
  eventCard: {
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
  eventTypeIndicator: {
    width: 5,
  },
  eventContent: {
    padding: 15,
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
    marginBottom: 3,
  },
  eventLocation: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 3,
  },
  eventSpeaker: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  noEventsContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noEventsText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
});

export default AgendaScreen;
