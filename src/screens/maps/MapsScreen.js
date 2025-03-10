import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapsScreen = () => {
  // Sample venue floors
  const floors = [
    { id: '1', name: 'Floor 1' },
    { id: '2', name: 'Floor 2' },
    { id: '3', name: 'Floor 3' },
  ];

  // Sample venue locations
  const locations = [
    {
      id: '1',
      name: 'Main Hall',
      floor: '1',
      description: 'Main conference hall for keynote presentations and large gatherings.',
    },
    {
      id: '2',
      name: 'Registration Desk',
      floor: '1',
      description: 'Check-in and information desk located in the main lobby.',
    },
    {
      id: '3',
      name: 'Dining Area',
      floor: '1',
      description: 'Dining area for meals and refreshments.',
    },
    {
      id: '4',
      name: 'Room 101',
      floor: '1',
      description: 'Breakout session room with capacity for 50 attendees.',
    },
    {
      id: '5',
      name: 'Room 102',
      floor: '1',
      description: 'Workshop room with tables and presentation equipment.',
    },
    {
      id: '6',
      name: 'Room 103',
      floor: '1',
      description: 'Breakout session room with capacity for 40 attendees.',
    },
    {
      id: '7',
      name: 'Room 201',
      floor: '2',
      description: 'Meeting room for small group discussions.',
    },
    {
      id: '8',
      name: 'Room 202',
      floor: '2',
      description: 'Workshop room with computer stations.',
    },
    {
      id: '9',
      name: 'Exhibitor Hall',
      floor: '2',
      description: 'Large open space for exhibitor booths and networking.',
    },
    {
      id: '10',
      name: 'Rooftop Terrace',
      floor: '3',
      description: 'Outdoor space for receptions and networking events.',
    },
  ];

  // State for selected floor
  const [selectedFloor, setSelectedFloor] = useState(floors[0].id);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Filter locations by selected floor
  const filteredLocations = locations.filter(
    (location) => location.floor === selectedFloor
  );

  // Get selected location details
  const locationDetails = selectedLocation
    ? locations.find((location) => location.id === selectedLocation)
    : null;

  // Placeholder for floor map images
  const getFloorMapImage = (floorId) => {
    // In a real app, you would have actual floor map images
    return { uri: `https://via.placeholder.com/800x600?text=Floor+${floorId}+Map` };
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Venue Maps</Text>
      </View>

      {/* Floor selector */}
      <View style={styles.floorSelector}>
        {floors.map((floor) => (
          <TouchableOpacity
            key={floor.id}
            style={[
              styles.floorButton,
              selectedFloor === floor.id && styles.selectedFloorButton,
            ]}
            onPress={() => {
              setSelectedFloor(floor.id);
              setSelectedLocation(null);
            }}
          >
            <Text
              style={[
                styles.floorButtonText,
                selectedFloor === floor.id && styles.selectedFloorButtonText,
              ]}
            >
              {floor.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentContainer}>
        {/* Map view */}
        <View style={styles.mapContainer}>
          <Image
            source={getFloorMapImage(selectedFloor)}
            style={styles.mapImage}
            resizeMode="contain"
          />
          {/* In a real app, you would overlay location markers on the map */}
        </View>

        {/* Location list */}
        <View style={styles.locationsContainer}>
          <Text style={styles.locationsTitle}>Locations on Floor {selectedFloor}</Text>
          <ScrollView style={styles.locationsList}>
            {filteredLocations.map((location) => (
              <TouchableOpacity
                key={location.id}
                style={[
                  styles.locationItem,
                  selectedLocation === location.id && styles.selectedLocationItem,
                ]}
                onPress={() => setSelectedLocation(location.id)}
              >
                <Text
                  style={[
                    styles.locationName,
                    selectedLocation === location.id && styles.selectedLocationName,
                  ]}
                >
                  {location.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Location details */}
      {locationDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>{locationDetails.name}</Text>
          <Text style={styles.detailsDescription}>{locationDetails.description}</Text>
          <TouchableOpacity style={styles.directionsButton}>
            <Text style={styles.directionsButtonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

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
  floorSelector: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  floorButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedFloorButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E88E5',
  },
  floorButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  selectedFloorButtonText: {
    color: '#1E88E5',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  mapContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  locationsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  locationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  locationsList: {
    flex: 1,
  },
  locationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedLocationItem: {
    backgroundColor: '#e3f2fd',
  },
  locationName: {
    fontSize: 15,
    color: '#333',
  },
  selectedLocationName: {
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  detailsDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  directionsButton: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  directionsButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MapsScreen;
