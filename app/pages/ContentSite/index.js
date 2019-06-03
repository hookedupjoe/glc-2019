(function (ActionAppCore, $) {

    var SiteMod = ActionAppCore.module("site");

    //~thisPageSpecs//~
var thisPageSpecs = {
	"pageName": "ContentSite",
	"pageTitle": "Event Content Site",
	"navOptions": {
		"topLink": false,
		"sideLink": false
	}
};
//~thisPageSpecs~//~

    var pageBaseURL = 'app/pages/' + thisPageSpecs.pageName + '/';

    //~layoutOptions//~
thisPageSpecs.layoutOptions = {
    baseURL: pageBaseURL,
    north:{ html: 'north' },
    east: { html: 'east' },
    west: { panel: 'SiteNavigator' },
    center: { control: "ContentPanel" },
    south:{ html: 'south' },
};
//~layoutOptions~//~

    //~layoutConfig//~
thisPageSpecs.layoutConfig = {

  west__size: "250",
  west__spacing_open: 0,
  west__spacing_closed: 0,
  west__resizable: false,
  west__slidable: true,
  west__closable: true,

  east__size: "2",
  east__spacing_open: 0,
  east__spacing_closed: 0,
  east__resizable: false,
  east__slidable: true,
  east__closable: true,

  south__closable: true,
  south__spacing_open: 0,
  south__spacing_closed: 0
};
//~layoutConfig~//~
    //~required//~
thisPageSpecs.required = {
  templates: {
    baseURL: pageBaseURL + 'tpl',
    map: {
      "speaker-details": "content:speaker-details"
    }
  },
  controls: {
    baseURL: pageBaseURL + 'controls/',
    map: {
      "SpeakerCards": "SpeakerCards",
      "CafeCards": "CafeCards"
    }
  }
};
//~required~//~

    var ThisPage = new SiteMod.SitePage(thisPageSpecs);

    var actions = ThisPage.pageActions;

    ThisPage._onPreInit = function (theApp) {
        //~_onPreInit//~

//~_onPreInit~//~
    }

    ThisPage._onInit = function () {
        //~_onInit//~

//~_onInit~//~
    }


    ThisPage._onFirstActivate = function (theApp) {
        //~_onFirstActivate//~
// ThisApp.getSpot('EventSite:west').addClass('loading');
// ThisApp.getSpot('EventSite:center').addClass('loading');
ThisPage.showLoading();
//~_onFirstActivate~//~
        ThisPage.initOnFirstLoad().then(
            function () {
                //~_onFirstLoad//~
//For debugging
window.activePage = ThisPage;


//--- Quick access to common elements
ThisPage.navIcon = ThisPage.getByAttr$({pageuse: 'navIcon'});
ThisPage.headerNameImg = ThisPage.getByAttr$({pageuse: 'headerNameImg'});
ThisPage.yearIcon = ThisPage.getByAttr$({pageuse: 'yearIcon'});
ThisPage.yearIconSm = ThisPage.getByAttr$({pageuse: 'yearIconSm'});
ThisPage.siteMapHeader = $('.site-map-header', ThisPage.getParent$());
ThisPage.content = ThisPage.parts.center;

// ThisPage.overlayContent = ThisPage.getSpot('overlay-content');
// ThisPage.overlayActionsSpot = ThisPage.getSpot('overlay-actions');
// ThisPage.overlayPreActionsSpot = ThisPage.getSpot('overlay-pre-actions');

//--- Start nav closed
//actions.closeSiteMap(); 

ThisPage.parts.west.subscribe('selectMe', ThisPage.onNavChange);
hidePageOverlay();

ThisPage.pageLoadedFlag = true;
ThisPage.resizeLayoutToScreen();
  

ThisApp.delay(250).then(function(theReply){
  //ThisApp.gotoTab('site-outline','about');
  openContentPage('about');
  ThisPage.closeInitiaLoader();
});
//~_onFirstLoad~//~
                ThisPage._onActivate();
            }
        );
    }


    ThisPage._onActivate = function () {
        //~_onActivate//~

//~_onActivate~//~
    }

    ThisPage._onResizeLayout = function (thePane, theElement, theState, theOptions, theName) {
        //~_onResizeLayout//~
if( ThisPage.pageLoadedFlag === true){
  ThisPage.resizeLayoutToScreen();   
}
//~_onResizeLayout~//~
    }

    //------- --------  --------  --------  --------  --------  --------  -------- 
    //~YourPageCode//~
var numLookup = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];

ThisPage.navClickClosed = false;

ThisPage.minCardSizeSm = 210;
ThisPage.minCardSize = 265;
ThisPage.maxCardSizeSm = 365;
ThisPage.maxCardSize = 365;
ThisPage.currentCardCount = 0;
ThisPage.cutOffSmall = 668;
ThisPage.cutOffLarge = 9999;

ThisPage.navSize = 270;
ThisPage.extraSize = 25;

ThisPage.showHeadTextAt = 825;
ThisPage.showNoYearIcon = 350;
ThisPage.showLongYearIcon = 460;

var contentSpecs = {
  "dining": {
    tite: "2019 Dining",
    newsource: {
      control: 'CafeCards'
    },
    source: {
      html: 'content-dining'
    }
  },
  "about": {
    tite: "About GLC",
    source: {
      html: 'content-about'
    }
  },
  "agenda": {
    tite: "2019 GLC Agenda",
    source: {
      html: 'content-agenda'
    }
  },
  "guest-act": {
    tite: "2019 Guest Activities",
    source: {
      html: 'content-guest-act'
    }
  },
  "dress": {
    tite: "2019 Dress Code",
    source: {
      html: 'content-dress'
    }
  },
  "hotel": {
    tite: "2019 Hotel Reservations",
    source: {
      html: 'content-hotel'
    }
  },
  "sponsors": {
    tite: "GLC 2019 Sponsors",
    source: {
      html: 'content-sponsors'
    }
  },
  "pricing": {
    tite: "2019 Pricing Details",
    source: {
      html: 'content-pricing'
    }
  },
  "ride-drive": {
    tite: "2019 Ride & Drive",
    source: {
      html: 'content-ride-drive'
    }
  },
  "travel-details": {
    tite: "2019 Travel Details",
    source: {
      html: 'content-travel-details'
    }
  },
  "travel-package": {
    tite: "2019 Travel Package",
    source: {
      html: 'content-travel-package'
    }
  },
  "speakers": {
    tite: "2019 GLC Speakers",
    source: {
      control: 'SpeakerCards'
    }
  },
  "leadership": {
    tite: "2019 Leadership Lunch Conversations",
    source: {
      control: 'SpeakerCards',
      setup: {
        type: "lunch"
      }
    }
  },
  "networking": {
    tite: "2019 Networking",
    source: {
      html: 'content-networking'
    }
  },
  "committees": {
    tite: "2019 GLC Committees",
    source: {
      html: 'content-committees'
    }
  }
};

ThisPage.mode = "";

function refreshMode() {
  if (ThisPage.mode == "L") {
    ThisPage.setModeLarge();
  } else if (ThisPage.mode == "M") {
    ThisPage.setModeMedium();
  } else if (ThisPage.mode == "S") {
    ThisPage.setModeSmall();
  }
}


ThisPage.resizeLayoutProcess = function(theForce) {

  try {
    //--- On layout resize ...
    var tmpEl = ThisPage.getParent$();
    ThisApp.grid16.resizeGrid({
      parent: tmpEl
    });
    var tmpTW = tmpEl.innerWidth();
    ThisPage.currentWidth = tmpTW;

    var tmpCardCount = 4;

    var tmpCenter = ThisPage.layout.state.center;
    var tmpIW = tmpCenter.innerWidth;
    var tmpMin = ThisPage.minCardSizeSm;
    if (ThisPage.mode != "S") {
      tmpMin = ThisPage.minCardSize;
    }
    var tmpMax = ThisPage.maxCardSizeSm;
    if (ThisPage.mode != "S") {
      tmpMax = ThisPage.maxCardSize;
    }

    // if ((theForce !== true) || (ThisPage.lastTW == tmpTW) && ((ThisPage.lastIW == tmpIW) || (tmpIW === 0))) {
    //   return;
    // }
    //console.log("resizeLayoutProcess theForce",theForce);

    ThisPage.lastTW = tmpTW;
    ThisPage.lastIW = tmpIW;

    var tmpEach = parseInt(tmpIW / tmpMin);
    tmpCardCount = tmpEach;

    if (tmpCardCount > 10) {
      tmpCardCount = 10;
    }



    if (tmpTW < ThisPage.cutOffSmall) {
      if (ThisPage.mode != "S") {
        setModeSmall()
      }
    } else if (tmpTW >= ThisPage.cutOffLarge) {
      if (ThisPage.mode != "L") {
        setModeLarge();
        if (ThisPage.navClickClosed !== true) {
          showNav();
        }
      }
    } else {
      if (ThisPage.mode != "M") {
        setModeMedium()
        if (ThisPage.navClickClosed !== true) {
          showNav();
        }
      }
    }


    var tmpCards = ThisPage.getSpot('cards-area');


    var tmpCardsLen = tmpCards.length;
    if (tmpCards && tmpCardsLen > 0) {
      for (var iPos = 0; iPos < tmpCardsLen; iPos++) {
        var tmpCardsEl = $(tmpCards[iPos]);
        if (tmpCardsEl && tmpCardsEl.is(":visible")) {
          var tmpCardEntryEls = tmpCardsEl.find('.card.ui');
          if (ThisPage.mode == 'S') {
            tmpCardEntryEls.css('max-width', ThisPage.maxCardSizeSm + 'px');
          } else {
            tmpCardEntryEls.css('max-width', ThisPage.maxCardSize + 'px');
          }
          var tmpMaxCards = tmpCardEntryEls.length;
          if (tmpCardCount > tmpMaxCards) {
            tmpCardCount = tmpMaxCards;
          }

          var tmpToRemove = '';
          if (ThisPage.currentCardCount) {
            tmpToRemove = numLookup[ThisPage.currentCardCount];
          }
          ThisPage.currentCardCount = tmpCardCount;
          var tmpToAdd = numLookup[ThisPage.currentCardCount];


          if (theForce || (tmpToRemove != tmpToAdd)) {
            if (tmpToRemove) {
              tmpCards.removeClass(tmpToRemove);
            }
            if (tmpToAdd) {
              tmpCards.addClass(tmpToAdd);
            }
          }
        }
      }
    }

    refreshHideWhens();
    //--- end layout resize

  } catch(ex) {
    console.warn("Error on refresh ", ex);
  }
};

ThisPage.resizeLayoutToScreen = resizeLayoutToScreen;
function resizeLayoutToScreen(theForce) {


  if (ThisPage.pageLoadedFlag !== true) {
    return;
  }
  // var tmpForce = theForce;
  // if( tmpForce === true){
  //   ThisPage.lastTW = 0;
  //   ThisPage.lastIW = 0;
  // }
  // console.log("resizeLayoutToScreen tmpForce",tmpForce);
  // tmpForce = true;


  var tmpFunction = function() {

    ThisPage.resizeLayoutProcess(theForce)
  };

  ThisApp.waitForFinalEvent(tmpFunction,
    50,
    "resizeLayoutToScreen");
}


function refreshHideWhens() {
  if (ThisPage.navOpen === true) {
    ThisPage.navIcon.removeClass('basic');
    refreshOpenNav();
  } else {
    ThisPage.navIcon.addClass('basic');
  }

  var tmpYearIcon = false;
  var tmpYearIconSm = true;

  if (ThisPage.currentWidth <= ThisPage.showNoYearIcon) {
    tmpYearIcon = false;
    tmpYearIconSm = false;
  }
  if (ThisPage.currentWidth >= ThisPage.showLongYearIcon) {
    tmpYearIcon = true;
    tmpYearIconSm = false;
  }


  if (ThisPage.currentWidth >= ThisPage.showHeadTextAt) {
    ThisPage.headerNameImg.removeClass('hidden');
  } else {
    ThisPage.headerNameImg.addClass('hidden');
  }
  if (tmpYearIcon) {
    ThisPage.yearIcon.removeClass('hidden');
  } else {
    ThisPage.yearIcon.addClass('hidden');
  }
  if (tmpYearIconSm) {
    ThisPage.yearIconSm.removeClass('hidden');
  } else {
    ThisPage.yearIconSm.addClass('hidden');
  }


  if (ThisPage.mode != "S") {} else {}
}

actions.toggleNav = toggleNav;
function toggleNav() {
  if (ThisPage.navOpen) {
    ThisPage.navClickClosed = true;
    hideNav();
  } else {
    ThisPage.navClickClosed = false;
    showNav();
  }
}

actions.showNav = showNav;
function showNav() {

  if (ThisPage.navOpen === true) {
    return;
  }
  ThisPage.navOpen = true;
  if (ThisPage.mode == "S") {
    ThisPage.layout.close('west');
    ThisPage.layout.sizePane('west', '100%');
    ThisPage.layout.open('west');
  } else {
    ThisPage.layout.close('west');
    ThisPage.layout.sizePane('west', ThisPage.navSize);
    ThisPage.layout.open('west');
  }
  refreshHideWhens();
}

function refreshOpenNav() {
  if (ThisPage.mode == "S") {
    ThisPage.layout.sizePane('west', '100%');
  } else {
    ThisPage.layout.sizePane('west', ThisPage.navSize);
  }
}
actions.hideNav = hideNav;
function hideNav() {
  if (ThisPage.navOpen === false) {
    return;
  }
  ThisPage.navOpen = false;
  ThisPage.layout.close('west');
  refreshHideWhens();
}

actions.showPageOverlay = showPageOverlay;
function showPageOverlay() {
  ThisPage.layout.sizePane('south', '100%');

  var tmpEl = ThisPage.getSpot('overlay-frame');
  ThisPage.layout.slideOpen('south');
  ThisPage.layout.sizePane('south', '100%');

  tmpEl.transition('fade', 2)
  .transition('slide up', 250, function() {


  })


}

actions.hidePageOverlay = hidePageOverlay;
function hidePageOverlay() {
  ThisPage.layout.slideClose('south');
};

actions.showDetails = showDetails;
function showDetails(theOptions) {
  var tmpDetails = theOptions.details || false;
  if (!(tmpDetails)) {
    alert("Could not find speaker details", "Error, contact support", "e");
    return;
  }
  tmpDetails = ThisApp.clone(tmpDetails);

  console.log("showDetails tmpDetails", tmpDetails);
  var tmpBio = 'No bio available';
  if (tmpDetails.bio && tmpDetails.bio.length > 0) {
    tmpDetails.biography = tmpDetails.bio.join('<br /><br />');
  }
  var tmpTpl = 'content:speaker-details';
  ThisPage.loadSpot('overlay-content', tmpDetails, tmpTpl);
  showPageOverlay();
};

actions.showSitePage = showSitePage;
function showSitePage(theParams, theTarget) {
  var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['pagename']);
  var tmpName = tmpParams.pagename || 'about';
  showPageOverlay();
};




actions.setModeSmall = setModeSmall;
function setModeSmall() {
  ThisPage.mode = "S";
  ThisPage.layout.close('east');
  ThisPage.layout.sizePane('west', '100%');
  hideNav();
};


actions.setModeMedium = setModeMedium;
function setModeMedium() {
  ThisPage.mode = "M";
  ThisPage.layout.close('east');
  ThisPage.layout.sizePane('west', ThisPage.navSize);
  if ((typeof(ThisPage.navOpen) == 'undefined')) {
    showNav();
  }

};


actions.setModeLarge = setModeLarge;
function setModeLarge() {
  ThisPage.mode = "L";
  setModeMedium();
};

actions.closeSiteMap = closeSiteMap;
function closeSiteMap(theParams, theTarget) {
  ThisPage.navHead = ThisPage.navHead || ThisPage.siteMapHeader.find('[action="outlineDisplay"][select="false"]');
  if (ThisPage.navHead) {
    ThisPage.navHead.trigger('click')
  }
};


ThisPage.closeInitiaLoader = function() {
  ThisPage.hideLoading();
};

var contentIndex = {};

actions.gotoContent = gotoContent;
function gotoContent(theParams, theTarget){
  var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['name']);
  var tmpName = tmpParams.name || '';
  if( tmpName ){
    openContentPage(tmpName);
  } else {
    console.warn("No name provided for content");
  }
}


actions.openContentPage = openContentPage;
function openContentPage(theName) {
  if (ThisPage.activeContent === theName) {
    return;
  }
  ThisPage.activeContent = theName;
  if (! (contentIndex[theName])) {
    var tmpNew = ThisPage.content.addCard(theName);
    contentIndex[theName] = tmpNew;

    var tmpSpecs = contentSpecs[theName];
    var tmpHTMLName = '';
    var tmpControlName = '';
    if (tmpSpecs && tmpSpecs.source && tmpSpecs.source.html) {
      tmpHTMLName = tmpSpecs.source.html
    }
    if (tmpSpecs && tmpSpecs.source && tmpSpecs.source.control) {
      tmpControlName = tmpSpecs.source.control
    }

    if (tmpControlName) {
      ThisPage.contentControls = ThisPage.contentControls || {};
      var tmpControlKey = 'content-' + theName;
      if (!(ThisPage.contentControls[tmpControlKey])) {
        var tmpNewControl = ThisPage.getControl(tmpControlName);
        var tmpNewInstance = tmpNewControl.create(tmpControlKey);
        ThisPage.contentControls[tmpControlKey] = tmpNewControl;
        var tmpSetup = {};
        if (tmpSpecs && tmpSpecs.source && tmpSpecs.source.setup) {
          tmpSetup = tmpSpecs.source.setup
        }
        tmpNewInstance.setup(tmpSetup);
        tmpNewInstance.loadToElement(tmpNew);
      }
    } else if (tmpHTMLName) {
      var tmpURL = pageBaseURL + 'html/' + tmpHTMLName + '.html?open';
      tmpNew.html('');
      ThisApp.apiCall({
        cache: false,
        loading: ThisApp.getSpot('ContentSite:center'),
        url: tmpURL,
        method: 'GET',
        datatype: 'text'
      }).then(function(theReply) {
        tmpNew.html(theReply);
      }, function(theReply) {
        ThisPage.showLoading(false);
        tmpNew.html("error loading content");
      })

    } else {
      tmpNew.html('Content: ' + theName);
    }
  }


  ThisPage.content.gotoCard(theName);
  ThisPage.resizeLayoutProcess(true);
}

ThisPage.onNavChange = function(theEvent, theControl, theTarget) {
  var tmpEl = $(theTarget);
  var tmpAs = ThisApp.getAttrs(theTarget, ['group', 'item']);
  if (tmpAs.group == 'site-outline' && tmpAs.item) {
    openContentPage(tmpAs.item);
  }

  $('[spot="ContentSite:center"]').scrollTop(0);
  if (ThisPage.mode == 'S') {
    hideNav();
  }

};
//~YourPageCode~//~

})(ActionAppCore, $);
