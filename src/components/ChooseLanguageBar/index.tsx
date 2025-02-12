import { Container, Select, Option } from "./styles";
import { i18n } from "../../translate/i18n";

import { GlobeIcon } from "../Icons";
import { ChangeEvent, useState } from "react";

export function ChooseLanguageBar() {
	const I18N_STORAGE_KEY = "i18nextLng";

	const [language, setLanguage] = useState<any>(
		localStorage.getItem(I18N_STORAGE_KEY)
	);

	function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
		setLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
		localStorage.setItem(I18N_STORAGE_KEY, e.target.value);
		window.location = window.location;
	}

	return (
		<Container>
			<GlobeIcon />
			<Select onChange={(e) => handleSelect(e)} value={language}>
				<Option value={"pt-BR"}>{i18n.t("chooseLanguageBar.titlePT")}</Option>
				<Option value={"en-US"}>{i18n.t("chooseLanguageBar.titleEN")}</Option>
			</Select>
		</Container>
	);
}
