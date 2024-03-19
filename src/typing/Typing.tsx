import React, { useState,useEffect } from 'react';
import './typing.scss';

interface TypingProps {
    sentences: string[];
}

export const Typing: React.FC<TypingProps> = ({ sentences }) => {
    const [currentText, setCurrentText] = useState<string>('');
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
    const [isTyping, setIsTyping] = useState<boolean>(true);
    const [cursorVisible, setCursorVisible] = useState<boolean>(true);

    useEffect(() => {
        let typingInterval: number;

        if (isTyping) {
            typingInterval = window.setInterval(() => {
                const fullText = sentences[currentSentenceIndex];

                if (currentCharIndex < fullText.length) {
                    const currentChar = fullText[currentCharIndex];

                    setCurrentText(prevText => prevText + currentChar);
                    setCurrentCharIndex(prevIndex => prevIndex + 1);
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);

                    setTimeout(() => {
                        setCurrentText('');
                        setCurrentCharIndex(0);
                        setCurrentSentenceIndex(prevIndex => (prevIndex + 1) % sentences.length);
                        setIsTyping(true);
                    }, 2000);
                }
            }, 100);

            // Ustawienie interwału dla migającego kursora
            const cursorInterval = window.setInterval(() => {
                setCursorVisible(prevVisible => !prevVisible);
            }, 500); // Zmiana widoczności co 500ms

            return () => {
                clearInterval(typingInterval);
                clearInterval(cursorInterval);
            };
        }
    }, [currentSentenceIndex, currentCharIndex, isTyping, sentences]);

    return (
        <div className="typing">
            {currentText}
            {cursorVisible && '|'}
        </div>
    );
};





