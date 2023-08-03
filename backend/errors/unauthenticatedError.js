const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/customAPIError");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
