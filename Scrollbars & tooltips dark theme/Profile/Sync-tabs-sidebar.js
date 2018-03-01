(function() {
    var css =`
@-moz-document url(chrome://browser/content/syncedtabs/sidebar.xhtml){
.search-box {
  -moz-appearance: none !important;
  background-color: #222 !important;
  color: #fff !important}

.tabs-container, .item-title-container, .item-tabs-list {
  -moz-appearance: none !important;
  color: #ccc !important}

.item-icon-container {fill: #ccc !important}

.item.selected > * {-moz-appearance: none !important; color: #000 !important}

.item-title-container:hover > .item-icon-container {fill: #fff !important}

.item-title-container:hover, .item-tabs-list:hover {
  background-image: linear-gradient(rgb(34,85,170), rgb(34,85,170)) !important;
  color: #fff !important}

.item-title-container:active > .item-icon-container {fill: #ccc !important}

.item-title-container:active, .item-tabs-list:active {
  background-image: linear-gradient(rgb(205,232,255), rgb(205,232,255)) !important;
  outline: 1px solid rgb(123,195,255) !important;
  color: #000 !important}

.item.selected > .item-title-container:hover {
  background-image: linear-gradient(rgb(205,232,255), rgb(205,232,255)) !important;
  outline: 1px solid rgb(123,195,255) !important;
  color: #000 !important}

.item.selected > .item-title-container:hover > .item-icon-container {fill: #000 !important}

}`;

    var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
    var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));
    sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
})();
