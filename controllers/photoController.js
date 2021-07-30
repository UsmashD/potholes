const catchAsyncError = require('./../utils/catchAsyncError');

exports.getPhoto = catchAsyncError( async(req, res, next) => {
  res.sendFile(`${req.params.photo}`, {root:"./public/img/potholes/"});
});