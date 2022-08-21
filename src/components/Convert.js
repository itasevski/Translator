import React from "react";
import { useState, useEffect } from "react";
import TranslateService from "../services/TranslateService";

const Convert = ({ text, sourceLanguage, translationLanguage }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        // if a user stops typing for half a second, update debounced text
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            if(sourceLanguage.value === translationLanguage.value) return;

            const { data } = await TranslateService.getTranslation(debouncedText, translationLanguage.value, sourceLanguage.value);

            setTranslated(data.data.translations[0].translatedText);
        }

        // updating debounced text will trigger the POST request
        doTranslation();
    }, [translationLanguage, sourceLanguage, debouncedText]);
    // debouncing - optimizes performance in terms of number of HTTP requests sent

    return (
        <h1>{translated}</h1>
    );
}

export default Convert;