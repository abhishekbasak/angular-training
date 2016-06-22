angular.module("sportsStore")
    .constant("itemPerPageCount", 3)
    .controller("productListCtrl", function ($scope, itemPerPageCount) {
        var selectedCat = null;
    
        $scope.pageSize = itemPerPageCount;
    
        $scope.selectedPage = 1;
    
        $scope.selectCategory = function (cat) {
            selectedCat = cat;
            $scope.selectedCategory = cat;
            $scope.selectedPage = 1;
        }
        
        $scope.categoryFilterFn = function (product) {
            return selectedCat == null
                || selectedCat == product.category;
        }
        
        $scope.getCategoryClass = function (cat) {
            return selectedCat == cat ? 'btn-primary' : '';
        }
        
        $scope.selectPage = function (page) {
            $scope.selectedPage = page;
        }
        
        $scope.getPagerClass = function (page) {
            return ($scope.selectedPage == page) ? 'btn-primary' : '';
        }
        
    });