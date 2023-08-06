"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  const STATE_MACHINE_NAME = "form_in_progress";
  const { RiveComponent, rive } = useRive({
    src: "fish_gameV1.riv",
    stateMachines: "State Machine 1",
    autoplay: true
  });
///https://codesandbox.io/p/sandbox/unruffled-mendel-rszrz?file=%2Fpages%2Findex.js%3A1%2C1-50%2C1
  return (
    <main>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer offset={0} speed={1} factor={2}>
            <p>woww</p>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.5} factor={0.4}>
            <p>wow</p>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
