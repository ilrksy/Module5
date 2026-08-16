// js/ajax-utils.js
// Small helper library for loading JSON data and HTML snippet files.
// Wrapped in an IIFE and exposed as the global $dc object.

var $dc = (function () {

    function ajaxGetJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                console.error('Failed to load ' + url + ' (status ' + xhr.status + ')');
            }
        };
        xhr.onerror = function () {
            console.error('Network error loading ' + url);
        };
        xhr.send();
    }

    function loadSnippet(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                console.error('Failed to load snippet ' + url + ' (status ' + xhr.status + ')');
            }
        };
        xhr.onerror = function () {
            console.error('Network error loading ' + url);
        };
        xhr.send();
    }

    function retrieveCategories(callback) {
        ajaxGetJSON('data/categories.json', callback);
    }

    function retrieveMenuItems(categoryShortName, callback) {
        ajaxGetJSON('data/menu_items_' + categoryShortName + '.json', callback);
    }

    return {
        loadSnippet: loadSnippet,
        retrieveCategories: retrieveCategories,
        retrieveMenuItems: retrieveMenuItems
    };

})();
