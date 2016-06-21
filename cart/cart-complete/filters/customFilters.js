angular.module("sportsStore")
    .filter("unique", function() {
        return function(data, propertyName) {
            if (angular.isArray(data) && angular.isString(propertyName)) {
                var returnList = [];
                var keys = {};
                angular.forEach(data, function(item) {
                    var propVal = item[propertyName];
                    
                    if (angular.isUndefined(keys[propVal])) {
                        keys[propVal] = true;
                        returnList.push(propVal);
                    }
                });

                return returnList;
            } else {
                return data;
            }
        };
});