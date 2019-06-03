(function (ActionAppCore, $) {

  var ControlSpecs = {
    options: {
      padding: true,
      customData: {
        cardDetails: {
          "order": [
            "carleton",
            "drapers",
            "forum",
            "main",
            "prime",
            "sneads"
          ],
          "imageLoc": [
            "./res/"
          ],
          "index": {
            "carleton": {
              "key": "carleton",
              "name": "Café Carleton ",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            },
            "drapers": {
              "key": "drapers",
              "name": "Draper's ",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            },
            "forum": {
              "key": "forum",
              "name": "The Forum",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            },
            "main": {
              "key": "main",
              "name": "Main Dining Room",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            },
            "prime": {
              "key": "prime",
              "name": "Prime 44 West",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            },
            "sneads": {
              "key": "sneads",
              "name": "Sam Snead's",
              "desc": "desccccccccc",
              "dress": "dresssssssss",
              "img": "imagename",
              "details": []
            }
          }
        }
      }
    },
    content: [{
      "ctl": "divider",
      "name": "title",
      "text": "Where to Dine",
      "size": "medium",
      "color": "black"
    },

      {
        "ctl": "div",
        "name": "title-msg",
        classes: "ui basic label full aligned fluid",
        styles: "font-size:18px;line-height:25px;margin-bottom:20px;",
        text: "testing new page"
      },
      {
        ctl: "div",
        classes: "ui segment basic slim larger",
        name: "top-message",
        basic: true,
        text: "Registration will take place onsite on Thursday, October 10 from 5:00 - 5:30 p.m. in the Cameo Ballroom. Spaces will go fast, so think about which session you want to attend, and sign up as soon as you arrive!<br /><br /><i>Note: Gold and Silver sponsors are granted pre-registration as part of their sponsorship.</i>"
      },

      {
        "ctl": "cards",
        "name": "main-cards",
        classes: "centered section ",
        "slim": true,
        "link": true,
        attr: {
          "pagespot": "cards-area"
        },
        "content": []
      },
      {
        ctl: "div",
        styles: "clear:both;margin-bottom:10px;"
      },
      {
        ctl: "div",
        classes: "ui center aligned segment basic pad0",
        styles: "font-style: italic;font-size:larger;",
        basic: true,
        text: "Speakers subject to change"
      }]
  };

  var ControlCode = {};

  ControlCode._onPreInit = function() {
    this.setup();
  };

  ControlCode.setup = setup;
  function setup(theOptions) {
    var tmpOptions = theOptions || {};

    var tmpCardDetails = this.getConfig().options.customData.cardDetails;
    this.cardsEntry = this.getItemSpecs('main-cards');

    //--- clear existing just in case
    this.cardsEntry.content = [];
    var tmpOrderNode = 'order';

    for (var iPos in tmpCardDetails[tmpOrderNode]) {
      var tmpKey = tmpCardDetails[tmpOrderNode][iPos];
      var tmpDetails = tmpCardDetails.index[tmpKey];
      console.log("tmpKey", tmpKey);
      var tmpDesc = tmpDetails.title || '';
      var tmpMeta = tmpDetails.extraInfo || '';

      var tmpNewCard = {
        "ctl": "cardfull",
        "classes": "orange raised tall",
        onClick: {
          run: "action",
          action: "showCafeDetails",
          details: tmpDetails,
          key: tmpDetails.key,
          source: "page"
        },
        "name": tmpDetails.key,
        "header": tmpDetails.name,
        "imageSrc": "./res/" + tmpDetails.img + "",
        "meta": "<a>" + tmpMeta + "</a>",
        "description": tmpDesc
      };

      this.cardsEntry.content.push(tmpNewCard);
    }

  }

  function DELETEME_OLD_setup(theOptions) {
    var tmpOptions = theOptions || {};


    this.titleEntry = this.getItemSpecs('title');
    this.titleMsg = this.getItemSpecs('title-msg');
    var tmpCardDetails = this.getConfig().options.customData.speakerDetails;
    this.cardsEntry = this.getItemSpecs('main-cards');
    this.titleFri = this.getItemSpecs('fri-title');
    this.titleSat = this.getItemSpecs('sat-title');
    this.msgFri = this.getItemSpecs('fri-msg');
    this.msgSat = this.getItemSpecs('sat-msg');
    this.msgTop = this.getItemSpecs('top-message');
    //          var tmpLunchTitle = this.getItemSpecs('top-message');


    //--- clear existing just in case
    var tmpOrderNode = 'order';
    this.cardsEntry.ctl = "div";
    if (tmpOptions.type == 'lunch') {
      this.titleEntry.text = tmpCardDetails.titleLunch;
      this.titleMsg.text = tmpCardDetails.introLunch;

      this.titleFri.text = tmpCardDetails.titleFriLunch;
      this.titleSat.text = tmpCardDetails.titleSatLunch;

      this.msgFri.classes = "hidden";
      this.msgFri.text = "";
      this.msgSat.classes = "hidden";
      this.msgSat.text = "";

      tmpOrderNode = 'lunch';
    } else {
      this.titleEntry.text = tmpCardDetails.title;
      this.titleMsg.text = tmpCardDetails.intro;

      this.titleFri.text = tmpCardDetails.titleFri;
      this.titleSat.text = tmpCardDetails.titleSat;

      this.msgFri.text = tmpCardDetails.msgFri;
      this.msgSat.text = tmpCardDetails.msgSat;

      //      this.cardsEntry.content = [];
      this.msgTop.classes = "hidden";
      this.msgTop.text = "";
    }


    for (var iPos in tmpCardDetails[tmpOrderNode]) {
      var tmpKey = tmpCardDetails[tmpOrderNode][iPos];
      var tmpDetails = tmpCardDetails.index[tmpKey];
      var tmpDesc = tmpDetails.title || '';
      var tmpOrg = tmpDetails.org || '';
      if (tmpOrg) {
        if (tmpDesc) {
          tmpDesc += '<br />';
        }
        tmpDesc += tmpOrg;
      }

      // tmpDetails.dayshow = tmpDetails.day;
      // if (tmpOptions.type == 'lunch') {
      //   //tmpDetails.dayshow += ' Lunch';
      //   tmpDetails.dayshow = '';
      // }
      tmpDetails.dayshow = '';

      var tmpNewCard = {
        "ctl": "cardfull",
        "classes": "orange raised tall",
        centered: true,
        onClick: {
          run: "action",
          action: "showDetails",
          details: tmpDetails,
          key: tmpDetails.key,
          source: "page"
        },
        "name": tmpDetails.key,
        "header": tmpDetails.name,
        "imageSrc": "./res/" + tmpDetails.img + "",
        "meta": "<a>" + tmpDetails.dayshow + "</a>",
        "description": tmpDesc
      };
      var tmpEntry = this.getItemSpecs(tmpDetails.day);
      tmpEntry.content.push(tmpNewCard);

      // if (tmpOptions.type == 'lunch') {
      //   var tmpEntry = this.getItemSpecs(tmpDetails.day);
      //   tmpEntry.content.push(tmpNewCard);
      // } else {
      //   this.cardsEntry.content.push(tmpNewCard);
      // }
    }

  }


  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);