import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material';
import { Send, Help } from '@mui/icons-material';

function App() {
  // State for managing messages
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'ai' }
  ]);
  
  // State for the current input
  const [input, setInput] = useState('');
  
  // State for FAQ dialog
  const [faqOpen, setFaqOpen] = useState(false);

  // Simulate AI response (replace this with actual AI API call)
  const getAIResponse = (userMessage) => {
    // Simple responses for demonstration - in a real app, you'd use userMessage to generate contextual responses
    const responses = [
      `That's an interesting question about "${userMessage.toLowerCase()}"! Let me think about that...`,
      "I understand what you're asking. Here's my perspective...",
      "Thanks for sharing that with me. I'd be happy to help!",
      "That's a great point. Have you considered...",
      "I see what you mean. Let me provide some information about that..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI thinking time and response
    setTimeout(() => {
      const aiResponse = { text: getAIResponse(input), sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    // Clear input
    setInput('');
  };

  // FAQ data
  const faqData = [
    {
      question: "How do I use this chatbot?",
      answer: "Simply type your question in the text box and click Send or press Enter."
    },
    {
      question: "What can I ask about?",
      answer: "You can ask me about various topics. I'm here to help with information and assistance."
    },
    {
      question: "How accurate are the responses?",
      answer: "This is a demo chatbot. For production use, responses would be powered by actual AI models."
    },
    {
      question: "Can I clear the chat history?",
      answer: "Currently, the chat resets when you refresh the page. A clear button could be added as a feature."
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Chatbot
          </Typography>
          <IconButton 
            color="inherit" 
            onClick={() => setFaqOpen(true)}
            aria-label="FAQ"
          >
            <Help />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', py: 2 }}>
        {/* Chat Window */}
        <Paper 
          elevation={3} 
          sx={{ 
            flexGrow: 1, 
            mb: 2, 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
            <Typography variant="h6">Chat</Typography>
          </Box>
          
          <List sx={{ flexGrow: 1, overflow: 'auto', maxHeight: '60vh' }}>
            {messages.map((message, index) => (
              <ListItem key={index} sx={{ 
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                px: 2
              }}>
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    maxWidth: '70%',
                    backgroundColor: message.sender === 'user' ? '#1976d2' : '#f5f5f5',
                    color: message.sender === 'user' ? 'white' : 'black',
                    borderRadius: message.sender === 'user' ? '15px 15px 5px 15px' : '15px 15px 15px 5px'
                  }}
                >
                  <ListItemText 
                    primary={message.text}
                    primaryTypographyProps={{
                      style: { whiteSpace: 'pre-wrap' }
                    }}
                  />
                </Paper>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Input Form */}
        <Paper elevation={3} sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
                disabled={input.trim() === ''}
              >
                Send
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

      {/* FAQ Dialog */}
      <Dialog 
        open={faqOpen} 
        onClose={() => setFaqOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Frequently Asked Questions</DialogTitle>
        <DialogContent>
          {faqData.map((faq, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {faq.question}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {faq.answer}
              </Typography>
              {index < faqData.length - 1 && <Divider />}
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFaqOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;