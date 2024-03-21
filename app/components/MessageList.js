'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('https://www.dev.readychatai.com/messages_json', {
                    headers: {
                        'Allow': 'GET, HEAD, OPTIONS',
                        'Content-Type': 'application/json',
                        'Vary': 'Accept'
                    }
                });
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    return (

        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.id} className="mb-2">
                        <strong>{message.sender_name}: </strong>
                        {message.message_text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
