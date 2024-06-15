import i18n from "i18next"
import enUsTrans from './locales/en.json'
import zhCnTrans from './locales/zh.json'
import jaCnTrans from './locales/ja.json'
import esCnTrans from './locales/es.json'
import viCnTrans from './locales/vi.json'
import arCnTrans from './locales/ar.json'
import deCnTrans from './locales/de.json'
import frCnTrans from './locales/fr.json'
import itCnTrans from './locales/it.json'
import ptCnTrans from './locales/pt.json'
import {
    initReactI18next
} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'; // 检测当前浏览器语言

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            // 英语
            en: {
                translation: enUsTrans
            },
            // 中文
            zh: {
                translation: zhCnTrans
            },
            // 日语
            ja: {
                translation: jaCnTrans
            },
            // 西班牙语
            es: {
                translation: esCnTrans
            },
            // 阿拉伯语
            ar: {
                translation: arCnTrans
            },
            // 越南语
            vi: {
                translation: viCnTrans
            },
              // 德语
              de: {
                translation: deCnTrans
            },
            // 法语
            fr: {
                translation: frCnTrans
            },
            // 意大利语
            it: {
                translation: itCnTrans
            },
            // 葡萄牙语
            pt: {
                translation: ptCnTrans
            }
        },
        lng: "en",
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false
        }
    });
//初始化语言
const lan = localStorage.getItem("i18n") ? i18n.changeLanguage(localStorage.getItem("i18n")) : i18n.changeLanguage(localStorage.setItem("i18n", "en"));
export const languages = {
    // 英语
    en: "English",
    // 中文
    zh: "繁体中文",
    // 日语
    ja: "日本語",
    // 西班牙语
    es: "Español",
    // 阿拉伯语
    ar: "اللغة العربية",
    // 越南语
    vi: "Tiếng Việt",
    // 德语
    de: "Deutsch",
    // 法语
    fr: "Français",
    // 意大利语
    it: "Italiano",
    // 葡萄牙语
    pt: "Português"
};
export const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18n", language);
}
export default i18n