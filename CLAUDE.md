# Team Riley Web

Use gstack for AI-assisted coding workflows in this project.

## gstack

- Use `/browse` for web browsing and browser QA.
- Use `/autoplan` for substantial features or ambiguous implementation work.
- Use `/review` before landing non-trivial code changes.
- Use `/qa` or `/qa-only` for web UI behavior and visual verification.
- Use `/ship` when preparing changes for remote or PR review.
- Available project-relevant skills include `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`, `/plan-devex-review`, `/design-consultation`, `/design-review`, `/review`, `/qa`, `/qa-only`, `/browse`, `/ship`, `/land-and-deploy`, `/canary`, `/benchmark`, `/investigate`, `/document-release`, `/document-generate`, `/cso`, `/autoplan`, `/careful`, `/freeze`, `/guard`, `/unfreeze`, `/gstack-upgrade`, and `/learn`.

Follow the project implementation standards in `AGENTS.md`.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
