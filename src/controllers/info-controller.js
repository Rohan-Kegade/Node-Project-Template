const { StatusCodes  } = require("http-status-codes");

const getInfo = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "This is V1 Api",
    error: {},
    data: {},
  });
};

const getInfoV2 = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "This is V2 Api",
    error: {},
    data: {},
  });
};

module.exports = {
  getInfo,
  getInfoV2,
};
