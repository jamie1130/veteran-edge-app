import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';
import { conferenceDays, eventTypes, agendaEvents } from '../../data/agendaData';

const AgendaScreen = ({ navigation }) => {
  // State for selected day and event type
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedEventType, setSelectedEventType] = useState('all');

  // Filter events based on selected day and event type
  const filteredEvents = agendaEvents.filter(event => {
    if (event.day !== selectedDay) return false;
    if (selectedEventType === 'all') return true;
    return event.type === selectedEventType;
  });

  // Function to handle event press
  const handleEventPress = (event) => {
    navigation.navigate('EventDetails', { event });
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

  // Render event item
  const renderEventItem = ({ item }) => (
    <TouchableOpacity
      style={styles.eventCard}
      onPress={() => handleEventPress(item)}
    >
      <View style={[styles.eventTypeIndicator, { backgroundColor: getEventColor(item.type) }]} />
      <View style={styles.eventContent}>
        <Text style={styles.eventTime}>{item.time}</Text>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventLocation}>{item.location}</Text>
        {item.speaker && <Text style={styles.eventSpeaker}>{item.speaker}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Agenda</Text>
      </View>

      {/* Days selector */}
      <View style={styles.daysContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {conferenceDays.map((day) => (
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
      </View>

      {/* Event type filters */}
      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {eventTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.filterButton,
                selectedEventType === type.id && styles.selectedFilterButton,
              ]}
              onPress={() => setSelectedEventType(type.id)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedEventType === type.id && styles.selectedFilterButtonText,
                ]}
              >
                {type.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Events list */}
      <FlatList
        data={filteredEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.eventsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No events found for the selected filters.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  daysContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  dayButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: theme.colors.primary,
  },
  dayButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDayButtonText: {
    color: 'white',
  },
  dayDateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  selectedDayDateText: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  filtersContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
  },
  selectedFilterButton: {
    backgroundColor: theme.colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedFilterButtonText: {
    color: 'white',
  },
  eventsList: {
    padding: 15,
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  eventTypeIndicator: {
    width: 6,
  },
  eventContent: {
    padding: 15,
    flex: 1,
  },
  eventTime: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventSpeaker: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default AgendaScreen;
