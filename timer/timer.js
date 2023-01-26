const timer=(req,res,next)=>{
    let dat=new Date()
    let day = dat.getDay();
    console.log(day)

    let hours =dat.getHours(); 
    console.log(hours)
    if(day==0||day==5||hours<7||somne>5/7){
        res.send("don''t have permissions")
    }

    else {
        next();
    }
}
    module.exports=timer