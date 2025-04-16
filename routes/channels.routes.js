const { addNewChannel, getAllChannels, getChannelById, updateChannelById, deleteChannelById } = require('../controllers/channels.controller');

const router = require('express').Router();

router.post("/", addNewChannel);
router.get("/", getAllChannels);
router.get("/:id", getChannelById);
router.put("/:id", updateChannelById);
router.delete("/:id", deleteChannelById);



module.exports = router;
