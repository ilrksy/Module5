// js/script.js
// Home page logic: load the home snippet template, fetch the list of
// categories, pick one at random, substitute it into the template, and
// show the result.

function init() {
    $dc.loadSnippet('home-snippet.html', function (homeSnippetHTML) {

        // STEP 1: buildAndShowHomeHTML runs once the categories come back.
        $dc.retrieveCategories(function (categories) {
            buildAndShowHomeHTML(categories, homeSnippetHTML);
        });

    });
}

function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

function buildAndShowHomeHTML(categories, homeSnippetHTML) {

    // STEP 2: pick a random category out of the list we got back.
    var randomCategory = chooseRandomCategory(categories);

    // STEP 3: replace the {{randomCategoryShortName}} placeholder in the
    // snippet with the short_name of the category we chose.
    var finishedHomeHTML = homeSnippetHTML.replace(
        '{{randomCategoryShortName}}',
        randomCategory.short_name
    );

    // STEP 4: insert the finished HTML into the page.
    document.getElementById('main_placeholder').innerHTML = finishedHomeHTML;
}
