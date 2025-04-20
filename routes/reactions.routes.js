const { addNewReaction, getAllReactions, getReactionById, updateReactionById, deleteReactionById } = require('../controllers/reactions.controller');

const router = require('express').Router();

router.post("/", addNewReaction);
router.get("/", getAllReactions);
router.get("/:id", getReactionById);
router.put("/:id", updateReactionById);
router.delete("/:id", deleteReactionById);



module.exports = router;
