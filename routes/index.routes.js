const router = require('express').Router();

const usersRouter = require('./users.routes');
const ContactsRouter = require('./contacts.routes');
const chatsRouter = require("./chats.routes");
const userChatsRouter = require("./user.chats.routes");
const chatAdminRouter = require("./chat.admins.routes");
const channelsRouter = require("./channels.routes");
const chatPostsRouter = require("./chat.posts.routes");
const messagesRouter = require("./messages.routes");
const messageEditsRouter = require("./message.edits.routes");
const messageReadsRouter = require("./message.reads.routes");
const mediaFilesRouter = require("./media.files.routes");
const reactionsRouter = require("./reactions.routes");

router.use("/users", usersRouter);
router.use("/contacts", ContactsRouter);
router.use("/chats", chatsRouter);
router.use("/user-chats", userChatsRouter);
router.use("/chat-admins", chatAdminRouter);
router.use("/channels", channelsRouter);
router.use("/chat-posts", chatPostsRouter);
router.use("/messages", messagesRouter);
router.use("/message-edits", messageEditsRouter);
router.use("/message-reads", messageReadsRouter);
router.use("/media-files", mediaFilesRouter);
router.use("/reactions", reactionsRouter);

module.exports = router;