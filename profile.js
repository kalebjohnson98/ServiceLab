"use strict";
{
    let pro = {
        templateUrl: "profile.html",
        controller: function(userService){
            let vm = this;
            // vm.name = "Kaleb Johnson";
            // vm.contact = "kaleb.j.business@gmail.com";
            // vm.bio = "Web based entrepreneur, but I hate spiders.";


            vm.user = userService.getUser();
        }
    }

    pro.$inject = ["userService"];
    angular
        .module("profile")
        .component("pro", pro);
}