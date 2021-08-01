module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    //   fn(req, res, next).catch( function () {
    //       console.log(req.params.id + " " + req.body); 
    //       next();
    //     });
    };
  };