import BaseRequest from "@src/services/BaseRequest";

const API_URL = {
  GET: "/users",
};

class GetListApi {
  static getData(page: number) {
    return BaseRequest.get(`${API_URL.GET}?per_page=${page}`);
  }
}

export default GetListApi;
