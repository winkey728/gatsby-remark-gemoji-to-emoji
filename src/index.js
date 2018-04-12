const gemojiToEmoji = require("remark-gemoji-to-emoji");

module.exports = ({ markdownAST }) => {
  gemojiToEmoji()(markdownAST);

  return markdownAST;
};
