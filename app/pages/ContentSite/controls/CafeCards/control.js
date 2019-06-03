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
              "dress": "Business casual attire. Jackets are required for gentlemen.  If denim is your attire preference, well-kept denim in a dark shade is ours. Men’s hats and baseball caps are not permitted.",
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
        "ctl": "div",
        classes: "ui center aligned horizontal black large header cm-header",
        "name": "title",
        "text": "Dining",
        "size": "medium",
        "color": "black"
      },

        {
          "ctl": "div",
          "name": "title-msg",
          classes: "ui basic label full aligned fluid",
          styles: "font-size:18px;line-height:25px;margin-bottom:20px;",
          text: "The Greenbrier has arranged a special room rate, which includes a Meal Plan for all GLC attendees and their guests. Your meal plan includes breakfast and dinner plus gratuity, state sales tax, occupancy tax, Historic Preservation Fund (HPF) fee, and resort fees."
        },
      {
        ctl: "div",
        name: "top-message",
        text: '<div class="ui segment slim basic ">    <div class="ui center aligned header medium blue">      Specifics of the meal plan </div>    <ul class="ui relaxed divided list larger">      <div class="item">        <b>Breakfast: </b> included each day. You may choose among the Conference Networking Breakfasts; a two-course à la carte meal or breakfast buffet in the Main Dining Room; the menu at Draper&rsquo;s Café; or in-room service.      </div>      <div class="item">        <b>Dinner:</b>  included for the group dinner on Thursday at Kate&rsquo;s Mountain, and the Saturday evening 70th Anniversary Tailgate and Soirée. Because these meals are included in your overall conference fee, the GLC Meal Plan will not be honored in any of the restaurants on Thursday or Saturday evenings.      </div>      <div class="item">        Friday evening will give you the opportunity to explore some of the dining options at The Greenbrier, and the following choices and venues are included in your meal plan:  a three-course meal in the Main Dining Room; Sam Snead&rsquo;s at the Golf Club; Draper&rsquo;s Café; The Forum; In-Fusion; or room service. A delivery fee will apply for room service.      </div>      <div class="item">        If your choice for Friday dining is at the Prime 44 West steakhouse, keep in mind it&rsquo;s a special experience, but will require a $50 per person surcharge over what&rsquo;s included in your meal plan. The expanded tasting menu in the Main Dining room also requires a $55 per person surcharge. Alcoholic beverages or bar service of any kind is not included in your Meal Plan package.      </div>    </ul>  </div><h3 class="ui horizontal clearing blue medium center aligned header title">            The Greenbrier Restaurant Collection          </h3>'
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
        text: "All details, open times and menus subject to change"
      },
      {
        ctl: "message",
        size: "large",
        text: "Make your Friday evening dinner reservations by calling (855) 346-7156 ext. 1."
      },
      {
        ctl: "message",
        size: "large",
        text: "<b>Dietary Requests</b> The Greenbrier will accommodate any special dietary requests you have if they are notified in advance.<br /><br />Please <a class=\"ui link\" href=\"mailto:kerry_baldwin@greenbrier.com\">email</a> Kerry Baldwin at least two weeks prior to the conference with any food allergies or vegetarian, vegan, or gluten free meals required."
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
      tmpMeta = '<b>Open: </b>Every Thursday, Friday & Saturday: 5:00pm - 12:00am, Midnight '
      
      tmpDesc = "Conceived as a bright and colorful tribute to Dorothy Draper, Draper's offers casual dining with a menu that includes classic Dorothy Draper recipes as well as traditional southern dishes. Enjoy lunch and dinner served in a cheerfully unique setting.";
      
      
      var tmpDress = "<b>Dress: </b>" + tmpDetails.dress;
      
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
        "description": tmpDesc,
        "extraText": tmpDress
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