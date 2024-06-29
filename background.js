chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.resize) {
    const height = Math.min(message.height, 600); // Limit the height if necessary
    chrome.windows.getCurrent(window => {
      chrome.windows.update(window.id, { height: height });
    });
  }
});
