/**
 *
 * @param $rootScope
 * @param $location
 * @param session
 * @param constants
 */
config.access = function($rootScope, $location, session, constants) {

	$rootScope.$on("$locationChangeStart", function(event, next) {

		var user_type = session.getUserType();

		if (!user_type) {
			$location.path("/login");
		}
	});
};

/**
 * Dependencies
 * @type {string[]}
 */
config.access.$inject = ["$rootScope", "$location", "session", "constants"];