define(['./module'], function(directives){
    'use strict'
    directives.directive('ensureUnique', function($http){
        return {
            require: 'ngModel',
            link:function(scope,ele, attrs , c){
                scope.$watch(atts.ngModel, function(){
                    $http({
                        method:'POST',
                        url:'/api/check'+attrs.ensureUnique,
                        data:{'field':attrs.ensureUnique}
                    }).success(function(data,status, headers, cfg){
                        c.$setValidity('unique',data.isUnique);
                    }).error(function(data, status, headers, cfg){
                        c.$setValidity('unique', false)
                    })
                })
            }
        }
    })

})