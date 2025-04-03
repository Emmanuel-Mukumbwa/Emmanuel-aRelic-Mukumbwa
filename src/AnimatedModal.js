import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedModal = ({ show, onHide, title, children }) => {
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-50px)`,
    config: { tension: 200, friction: 20 }
  });

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" animation={false}>
      <animated.div style={animation}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
      </animated.div>
    </Modal>
  );
};

export default AnimatedModal;
