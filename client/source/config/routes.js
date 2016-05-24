/**
 * Routing for the application
 * @param $routeProvider
 * @param $httpProvider
 */
config.routes = function($routeProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;

	$routeProvider.when("/login", {
		templateUrl: "partials/login.html",
		controller: "login"
	});

	$routeProvider.when("/dashboard", {
		templateUrl: "partials/dashboard.html",
		controller: "dashboard"
	});

	config.routes.api($routeProvider, "users");

	$routeProvider.otherwise({
		redirectTo: "/dashboard"
	});
};

/**
 * Set API routing for a given name
 * @param $routeProvider {Object} Angular route provider
 * @param name {String}
 * @param [partials] {Object} Map of partial to override defaults
 */
config.routes.api = function($routeProvider, name, partials) {

	var templates = {
        list: "partials/section/list.html",
        view: "partials/section/view.html",
        edit: "partials/section/edit.html",
        create: "partials/section/edit.html",
        remove: "partials/section/remove.html"
    };

    angular.extend(templates, partials);

    $routeProvider.when("/" + name, {
		templateUrl: templates.list,
		controller: name
	});

	$routeProvider.when("/" + name + "/view/:id", {
		templateUrl: templates.view,
		controller: name
	});

	$routeProvider.when("/" + name + "/edit/:id", {
		templateUrl: templates.edit,
		controller: name,
		data: {
			user_type: 1
		}
	});

	$routeProvider.when("/" + name + "/create", {
		templateUrl: templates.create,
		controller: name,
		data: {
			user_type: 1
		}
	});

	$routeProvider.when("/" + name + "/remove/:id", {
		templateUrl: templates.remove,
		controller: name,
		data: {
			user_type: 1
		}
	});
};

/**
 * Dependencies
 * @type {string[]}
 */
config.routes.$inject = ["$routeProvider", "$httpProvider"];