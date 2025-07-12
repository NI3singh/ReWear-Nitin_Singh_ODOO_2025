import Swap from '../models/Swap.js';
import Item from '../models/Item.js';
import User from '../models/User.js';
import { pointsConfig } from '../config/index.js';

export const requestSwap = async (req, res) => {
    const { itemId } = req.body;

    try {
        const item = await Item.findById(itemId);
        if (!item || item.status !== 'approved') return res.status(400).json({ error: 'Invalid item' });

        const swap = await Swap.create({
            requester: req.user._id,
            uploader: item.uploader,
            item: item._id,
            method: 'swap'
        });

        res.status(201).json({ message: 'Swap request sent', swap });
    } catch (err) {
        res.status(500).json({ error: 'Error requesting swap' });
    }
};

export const redeemViaPoints = async (req, res) => {
    const { itemId } = req.body;

    try {
        const item = await Item.findById(itemId);
        if (!item || !item.redeemable || item.status !== 'approved')
            return res.status(400).json({ error: 'Item not redeemable' });

        if (req.user.points < pointsConfig.perItemRedeem)
            return res.status(400).json({ error: 'Insufficient points' });

        await User.findByIdAndUpdate(req.user._id, {
            $inc: { points: -pointsConfig.perItemRedeem }
        });

        const swap = await Swap.create({
            requester: req.user._id,
            uploader: item.uploader,
            item: item._id,
            method: 'points'
        });

        res.status(201).json({ message: 'Item redeemed', swap });
    } catch (err) {
        res.status(500).json({ error: 'Error redeeming item' });
    }
};
