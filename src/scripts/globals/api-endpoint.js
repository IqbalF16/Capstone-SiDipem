import CONFIG from './config';

const API_ENDPOINT = {
  PROVINCE: `${CONFIG.BASE_URL}get-provinces`,
  CITY: (provinceId) => `${CONFIG.BASE_URL}get-cities?provinceid=${provinceId}`,
  HOSPITAL: (provinceId, cityId) => `${CONFIG.BASE_URL}get-hospitals?provinceid=${provinceId}&cityid=${cityId}&type=1`,
};

export default API_ENDPOINT;
