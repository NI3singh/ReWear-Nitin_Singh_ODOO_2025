import Item from '../models/Item.js';
import cloudinary from '../utils/cloudinary.js';
import { pointsConfig } from '../config/index.js';
import User from '../models/User.js';

export const addItem = async (req, res) => {
    try {
        const files = req.files;
        const {
            title, description, category, size,
            condition, tags, redeemable
        } = req.body;

        const uploadToCloudinary = (file) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { resource_type: 'image' },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result.secure_url);
                    }
                );
                stream.end(file.buffer);
            });
        };
        const imageUrls = await Promise.all(files.map(uploadToCloudinary));

        const item = await Item.create({
            title,
            description,
            category,
            size,
            condition,
            tags: JSON.parse(tags),
            images: imageUrls,
            uploader: req.user._id,
            redeemable
        });

        await User.findByIdAndUpdate(req.user._id, {
            $inc: { points: pointsConfig.perItemUpload }
        });

        res.status(201).json({ message: 'Item submitted for approval', item });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error adding item' });
    }
};

export const getApprovedItems = async (req, res) => {
    try {
        const items = await Item.aggregate([
            { $match: { status: 'approved' } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'uploader',
                    foreignField: '_id',
                    as: 'uploaderInfo'
                }
            },
            { $unwind: '$uploaderInfo' },
            {
                $project: {
                    title: 1, images: 1, redeemable: 1, status: 1,
                    uploaderName: '$uploaderInfo.name',
                    uploaderId: '$uploaderInfo._id'
                }
            }
        ]);

        res.status(200).json({ items });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching items' });
    }
};

export const getItemById = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Item.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'uploader',
                    foreignField: '_id',
                    as: 'uploaderInfo'
                }
            },
            { $unwind: '$uploaderInfo' },
            {
                $project: {
                    title: 1, description: 1, category: 1,
                    size: 1, condition: 1, tags: 1, images: 1,
                    redeemable: 1, status: 1,
                    uploaderName: '$uploaderInfo.name',
                    uploaderId: '$uploaderInfo._id'
                }
            }
        ]);

        if (!item.length) return res.status(404).json({ error: 'Item not found' });

        res.status(200).json({ item: item[0] });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching item' });
    }
};

export const getMyItems = async (req, res) => {
    try {
        const items = await Item.find({ uploader: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json({ items });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching your items' });
    }
};