document.addEventListener(
  "deviceready",
  function () {
    //Remove this method to stop OneSignal Debugging
    window.plugins.OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

    var notificationOpenedCallback = function (jsonData) {
      console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal.startInit("6c27fc35-6b21-4772-a6b8-819d444b763e")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(
        window.plugins.OneSignal.OSInFocusDisplayOption.Notification
      )
      .endInit();

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(
      function (accepted) {
        console.log("User accepted notifications: " + accepted);
      }
    );
  },
  false
);
