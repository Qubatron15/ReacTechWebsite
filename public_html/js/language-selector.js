let languageSelectorListItems = document.querySelectorAll("#language-selector .language-selector__list__item"),
    changeLanguageFunction = languative.changeLanguage;

languative.changeLanguage = function (languageId) {
    changeLanguageFunction(languageId);
    initializeLanguageSelector();
}

function resetItemsDisplay() {
    languageSelectorListItems.forEach(item => item.classList.remove("hidden"));
}

function selectLanguage(option) {
    languative.changeLanguage(option.id);
    resetItemsDisplay();
    option.classList.add("hidden");
}

function initializeLanguageSelector() {
    languageSelectorListItems.forEach(item => {
        if (item.id === languative.selectedDictionary._id) {
            item.classList.add("hidden");
        }
    });
}
