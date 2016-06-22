angular.module("customFilters", [])
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
    })
    .filter("range", function($filter) {
        return function(data, pageNumber, limit) {
            if (angular.isArray(data) && angular.isNumber(pageNumber) && angular.isNumber(limit)) {
                var returnData = [];
                
                var startIndex = (pageNumber - 1) * limit;
                var dataLength = data.length;
                
                if (dataLength < startIndex) {
                    return [];
                } else {
                    return $filter("limitTo")(data.splice(startIndex), limit);
                }
                
                return returnData;
            } else {
                return data;
            }
        };
    })
    .filter("pageCount", function() {
        return function(data, size) {
            var pageArr = [];
            
            if (angular.isArray(data) && angular.isNumber(size) && size != 0) {
                for (var i = 0; i < Math.ceil(data.length / size); i++) {
                    pageArr.push(i);
                }
            }
            
            return pageArr;
        };
    });