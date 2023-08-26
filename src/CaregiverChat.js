import React, { useState } from 'react';

function CaregiverChat({ caregiver }) {
  const [messages, setMessages] = useState(getInitialMessages(caregiver));
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (text, sender) => {
    const newMessage = { id: messages.length + 1, text, sender };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-box">
      <h2>{caregiver.name}</h2>
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button onClick={() => sendMessage(newMessage, 'caregiver')}>Send</button>
      </div>
    </div>
  );
}

function getInitialMessages(caregiver) {
    switch (caregiver.name) {
        case 'Morshed Haque':
        return [
            { id: 1, text: "Hi! Can you kindly bring some Monus, it has finished.", sender: 'caregiver' },
            { id: 2, text: "Sure, I will bring it today.", sender: 'user' },
            { id: 3, text: "Thanks", sender: 'caregiver' },
            { id: 4, text: "No problem.", sender: 'user' },
            { id: 5, text: "Hi, where are you now?", sender: 'caregiver' },
            { id: 6, text: "I'm currently at the store.", sender: 'user' },
            { id: 7, text: "Great! Please get some bananas too.", sender: 'caregiver' },
        ];
        case 'Tasnim Ahmed':
        return [
        { id: 1, text: "Hi, my mother fell down from the stairs today, please come early", sender: 'caregiver' },
        { id: 2, text: "Sure, I am on my way Sir.", sender: 'user' },
        { id: 3, text: "Hey, did you give my mother her dinner?", sender: 'caregiver' },
        { id: 4, text: "Yes , Sir", sender: 'user' },
        { id: 5, text: "Thank you.", sender: 'caregiver' },
        { id: 6, text: "Your Welcome", sender: 'user' },
        ];
        case 'Fahim Rahman':
        return [
        { id: 1, text: "Sir, I am afraid to say that Sam is bleeding very badly as a result of fighting with his friends. I am treating him.", sender: 'user' },
        { id: 2, text: "Oh my god! please apply the cream and spray in the fridge called Aerojel ", sender: 'caregiver' },
        { id: 3, text: "Okay, Sir", sender: 'user' },
        { id: 4, text: " I am coming soon", sender: 'caregiver' },
        ];
        case 'Rabeya Khan':
        return [
        { id: 1, text: "Hello! How can I assist you?", sender: 'user' },
        { id: 3, text: "Feel free to ask any questions.", sender: 'user' },
        { id: 4, text: "Sure.", sender: 'caregiver' },
        { id: 5, text: "Thank you for your assistance!", sender: 'caregiver' },
        { id: 6, text: "Can you provide information about your memory care services?", sender: 'caregiver' },
        { id: 7, text: "Certainly!", sender: 'user' },
        // ... continue with more messages
        ];
        case 'Imran Ahmed':
        return [
        { id: 1, text: "Imran Hi, can you start from Monday?", sender: 'caregiver' },
        { id: 2, text: "I'm a little busy on Tuesday and Thursday. I will let you know if I can make you start on Friday.", sender: 'caregiver' },
        { id: 3, text: "Alright Sir. See you.", sender: 'user' },
        ];
        default:

        return [];
  }
}
  

export default CaregiverChat;

