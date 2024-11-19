document.getElementById('toggleMode').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0] && !tabs[0].url.startsWith('chrome://')) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: toggleColorBlindMode
        });
      } else {
        alert('This extension cannot run on Chrome internal pages.');
      }
    });
  });
  
  function toggleColorBlindMode() {
    const body = document.body;
    if (body.style.filter === 'contrast(120%)') {
      body.style.filter = 'none'; 
    } else {
      body.style.filter = 'contrast(120%)'; 
    }
  }
  