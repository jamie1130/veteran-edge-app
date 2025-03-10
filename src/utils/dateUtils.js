/**
 * Utility functions for date and time formatting
 */

// Format a date object or timestamp to display format (e.g., "Monday, January 1, 2023")
export const formatDate = (date) => {
  if (!date) return '';
  
  // Convert to Date object if it's a timestamp
  const dateObj = typeof date === 'object' ? date : new Date(date);
  
  return dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format time (e.g., "9:00 AM - 10:30 AM")
export const formatTime = (startTime, endTime) => {
  if (!startTime) return '';
  
  // Convert to Date objects if they're timestamps
  const startDate = typeof startTime === 'object' ? startTime : new Date(startTime);
  
  const formattedStart = startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  if (!endTime) return formattedStart;
  
  const endDate = typeof endTime === 'object' ? endTime : new Date(endTime);
  
  const formattedEnd = endDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  return `${formattedStart} - ${formattedEnd}`;
};

// Format date and time together (e.g., "Monday, January 1, 2023 • 9:00 AM - 10:30 AM")
export const formatDateTime = (date, startTime, endTime) => {
  const formattedDate = formatDate(date || startTime);
  const formattedTime = formatTime(startTime, endTime);
  
  return `${formattedDate} • ${formattedTime}`;
};

// Get relative time (e.g., "2 hours ago", "in 3 days")
export const getRelativeTime = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const dateObj = typeof date === 'object' ? date : new Date(date);
  
  const diffMs = dateObj - now;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  
  if (diffSec < 0) {
    // Past
    if (diffSec > -60) return 'just now';
    if (diffMin > -60) return `${Math.abs(diffMin)} minute${Math.abs(diffMin) !== 1 ? 's' : ''} ago`;
    if (diffHour > -24) return `${Math.abs(diffHour)} hour${Math.abs(diffHour) !== 1 ? 's' : ''} ago`;
    if (diffDay > -7) return `${Math.abs(diffDay)} day${Math.abs(diffDay) !== 1 ? 's' : ''} ago`;
    return formatDate(date);
  } else {
    // Future
    if (diffSec < 60) return 'in a moment';
    if (diffMin < 60) return `in ${diffMin} minute${diffMin !== 1 ? 's' : ''}`;
    if (diffHour < 24) return `in ${diffHour} hour${diffHour !== 1 ? 's' : ''}`;
    if (diffDay < 7) return `in ${diffDay} day${diffDay !== 1 ? 's' : ''}`;
    return formatDate(date);
  }
};

// Group events by date
export const groupEventsByDate = (events) => {
  if (!events || !Array.isArray(events)) return {};
  
  return events.reduce((groups, event) => {
    const date = typeof event.startTime === 'object' 
      ? event.startTime.toDateString() 
      : new Date(event.startTime).toDateString();
    
    if (!groups[date]) {
      groups[date] = [];
    }
    
    groups[date].push(event);
    return groups;
  }, {});
};

// Check if an event is happening now
export const isEventHappeningNow = (startTime, endTime) => {
  if (!startTime || !endTime) return false;
  
  const now = new Date();
  const start = typeof startTime === 'object' ? startTime : new Date(startTime);
  const end = typeof endTime === 'object' ? endTime : new Date(endTime);
  
  return now >= start && now <= end;
};

// Check if an event is in the past
export const isEventPast = (endTime) => {
  if (!endTime) return false;
  
  const now = new Date();
  const end = typeof endTime === 'object' ? endTime : new Date(endTime);
  
  return now > end;
};

// Check if an event is in the future
export const isEventFuture = (startTime) => {
  if (!startTime) return false;
  
  const now = new Date();
  const start = typeof startTime === 'object' ? startTime : new Date(startTime);
  
  return now < start;
};
