export type languages = "ko" | "en" | "jp" | "ru" | "zh" | "he" | "ar";

export interface LanguageMap {
    "ko"?: {[key: string]: any};
    "en"?: {[key: string]: any};
    "jp"?: {[key: string]: any};
    "ru"?: {[key: string]: any};
    "zh"?: {[key: string]: any};
    "he"?: {[key: string]: any};
    "ar"?: {[key: string]: any};
}

declare global {
    interface Window { simpleMUS: any }
} 