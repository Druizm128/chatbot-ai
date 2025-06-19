# AI Chatbot Frontend

A modern, responsive AI chatbot interface built with React and Material-UI, designed to work with a FastAPI backend.

## Features

- 🤖 Interactive chat interface with AI assistant
- 💬 Real-time message exchange with bubble-style UI
- 📱 Responsive design that works on desktop and mobile
- ❓ Built-in FAQ system for user guidance
- 🎨 Modern Material-UI components and styling
- ⚡ Fast development with Vite and Hot Module Replacement

## Tech Stack

- **Frontend Framework:** React 19.1.0
- **UI Library:** Material-UI (MUI) v7
- **Build Tool:** Vite 6.3.5
- **Styling:** Emotion (CSS-in-JS)
- **Code Quality:** ESLint with React-specific rules

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd chatbot-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── App.jsx          # Main application component with chat interface
├── main.jsx         # Application entry point
└── assets/          # Static assets (images, icons, etc.)
```

## Current Features

### Chat Interface
- Message history with user and AI message distinction
- Styled message bubbles with different colors for user/AI
- Auto-scrolling chat window
- Input validation and form handling

### User Experience
- FAQ dialog with common questions and answers
- Responsive design for various screen sizes
- Clean, professional Material-UI styling
- Intuitive send button with icon

## Backend Integration

This frontend is designed to work with a FastAPI backend. The current implementation uses mock responses, but can be easily integrated with real AI services.

### API Integration Points
- Replace `getAIResponse()` function with actual API calls
- Add environment variables for backend URL configuration
- Implement proper error handling for network requests

### Recommended Backend Endpoints
- `POST /chat` - Send user message and receive AI response
- `GET /chat/history` - Retrieve conversation history
- `DELETE /chat/history` - Clear chat history

## Future Enhancements

- [ ] Real API integration with FastAPI backend
- [ ] Message persistence with local storage
- [ ] Typing indicators during AI response
- [ ] Message timestamps
- [ ] Copy message functionality
- [ ] Clear chat history button
- [ ] WebSocket support for real-time streaming
- [ ] User authentication and session management
- [ ] Message export functionality
- [ ] Dark/light theme toggle

## Development

### Code Style
This project uses ESLint with React-specific rules. Run `npm run lint` to check code quality.

### Building for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
