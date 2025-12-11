// File: src/GlassCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const GlassCard = ({ children }) => {
  return <Card className="glass-card">{children}</Card>;
};

export default GlassCard;
