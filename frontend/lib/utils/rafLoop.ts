export type RafLoopHandle = {
  start: () => void;
  stop: () => void;
  isRunning: () => boolean;
};

export function createRafLoop(callback: (time: number) => void): RafLoopHandle {
  let frameId: number | null = null;
  let running = false;

  const loop = (time: number) => {
    if (!running) return;
    callback(time);
    frameId = requestAnimationFrame(loop);
  };

  return {
    start: () => {
      if (running) return;
      running = true;
      frameId = requestAnimationFrame(loop);
    },
    stop: () => {
      running = false;
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    },
    isRunning: () => running,
  };
}