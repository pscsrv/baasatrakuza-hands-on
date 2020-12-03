// This is a JavaScript file
module.controller('PreviewController', function ($scope, $timeout) {
    var app = this;

    ons.ready(function () {
        // 選択されたマスタ情報をViewModelに設定
        app.photo = $scope.navi.topPage.data;
        app.reload = $scope.navi.topPage.reload;
    });

    $scope.onClose = function () {
        var options = {
            animation: 'fade',
            onTransitionEnd: function () {
                app.reload();
            }
        };
        $scope.navi.popPage(options);
    };

    $scope.onAddIine = function () {
        // お気に入りに登録します。
        // ----- API 記述箇所４ [START] ---
        // ----- API 記述箇所４ [E N D] ---
    }

    $scope.onDeleteIine = function () {
        // 登録しているお気に入りを解除します。
        // ----- API 記述箇所５ [START] ---
        // ----- API 記述箇所５ [E N D] ---
    }
});
