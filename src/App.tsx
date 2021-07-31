import { useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Lottie from 'react-lottie';

import thankYouAnimation from './animations/thank-you.json';

function App() {
  const [fireConfetti, setFireConfetti] = useState(false);

  return (
    <div className="App">
      <ReactCanvasConfetti 
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
        fire={fireConfetti}
        particleCount={500}
        angle={90}
        spread={360}
        startVelocity={150}
        decay={0.8}
        gravity={2.2}
        drift={1}
        ticks={800}
      />
      <div>
        <Lottie
          options={{
            animationData: thankYouAnimation,
            loop: false,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          isPaused={false}
          isStopped={false}
          direction={1}
          speed={2}
          eventListeners={[
            {
              eventName: 'complete',
              callback: () => setFireConfetti(true)
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
