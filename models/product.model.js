const mongoose = require("mongoose");

// mongoose.Schema

const Product = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
        },
        image: {
            type: URL,
            required: true,
            unique:true,
        },
        info: {
            type: String,
            required:true
        },
        price: {
            type: Number,
            required:true,
        },
        inCart: {
            type: Boolean,
            default:false,
        },
        count: {
            type: Number,
            default:0
        },
        category: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            default:0,
            required: true,
        }
    }
)

module.exports = Product = mongoose.model('product', productSchema);