/**
 * Toolbar sections controller
 * @param $scope {Object}
 * @param $rootScope {Object}
 * @param constants {Object}
 * @param session {Object}
 * @param i18n {Object}
 */
controllers.sections = function($scope, $rootScope, constants, session, i18n) {

	var sectionsByType = {
		"1": ["users"],
		"2": ["users"],
		"3": ["users"]
	};

	$scope.sections = [];

	sections();

	$rootScope.$on(constants.events.user.login, function() {
		sections();
	});

	$rootScope.$on(constants.events.user.logout, function() {
		$scope.sections = [];
	});

	function sections() {

		$scope.sections = [];

		(sectionsByType[session.getUserType() || 3]).forEach(function(item) {
			$scope.sections.push({
				label: i18n.fetch(item),
				path: "/" + item
			});
		});
	}

};

/**
 * Dependencies
 * @type {Array}
 */
controllers.sections.$inject = ["$scope", "$rootScope", "constants", "session", "i18n"];