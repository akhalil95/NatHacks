export type VoiceAssistantEvent =
  | { type: "listening"; active: boolean }
  | { type: "transcript"; text: string }
  | { type: "assistant"; text: string };

export type VoiceAssistantHandle = {
  start: () => void;
  stop: () => void;
  speak: (text: string) => void;
  on: (callback: (event: VoiceAssistantEvent) => void) => () => void;
};

export function createVoiceAssistant(): VoiceAssistantHandle {
  const listeners = new Set<(event: VoiceAssistantEvent) => void>();

  const emit = (event: VoiceAssistantEvent) => {
    listeners.forEach((listener) => listener(event));
  };

  return {
    start: () => emit({ type: "listening", active: true }),

    stop: () => emit({ type: "listening", active: false }),

    speak: (text: string) => {
      emit({ type: "assistant", text });

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      }
    },

    on: (callback) => {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
  };
}
