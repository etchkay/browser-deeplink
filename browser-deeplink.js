/**
 * browser-deeplink v0.1
 *
 * Author: AMPEDUPDESIGNS, March 17th, 2015
 * WebURL: http://www.ampedupdesigns.com/blog/show?bid=67
 *
 * GPL License
 */

function launchiOSApp(url) {
     var appleAppStoreLink = 'https://itunes.apple.com/pk/app/vouch-365/id1052613859';
     var now = new Date().valueOf();
     setTimeout(function () {
          if (new Date().valueOf() - now > 500) return;
          window.location = appleAppStoreLink;
     }, 100);
     window.location = url;
}
function launchAndroidApp2(url) {
     var androidAppStore = 'https://play.google.com/store/apps/details?id=com.entertainerasia.vouch365';
     var now = new Date().valueOf();
     setTimeout(function () {
          if (new Date().valueOf() - now > 500) return;
          window.location = androidAppStore;
     }, 100);
     window.location = url;
}

/*Not using the one below*/
function launchAndroidApp(url) {
    var androidAppStore = "https://play.google.com/store/apps/details?id=com.entertainerasia.vouch365";
    var g_intent = "scheme=MYAPP;package=com.entertainerasia.vouch365;end"; //see notes below
    
    if(navigator.userAgent.match(/Chrome/)) {
         var intent = url.replace('MYAPP', 'intent') + '#Intent;' + g_intent; //see notes below
         document.location = intent;
    } 
    else if (navigator.userAgent.match(/Firefox/)) {
         launchWebkitApproach(url, androidAppStore);
         setTimeout(function () {
              launchIframeApproach(url, androidAppStore);
         }, 1500);
    }
    else {
        launchIframeApproach(url, androidAppStore);
    }
}