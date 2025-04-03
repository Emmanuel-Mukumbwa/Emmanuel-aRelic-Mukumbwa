// AnimatedSection.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedSection = ({ children }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 }
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default AnimatedSection;
