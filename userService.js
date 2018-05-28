"use strict";
{
    function userService(){
    let user = {
        name: "King James",
        contact: "therealking@goatmail.com",
        bio: "Just a savage doing my thing."
    }
    const getUser = function(){
        return user;
    };

    const setUser = function(newUser){
        user = newUser;
    };
    return{
        getUser,
        setUser
    }
}

    angular
        .module("profile")
        .factory("userService", userService);
}