sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
        },
        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("Nextpage")                    
        }
    });
});
