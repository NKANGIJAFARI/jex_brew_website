'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+971507763533'
      accountName='Brews Academy'
      notification
      notificationDelay={60000}
      // avatar='/logo.png'
      statusMessage='Typically replies within 30 minutes'
      chatMessage='Hello! How can we help you today?'
      placeholder='Type a message...'
    />
  );
};

export default WhatsAppWidget; 