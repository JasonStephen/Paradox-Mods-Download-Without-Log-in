// ==UserScript==
// @name         Paradox Mods Download Without Log-in
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Paradox Mods Download Without Log-in
// @author       Jason Stephen
// @match        https://mods.paradoxplaza.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// ==/UserScript==

/*
 * Author: Jason Stephen
 * Year: 2025
 */


(function() {
    'use strict';

    const loginElement = document.querySelector('[class*="AccountMenu-styles__title"]');
    if (loginElement && loginElement.textContent.trim() === 'Log in') {
        console.log('User is not logged in. Proceeding with script download...');

        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                const buttons = document.querySelectorAll('button');
                buttons.forEach(function(button) {
                    if (button.textContent.trim() === 'Download mod' && !button.hasAttribute('data-listener-added')) {

                        button.setAttribute('data-listener-added', 'true');

                        button.addEventListener('click', function(event) {
                            event.preventDefault();
                            event.stopPropagation();

                            const urlParams = new URLSearchParams(window.location.search);
                            const modId = window.location.pathname.split('/')[2];
                            const version = urlParams.get('version') || null;

                            // Ctach Mod Details
                            GM_xmlhttpRequest({
                                method: 'GET',
                                url: `https://api.paradox-interactive.com/mods?modId=${modId}&os=Windows`,
                                onload: function(response) {
                                    const modDetail = JSON.parse(response.responseText).modDetail;
                                    const name = modDetail.name;
                                    const modVersion = version || modDetail.modVersion;
                                    const game = modDetail.game;

                                    const downloadUrl = `https://modscontent.paradox-interactive.com/${game}/${name}/content/sources/${name}_${modVersion}.zip`;

                                    GM_download({
                                        url: downloadUrl,
                                        name: `${modId}_${modVersion}.zip`,
                                        onload: function() {
                                            console.log('Download completed successfully.');
                                        },
                                        onerror: function(error) {
                                            console.error('Download failed:', error);
                                        }
                                    });
                                },
                                onerror: function(error) {
                                    console.error('Failed to fetch mod details:', error);
                                }
                            });

                            //Remove SignIn Dialog
                            const signInDialog = document.querySelector('[class*="SignInDialog-styles__modalWrapper"]');
                            if (signInDialog) {
                                signInDialog.remove();
                                console.log('Sign-in dialog removed.');
                            }
                        }, true);
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        console.log('User is already logged in. No action needed.');
    }
})();
