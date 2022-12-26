
// <!-- Google Tag Manager -->
// <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-TMP99VT');</script>
// <!-- End Google Tag Manager -->



var _hsp = window._hsp = window._hsp || [];
_hsp.push(['addPrivacyConsentListener', function(consent) {
    console.log(consent.allowed); 
}]);
(function (window) {
    let cookieHandler = {
    acceptAllCookiesButton : document.getElementById('accept-all-cookies-button'), // All cookies //
    acceptNecessaryCookiesButton : document.getElementById('accept-necessary-cookies-button'), // Necessary cookies //
    acceptSelectedCookieButton : document.getElementById('accept-selected-cookies-button'), // Selected cookies //
    allCookieInputs : document.querySelectorAll('.cookie-input'), // All Cookie Inputs //
    cookieContainer : document.querySelector(".cookie-container"), // Cookie banner //

    expiryPeriodInDays : 150, // approximately 6 months
    hasUserMadeSelectionName : 'cookie_selection_made',
    selectedCookiesName : 'selected_cookies',
    tagManagerMapping : {
        'necessary' : 'LoadNecessaryEvents',
        'analytical' : 'LoadAnalyticalEvents',
        'marketing' : 'LoadMarketingEvents'
    }, 

    acceptedNecessaryCookies : function acceptedNecessaryCookies(acceptedCookies = []) {
        let allAcceptedCookies = this.getAcceptedCookies().concat(acceptedCookies);

        return allAcceptedCookies.includes('necessary');
    },
    bindBannerEvents : function bindBannerEvents() {
        let self = this;
        self.acceptAllCookiesButton.addEventListener("click", () => {
        self.saveCookieSelection(self.getAllCookieOptions());
        self.hideBanner();
        });
        // Necessary cookies //
        self.acceptNecessaryCookiesButton.addEventListener("click", () => {
        window.console.log('self.acceptNecessaryCookiesButton = ', self.acceptNecessaryCookiesButton);
        self.saveCookieSelection(['necessary']);
        self.hideBanner();
        });
        // Selected cookies //
        self.acceptSelectedCookieButton.addEventListener("click", () => {
        self.saveCookieSelection(self.getAllCookieOptions(true));
        self.hideBanner();
        });
    },
    checkCookies : function checkCookies() {
        this.invalidateCookieSelection(Date.now() - this.expiryPeriodInDays);

        if (!this.hasUserMadeSelection()) {
        this.bindBannerEvents();
        this.showBanner();
        } else {
        // check last date > 6 months? --> show again
        this.fireTagManager(this.getAcceptedCookies());
        this.hideBanner();
        }
    },
    fireTagManager : function fireTagManager(acceptedCookies) {
        window.console.log('acceptedCookies ', acceptedCookies);
        // fire events accordingly
        if (window.dataLayer
        && window.Array.isArray(window.dataLayer)) {
        acceptedCookies.forEach((cookieName) => {
            window.console.log('triggering event ', this.tagManagerMapping[cookieName]);
            window.dataLayer.push({
                event: this.tagManagerMapping[cookieName]
            });
        });
        } else {
        window.console.warn('TagManager is not loaded - check again');
        }
    },
    getAcceptedCookies : function getAcceptedCookies() {
        return localStorage.getItem(this.selectedCookiesName) === null
        ? []
        : localStorage.getItem(this.selectedCookiesName).split(',');
    },
    getAllCookieOptions : function getAllCookieOptions(selectedOnly = false) {
        let acceptedCookies = [];
        this.allCookieInputs.forEach((input) => {
        if (selectedOnly) {
            if (input.checked) {
            acceptedCookies.push(input.getAttribute('name'));
            }
        } else {
            acceptedCookies.push(input.getAttribute('name'));
        }
        });

        return acceptedCookies;
    },
    hasUserMadeSelection : function hasUserMadeSelection() {
        return localStorage.getItem(this.hasUserMadeSelectionName) !== null
    },
    hideBanner : function hideBanner() {
        this.cookieContainer.classList.remove("active");
    },
    invalidateCookieSelection : function invalidateCookieSelection(expiresDate = null) {
        if (this.hasUserMadeSelection()) {
        window.console.log('date = ', expiresDate);
        window.console.log('date - this.expiryPeriodInDays = ', (expiresDate - this.expiryPeriodInDays));
        window.console.log('(date - this.expiryPeriodInDays) > localStorage.getItem(this.hasUserMadeSelectionName).getDate() = ', (expiresDate - this.expiryPeriodInDays) > localStorage.getItem(this.hasUserMadeSelectionName));
        if (expiresDate !== null
            && expiresDate > localStorage.getItem(this.hasUserMadeSelectionName)) {
            return;
        }
        localStorage.removeItem(this.hasUserMadeSelectionName);
        localStorage.removeItem(this.selectedCookiesName);
        }
    },
    saveCookieSelection : function saveCookieSelection(acceptedCookies) {
        if (acceptedCookies.length > 0
        && this.acceptedNecessaryCookies(acceptedCookies)) {
        window.console.log('saving to localStorage');
        localStorage.setItem(this.hasUserMadeSelectionName, Date.now());
        localStorage.setItem(this.selectedCookiesName, acceptedCookies.join(','));
        }

        this.fireTagManager(acceptedCookies);
    },
    showBanner : function showBanner() {
        this.cookieContainer.classList.add("active");
    }
    };

    cookieHandler.checkCookies();
})(window);