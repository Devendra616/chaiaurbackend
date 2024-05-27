// to standardise response object
class apiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    // if statuscode is >= 400 then some error statuscodes
    this.success = statusCode < 400;
  }
}

export { apiResponse };
