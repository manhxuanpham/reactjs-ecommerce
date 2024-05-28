var app = angular.module('AppBanHang', []);
app.controller("HomeCtrl", function ($scope, $http) {
    $scope.listSanPhamMoi;
    $scope.listDanhMuc;
    $scope.LoadSanPhamMoi = function () {
        $http({
            method: 'POST', 
            data: {
                "page": 1,
                "pageSize": 10 
            }, 
            url: current_url + '/api/SanPham/search',
        }).then(function (response) {	
            debugger;
            $scope.listSanPhamMoi = response.data.data;
            makeScript('js/main.js');
        }); 
    };
    $scope.LoadDanhMuc = function () {
        $http({
            method: 'GET',
            url: current_url + '/api-nguoidung/danhmuc/get-danhmuc',
        }).then(function (response) {
            $scope.listDanhMuc = response.data;
            makeScript('js/main.js')
        });
    };
    $scope.addToCart = function (item) {
        var list = null;
        item.quantity = 1;       
        var list;
        if (localStorage.getItem('cart') == null) {
            list = [item];
        } else {
            list = JSON.parse(localStorage.getItem('cart')) || [];
            let ok = true;
            for (let x of list) {
                if (x.maSanPham == item.maSanPham) {
                    x.quantity += 1;
                    ok = false;
                    break;
                }
            }
            if (ok) {
                list.push(item);
            }
        }
        localStorage.setItem('cart', JSON.stringify(list));
        alert("Đã thêm giỏ hàng thành công!");
    }

    $scope.LoadDanhMuc();
    $scope.LoadSanPhamMoi();
});

