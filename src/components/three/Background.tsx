import React from "react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import TopUI from "./TopUI";

const BackgroundSection = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  /* if you want to make canvas colorize, comment out next line */
  /* filter: brightness(150%) grayscale(100%); */
`;

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasUIRef = useRef<TopUI>();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvasUIRef.current = new TopUI({
      canvas: canvas,
    });
  }, []);

  return (
    <BackgroundSection>
      <canvas id="background-canvas" ref={canvasRef}></canvas>
    </BackgroundSection>
  );
};
export default Background;
