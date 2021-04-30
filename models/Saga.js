const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SagaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    volumes: [
        {
            volume: Number,
            image: String,
        },
    ],
});

module.exports = Saga = mongoose.model('sagas', SagaSchema);
