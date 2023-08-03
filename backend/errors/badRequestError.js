const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/customAPIError");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
