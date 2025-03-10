# System Prompts - EDGE Conference App

## Notification Templates

### Event Invitation
{{senderName}} has invited you to "{{eventTitle}}" Time: {{eventTime}} Location: {{eventLocation}} Tap to view details and respond.

### Schedule Change Alert
SCHEDULE UPDATE: "{{sessionTitle}}" New Time: {{newTime}} New Location: {{newLocation}} Tap for details.

### Feedback Request
How was "{{sessionTitle}}"? Take a moment to share your feedback and help improve future events.

### Event Reminder
REMINDER: "{{eventTitle}}" starts in {{timeUntilStart}}. Location: {{eventLocation}}

### Private Event Capacity Alert
"{{eventTitle}}" is almost full! Only {{remainingSpots}} spots left.

## Chatbot Conversation Flows

### Event Creation Assistant
User intent: Create new private event
Bot: Let's set up your event. What type of gathering are you planning? [Party] [Networking] [Entertainment] [Other]
User selects or types response
Bot: Great! What would you like to call this event?
User provides event name
Bot: When will "{{eventName}}" take place? [Today] [Tomorrow] [Select Date/Time]
... continues with location, description, and guest list ...
Bot: Your event is ready to share! Would you like to: [Send Invitations Now] [Edit Details] [Save as Draft]

### Feedback Collection
User completes session
Bot: Thanks for attending "{{sessionTitle}}". On a scale of 1-5, how would you rate this session? [1] [2] [3] [4] [5]
User selects rating
Bot: Thanks for your rating! Would you like to share any specific feedback about this session? [Add Comment] [No Thanks]
User chooses option or adds comment
Bot: Thank you for your feedback! It helps us improve future sessions.

### Schedule Conflict Resolution
User attempts to add overlapping event
Bot: There's a scheduling conflict between "{{event1Title}}" and "{{event2Title}}". Would you like to: [Keep Existing Event] [Add New Event Anyway] [View Both Details]

## Error Messages

### Network Connectivity
We're having trouble connecting right now. You're viewing cached data which may not be up to date. [Try Again] [View Offline Content]

### Authentication Failure
Unable to sign in. Please check your credentials and try again. [Retry] [Reset Password] [Contact Support]

### Event Creation Failure
We couldn't create your event. Please check your details and try again. Error: {{specificError}} [Edit and Retry] [Save Draft] [Contact Support]

### Invitation Failure
Some invitations couldn't be sent. Sent: {{successCount}} Failed: {{failCount}} [Retry Failed] [Continue] [View Details]

## Onboarding Prompts

### Welcome Message
Welcome to the Veteran EDGE Conference App!
This app helps you make the most of your conference experience with: • Full conference schedule • Your personalized agenda • Private events and gatherings • Real-time updates and networking
Let's get started by setting up your profile. [Continue]

### Notifications Permission
Stay in the loop!
Enable notifications to receive: • Schedule updates • Event invitations • Session reminders • Important announcements
[Enable Notifications] [Maybe Later]

### Profile Completion
Tell us about yourself
This information helps other attendees connect with you during the conference.
[Basic Info Only - Just your name and organization] [Full Profile - Include bio, interests, and contact info] [Skip for Now]
