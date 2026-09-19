export function notFound(req,res){ res.status(404).json({success:false,message:`Route ${req.method} ${req.originalUrl} not found`}); }
export function errorHandler(err,req,res,next){
  const status=err.statusCode || (err.name==='ValidationError'?400:500);
  const message=process.env.NODE_ENV==='production' && status===500?'Internal server error':err.message;
  console.error(err);
  res.status(status).json({success:false,message});
}
