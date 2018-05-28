"use strict";
{
    let edit = {
        templateUrl: "edit.html",
        controller: function(userService){
            let vm = this;
            // vm.name = "Kaleb Johnson";
            // vm.contact = "kaleb.j.business@gmail.com";
            // vm.bio = "Web based entrepreneur, but I hate spiders.";
            vm.user = userService.getUser();
            vm.update = function(){
                userService.setUser(vm.user);
            }

        }
    }

    edit.$inject = ["userService"];

    angular
        .module("profile")
        .component("edit", edit);
}