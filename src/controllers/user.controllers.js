const User = require("../models/user.model")

exports.signupUser = (req, res) => {
    try {
        const { name, password} = req.body

        const accountNumber =  Math.floor(10000000*Math.random())
        
        const user = User.create({
            name,
            accountNumber,
            password
        })

        return res.status(210).json({
            status: "success",
            message: "User signup",
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "fail",
            message: "Something went very bad",
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { accountNumber, password} = req.body
        
        const user = await User.findOne({
            where:{
                accountNumber,
                password
            }
        })

        if (!accountNumber && !password){
            return res.status(210).json({
                status: "fail",
                messagge: `User with account number ${accountNumber} not found`,
            })
        }
        
        user.update({ status: "loggin"})
        
        return res.status(210).json({
            status: "success",
            message: "User loggin",
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "fail",
            message: "Something went very bad",
        })
    }
}

exports.historyTransfersbyUser = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "fail",
            message: "Something went very bad",
        })
    }
}