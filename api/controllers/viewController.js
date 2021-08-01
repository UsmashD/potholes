const catchAsyncError = require('./../utils/catchAsyncError');

exports.home = async (req, res, next) => {
  let fruits = ['Apple', 'Banana'];

  res.status(200).json({
    status: 'success',
    
    data: {
      fruits,
    },
  });
  
};
