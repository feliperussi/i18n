import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

// Get the language from the browser 
const language = navigator.language.split(/[-_]/)[0];  
console.log("Language", language);
if (language === "es") {
    ReactDOM.render(
        <IntlProvider locale={language} messages={localeEsMessages}>
        <JobsList />
        </IntlProvider>,
        document.getElementById("root")
    );
} else if (language === "en") {
    ReactDOM.render(
        <IntlProvider locale={language} messages={localeEnMessages}>
        <JobsList />
        </IntlProvider>,
        document.getElementById("root")
    );
}

// Path: src\locales\es.js