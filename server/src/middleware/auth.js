import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
export function auth(req,res,next){
  const token=req.cookies.accessToken || (req.headers.authorization?.startsWith('Bearer ')?req.headers.authorization.slice(7):null);
  if(!token) return next(new AppError('Authentication required',401));
  try{ req.user=jwt.verify(token,process.env.JWT_SECRET); next(); }catch{ next(new AppError('Invalid or expired token',401)); }
}
export const authorize=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():next(new AppError('Forbidden',403));
export const owner=(field='user')=>(req,res,next)=>{ if(String(req.params.id)!==String(req.user.id)) return next(new AppError('You do not own this resource',403)); next(); };
