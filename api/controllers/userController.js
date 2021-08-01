const User = require('./../models/userModel');

exports.getOne = async (req, res, next) => {
    let user = await User.findById(req.params.id);
    
    //  5c8a1dfa2f8fb814b56fa181
    res.status(200).json({
      status: 'success',      
      data: {
        user,
      },
    });
};

exports.getAll = async (req, res, next) => {
    let users = await User.find({});
    
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });    
};

exports.create = async(req, res, next)=>{
    const newUser = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: newUser,
      },
    });
};

exports.delete = async(req, res, next)=>{
    const user = await Model.findByIdAndDelete(req.params.id);
    if (!user) {
      console.log(`No user found this ID: ${req.params.id}`)
    }
    res.status(204).json({
      message: 'success',
      data: null,
    });
};

exports.update = async(req, res, next)=>{
    const user = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!user) {
        console.log(`No user found this ID: ${req.params.id}`)
    }
    res.status(200).json({
        message: 'success',
        data: {
            data: user,
        },
    });
};

exports.changePassword = async(req, res, next)=>{};