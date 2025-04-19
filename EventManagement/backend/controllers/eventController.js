const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, createdBy: req.user.id });
  res.json(event);
};

exports.getAllEvents = async (req, res) => {
  const events = await Event.find().populate('createdBy', 'username');
  res.json(events);
};

exports.getUserEvents = async (req, res) => {
  const events = await Event.find({ createdBy: req.user.id });
  res.json(events);
};

exports.updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event.createdBy.toString() !== req.user.id)
    return res.status(403).json({ msg: 'Unauthorized' });

  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event.createdBy.toString() !== req.user.id)
    return res.status(403).json({ msg: 'Unauthorized' });

  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
};
