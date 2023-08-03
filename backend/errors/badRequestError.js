const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customAPIError");

class BadrequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadrequestError;
