(function() {
    "use strict";

    var MyApp = window.MyApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
     DevExpress.devices.current({ platform: "generic" });

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "navbar",
            navigation: [
              {
                title: "Player",
                action: "#home",
                icon: "product"
              },
              {
                title: "Games",
                action: "#about",
                icon: "car"
              },
			    {
                title: "Apps",
                action: "#apps",
                icon: "runner"
              },
			    {
                title: "Browser",
                action: "#browser",
                icon: "globe"
              },
			    {
                title: "Tools",
                action: "#tools",
                icon: "toolbox"
              },			
			
            ]
        });
        
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });
    
})();