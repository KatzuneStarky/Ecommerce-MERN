import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    },
    quantity: {
        type: Number,
        required: true
    },
    photo: {
        type: Buffer,
        contentType: String
    },
    shipping: {
        type: Boolean
    }
}, {timestamps: true})

export default mongoose.model('Product', productSchema)