<!-- action-docs-header source="action.yml" -->

<!-- action-docs-header source="action.yml" -->

<!-- action-docs-description source="action.yml" -->
## Description

Manages GitHub Action releases by validating changes and creating release PRs
<!-- action-docs-description source="action.yml" -->

<!-- action-docs-runs source="action.yml" -->
## Runs

This action is a `composite` action.
<!-- action-docs-runs source="action.yml" -->

<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `mode` | <p>Operation mode: check (for PR validation) or release (for creating releases)</p> | `true` | `""` |
| `base_branch` | <p>Base branch to create a version branch from when the version branch does not exist</p> | `false` | `main` |
| `main_branch` | <p>Main default branch of the repository</p> | `false` | `main` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
