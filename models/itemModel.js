const mongoose = require('mongoose');
const slugify = require('slugify');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An item must have a name'],
    unique: true,
    trim: true,
    maxlength: [30, 'An item name must have less or equal than 30 characters'],
    minlength: [6, 'An item name must have more or equal than 6 characters'],
  },
  slug: String,
  productCode: {
    type: String,
    unique: true,
    trim: true,
    uppercase: true,
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  quantity: {
    type: Number,
    required: [true, 'A product must have a quantity'],
    integer: true,
    min: [0, 'Minimum quantity is 0'],
  },
  images: [String],
  storeLocation: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
});

itemSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
