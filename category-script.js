// js/category-script.js
// Logic for category.html: reads the category short name from the URL,
// fetches its menu items, and displays them.

function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function initCategoryPage() {
    var categoryShortName = getQueryParam('cat');

    if (!categoryShortName) {
        document.getElementById('category_placeholder').innerHTML =
            '<p>No category specified.</p>';
        return;
    }

    $dc.retrieveMenuItems(categoryShortName, function (items) {
        showMenuItems(categoryShortName, items);
    });
}

function showMenuItems(categoryShortName, items) {
    var html = '<h1>Menu Items</h1><ul class="menu-list">';

    items.forEach(function (item) {
        html += '<li><strong>' + item.name + '</strong> — $' + item.price +
            '<br><span class="desc">' + item.description + '</span></li>';
    });

    html += '</ul>';
    document.getElementById('category_placeholder').innerHTML = html;
}
