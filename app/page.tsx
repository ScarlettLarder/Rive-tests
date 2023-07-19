"use client"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function Home() {
  const STATE_MACHINE_NAME = "form_in_progress";
  const { RiveComponent, rive } = useRive({
    src: "robotV1.riv",
    stateMachines: "State Machine 1",
    autoplay: true
  });
///https://codesandbox.io/p/sandbox/unruffled-mendel-rszrz?file=%2Fpages%2Findex.js%3A1%2C1-50%2C1
  return (
    <div>
      <main>
        <p>dwadwa</p>
        <div
          style={{
            height: "30vh",
            width: "30vw",
          }}
        >
          <RiveComponent />
        </div>
        <p>dwadwa</p>
      </main>
    </div>
  );
}
