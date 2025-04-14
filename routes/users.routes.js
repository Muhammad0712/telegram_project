const { addNewUser, getAllUsers, getUserById, updateUserById, deleteUserById, registrUser, activateUser, logOutUser, loginUser, refreshTokenUser } = require('../controllers/users.controller');

const router = require('express').Router();

router.post("/", addNewUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.post("/register", registrUser);
router.get("/activate/:link", activateUser);
router.post("/log-out", logOutUser);
router.post("/log-in", loginUser);
router.post("/refresh", refreshTokenUser);


module.exports = router;
