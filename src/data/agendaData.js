/**
 * EDGE Conference 2024 Agenda Data
 * Based on information from new source file
 */

export const conferenceDays = [
  { id: '1', date: 'March 20, 2024', day: 'Wednesday' },
  { id: '2', date: 'March 21, 2024', day: 'Thursday' },
  { id: '3', date: 'March 22, 2024', day: 'Friday' },
  { id: '4', date: 'March 23, 2024', day: 'Saturday' }
];

export const eventTypes = [
  { id: 'all', label: 'All' },
  { id: 'keynote', label: 'Keynotes' },
  { id: 'breakout', label: 'Breakouts' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'networking', label: 'Networking' },
  { id: 'panel', label: 'Panels' },
  { id: 'meal', label: 'Meals' }
];

export const agendaEvents = [
  // WEDNESDAY, MARCH 20, 2024
  {
    id: 'wed-1',
    title: 'Registration & Check-In',
    time: '8:00 a.m. - 4:00 p.m.',
    location: 'East Registration',
    type: 'networking',
    day: '1'
  },
  {
    id: 'wed-2',
    title: "D'Aniello Acceleration Challenge",
    time: '8:00 a.m. - 5:30 p.m.',
    location: 'Invite Only',
    speaker: 'Larry Broughton, Founder & CEO, broughtonHOTELS and yoogozi.com; former U.S. Army Green Beret, Dave Braun, COO, yoogozi.com; CEO, Pro Website Creators',
    type: 'workshop',
    day: '1'
  },
  {
    id: 'wed-3',
    title: 'CEOcircle Reunion',
    time: '10:30 a.m. - 12:30 p.m.',
    location: 'Crystal II',
    description: 'Invite Only',
    type: 'networking',
    day: '1'
  },
  {
    id: 'wed-4',
    title: 'State of Veteran Entrepreneurship',
    time: '10:45 a.m. - 12:30 p.m.',
    location: 'Crystal VII-VIII',
    speaker: 'MODERATOR: Rosalinda Vasquez Maury, Director, Applied Research & Analytics, IVMF',
    type: 'panel',
    day: '1',
    panelists: [
      'Dr. Mike Haynie, Vice Chancellor for Strategic Initiatives & Innovation; IVMF Founder & Executive Director, Syracuse University',
      'Jeffrey Rubin, Professor of Practice, School of Information Studies, Syracuse University',
      'Dr. Andy Gold, Vice President of Strategic Engagement, National Association for Community College Entrepreneurship (NACCE)'
    ]
  },
  {
    id: 'wed-5',
    title: 'LUNCH',
    time: '12:30 - 1:30 p.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '1'
  },
  {
    id: 'wed-6',
    title: 'Main Session: Kick-Off & Welcome',
    time: '2:00 - 2:20 p.m.',
    location: 'Crystal Ballroom',
    speaker: 'Misty Stutsman Fox, Director, Entrepreneurship & Small Business, IVMF',
    description: 'Welcome to the 2024 Veteran EDGE Conference',
    type: 'keynote',
    day: '1',
    panelists: [
      'Dr. Mike Haynie, Vice Chancellor for Strategic Initiatives & Innovation; IVMF Founder & Executive Director, Syracuse University',
      'Terrance Hill, Managing Director of Commercial Banking, JPMorgan Chase & Co.'
    ]
  },
  {
    id: 'wed-7',
    title: 'Fireside Chat',
    time: '2:20 - 3:30 p.m.',
    location: 'Crystal Ballroom',
    speaker: "Daniel D'Aniello, Founder & Chairman Emeritus, The Carlyle Group; Advisory Board Co-Chairman, IVMF, Dr. Mike Haynie, Vice Chancellor for Strategic Initiatives & Innovation; IVMF Founder & Executive Director, Syracuse University",
    type: 'keynote',
    day: '1'
  },
  {
    id: 'wed-8',
    title: 'BREAK',
    time: '3:30 - 3:45 p.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '1'
  },
  {
    id: 'wed-9',
    title: 'WORKSHOPS',
    time: '3:45 - 6:00 p.m.',
    location: 'Crystal I, II, III',
    type: 'workshop',
    day: '1',
    description: 'Three concurrent workshops on different topics',
    panelists: [
      'Workshop 1: Brad Reaves, Founder, Reaves GovCon Group - The SBA\'s All-Small Mentor-Protege and Joint Venture Program for SDVOSBs and VOSBs: Everything You Need to Know',
      'Workshop 2: Brynt Parmeter, Chief Talent Management Officer, U.S. Department of Defense - Design Thinking',
      'Workshop 3: Dr. Jude Black, Founder, E-Therapy Cafe - Imposter Syndrome: No BS Workshop to Owning Your Success'
    ]
  },
  {
    id: 'wed-10',
    title: 'Military-Connected Entrepreneurship Ecosystem: Growth, Empowerment & Connectivity Summit',
    time: '3:45 - 6:00 p.m.',
    location: 'Crystal VII-VIII',
    description: 'Invite Only',
    type: 'workshop',
    day: '1'
  },
  {
    id: 'wed-11',
    title: 'Making the Connection: INDUSTRY NIGHT',
    time: '6:00 - 8:00 p.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '1'
  },
  
  // THURSDAY, MARCH 21, 2024
  {
    id: 'thu-1',
    title: 'BREAKFAST',
    time: '7:00 - 8:00 a.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '2'
  },
  {
    id: 'thu-2',
    title: 'WELCOME',
    time: '8:00 - 8:10 a.m.',
    location: 'Crystal Ballroom',
    speaker: 'Misty Stutsman Fox, Director, Entrepreneurship & Small Business, IVMF, Abby Malchow, Manager of Small Business Partnerships & Education, Amazon',
    type: 'keynote',
    day: '2'
  },
  {
    id: 'thu-3',
    title: 'KEYNOTE SPEAKER',
    time: '8:20 - 9:30 a.m.',
    location: 'Crystal Ballroom',
    speaker: 'Amy Jo Martin, Founder & CEO, Speaker, Author of New York Times bestseller "Renegades Write the Rules," host of "Why Not Now?" podcast, educator, and investor',
    type: 'keynote',
    day: '2'
  },
  {
    id: 'thu-4',
    title: 'BREAK',
    time: '9:30 - 9:45 a.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '2'
  },
  {
    id: 'thu-5',
    title: 'Concurrent Breakout Sessions 1–4',
    time: '9:45 - 11:00 a.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '2',
    description: 'Four concurrent breakout sessions',
    panelists: [
      'Session 1: Getting to Know Your Buyer: Going From Context to Contracts - Crystal I',
      'Session 2: From CEO of Your Business to CEO of Your Health - Crystal II',
      'Session 3: Sales & Storytelling - Crystal III',
      'Session 4: Private Equity\'s Approach to Growth - Crystal IV'
    ]
  },
  {
    id: 'thu-6',
    title: 'BREAK',
    time: '11:00 - 11:15 a.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '2'
  },
  {
    id: 'thu-7',
    title: 'Concurrent Breakout Sessions 5–8',
    time: '11:15 a.m. - 12:30 p.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '2',
    description: 'Four concurrent breakout sessions',
    panelists: [
      'Session 5: Federal Contracting Trends - 2024 & Beyond - Crystal I',
      'Session 6: Leveraging Technology for Small Business - Crystal II',
      'Session 7 & 8: Additional breakout sessions'
    ]
  },
  {
    id: 'thu-8',
    title: 'LUNCH',
    time: '12:30 - 1:30 p.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '2'
  },
  {
    id: 'thu-9',
    title: 'Making the Connection: DOING BUSINESS WITH BIG BUSINESS PANEL DISCUSSION',
    time: '1:30 - 2:45 p.m.',
    location: 'Crystal Ballroom',
    speaker: 'MODERATOR: Venus Quates, President & CEO, LaunchTech',
    type: 'panel',
    day: '2',
    panelists: [
      'Abby Malchow, Manager of Small Business Partnerships & Education, Amazon',
      'Tiffany Daugherty, Head of Military & Veterans Affairs and Specialty Strategies, Johnson & Johnson',
      'Jon Luttwak, Founder & CEO, DHC Real Estate Services; Strategic Alliance Partner, Cushman & Wakefield',
      'Nancy Minchillo, Vice President, Global Supplier Diversity, JPMorgan Chase & Co.',
      'Dr. L. Jay Burks, Director of Supplier Diversity, Comcast Corporation'
    ]
  },
  {
    id: 'thu-10',
    title: 'Making the Connection: OFFICE HOURS',
    time: '2:45 - 3:30 p.m.',
    location: 'Crystal Ballroom',
    type: 'networking',
    day: '2'
  },
  {
    id: 'thu-11',
    title: 'BREAK',
    time: '3:30 - 3:45 p.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '2'
  },
  {
    id: 'thu-12',
    title: 'Concurrent Breakout Sessions 9-12',
    time: '3:45 - 5:00 p.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '2',
    description: 'Four concurrent breakout sessions'
  },
  {
    id: 'thu-13',
    title: 'Making the Connection: BUSINESS SHOWCASE & RESOURCE EXPO',
    time: '5:00 - 8:00 p.m.',
    location: 'Garden Court',
    type: 'networking',
    day: '2'
  },
  
  // FRIDAY, MARCH 22, 2024
  {
    id: 'fri-1',
    title: 'BREAKFAST',
    time: '7:00 - 8:00 a.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '3'
  },
  {
    id: 'fri-2',
    title: 'WELCOME',
    time: '8:00 - 8:15 a.m.',
    location: 'Crystal Ballroom',
    speaker: 'Misty Stutsman Fox, Director, Entrepreneurship & Small Business, IVMF, Tommy Jones, Senior Director, Military & Veterans Affairs, Walmart',
    type: 'keynote',
    day: '3'
  },
  {
    id: 'fri-3',
    title: 'KEYNOTE',
    time: '8:15 - 9:30 a.m.',
    location: 'Crystal Ballroom',
    speaker: 'Frank Coppersmith, CEO, Smarter Reality',
    type: 'keynote',
    day: '3'
  },
  {
    id: 'fri-4',
    title: 'BREAK',
    time: '9:30 - 9:45 a.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '3'
  },
  {
    id: 'fri-5',
    title: 'Concurrent Breakout Sessions 13-16',
    time: '9:45 - 11:00 a.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '3',
    description: 'Four concurrent breakout sessions'
  },
  {
    id: 'fri-6',
    title: 'BREAK',
    time: '11:00 - 11:15 a.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '3'
  },
  {
    id: 'fri-7',
    title: 'Concurrent Breakout Sessions 17-20',
    time: '11:15 a.m. - 12:30 p.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '3',
    description: 'Four concurrent breakout sessions'
  },
  {
    id: 'fri-8',
    title: 'LUNCH',
    time: '12:30 - 1:30 p.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '3'
  },
  {
    id: 'fri-9',
    title: 'Panel Discussion: Lessons from VOBs',
    time: '1:30 - 2:45 p.m.',
    location: 'Crystal Ballroom',
    speaker: 'REMARKS: Jennifer Powell, Senior Manager, Public Affairs, Walmart, MODERATOR: Misty Stutsman Fox, Director, Entrepreneurship & Small Business, IVMF',
    type: 'panel',
    day: '3',
    panelists: [
      'Dr. Lauren Weiner, Chief Revenue Officer, WWC Global',
      'Brendan Mullen, President & CEO, MKS2 Technologies',
      'Luke Schneider, Founder & CEO, Fire Dept. Coffee'
    ]
  },
  {
    id: 'fri-10',
    title: 'BREAK',
    time: '2:45 - 3:00 p.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '3'
  },
  {
    id: 'fri-11',
    title: 'Concurrent Breakout Sessions 21-24',
    time: '3:00 - 4:15 p.m.',
    location: 'Various Rooms',
    type: 'breakout',
    day: '3',
    description: 'Four concurrent breakout sessions'
  },
  {
    id: 'fri-12',
    title: 'BREAK',
    time: '4:15 - 6:00 p.m.',
    location: '',
    type: 'networking',
    day: '3'
  },
  {
    id: 'fri-13',
    title: 'COCKTAIL RECEPTION',
    time: '6:00 - 7:00 p.m.',
    location: 'Crystal Foyer',
    type: 'networking',
    day: '3'
  },
  {
    id: 'fri-14',
    title: 'Vet100 DINNER powered by Fiserv AWARDS CEREMONY',
    time: '7:00 - 9:00 p.m.',
    location: 'Crystal Ballroom',
    speaker: 'EMCEE: Misty Stutsman Fox, Director, Entrepreneurship & Small Business, IVMF',
    type: 'keynote',
    day: '3',
    description: 'Awards ceremony with dinner and musical performance',
    panelists: [
      'REMARKS: Meg Hendricks, Vice President, Military & Veteran Affairs, Fiserv',
      'Dr. Mike Haynie, Vice Chancellor for Strategic Initiatives & Innovation; IVMF Founder & Executive Director, Syracuse University',
      'Mark Espinoza, Sr. Director, Public Affairs, Walmart',
      'MUSICAL PERFORMANCE: CREATIVETS - Performers: Tommy Karlas & Tiffany Gos'
    ]
  },
  
  // SATURDAY, MARCH 23, 2024
  {
    id: 'sat-1',
    title: 'GRAB & GO BREAKFAST',
    time: '8:00 - 10:00 a.m.',
    location: 'Crystal Foyer',
    type: 'meal',
    day: '4'
  }
];

// Detailed information for specific breakout sessions
export const breakoutSessions = {
  // Wednesday Workshops
  'Workshop 1': {
    id: 'workshop-1',
    title: "The SBA's All-Small Mentor-Protege and Joint Venture Program for SDVOSBs and VOSBs: Everything You Need to Know",
    description: "In this \"deep dive\" workshop, Government Contracts Attorney Brad Reaves will explain, in plan English, how to utilize the SBA's \"All Small\" Mentor Protégé Program to grow and develop your Service Disabled or Veteran Owned Small Business. Brad will also explain how to leverage the SBA's Joint Venture program in connection with the Mentor Protégé Program, and he will walk through how Joint Ventures are created and utilized strategically to win Government Contracts (both inside and outside of the Mentor Protégé Program).",
    speaker: "Brad Reaves, Founder, Reaves GovCon Group",
    location: "Crystal I",
    time: "3:45-6:00 p.m.",
    day: '1'
  },
  'Workshop 2': {
    id: 'workshop-2',
    title: "Design Thinking",
    description: "This session is not, \"a guide to burning cash, communicating poorly, and building stuff nobody wants.\" Instead, come learn how to begin the process of creating products, services, and solutions customers want.",
    speaker: "Brynt Parmeter, Chief Talent Management Officer, U.S. Department of Defense",
    location: "Crystal II",
    time: "3:45-6:00 p.m.",
    day: '1'
  },
  'Workshop 3': {
    id: 'workshop-3',
    title: "Imposter Syndrome: No BS Workshop to Owning Your Success",
    description: "Crafted specifically for veterans and military spouse entrepreneurs facing self-doubt, delivers a direct, impactful approach to conquering imposter syndrome. Led by Dr. Jude Black, this workshop cuts through the unnecessary, honing in on effective tactics designed for individuals with military experience moving into business roles. Through hands-on activities and Dr. Black's deep understanding of military and business hurdles, attendees will uncover actionable insights. This session is set to be a game-changer, arming you with the confidence and tools needed to securely navigate your entrepreneurial journey.",
    speaker: "Dr. Jude Black, Founder, E-Therapy Cafe",
    location: "Crystal III",
    time: "3:45-6:00 p.m.",
    day: '1'
  },
  
  // Thursday Breakout Sessions
  'Session 1': {
    id: 'session-1',
    title: "Getting to Know Your Buyer: Going From Context to Contracts",
    description: "Discover the essential steps to become client-ready, understand your buyer, and seamlessly transition from initial contacts to lucrative contracts in the government and commercial sectors. Join us to learn how to make your business shine and turn connections into opportunities for success.",
    speaker: "Michelle \"G-I\" Gardner-Ince, Director, Women Veteran-Owned Small Business Initiative, U.S. Dept. of Veterans Affairs",
    location: "Crystal I",
    time: "9:45-11:00 a.m.",
    day: '2'
  },
  'Session 2': {
    id: 'session-2',
    title: "From CEO of Your Business to CEO of Your Health",
    description: "Health is the first wealth. Entrepreneurs work famously hard, and often to their detriment. Why burn yourself out creating wealth only to miss out on enjoying the fruits of your hard work because you are managing largely preventable chronic conditions in your last decades? You use dashboards to manage your company and you should be applying the same focus and vigor to your own health and longevity.",
    speaker: "Dr. John Torrens, Professor of Entrepreneurial Practice, Whitman School of Management, Syracuse University",
    location: "Crystal II",
    time: "9:45-11:00 a.m.",
    day: '2'
  },
  'Session 3': {
    id: 'session-3',
    title: "Sales & Storytelling",
    description: "You've built your brand and successfully started selling, now it's time to caffeinate your commitment to sales both in your strategy and your storytelling. In this high energy session you'll examine what's working, identify what's missing and shape (or reshape) your strategy. You will also see a side of selling that can change the way you approach your sales tactics through likeability, needs discovery and the \"curse of knowledge\" all while crafting a compelling story instead of a tired pitch.",
    speaker: "Elizabeth Wimer, Assistant Teaching Professor, Whitman School of Management, Syracuse University",
    location: "Crystal III",
    time: "9:45-11:00 a.m.",
    day: '2'
  },
  'Session 4': {
    id: 'session-4',
    title: "Private Equity's Approach to Growth",
    description: "Private Equity places the highest demands on executive performance with compressed timelines and significant growth objectives. This session gives you an inside look at the tools and techniques used to drive that growth in your organization. It begins with you, your leadership and where you put your focus.",
    speaker: "Michael McDermott, President & Founder, Arcadia Group",
    location: "Crystal IV",
    time: "9:45-11:00 a.m.",
    day: '2'
  },
  'Session 5': {
    id: 'session-5',
    title: "Federal Contracting Trends - 2024 & Beyond",
    description: "As we approach the cusp of a new era, the landscape of federal contracting is poised for significant evolution. This forward-looking session will provide unique opportunities to anticipate trends, adapt strategies, and position yourself for success as you navigate the complex and evolving terrain that is Government Contracting.",
    speaker: "Scott Semple, Director, National Programs & Training, National Veteran Small Business Coalition (NVSBC)",
    location: "Crystal I",
    time: "11:15 a.m.-12:30 p.m.",
    day: '2'
  },
  'Session 6': {
    id: 'session-6',
    title: "Leveraging Technology for Small Business",
    description: "The goal of this session is to discuss best practices and strategy in web design, SEO, Internet marketing, social media advertising, analytics and email marketing. Attendees will be exposed to strategies, skills and tools necessary to advance and grow your business. Additionally, attendees will be exposed to a variety of ways to build awareness and drive traffic to their website through proven Internet Marketing tools, techniques and strategies.",
    speaker: "Scott Nadzan, Chief Revenue Officer, PLS 3rd Learning",
    location: "Crystal II",
    time: "11:15 a.m.-12:30 p.m.",
    day: '2'
  }
};

export default {
  conferenceDays,
  eventTypes,
  agendaEvents,
  breakoutSessions
};
