import Item from '../models/Item.js';

export const getPendingItems = async (req, res) => {
    try {
        const items = await Item.find({ status: 'pending' }).populate('uploader', 'name email');
        res.status(200).json({ items });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching pending items' });
    }
};

export const approveItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndUpdate(id, { status: 'approved' });
        res.status(200).json({ message: 'Item approved' });
    } catch (err) {
        res.status(500).json({ error: 'Error approving item' });
    }
};

export const rejectItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndUpdate(id, { status: 'rejected' });
        res.status(200).json({ message: 'Item rejected' });
    } catch (err) {
        res.status(500).json({ error: 'Error rejecting item' });
    }
};
