//chrome.browserAction.onClicked.addListener(buttonClicked);
chrome.contextMenus.onClicked.addListener(contextsClicked);
chrome.runtime.onInstalled.addListener(setUp)


function setUp() {
    //create item in context menu that only appears when text is selected
    chrome.contextMenus.create({
        title:'Search Virus Total for: %s', //%s inserts highlighted text
        contexts:['selection']
    })

}

function contextsClicked(selectedText) {
    text = selectedText.selectionText
    chrome.tabs.create({
        url: 'https://www.virustotal.com/gui/search/' + text
    })
    }
