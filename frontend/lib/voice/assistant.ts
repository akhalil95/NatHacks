export type VoiceAssistantHandle = {
  start: () => void;
  stop: () => void;
  speak: (text: string) => void;
};

export function createVoiceAssistant(): VoiceAssistantHandle {
  return {
    start: () => {},
    stop: () => {},
    speak: (text: string) => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      }
    },
  };
}