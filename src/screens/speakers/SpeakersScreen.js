import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SpeakersScreen = ({ navigation }) => {
  // Sample speakers data
  const speakersData = [
    {
      id: '1',
      name: 'John Smith',
      title: 'CEO, Veteran Ventures',
      bio: 'John Smith is the founder and CEO of Veteran Ventures, a company dedicated to helping veteran entrepreneurs succeed in the business world.',
      sessions: ['Opening Keynote: The Future of Veteran Entrepreneurship'],
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'Angel Investor',
      bio: 'Sarah Johnson is an angel investor with a focus on veteran-owned startups. She has invested in over 30 companies and mentors entrepreneurs on securing funding.',
      sessions: ['Breakout Session: Securing Funding for Your Startup'],
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '3',
      name: 'Michael Brown',
      title: 'Business Consultant',
      bio: 'Michael Brown is a business consultant with 15 years of experience helping small businesses develop comprehensive business plans and growth strategies.',
      sessions: ['Workshop: Business Plan Development'],
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '4',
      name: 'Lisa Chen',
      title: 'Marketing Director',
      bio: 'Lisa Chen is a marketing director with expertise in digital marketing strategies for small businesses and startups. She previously served in the U.S. Army.',
      sessions: ['Breakout Session: Marketing Strategies for Small Businesses'],
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: '5',
      name: 'Robert Davis',
      title: 'Successful Entrepreneur',
      bio: 'Robert Davis is a Navy veteran who built a successful tech company from the ground up. He now advises other veteran entrepreneurs on scaling their businesses.',
      sessions: ['Day 2 Keynote: Scaling Your Business'],
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '6',
      name: 'Jennifer Wilson',
      title: 'Financial Advisor',
      bio: 'Jennifer Wilson specializes in financial planning for small businesses and startups. She helps entrepreneurs make sound financial decisions for long-term growth.',
      sessions: ['Workshop: Financial Planning for Your Business'],
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: '7',
      name: 'David Martinez',
      title: 'Tech Entrepreneur',
      bio: 'David Martinez is a Marine Corps veteran and founder of a successful SaaS company. He shares insights on leveraging technology to grow your business.',
      sessions: ['Breakout Session: Technology Solutions for Small Businesses'],
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: '8',
      name: 'Emily Taylor',
      title: 'HR Consultant',
      bio: 'Emily Taylor is an HR consultant who helps small businesses develop effective hiring and retention strategies. She focuses on building strong company cultures.',
      sessions: ['Workshop: Building Your Team'],
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter speakers based on search query
  const filteredSpeakers = speakersData.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.sessions.some((session) =>
        session.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Render speaker item
  const renderSpeakerItem = ({ item }) => (
    <TouchableOpacity
      style={styles.speakerCard}
      onPress={() => navigation.navigate('SpeakerDetail', { speakerId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.speakerImage} />
      <View style={styles.speakerInfo}>
        <Text style={styles.speakerName}>{item.name}</Text>
        <Text style={styles.speakerTitle}>{item.title}</Text>
        <Text style={styles.speakerBio} numberOfLines={2}>
          {item.bio}
        </Text>
        <Text style={styles.sessionLabel}>Sessions:</Text>
        {item.sessions.map((session, index) => (
          <Text key={index} style={styles.sessionTitle} numberOfLines={1}>
            • {session}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Speakers</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search speakers..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Speakers list */}
      <FlatList
        data={filteredSpeakers}
        renderItem={renderSpeakerItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.speakersList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No speakers found matching your search.</Text>
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
    padding: 15,
    backgroundColor: '#1E88E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  speakersList: {
    padding: 15,
  },
  speakerCard: {
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
  speakerImage: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  speakerInfo: {
    flex: 1,
    padding: 15,
  },
  speakerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  speakerTitle: {
    fontSize: 14,
    color: '#1E88E5',
    marginBottom: 8,
  },
  speakerBio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  sessionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 4,
  },
  sessionTitle: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
});

export default SpeakersScreen;
