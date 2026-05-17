self.onmessage = async () => {
  self.postMessage({
    type: "mediapipe-ready",
  });
};

export {};