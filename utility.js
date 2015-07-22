var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.array",e.serviceName="arrayUtility";var t=function(){function e(){}return e.prototype.findIndexOf=function(e,t){var r;return _.each(e,function(e,n){return t(e)?(r=n,!1):void 0}),null!=r?r:-1},e.prototype.remove=function(e,t){var r;return r=_.isFunction(t)?this.findIndexOf(e,t):_.indexOf(e,t),r>=0?e.splice(r,1)[0]:null},e.prototype.replace=function(e,t,r){var n=_.indexOf(e,t);n>=0&&e.splice(n,1,r)},e.prototype.sum=function(e,t){var r;return r=null!=t?_.map(e,function(e){return t(e)}):e,_.reduce(r,function(e,t){return e+t},0)},e.prototype.toDictionary=function(e,t){return _.reduce(e,function(e,r){return e[t(r)]=r,e},[])},e}();e.ArrayUtility=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.array||(e.array={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";function t(){return{getInstance:function(){return new r}}}e.moduleName="rl.utilities.observable",e.serviceName="observableFactory";var r=function(){function e(){this.watchers=[],this.nextKey=0}return e.prototype.register=function(e,t){var r=this;if(!_.isFunction(e))return console.log("Error: watcher must be a function"),null;var n=this.nextKey;return this.nextKey++,this.watchers[n]={action:e,event:t},function(){r.unregister(n)}},e.prototype.fire=function(e){for(var t=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];_.each(this.watchers,function(n){null!=n&&n.event===e&&n.action.apply(t,r)})},e.prototype.unregister=function(e){this.watchers[e]=null},e}();e.ObservableService=r,e.observableServiceFactory=t,angular.module(e.moduleName,[]).factory(e.serviceName,t)}(t=e.observable||(e.observable={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(t){"use strict";function r(e){return{getInstance:function(){return new n(e)}}}t.moduleName="rl21.services.contentProvider",t.serviceName="contentProviderFactory";var n=function(){function e(e){var t=this;this.setTranscludeContent=function(e){_.isFunction(e)?e(function(e){t.setContent(e)}):t.setContent(null)},this.observable=e.getInstance()}return e.prototype.setContent=function(e){this.content=e,this.observable.fire("contentChanged")},e.prototype.register=function(e,t){var r=this;return null!=this.content&&e(this.getContent(t)),this.observable.register(function(){e(r.getContent(t))},"contentChanged")},e.prototype.getContent=function(e){return null!=e?this.content.filter(e):this.content},e}();t.ContentProviderService=n,r.$inject=[e.observable.serviceName],t.contentProviderServiceFactory=r,angular.module(t.moduleName,[e.observable.moduleName]).factory(t.serviceName,r)}(t=e.contentProvider||(e.contentProvider={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.date",e.serviceName="dateUtility";var t=function(){function e(){var e=this;this.month=[{name:"January",days:function(){return 31}},{name:"February",days:function(t){return e.isLeapYear(t)?29:28}},{name:"March",days:function(){return 31}},{name:"April",days:function(){return 30}},{name:"May",days:function(){return 31}},{name:"June",days:function(){return 30}},{name:"July",days:function(){return 31}},{name:"August",days:function(){return 31}},{name:"September",days:function(){return 30}},{name:"October",days:function(){return 31}},{name:"November",days:function(){return 30}},{name:"December",days:function(){return 31}}]}return e.prototype.isLeapYear=function(e){return 1===new Date(e,1,29).getMonth()},e.prototype.getFullString=function(e){return this.month[e].name},e.prototype.getDays=function(e,t){return this.month[e].days(t)},e}();e.DateUtility=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.date||(e.date={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.jquery",e.serviceName="jqueryUtility";var t=function(){function e(){}return e.prototype.replaceContent=function(e,t){e.empty(),e.append(t)},e}();e.JQueryUtility=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.jquery||(e.jquery={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.number",e.serviceName="numberUtility";var t;!function(e){e[e.positive=1]="positive",e[e.negative=-1]="negative"}(t||(t={}));var r=function(){function e(){}return e.prototype.preciseRound=function(e,r){var n=e>=0?t.positive:t.negative;return Math.round(e*Math.pow(10,r)+.001*n)/Math.pow(10,r)},e}();e.NumberUtility=r,angular.module(e.moduleName,[]).service(e.serviceName,r)}(t=e.number||(e.number={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.object",e.serviceName="objectUtility";var t=function(){function e(){}return e.prototype.isNullOrEmpty=function(e){return null==e?!0:_.isArray(e)?_.any(e)===!1:_.isNumber(e)?_.isNaN(e):""===e},e.prototype.isNullOrWhitespace=function(e){return _.isString(e)&&(e=e.trim()),this.isNullOrEmpty(e)},e}();e.ObjectUtility=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.object||(e.object={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl21.services.parentChildBehavior",e.serviceName="parentChildBehavior";var t=function(){function e(){}return e.prototype.getChildBehavior=function(e){return e&&null!=e.viewData?e.viewData.behavior:null},e.prototype.getAllChildBehaviors=function(e){var t=this;return _(e).map(function(e){return t.getChildBehavior(e)}).filter(function(e){return null!=e}).value()},e.prototype.registerChildBehavior=function(e,t){if(null!=e){null==e.viewData&&(e.viewData={behavior:null});var r=e.viewData.behavior;e.viewData.behavior=null==r?t:_.extend(r,t)}},e}();e.ParentChildBehaviorService=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.parentChildBehavior||(e.parentChildBehavior={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";e.moduleName="rl.utilities.promise",e.serviceName="promiseUtility";var t=function(){function e(){}return e.prototype.isPromise=function(e){return _.isObject(e)&&_.isFunction(e.then)&&_.isFunction(e["catch"])},e}();e.PromiseUtility=t,angular.module(e.moduleName,[]).service(e.serviceName,t)}(t=e.promise||(e.promise={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(t){"use strict";function r(e){return function(t,r,n){n=null==n?!1:n;var i=e.isNullOrWhitespace(t)?"":t.toString();return i.length&&null!=r&&i.length>r&&(i=i.substring(0,r),n&&(i+="...")),i}}t.moduleName="rl21.components.truncate",t.serviceName="truncate",t.filterName=t.serviceName+"Filter",r.$inject=[e.object.serviceName],t.truncate=r,angular.module(t.moduleName,[e.object.moduleName]).filter(t.serviceName,r)}(t=e.truncate||(e.truncate={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){e.moduleName="rl.utilities",angular.module(name,[e.array.moduleName,e.contentProvider.moduleName,e.date.moduleName,e.jquery.moduleName,e.number.moduleName,e.object.moduleName,e.observable.moduleName,e.parentChildBehavior.moduleName,e.promise.moduleName,e.truncate.moduleName])}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){var t=function(){function e(){}return e.prototype.inject=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var r={},n=_.clone(e);return n.push(function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];_.each(e,function(e,n){r[e]=t[n]})}),angular.mock.inject(n),r},e.prototype.mock=function(e){angular.mock.module(function(t){_.each(e,function(e,r){t.value(r.toString(),e)})})},e.prototype.controller=function(e,t,r){var n=this.inject("$rootScope","$controller"),i=n.$rootScope,o=n.$controller;return t=_.extend(i.$new(),t),null==r&&(r={}),r.$scope=t,{scope:t,controller:o(e,r)}},e.prototype.directive=function(e){var t=this.inject("$rootScope","$compile"),r=t.$rootScope,n=t.$compile;angular.mock.module("renovoTemplates");var i=n(e)(r);return r.$digest(),{directive:i,scope:i.isolateScope()}},e}();e.angularFixture=new t}(t=e.test||(e.test={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));var rl;!function(e){var t;!function(e){var t;!function(e){"use strict";var t=function(){function e(){}return e.prototype.service=function(e){return angular.isDefined(e)===!1&&(e={}),e._mock_requestList_=[],e},e.prototype.promise=function(e,t,r,n){_.isUndefined(n)&&(n=!0),e[t]=sinon.spy(function(){var t=jQuery.Deferred();return e._mock_requestList_.push({promise:t,data:r,successful:n}),t.promise()})},e.prototype.promiseWithCallback=function(e,t,r,n){var i=this;_.isUndefined(n)&&(n=!0),e[t]=sinon.spy(function(){for(var t=[],o=0;o<arguments.length;o++)t[o-0]=arguments[o];var u=jQuery.Deferred();return e._mock_requestList_.push({promise:u,data:r.apply(i,t),successful:n}),u.promise()})},e.prototype.flush=function(e,t){var r=e._mock_requestList_;e._mock_requestList_=[],_.each(r,function(e){e.successful?e.promise.resolve(e.data):e.promise.reject(e.data),_.isUndefined(t)===!1&&t.$digest()})},e}();e.mock=new t}(t=e.test||(e.test={}))}(t=e.utilities||(e.utilities={}))}(rl||(rl={}));