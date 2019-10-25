agGrid.initialiseAgGridWithAngular1(angular);
var app = angular.module('myApp', ['agGrid']);


app.controller('testCtrl', function ($scope, $http) {

    $scope.isShow = true;

    var columnDefs = [
        {
            headerName: 'Athlete',
            width: 150,
            template: '<span style="font-weight: bold;" ng-bind="data.athlete" ng-click="click(data)"></span>'
        },
        {headerName: 'Age', width: 90, field: 'age'},
        {headerName: 'Country', field: 'country', width: 120},
        {headerName: 'Year', field: 'year', width: 90},
        {headerName: 'Date', field: 'date', width: 110},
        {headerName: 'Sport', field: 'sport', width: 110},
        {headerName: 'Gold', field: 'gold', width: 100},
        {headerName: 'Silver', field: 'silver', width: 100},
        {headerName: 'Bronze', field: 'bronze', width: 100},
        {headerName: 'Total', field: 'total', width: 100}
    ];

    $scope.gridOptions = {
        angularCompileRows: true,
        columnDefs: columnDefs,
        rowData: null
    };

    $http.get('olympicWinnersSmall.json').then(function (res) {
        $scope.gridOptions.api.setRowData(res.data);
    });

    $scope.click = function click(data) {
        $scope.singleAthlete = data;
        $scope.isShow = !$scope.isShow;
    }

});
