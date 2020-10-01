import Credit from "./Credit.js";
import defined from "./defined.js";
import Resource from "./Resource.js";

var defaultTokenCredit;

var cesiumWebsiteToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNGQ2Zjk2MC0yMTdjLTQzZjctYTQ2Yy02NjdkZjBkYjk1NzUiLCJpZCI6MjU5LCJpYXQiOjE2MDE1Njk1Njd9.AhQTJeyVEZ2L4nZ6ikZ7s7trSAgklXXfdtol3ZhQ0n4";
var defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNzMyOGZjZC1jMWUzLTQxNDctOGQxYi03YTYyZDQ1OTIxMjkiLCJpZCI6MjU5LCJpYXQiOjE2MDE1Njk1NDN9.X1a0DCM6F539g9MDSs_ldZ0gwgruxLAZiBl60JwG1ck";
/**
 * Default settings for accessing the Cesium ion API.
 *
 * An ion access token is only required if you are using any ion related APIs.
 * A default access token is provided for evaluation purposes only.
 * Sign up for a free ion account and get your own access token at {@link https://cesium.com}
 *
 * @see IonResource
 * @see IonImageryProvider
 * @see IonGeocoderService
 * @see createWorldImagery
 * @see createWorldTerrain
 * @namespace Ion
 */
var Ion = {};

/**
 * Gets or sets the default Cesium ion access token.
 *
 * @type {String}
 */
Ion.defaultAccessToken = cesiumWebsiteToken;

/**
 * Gets or sets the default Cesium ion server.
 *
 * @type {String|Resource}
 * @default https://api.cesium.com
 */
Ion.defaultServer = new Resource({ url: "https://api.cesium.com/" });

Ion.getDefaultTokenCredit = function (providedKey) {
  if (providedKey !== defaultAccessToken) {
    return undefined;
  }

  if (!defined(defaultTokenCredit)) {
    var defaultTokenMessage =
      '<b> \
            This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i> \
            with an access token from your ion account before making any Cesium API calls. \
            You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';

    defaultTokenCredit = new Credit(defaultTokenMessage, true);
  }

  return defaultTokenCredit;
};
export default Ion;
