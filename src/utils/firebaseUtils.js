import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  addDoc, 
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db, auth } from '../../firebase';

/**
 * Utility functions for Firebase operations
 */

// Get all events from Firestore
export const getEvents = async () => {
  try {
    const eventsCollection = collection(db, 'events');
    const eventsQuery = query(eventsCollection, orderBy('startTime', 'asc'));
    const eventsSnapshot = await getDocs(eventsQuery);
    
    return eventsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Get a single event by ID
export const getEventById = async (eventId) => {
  try {
    const eventDoc = doc(db, 'events', eventId);
    const eventSnapshot = await getDoc(eventDoc);
    
    if (eventSnapshot.exists()) {
      return {
        id: eventSnapshot.id,
        ...eventSnapshot.data()
      };
    } else {
      throw new Error('Event not found');
    }
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};

// Get all speakers from Firestore
export const getSpeakers = async () => {
  try {
    const speakersCollection = collection(db, 'speakers');
    const speakersQuery = query(speakersCollection, orderBy('name', 'asc'));
    const speakersSnapshot = await getDocs(speakersQuery);
    
    return speakersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching speakers:', error);
    throw error;
  }
};

// Get a single speaker by ID
export const getSpeakerById = async (speakerId) => {
  try {
    const speakerDoc = doc(db, 'speakers', speakerId);
    const speakerSnapshot = await getDoc(speakerDoc);
    
    if (speakerSnapshot.exists()) {
      return {
        id: speakerSnapshot.id,
        ...speakerSnapshot.data()
      };
    } else {
      throw new Error('Speaker not found');
    }
  } catch (error) {
    console.error('Error fetching speaker:', error);
    throw error;
  }
};

// Get events for a specific speaker
export const getEventsBySpeaker = async (speakerId) => {
  try {
    const eventsCollection = collection(db, 'events');
    const eventsQuery = query(
      eventsCollection, 
      where('speakerId', '==', speakerId),
      orderBy('startTime', 'asc')
    );
    const eventsSnapshot = await getDocs(eventsQuery);
    
    return eventsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching speaker events:', error);
    throw error;
  }
};

// Save an event to user's favorites
export const saveEventToFavorites = async (eventId) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const userFavoritesCollection = collection(db, 'users', user.uid, 'favorites');
    await addDoc(userFavoritesCollection, {
      eventId,
      savedAt: serverTimestamp()
    });
    
    return true;
  } catch (error) {
    console.error('Error saving event to favorites:', error);
    throw error;
  }
};

// Get user's favorite events
export const getUserFavorites = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const userFavoritesCollection = collection(db, 'users', user.uid, 'favorites');
    const favoritesSnapshot = await getDocs(userFavoritesCollection);
    
    const favoriteIds = favoritesSnapshot.docs.map(doc => doc.data().eventId);
    
    // If there are no favorites, return an empty array
    if (favoriteIds.length === 0) return [];
    
    // Get the actual event data for each favorite
    const events = [];
    for (const eventId of favoriteIds) {
      const event = await getEventById(eventId);
      events.push(event);
    }
    
    return events;
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (profileData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const userDoc = doc(db, 'users', user.uid);
    await updateDoc(userDoc, {
      ...profileData,
      updatedAt: serverTimestamp()
    });
    
    return true;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('User not authenticated');
    
    const userDoc = doc(db, 'users', user.uid);
    const userSnapshot = await getDoc(userDoc);
    
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
