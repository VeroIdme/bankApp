const Transfer = require("../models/transfer.model")
const User = require("../models/user.model")

exports.transfer = async (req, res) => {
    try {
        const { amount, accountReceiver, accountSender } = req.body
    
        const dataSender = await User.findOne({
            where: {
            accountNumber: accountSender
          }
        })
    
        const dataReceiver = await User.findOne({
            where: {
            accountNumber: accountReceiver
          }
        })
    
        if(!accountReceiver){
            return res.status(210).json({
                status: "fail",
                messagge: "Account not found"
            })
        }
        
        const  amountSender  = dataSender.amount
        const  amountReceiver  = dataReceiver.amount
    
        if(amount > amountSender - 1){
            return res.status(210).json({
                status: "fail",
                messagge: "Insufficient amount",
            })
        }
    
        const amountsFinal =  () => {{
            amountFinalReceiver: amountReceiver + amount;
            amountFinalSender: amountSender - amount
        }
        }

        const { amountFinalReceiver, amountFinalSender } = amountsFinal

        return res.status(210).json({
            status: "success",
            message: `The amount ${amount} has been with success, amount final is ${amountFinalSender}`
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "fail",
            message: "Something went very bad",
        })
    }
}