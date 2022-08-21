import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import languages from "../utils/languages";

const Translate = () => {
    const [sourceLanguage, setSourceLanguage] = useState(languages[0]);
    const [translationLanguage, setTranslationLanguage] = useState(languages[1]);
    const [text, setText] = useState("");

    return (
        <div className="ui grid">
            <div className="ui form six wide column centered">
                <div className="field">
                    <label className="label">Your text</label>
                    <input type="text"
                           value={text}
                           onChange={(event) => setText(event.target.value)} />
                </div>
                <br />
                <Dropdown items={languages}
                          selected={sourceLanguage}
                          onSelectedChange={setSourceLanguage}
                          label="Source language" />
                <br />
                <Dropdown items={languages}
                          selected={translationLanguage}
                          onSelectedChange={setTranslationLanguage}
                          label="Translation language" />
                <hr style={{ marginTop: "15px" }} />
                <h3 className="ui header">Output: </h3>
                <Convert text={text}
                         sourceLanguage={sourceLanguage}
                         translationLanguage={translationLanguage} />
            </div>
        </div>
    );
}

export default Translate;