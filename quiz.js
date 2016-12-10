var inventory = [];
loadInventory = ();

function populatePage (inventory) {
  //loop over the inventory and populate the page

  //now that the DOM is loaded, establish all the event listeners needed
  activateEvents();
}


//load the inverntory and send a callback function to be
//invoked after the process is complete

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", function () {

  });
}
