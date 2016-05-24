/**
 * Login service
 * @param restful {Object} restful service instance
 */
services.users = function(restful) {

	var api = services.abstract.api(restful, "users");

	/**
	 * Custom login API call for the users service
	 * @param username {String}
	 * @param password {Password}
	 * @returns {*}
	 */
    api.login = function(username, password) {

        return restful.query("/users/login", {
            username: username,
            password: password
        });
    };

    api.logout = function() {

        return restful.query("/users/logout");
    };

    return api;

};

/**
 * Dependencies
 * @type {string[]}
 */
services.users.$inject = ["restful"];