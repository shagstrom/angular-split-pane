angular-split-pane
==================

An AngularJS Split Pane directive

[Demo](http://www.dreamchain.com/static/angular-split-pane/examples/nested.html)

The directive should work in IE8 and above as well as in Chrome, Safari and Firefox.

You can add angular-split-pane.js by to you project by installing with bower

    bower install angular-split-pane

or with npm

    npm install @shagstrom/angular-split-pane

You can get and set component sizes in the object specified by attribute "split-pane-properties".

Below is a basic example on how to use the directive:

[Basic Demo](http://www.dreamchain.com/static/angular-split-pane/examples/fixed-left.html)

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<title>Fixed left</title>
			<link rel="stylesheet" href="../bower_components/split-pane/split-pane.css" />
			<script src="../bower_components/jquery/dist/jquery.min.js"></script>
			<script src="../bower_components/angular/angular.js"></script>
			<script src="../bower_components/split-pane/split-pane.js"></script>
			<script src="../bower_components/angular-split-pane/angular-split-pane.js"></script>
			<style type="text/css">
				html, body { height: 100%; min-height: 100%; margin: 0; padding: 0; }
				/* The styling bolow is very simple. You can style things your own way. */
				body { box-sizing: border-box; background: #aaa; padding: 5px; }
				.split-pane-divider { background: #aaa; }
				.split-pane-component { background: #fff; }
			</style>
		</head>
		<body data-ng-app="example">
			<div data-split-pane>
				<div data-split-pane-component data-width="20em">left</div>
				<div data-split-pane-divider data-width="5px"></div>
				<div data-split-pane-component>right</div>
			</div>
			<script>
				angular.module('example', ['shagstrom.angular-split-pane']);
			</script>
		</body>
	</html>

Here is an example where we are getting and setting component sizes:

[Set component size Demo](http://www.dreamchain.com/static/angular-split-pane/examples/set-component-size.html)

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			<title>Fixed left</title>
			<link rel="stylesheet" href="../bower_components/split-pane/split-pane.css" />
			<script src="../bower_components/jquery/dist/jquery.min.js"></script>
			<script src="../bower_components/angular/angular.js"></script>
			<script src="../bower_components/split-pane/split-pane.js"></script>
			<script src="../angular-split-pane.js"></script>
			<style type="text/css">
				html, body { height: 100%; min-height: 100%; margin: 0; padding: 0; }
				/* The styling bolow is very simple. You can style things your own way. */
				body { box-sizing: border-box; background: #aaa; padding: 5px; }
				.split-pane-divider { background: #aaa; }
				.split-pane-component { background: #fff; }
			</style>
		</head>
		<body data-ng-app="example" ng-controller="MainCtrl">
			<div data-split-pane data-split-pane-properties="splitPaneProperties">
				<div data-split-pane-component data-width="20em">
					<p>Left</p>
					<p>
						<button data-ng-click="setLastComponent(0)">Collapse right component</button>
					</p>
					<p>Left component size {{splitPaneProperties.firstComponentSize}}px</p>
					<p>Right component size {{splitPaneProperties.lastComponentSize}}px</p>
				</div>
				<div data-split-pane-divider data-width="5px"></div>
				<div data-split-pane-component>
					<p>Right</p>
					<p>
						<button data-ng-click="setFirstComponent(0)">Collapse left component</button>
					</p>
					<p>Left component size {{splitPaneProperties.firstComponentSize}}px</p>
					<p>Right component size {{splitPaneProperties.lastComponentSize}}px</p>
				</div>
			</div>
			<script>
				angular.module('example', ['shagstrom.angular-split-pane'])
				.controller('MainCtrl', function ($scope) {
					$scope.splitPaneProperties = {};
					$scope.setFirstComponent = function (value) {
						$scope.splitPaneProperties.firstComponentSize = value;
					};
					$scope.setLastComponent = function (value) {
						$scope.splitPaneProperties.lastComponentSize = value;
					};
				});
			</script>
		</body>
	</html>

