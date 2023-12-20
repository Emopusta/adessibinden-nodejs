function asyncHandler(req, res, next){

    try {
        console.log("trycatch middleware");
        next()
    } catch (error) {
        console.error(error);
    }

}


export default asyncHandler