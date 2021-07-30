const mongoose = require('mongoose');
const validator = require('validator');

const potholeSchema = new mongoose.Schema({
       
    photo:{
        type: String,
        required: [true, 'Please attach a photo from the pothole'],
    } ,
    location: {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
          //required: [true, 'Please add the coordinates of the pothole'],
        },
        coordinates: [Number],
      },
    description: String,
    is_active: {
        type: Boolean,
        default: true,
    } ,
        
  },
  
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });


// potholeSchema.pre('findOneAndUpdate', function (next) {
  
//   this.updatedAt = Date.now() ;
//   next();
// });

const Pothole = mongoose.model('Pothole', potholeSchema);

module.exports = Pothole;