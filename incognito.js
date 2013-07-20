$(document).ready(function() {
    var cancelClick = function(event) {
      event.preventDefault();
      return false;
    };
    var openIncognito = function(event) {
        var url = $(this).attr('href');
        if (url.substr(0, 1) === '/' && url.substr(0, 2) !== '//')
          url = 'http://www.reddit.com' + url;
        if (event.button != 2) { // If it's not a right-click
            chrome.runtime.sendMessage(url);
            cancelClick(event);
        }
    };
    $('.linklisting')
        .on('click', '.over18 a.thumbnail, .over18 a.title', cancelClick)
        .on('mouseup', '.over18 a.thumbnail, .over18 a.title', openIncognito)
});
