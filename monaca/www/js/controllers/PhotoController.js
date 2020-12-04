// This is a JavaScript file
module.controller('PhotoController', function ($scope, $q, $timeout, DateService) {
    var app = this;

    ons.ready(function () {
        // BaaS@rakuza SDKを初期化します。
        //
        // ----- API 記述箇所１ [START] ---
        // ----- API 記述箇所１ [E N D] ---
    });

    function registerUser () {
        var deferred = $q.defer();
        // ローカルストレージからユーザーアクセストークンを取得
        var userAccessToken = localStorage.getItem(USER_ACCESS_TOKEN_KEY);
        if (!userAccessToken) {
            // ユーザーアクセストークンがなければ、新規でユーザーを作成
            var userData = {};
            // ----- API 記述箇所２ [START] ---
            // ----- API 記述箇所２ [E N D] ---
        } else {
            // あれば、ユーザーアクセストークンを返す
            deferred.resolve(userAccessToken);
        }
        // 結果はPrimiseを返して、呼び出し元で結果をハンドリングできる様にする
        return deferred.promise;
    }

    function loadPhoto () {
        app.isLoading = true;
        // ----- API 記述箇所３ [START] ---
        // ----- API 記述箇所３ [E N D] ---
    }

    $scope.navi.on('postpop', function (event) {
        loadPhoto();
    });

    $scope.onSelectPhoto = function (photo) {
        var options = {
            data: photo,
            reload: function () {
                loadPhoto();
            }
        };
        $scope.navi.pushPage('preview.html', options);
    }

    $scope.onPhotograph = function () {
        navigator.camera.getPicture(function (image) {
            // 撮影した写真の名前を日付で作成する
            var date = DateService.format(new Date(), 'yyyyMMddHHmmssSSS');

            // ----- API 記述箇所６ [START] ---
            // ----- API 記述箇所６ [E N D] ---
        },
        function (error) {
            alert(JSON.stringify(error, null, ' '));
        },
        {
            quality: 80,
            destinationType: Camera.DestinationType.DATA_URL,
            targetHeight: 600,
            targetWidth: 600
        });
    };

});
