---
id: sign-in
title: Can't Sign In?
sidebar_label: Sign In
slug: /faqs/sign-in
---

Rowy requires 3rd party cookies to authenticate.

## Incognito or private browsing on

Quit private mode is the easiest way to sign in Rowy, because 3rd party cookies are blocked by default in private mode. If you want to use Rowy in private mode, enable 3rd party cookies in browser settings.

### Chrome incognito mode

#### Option 1: allow all cookies

In the cookies settings page [chrome://settings/cookies](chrome://settings/cookies), select "allow all cookies".
<img
src={require("./assets/chrome-incognito-select-all-cookies.png").default}
alt="Allow all cookies"
/>

#### Option 2: allow cookies on Rowy

In the cookies settings page [chrome://settings/cookies](chrome://settings/cookies), scroll to the bottom, add `https://rowy.io` to "sites that can always use cookies" and make sure "including third-party cookies on this site" is selected.
<img
src={require("./assets/chrome-incognito-add-rowy.png").default}
alt="Allow rowy to use cookie"
/>
<img
src={require("./assets/chrome-incognito-add-rowy-popup.png").default}
alt="Fill in popup"
/>

### Firefox private browsing

In the cookies settings page [about:preferences#privacy](about:preferences#privacy), use the custom option and make sure "cookies" option is deselected.
<img
src={require("./assets/firefox-private-delelect-cookies.png").default}
alt="Deselect cookies"
/>


### Safari private browsing

Rowy works in Safari private browsing mode by default.

## Incognito or private browsing off

Rowy works by default in most browsers, unless 3rd party cookies are blocked. If you are stuck in the sign in page in normal browsing mode, check if 3rd party cookies are blocked.

### Chrome

In the cookies settings page [chrome://settings/cookies](chrome://settings/cookies), make sure cookies are not blocked.

The following options works:
- allow all cookies
- block third-party cookies in incognito

The following options does not work:
- block third-party cookies
- block all cookies

<img
src={require("./assets/chrome-allow-cookies.png").default}
alt="Allow cookies"
/>

Also, make sure Rowy is not blocked. Scroll to the bottom of the page and remove Rowy from the list of "sites that can never use cookies".

<img
src={require("./assets/chrome-allow-rowy.png").default}
alt="Allow Rowy"
/>

### Firefox

In the cookies settings page [about:preferences#privacy](about:preferences#privacy), make sure cookies are not blocked. Standard mode works, strict mode does not work.

<img
src={require("./assets/firefox-cookies.png").default}
alt="Firefox cookies"
/>

### Safari

In Safari settings window, go to privacy tab, make sure "block all cookies" is deselected.

<img
src={require("./assets/safari-privacy.png").default}
alt="Safari privacy"
/>
