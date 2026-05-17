self.onmessage = async () => {
  self.postMessage({
    type: "opencv-ready",
  });
};

export {};