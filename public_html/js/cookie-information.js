let cookieInformationElement = document.querySelector('#cookie-information'),
        cookieInformationButtonElement = document.querySelector('#cookie-information__agree-button');

setCookie = (key, value) => {
    document.cookie = key + "=" + value + ";";
};

getCookie = key => {
    let name = key + "=",
            decodedCookie = decodeURIComponent(document.cookie),
            cookiesArray = decodedCookie.split(';'),
            result = "";

    cookiesArray.forEach(cookie => {
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            result = cookie.substring(name.length, cookie.length);
        }
    });

    return result;
};

cookieAcceptedByUser = () => document.cookie.acceptedByUser;

displayCookieInformation = () => {
    if (!getCookie("acceptedByUser")) {
        cookieInformationElement.style.bottom = '20px';
    }
};

cookieInformationButtonElement.addEventListener('click', () => {
    document.cookie.acceptedByUser = true;
    setCookie("acceptedByUser", "true");
    cookieInformationElement.style.bottom = '-1000px';
});

displayCookieInformation();