function findLastIncognito(windows) {
    var win = false;
    for(var i = windows.length - 1; i >= 0; i--)
        if (windows[i].incognito) win = windows[i];
    return win;
}
function openNsfwLink(thisUrl, putInThisWindow) {
    if (putInThisWindow)
        chrome.tabs.create({ windowId: putInThisWindow.id, url: thisUrl, selected: false});
    else
        chrome.windows.create({ url: thisUrl, incognito: true});
}
chrome.runtime.onMessage.addListener(function(thisUrl, sender, sendResponse) {
    chrome.windows.getAll({ "populate": true }, function(windows) {
        openNsfwLink(thisUrl, findLastIncognito(windows));
    });
});
