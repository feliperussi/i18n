import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";

// Get language of browser
const language = navigator.language.split(/[-_]/)[0];
console.log("Language", language);  

ReactDOM.render(
    <IntlProvider locale="language" messages= {localeEsMessages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);