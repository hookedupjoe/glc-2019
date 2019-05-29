(function (ActionAppCore, $) {

  var ControlSpecs = {
    options: {
      padding: false
    },
    content: [{
      ctl: "spot",
      name: "body",
      text: ""
    }]
  };

  var ControlCode = {};
  var defaulitMobileAt = 100;

  //--- Example of how to implement a function
  ControlCode.setup = function(theOptions) {
    var tmpOptions = theOptions || {};
    this.mobileAt = tmpOptions.mobileAt || this.mobileAt;
    if (tmpOptions.groupName) {
      this.groupName = tmpOptions.groupName;
    }
  };

  ControlCode.showCard = function(theOptionsOrItemName) {
    var tmpOptions = theOptionsOrItemName || {};
    if (typeof(tmpOptions) == 'string') {
      tmpOptions = {
        item: tmpOptions
      };
    }
    var tmpTabOptions = {
      parent: this.getEl(),
      group: this.groupName,
      item: tmpOptions.item
    };
    console.log("body", this.getSpot('body'));
    var tmpBody = this.getSpot('body');

    ThisApp.gotoTab(tmpTabOptions);
    tmpBody.transition('fade', 2)
    .transition('fade', 500, function() {
      ThisApp.gotoTab(tmpTabOptions);
    });


  };
  ControlCode.gotoCard = ControlCode.showCard;
  ControlCode.openCard = ControlCode.showCard;

  ControlCode.addCard = function(theOptionsOrItemName) {
    var tmpOptions = theOptionsOrItemName || {};
    if (typeof(tmpOptions) == 'string') {
      tmpOptions = {
        item: tmpOptions
      };
    }
    var tmpContent = tmpOptions.content || '';

    var tmpGroup = this.groupName;
    var tmpItem = tmpOptions.item || '';
    var tmpSpotName = tmpOptions.spot || tmpItem;

    if (!(tmpGroup && tmpItem)) {
      console.warn("No group and item provided");
      return;
    }

    var tmpCardHTML = '<div myspot="' + tmpSpotName + '" appuse="cards" group="' + tmpGroup + '" item="' + tmpItem + '" class="hidden">' + tmpContent + '</div>';
    this.addToSpot('body', tmpCardHTML);
    return this.getSpot(tmpSpotName);
  };

  ControlCode._onPreInit = function() {
    this.mobileAt = defaulitMobileAt;
    this.groupName = 'ContentPanelTabs';
  };



  ControlCode._onParentResize = function() {
    var tmpEl = this.getSpot('body');
    var tmpWidth = tmpEl.width();
    if (tmpWidth < this.mobileAt) {
      tmpEl.addClass('mobile');
    } else {
      tmpEl.removeClass('mobile');
    }
  };

  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);