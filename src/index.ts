import { LanguageMap, languages } from "interface";

export function translate(map: LanguageMap){
    const elements = document.getElementsByClassName("_translate");
    const language = getLanguageCode();
    const data = map[language]!;

    for(const element of elements) {
        const text = element.textContent || '';
        const translated_text = data[text]
        if(translated_text) element.textContent = translated_text;
    }
}

export function setLanguageCode(code: languages){
    window.localStorage.setItem("lang", code)
}

export function getLanguageCode(): languages{
    const languageCode = window.localStorage.getItem("lang");

    if(languageCode) return languageCode as languages;

    return navigator.language.substring(0, 2) as languages;
}

function useBrowserCache(){

}

export function simpleMS(){
    return {
        translate : translate,
        setLanguageCode : setLanguageCode,
        getLanguageCode : getLanguageCode
    }
}

if(window){
    window.simpleMS = simpleMS;
}

// Where is Data...