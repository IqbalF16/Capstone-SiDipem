import API_ENDPOINT from '../globals/api-endpoint';

class HospitalSource {
  static async getProvinces() {
    const response = await fetch(API_ENDPOINT.PROVINCE);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getCities(provinceId) {
    const response = await fetch(API_ENDPOINT.CITY(provinceId));
    const responseJson = await response.json();
    return responseJson;
  }

  static async getHospitals(provinceId, cityId) {
    const response = await fetch(API_ENDPOINT.HOSPITAL(provinceId, cityId));
    const responseJson = await response.json();
    return responseJson;
  }
}
export default HospitalSource;
