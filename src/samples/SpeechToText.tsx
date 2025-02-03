import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface SpeechRecognitionWindow extends Window {
  SpeechRecognition: new () => SpeechRecognition;
  webkitSpeechRecognition: new () => SpeechRecognition;
}

const SpeechToText: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition =
      (window as unknown as SpeechRecognitionWindow).SpeechRecognition ||
      (window as unknown as SpeechRecognitionWindow).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech recognition is not supported");
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = "en-US";

    // Handle results
    recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");

      setTranscript(transcript);
    };

    // Handle errors
    recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error(event.error);
      setIsListening(false);
    };

    // Restart if stopped but still listening
    recognitionInstance.onend = () => {
      if (isListening) {
        recognitionInstance.start();
      }
    };

    setRecognition(recognitionInstance);

    return () => {
      recognitionInstance.stop();
    };
  }, []);

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Speech to Text</h2>
        <button
          onClick={toggleListening}
          className={`p-2 rounded ${
            isListening ? "bg-red-500" : "bg-blue-500"
          } text-white`}
        >
          <Icon
            icon={isListening ? "mdi:microphone-off" : "mdi:microphone"}
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="min-h-[200px] p-4 border rounded-lg bg-gray-50">
        {transcript || "Start speaking..."}
      </div>
    </div>
  );
};

export default SpeechToText;
