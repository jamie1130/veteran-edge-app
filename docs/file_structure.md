# File Structure Document - EDGE Conference App

## Project Organization

```
veteran-edge-app/
├── app/                      # Mobile application (React Native)
│   ├── assets/               # Static resources
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── navigation/           # Navigation configuration
│   ├── screens/              # App screens
│   ├── services/             # API services and business logic
│   ├── store/                # State management
│   ├── theme/                # Design tokens and theming
│   ├── utils/                # Helper functions
│   ├── App.tsx               # Entry point
│   └── config.ts             # App configuration
│
├── admin-dashboard/          # Web-based admin interface (React)
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Admin UI components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Admin pages
│   │   ├── services/         # Admin API services
│   │   ├── store/            # State management
│   │   ├── utils/            # Utility functions
│   │   ├── App.tsx           # Entry point
│   │   └── index.tsx         # Rendering root
│   └── package.json          # Dependencies
│
├── shared/                   # Shared code between app and dashboard
│   ├── models/               # Data models and types
│   ├── constants/            # Shared constants
│   └── utils/                # Shared utilities
│
├── functions/                # Firebase Cloud Functions
│   ├── src/
│   │   ├── auth/             # Authentication triggers
│   │   ├── events/           # Event management functions
│   │   ├── notifications/    # Notification functions
│   │   ├── invitations/      # Invitation processing
│   │   └── index.ts          # Entry point
│   └── package.json          # Dependencies
│
└── firebase/                 # Firebase configuration
    ├── firestore.rules       # Database security rules
    ├── storage.rules         # Storage security rules
    └── firebase.json         # Firebase project config
```

## Key Directories and Files

### Mobile App (app/)

#### assets/
- `images/` - App icons, logos, and illustrations
- `fonts/` - Custom typefaces
- `maps/` - Venue floor plans and maps

#### components/
- `events/` - Event-related components
  - `EventCard.tsx` - Display card for events
  - `PrivateEventBadge.tsx` - Visual indicator for private events
  - `EventCreationForm.tsx` - Form for creating events
  - `InvitationManager.tsx` - Component for managing invitations
- `feedback/` - Feedback collection components
- `navigation/` - Navigation components
- `ui/` - Generic UI components

#### screens/
- `auth/` - Authentication screens
- `events/` - Event-related screens
  - `EventsScreen.tsx` - Main events listing
  - `EventDetailsScreen.tsx` - Detailed event view
  - `CreateEventScreen.tsx` - Event creation
  - `InvitationsScreen.tsx` - Invitations management
- `profile/` - User profile screens
- `schedule/` - Schedule and agenda screens
- `feedback/` - Feedback submission screens

#### services/
- `api.ts` - API client configuration
- `auth.service.ts` - Authentication functions
- `events.service.ts` - Event management functions
- `invitations.service.ts` - Invitation handling
- `notifications.service.ts` - Push notification functions
- `feedback.service.ts` - Feedback collection and submission

### Admin Dashboard (admin-dashboard/)

#### pages/
- `auth/` - Admin authentication
- `events/` - Event management
  - `EventsListPage.tsx` - All events view
  - `EventEditPage.tsx` - Event editing interface
  - `PrivateEventsPage.tsx` - Private events management
- `users/` - User management
- `feedback/` - Feedback review and analysis
- `notifications/` - Announcement creation and delivery

#### components/
- `events/` - Event management components
- `users/` - User management components
- `dashboard/` - Analytics and overview components
- `notifications/` - Notification management components

### Firebase Functions (functions/)

#### auth/
- `onUserCreate.ts` - New user setup
- `onRoleUpdate.ts` - Handle role changes

#### events/
- `onEventUpdate.ts` - Handle event changes
- `onPrivateEventCreate.ts` - Process new private events

#### notifications/
- `sendEventReminders.ts` - Scheduled event reminders
- `sendScheduleUpdates.ts` - Notify on schedule changes

#### invitations/
- `processInvitation.ts` - Handle invitation responses
- `sendInvitationNotifications.ts` - Notify on new invitations
