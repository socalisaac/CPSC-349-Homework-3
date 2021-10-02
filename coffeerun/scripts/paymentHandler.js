(function (window) {

    'use strict';
    var App = window.App;
    var FormHandler = App.FormHandler;
    
    var FORM_SELECTOR = '[data-payment="form"]';
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data) {
        var modal = document.getElementById("myModal");

        var title = data.title;
        var username = data.username;

        modal.textContent = "Thank you for your payment, " + title + " " + username + "!";

        $(modal).show(function () {
            setTimeout(function () {
                $(modal).hide();
            }, 5000);
        });
    });
})(window);