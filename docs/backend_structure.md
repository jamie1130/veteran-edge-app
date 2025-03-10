# Backend Structure Document - EDGE Conference App

## Data Model

### Collections
1. **users**
   - Basic profile information
   - Authentication details
   - Device tokens for push notifications
   - Role (attendee, IVMF staff, admin)

2. **events**
   - Official conference sessions and private events
   - Attributes: title, description, startTime, endTime, location, type, isPrivate, isOfficial, creatorId, invitedUsers, capacity

3. **speakers**
   - Profile information for presenters
   - Associated sessions/events

4. **invitations**
   - Event ID
   - Inviter and invitee information
   - Status (pending, accepted, declined)
   - Timestamp

5. **feedback**
   - Associated event/session ID
   - User ID (optional for anonymous feedback)
   - Rating and comments
   - Timestamp

6. **notifications**
   - User ID
   - Message content
   - Type (invitation, reminder, announcement)
   - Related event ID
   - Read status

7. **userEvents**
   - Junction collection linking users to their selected events
   - Includes official sessions and private events

## Authentication System
- Firebase Authentication with email/password and social login options
- Custom claims for role-based permissions:
  - Admin (full access)
  - IVMF Staff (create official events, send announcements)
  - Attendee (create unofficial events, send invitations)

## Security Rules
- Private events visible only to creator and invited users
- Official private events manageable only by IVMF staff
- User data protected with appropriate access controls
- Invitation management limited to event creators

## API Endpoints

### Events
- `GET /events` - List events with filtering options
- `POST /events` - Create new event
- `GET /events/{id}` - Get event details
- `PUT /events/{id}` - Update event
- `DELETE /events/{id}` - Remove event

### Invitations
- `POST /invitations` - Send new invitation
- `GET /invitations` - List invitations for user
- `PUT /invitations/{id}` - Update invitation status
- `DELETE /invitations/{id}` - Cancel invitation

### Feedback
- `POST /feedback` - Submit feedback
- `GET /feedback/event/{id}` - Get feedback for event (admin/staff only)

### Notifications
- `POST /notifications` - Send notification
- `GET /notifications` - Get user notifications
- `PUT /notifications/{id}` - Mark as read

## Real-time Updates
- Firestore listeners for event changes
- Push notification service for announcements and invitations
- Real-time chat functionality for event coordination

## Future Integration Points
- Salesforce API connection points
- Export capabilities for feedback and analytics
