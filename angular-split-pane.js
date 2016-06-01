/*!

AngularJS Split Pane directive v1.3.0

Copyright (c) 2014-2016 Simon Hagström

Released under the MIT license
https://raw.github.com/shagstrom/split-pane/master/LICENSE

*/
angular.module('shagstrom.angular-split-pane', [])
.directive('splitPane', function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		scope: {
			splitPaneProperties: '='
		},
		controller: ['$scope', function($scope) {
			$scope.components = [];
			this.addComponent = function(attributes) {
				$scope.components.push(attributes);
			};
			this.addDivider = function(attributes) {
				$scope.divider = attributes;
			};
		}],
		link: function($scope, element, attrs) {
			var $firstComponent = element.children('.split-pane-component:first'),
				$divider = element.children('.split-pane-divider'),
				$lastComponent = element.children('.split-pane-component:last');
			if ($scope.components[0].width && $scope.components[0].width.match(/%$/)) {
				element.addClass('vertical-percent');
				var rightPercent = (100 - parseFloat($scope.components[0].width.match(/(\d+)%$/)[1])) + "%" ;
				$firstComponent.css({ right: rightPercent, marginRight: $scope.divider.width });
				$divider.css({ right: rightPercent, width: $scope.divider.width });
				$lastComponent.css({ width: rightPercent });
			} else if ($scope.components[0].width) {
				element.addClass('fixed-left');
				$firstComponent.css({ width: $scope.components[0].width });
				$divider.css({ left: $scope.components[0].width, width: $scope.divider.width });
				$lastComponent.css({ left: $scope.components[0].width, marginLeft: $scope.divider.width });
			} else if ($scope.components[1].width && $scope.components[1].width.match(/%$/)) {
				element.addClass('vertical-percent');
				$firstComponent.css({ right: $scope.components[1].width, marginRight: $scope.divider.width });
				$divider.css({ right: $scope.components[1].width, width: $scope.divider.width });
				$lastComponent.css({ width: $scope.components[1].width });
			} else if ($scope.components[1].width) {
				element.addClass('fixed-right');
				$firstComponent.css({ right: $scope.components[1].width, marginRight: $scope.divider.width });
				$divider.css({ right: $scope.components[1].width, width: $scope.divider.width });
				$lastComponent.css({ width: $scope.components[1].width });
			} else if ($scope.components[0].height && $scope.components[0].height.match(/%$/)) {
				element.addClass('horizontal-percent');
				var bottomPercent = (100 - parseFloat($scope.components[0].height.match(/(\d+)%$/)[1])) + "%" ;
				$firstComponent.css({ bottom: bottomPercent, marginBottom: $scope.divider.height });
				$divider.css({ bottom: bottomPercent, height: $scope.divider.height });
				$lastComponent.css({ height: bottomPercent });
			} else if ($scope.components[0].height) {
				element.addClass('fixed-top');
				$firstComponent.css({ height: $scope.components[0].height });
				$divider.css({ top: $scope.components[0].height, height: $scope.divider.height });
				$lastComponent.css({ top: $scope.components[0].height, marginTop: $scope.divider.height });
			} if ($scope.components[1].height && $scope.components[1].height.match(/%$/)) {
				element.addClass('horizontal-percent');
				$firstComponent.css({ bottom: $scope.components[1].height, marginBottom: $scope.divider.height });
				$divider.css({ bottom: $scope.components[1].height, height: $scope.divider.height });
				$lastComponent.css({ height: $scope.components[1].height });
			} else if ($scope.components[1].height) {
				element.addClass('fixed-bottom');
				$firstComponent.css({ bottom: $scope.components[1].height, marginBottom: $scope.divider.height });
				$divider.css({ bottom: $scope.components[1].height, height: $scope.divider.height });
				$lastComponent.css({ height: $scope.components[1].height });
			}
			element.splitPane();
			var localFirstComponentSize, localLastComponentSize;
			element.on('splitpaneresize', function (event, splitPaneProperties) {
				if ($scope.splitPaneProperties && event.target === element[0] &&
						localFirstComponentSize !== splitPaneProperties.firstComponentSize &&
						localLastComponentSize !== splitPaneProperties.lastComponentSize) {
					$scope.$apply(function () {
						localFirstComponentSize = splitPaneProperties.firstComponentSize;
						$scope.splitPaneProperties.firstComponentSize = splitPaneProperties.firstComponentSize;
						localLastComponentSize = splitPaneProperties.lastComponentSize;
						$scope.splitPaneProperties.lastComponentSize = splitPaneProperties.lastComponentSize;
					});
				}
			});
			$scope.$watch('splitPaneProperties.firstComponentSize', function (firstComponentSize) {
				if ((firstComponentSize || firstComponentSize === 0) && firstComponentSize !== localFirstComponentSize) {
					localFirstComponentSize = firstComponentSize;
					element.splitPane('firstComponentSize', firstComponentSize);
				}
			});
			$scope.$watch('splitPaneProperties.lastComponentSize', function (lastComponentSize) {
				if ((lastComponentSize || lastComponentSize === 0) && lastComponentSize !== localLastComponentSize) {
					localLastComponentSize = lastComponentSize;
					element.splitPane('lastComponentSize', lastComponentSize);
				}
			});
		},
		template: '<div class="split-pane" ng-transclude></div>'
	};
})
.directive('splitPaneComponent', function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^splitPane',
		link: function($scope, element, attrs, paneCtrl) {
			paneCtrl.addComponent({ width: attrs.width, height: attrs.height });
		},
		template: '<div class="split-pane-component" ng-transclude></div>'
	};
})
.directive('splitPaneDivider', function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^splitPane',
		link: function($scope, element, attrs, paneCtrl) {
			paneCtrl.addDivider({ width: attrs.width, height: attrs.height });
		},
		template: '<div class="split-pane-divider" ng-transclude></div>'
	};
});
