const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const Pothole = require('./../models/potholeModel');
const catchAsyncError = require('./../utils/catchAsyncError');

const photoPath = 'public/img/potholes';
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPotholePhoto = upload.single('photo');


exports.resizePotholePhoto = catchAsyncError(async (req, res, next) => {
  if (!req.file) return next();
  
  req.file.filename = `pothole-${Date.now()}.jpeg`;
  
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`${photoPath}/${req.file.filename}`);

  next();
});

exports.getOne = catchAsyncError( async (req, res, next) => {
    let pothole = await Pothole.findById(req.params.id);

    res.status(200).json({
      status: 'success',      
      data: {
        pothole,
      },
    });
});

exports.getAll = catchAsyncError( async (req, res, next) => {
    let potholes = await Pothole.find({});
    
    res.status(200).json({
      status: 'success',
      data: {
        potholes,
      },
    });    
});

exports.create = catchAsyncError( async(req, res, next)=>{
    
    const newPothole = await Pothole.create({
            photo: req.file.filename, 
            description: req.body.description,
            location: {
                coordinates : req.body.location
            }
        });

    res.status(201).json({
      status: 'success',
      data: {
        newPothole,
      },
    });
});

exports.delete = catchAsyncError( async(req, res, next)=>{
    const pothole = await Pothole.findByIdAndDelete(req.params.id);
    
    fs.unlink(`${photoPath}/${pothole.photo}`, (err) => {
      if (err) {
        console.error(err)
        return
      }
    });

    if (!pothole) {
      console.log(`No pothole found this ID: ${req.params.id}`)
    }
    res.status(204).json({
      message: 'success',
      data: null,
    });
});

exports.update = catchAsyncError( async(req, res, next)=>{
    const pothole = await Pothole.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!pothole) {
        console.log(`No pothole found this ID: ${req.params.id}`)
    }
    res.status(200).json({
        message: 'success',
        data: {
            pothole,
        },
    });
});

exports.getPotholesNearUser = catchAsyncError ( async(req, res, next) => {
  let location = req.body.location;
  let distance = req.body.distance;
  let unit = req.body.unit;
  const radius = unit === ' mi' ? distance / 3963.2 : distance / 6378.1;
    
  if (!location.length) {
    next(new AppError('Please provide the location and the search radius.', 400));
  }

  const potholes = await Pothole.find({
    location: { $geoWithin: { $centerSphere: [location, radius] } },
  });

  res.status(200).json({
    status: 'success',
    results: potholes.length,
    data: {
      data: potholes,
    },
  });

});
