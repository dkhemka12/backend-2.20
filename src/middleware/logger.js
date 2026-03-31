const logger=(req,res,next)=>{

console.log(req.method,req.url);

next();

};
// this middleware function logs the HTTP method and URL of each incoming request to the console, and then calls `next()` to pass control to the next middleware function in the stack.
module.exports=logger;
