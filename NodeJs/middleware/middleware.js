export function hiteshHaiKya(req, res, next) {
    if(req.query.user !== "Hitesh") {
        res.send("Bhag idhar se")
    }
    //I have authenticaated now i can proceed next
    next() 
}