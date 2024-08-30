sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.nextView", {
        onInit: function () {
        },
        onPressPrev: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1")
        }
    });
});
