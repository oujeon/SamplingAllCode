# Sample

## Intro

angularjs에 대한 기초 코딩 예제이다.

## version

AngularJS v1.7.5

## Connected line

ng-app="**app_001**"

ng-controller="**Ctl_001**"

{{**myWelcome**}}

var **app001** = angular.module('**app_001**', []);

**app001**.controller('**Ctl_001**', function ($scope, $http) {

  $scope.**myWelcome** = response.data;

});