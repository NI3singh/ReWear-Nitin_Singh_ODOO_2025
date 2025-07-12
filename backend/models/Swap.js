import mongoose from 'mongoose';

const swapSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    method: { type: String, enum: ['swap', 'points'] },
    status: { type: String, enum: ['requested', 'accepted', 'declined', 'completed'], default: 'requested' }
}, { timestamps: true });

export default mongoose.model('Swap', swapSchema);
