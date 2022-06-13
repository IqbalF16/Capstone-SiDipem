/* eslint-disable no-underscore-dangle */
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      second_id: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    const result = (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.id ? '/:provId' : '')
    + (splitedUrl.second_id ? '/:cityId' : '');
    console.log(result);
    return result;
  },
};

export default UrlParser;
