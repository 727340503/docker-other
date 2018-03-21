angular.module('me-lazyload', [])
.directive('lazySrc', ['$window', '$document', function($window, $document){

    var doc = $document[0],
        lazyWrapper = angular.element(".lazy-wrapper"),
        body = angular.element(lazyWrapper.attr("lazy-body")),
        win = $window,
        $win = angular.element(lazyWrapper.attr("lazy-scroll")), 
        uid = 0,
        elements = {};

    function getUid(el){
        var __uid = el.data("__uid");
        if (! __uid) {
            el.data("__uid", (__uid = '' + ++uid));
        }
        return __uid;
    }

    function getWindowOffset(){


        var t,
            pageXOffset = (typeof win.pageXOffset == 'number') ? win.pageXOffset : (((t = doc.documentElement) || (t = body.parentNode)) && typeof t.ScrollLeft == 'number' ? t : body).ScrollLeft,
            pageYOffset = (typeof win.pageYOffset == 'number') ? win.pageYOffset : (((t = doc.documentElement) || (t = body.parentNode)) && typeof t.ScrollTop == 'number' ? t : body).ScrollTop;
            //debugger;
        return {
            offsetX: pageXOffset,
            offsetY: pageYOffset
        };
    }

    function isVisible(iElement){
        var elem = iElement[0],
            elemRect = elem.getBoundingClientRect(),
            windowOffset = getWindowOffset(),
            winOffsetX = windowOffset.offsetX,
            winOffsetY = windowOffset.offsetY,
            elemWidth = elemRect.width,
            elemHeight = elemRect.height,
            elemOffsetX = elemRect.left + winOffsetX,
            elemOffsetY = elemRect.top + winOffsetY,
            viewWidth = Math.max(doc.documentElement.clientWidth, win.innerWidth || 0),
            viewHeight = Math.max(doc.documentElement.clientHeight, win.innerHeight || 0),
            xVisible,
            yVisible;

        if(elemOffsetY <= winOffsetY){
            if(elemOffsetY + elemHeight >= winOffsetY){
                yVisible = true;
            }
        }else if(elemOffsetY >= winOffsetY){
            if(elemOffsetY <= winOffsetY + viewHeight){
                yVisible = true;
            }
        }

        if(elemOffsetX <= winOffsetX){
            if(elemOffsetX + elemWidth >= winOffsetX){
                xVisible = true;
            }
        }else if(elemOffsetX >= winOffsetX){
            if(elemOffsetX <= winOffsetX + viewWidth){
                xVisible = true;
            }
        }

        return xVisible && yVisible;
    };

    function checkImage(){
        
        Object.keys(elements).forEach(function(key){
           
            var obj = elements[key],
                iElement = obj.iElement,
                $scope = obj.$scope;
            if(isVisible(iElement)){
                iElement.attr('src', $scope.lazySrc);
            }
        });
    }

    
            // $win.on('scroll', checkImage);
            // $win.on('resize', checkImage);
    
    
    
    function onLoad(){
        var $el = angular.element(this),
            uid = getUid($el);

        $el.css('opacity', 1);

        if(elements.hasOwnProperty(uid)){
            delete elements[uid];
        }
    }

    return {
        restrict: 'A',
        scope: {
            lazySrc: '@',
            animateVisible: '@',
            animateSpeed: '@'
        },
        link: function($scope, iElement){

            lazyWrapper = angular.element(".lazy-wrapper");
            if (!lazyWrapper.attr("lazy-wrappered")) {
                body = angular.element(lazyWrapper.attr("lazy-body")),
                win = $window,
                $win = angular.element(lazyWrapper.attr("lazy-scroll")), 

                $win.on('scroll', checkImage);
                $win.on('resize', checkImage);
                lazyWrapper.attr("lazy-wrappered", "true");    
            }
            

            var iscrollWrapper = angular.element(".iscroll-wrapper");
            if (iscrollWrapper && iscrollWrapper.length>0) {
                var iscrollInstance  = iscrollWrapper.attr("iscroll-instance");
                if (iscrollInstance) {
                    iscrollWrapper.scope()[iscrollInstance].on("scrollEnd", function(){
                        iscrollWrapper.trigger("scroll");
                    });
                }
            }

            iElement.on('load', onLoad);

            $scope.$watch('lazySrc', function(){
                var speed = "0.5s";
                if ($scope.animateSpeed != null) {
                    speed = $scope.animateSpeed;
                }
                if(isVisible(iElement)){
                    if ($scope.animateVisible) {
                        iElement.css({
                            'background-color': '#fff',
                            'opacity': 0,
                            '-webkit-transition': 'opacity ' + speed,
                            'transition': 'opacity ' + speed
                        });
                    }
                    iElement.attr('src', $scope.lazySrc);
                }else{
                    var uid = getUid(iElement);
                    iElement.css({
                        'background-color': '#fff',
                        'opacity': 0,
                        '-webkit-transition': 'opacity ' + speed,
                        'transition': 'opacity ' + speed
                    });
                    elements[uid] = {
                        iElement: iElement,
                        $scope: $scope
                    };
                }
            });

            $scope.$on('$destroy', function(){
                // console.log('11')
                body = null;
                $win = null;
                iElement.unbind('load');
                var uid = getUid(iElement);
                // if(elements.hasOwnProperty(uid)){
                    // delete elements[uid];
                    elements={};
                // }
            });
        }
    };
}]);
