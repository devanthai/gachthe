let mongoose = require('mongoose');
const Deposit = require("./modules/Deposit")
const Helper = require("./Helpers/Helper")
const dotenv = require('dotenv');
dotenv.config()
mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to db'));

thai = async () => {
    const deposits = await Deposit.find({ $text: { $search: "Muathe 289568" }, status: 0 })
    console.log(deposits)
}
thai()