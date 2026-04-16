# Advanced Todo Card - Stage 1a

An interactive, stateful todo card component built with HTML, CSS, and JavaScript.

## 🚀 Live Demo
[View Live Site](https://your-github-ahniee-d-lion.github.io/hng-todo-card/)

## 📋 Overview
This project extends a basic todo card into a fully interactive component with editing capabilities, status management, priority indicators, and dynamic time handling.

## ✨ Features
- **Editable Content**: Click edit to modify title, description, priority, and due date
- **Status Management**: Toggle between Pending, In Progress, and Done
- **Priority Indicators**: Visual indicators for Low, Medium, and High priority
- **Expand/Collapse**: Collapsible description with accessibility features
- **Dynamic Time Updates**: Real-time countdown with overdue detection
- **Responsive Design**: Adapts to mobile, tablet, and desktop
- **Accessibility**: Full keyboard navigation and screen reader support

## 🔄 Changes from Stage 0
- Added edit mode with form validation and state restoration
- Implemented status dropdown with synchronized checkbox behavior
- Enhanced priority system with colored indicators
- Added collapsible description section
- Integrated overdue indicator and "Completed" state
- Improved time management with granular updates
- Enhanced CSS with glassmorphism effects and responsive layouts

## 🎨 Design Decisions
- **Glassmorphism Theme**: Semi-transparent backgrounds with blur effects for modern look
- **Color Coding**: Red for high priority/overdue, yellow for medium, green for low
- **Minimalist UI**: Clean card design with subtle animations
- **Mobile-First**: Responsive layout that stacks elements vertically on small screens
- **Accessibility-First**: High contrast ratios and proper ARIA attributes

## ♿ Accessibility Notes
- All form inputs have associated labels
- Keyboard navigation follows logical tab order
- ARIA attributes for expand/collapse functionality
- Live regions for time updates (aria-live="polite")
- High contrast colors for better readability
- Screen reader friendly status announcements

## 🛠️ Known Limitations
- Focus trapping in edit mode not implemented (optional bonus)
- No data persistence (resets on page reload)
- Time updates only when page is active
- No backend integration for multi-user scenarios
- Limited to single todo card (not a full app)

## 🏗️ Tech Stack
- **HTML5**: Semantic markup with data attributes for testing
- **CSS3**: Flexbox, Grid, and modern properties
- **Vanilla JavaScript**: DOM manipulation and state management

## 🚀 Getting Started
1. Clone the repository
2. Open `index.html` in your browser
3. Interact with the todo card!

## 📁 Project Structure
```
HNG INTERNSHIP/
├── index.html      # Main HTML file
├── todo.css        # Stylesheet
├── todo.js         # JavaScript functionality
└── README.md       # This file
```

## 🧪 Testing
All test IDs are implemented according to Stage 1a requirements:
- Edit form and inputs
- Status controls
- Priority indicators
- Expand/collapse elements
- Time management components

## 📞 Contact
Built for HNG Internship Stage 1a Task