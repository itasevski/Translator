import CustomAxios from "./CustomAxios";

const TranslateService = {
    getTranslation: (text, translationLanguage, sourceLanguage) => {
        return CustomAxios.post(
            "",
            {},
            {
                params: {
                    q: text,
                    target: translationLanguage,
                    source: sourceLanguage
                }
            }
        );
    }
}

export default TranslateService;