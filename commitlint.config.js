export default {
  rules: {
    "header-max-length": [2, "always", 100],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "scope-case": [2, "always", "upper-case"],
    "scope-empty": [2, "never"],
    "subject-case": [2, "always", ["sentence-case"]],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((PA-\d+)\): (.+)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
};
