const errorHandler = (error,req,res,next) => {
    console.error(error)
    res.status(500).json({error: "Server Error"});
}

export default errorHandler;