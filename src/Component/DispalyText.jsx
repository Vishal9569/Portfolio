import React, { useState, useEffect } from 'react';

function DynamicText() {
    const texts = ['a Front-End Developer', 'a Software Engineer'];
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const sentence = texts[index];

        // Display one word at a time
        if (charIndex < sentence.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + sentence[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 150);

            return () => clearTimeout(timer);
        } else {

            const sentenceTimer = setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setCharIndex(0);
                setDisplayedText('');
            }, 2000);

            return () => clearTimeout(sentenceTimer);
        }
    }, [charIndex, index, texts]);

    return (
        <h1 className='dynamicText'>{displayedText}</h1>
    );
}

export default DynamicText;
