<!-- action-docs-header source="action.yml" -->

<!-- action-docs-header source="action.yml" -->

<!-- action-docs-description source="action.yml" -->
## Description

Finds the GitHub Action directory that was modified in the provided list of changed files
<!-- action-docs-description source="action.yml" -->

<!-- action-docs-runs source="action.yml" -->
## Runs

This action is a `composite` action.
<!-- action-docs-runs source="action.yml" -->

<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `changed_files` | <p>List of changed files</p> | `true` | `""` |
<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->
## Outputs

| name | description |
| --- | --- |
| `modified_action` | <p>Path to the modified action directory</p> |
| `error` | <p>Error message if the action directory validation failed</p> |
<!-- action-docs-outputs source="action.yml" -->
