module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // forces the use of min-width (mobile-first) based styling
    'media-feature-name-disallowed-list': ['max-width'],
    // forbids the use of ID selectors
    'selector-max-id': 0,
    // forbids the use of type selectors
    'selector-max-type': 0,
    // restricts the use of class selectors to a maximum of 1 nesting level
    'selector-max-class': 2
  }
}
