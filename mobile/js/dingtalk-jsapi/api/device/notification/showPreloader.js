"use strict";function showPreloader$(e){return ddSdk_1.ddSdk.invokeAPI(apiName,e)}var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.showPreloader$=void 0;var ddSdk_1=require("../../../lib/ddSdk"),apiHelper_1=require("../../../lib/apiHelper"),apiName="device.notification.showPreloader",paramsDeal=apiHelper_1.genDefaultParamsDealFn({text:"加载中...",showIcon:!0});ddSdk_1.ddSdk.setAPI(apiName,(_a={},_a[ddSdk_1.ENV_ENUM.ios]={vs:"2.4.0",paramsDeal:paramsDeal},_a[ddSdk_1.ENV_ENUM.android]={vs:"2.4.0",paramsDeal:paramsDeal},_a)),exports.showPreloader$=showPreloader$,exports.default=showPreloader$;