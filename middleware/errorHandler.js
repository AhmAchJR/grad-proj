

const errorHandler =(err , req , res , next)=>{
    for (let e in err.errors){
        console.log(err.errors[e].message)
        res.status(500).send("Server Error")
    }
}

export default errorHandler