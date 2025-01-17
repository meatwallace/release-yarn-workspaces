module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'pretty-quick --staged',
    'post-commit': 'git update-index --again',
  },
};
