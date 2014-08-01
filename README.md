angular-split-pane
==================

An AngularJS Split Pane directive

The directive should work in IE9 and above as well as in Chrome, Safari and Firefox.

You can add angular-split-pane.js by to you project by installing with bower

    bower install angular-split-pane

Below is a basic example on how to use the directive. 

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Basic Example</title>
            <link rel="stylesheet" href="bower_components/split-pane/split-pane.css" />
            <script src="bower_components/jquery/dist/jquery.min.js"></script>
            <script src="bower_components/angular/angular.js"></script>
            <script src="bower_components/split-pane/split-pane.js"></script>
            <script src="bower_components/angular-split-pane/angular-split-pane.js"></script>
            <style type="text/css">
                html, body {
                    height: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                }
                .split-pane-divider {
                    background: #aaa;
                }
            </style>
        </head>
        <body ng-app="example">
            <split-pane>
                <split-pane-component width="20em">
                    <div>This is the left component</div>
                </split-pane-component>
                <split-pane-divider width="5px"></split-pane-divider>
                <split-pane-component>
                    This is the right component
                </split-pane-component>
            </split-pane>
        </body>
        <script>
            angular.module('example', ['shagstrom.angular-split-pane']);
        </script>
    </html>
