// Create web server 
Path: server.js
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('listening on port ' + port);
// Create a route
Path: server.js
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});
// Create a controller
Path: public/modules/core/controllers/home.client.controller.js
(function() {
    'use strict';
    angular
        .module('core')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        var vm = this;
        vm.title = 'Home Page';
        vm.text = 'This is the home page.';
    }
})();
// Create a view
// Path: public/modules/core/views/home.client.view.html
// <div class="container">
//     <h1>{{ vm.title }}</h1>
//     <p>{{ vm.text }}</p>
// </div>
// Create a route
Path: server.js
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/public/views/about.html');
});
// Create a controller
Path: public/modules/core/controllers/about.client.controller.js
(function() {
    'use strict';
    angular
        .module('core')
        .controller('AboutController', AboutController);
    AboutController.$inject = ['$scope'];
    function AboutController($scope) {
        var vm = this;
        vm.title = 'About Page';
        vm.text = 'This is the about page.';
    }
})();
// Create a view
// Path: public/modules/core/views/about.client.view.html
// <div class="container">
//     <h1>{{ vm.title }}</h1>
//     <p>{{ vm.text }}</p>
// </div>
// Create a route
Path: server.js
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/public/views/contact.html');
});
// Create a controller
Path: public/modules/core/controllers/contact.client.controller.js
(function() {
    'use strict';

})();