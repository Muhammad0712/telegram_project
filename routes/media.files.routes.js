const { addNewMediaFile, getAllMediaFiles, getMediaFileById, updateMediaFileById, deleteMediaFileById } = require('../controllers/media.files.controller');

const router = require('express').Router();

router.post("/", addNewMediaFile);
router.get("/", getAllMediaFiles);
router.get("/:id", getMediaFileById);
router.put("/:id", updateMediaFileById);
router.delete("/:id", deleteMediaFileById);



module.exports = router;
