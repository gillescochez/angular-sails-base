/**
 * Users controller
 * @param $scope {Object} angular scope
 * @param $routeParams {Object} angular route parameters
 * @param $location {Object} angular location
 * @param i18n {Object} i18n service
 * @param permissions {Object} permissions service
 * @param toasts {Object} permissions service
 * @param users {Object} users service
 */
controllers.users = function($scope, $rootScope, $location, $routeParams, i18n, permissions, toasts, users) {

	controllers.abstract.router($scope, $rootScope, permissions, i18n, toasts, {
		name: "users",
		service: users,
		id: $routeParams.id,
		action: controllers.abstract.getAction($location.path()),
		fields: {
			edit: ["username", "user_type"],
			create: ["username", "password", "user_type"],
			list: ["username", "user_type"]
		},
		types: {
			user_type: {
				value: "select",
				options: {
					"1": i18n.fetch("admin"),
					"2": i18n.fetch("moderator"),
					"3": i18n.fetch("user")
				}
			}
		}
	});
};

/**
 * Dependencies
 * @type {String[]}
 */
controllers.users.$inject = ["$scope", "$rootScope", "$location", "$routeParams", "i18n", "permissions", "toasts", "users"];