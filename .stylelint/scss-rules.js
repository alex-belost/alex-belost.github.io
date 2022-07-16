'use strict';

module.exports = {
  rules: {
    'scss/percent-placeholder-pattern': '[a-z0-9]-template$',
    'scss/dollar-variable-pattern': /^(_)?[a-zA-Z0-9]+/,
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-if-no-null': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: [ 'first-nested' ],
        ignore: [ 'between-comments', 'stylelint-commands' ],
      },
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/comment-no-empty': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/map-keys-quotes': 'always',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: [ 'after-dollar-variable', 'first-nested', 'after-comment' ],
      },
    ],
    'scss/dollar-variable-empty-line-after': [
      'always',
      {
        except: [ 'before-dollar-variable' ],
        ignore: [ 'after-comment', 'inside-single-line-block' ],
      },
    ],
    'scss/dollar-variable-first-in-block': [
      true,
      {
        except: [ 'root', 'if-else', 'mixin', 'functions' ],
        ignore: [ 'comments' ],
      },
    ],
  },
};
