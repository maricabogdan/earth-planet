import React, { Suspense, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Earth } from './components/Model';
import FirstSection from './components/FirstSection';
import { Scroll, ScrollControls, Text, useScroll } from '@react-three/drei';
import SecondSection from './components/SecondSection';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

function ScrollEarth() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const EarthRef = useRef();

  useFrame(() => {
    EarthRef.current = 1 + data.range(0, 1 / 3) / 3;
  });
  return <Earth />;
}

const App = () => {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <ScrollControls damping={4} pages={2}>
              <Scroll>
                <ScrollEarth />
              </Scroll>
              <Scroll html>
                <FirstSection />
                <SecondSection />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default App;
