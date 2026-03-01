# One-time GitHub setup (topics, labels, first PR)

Do this once so the repo is easy to find and issue templates work.

## 1. Log in to GitHub CLI (one-time)

```bash
gh auth login
```

Follow the prompts (browser or token). Then you can run the commands below from the repo root.

---

## 2. Add repository topics

**Option A — GitHub CLI (after `gh auth login`):**

```bash
gh repo edit Hkshoonya/Get-frontend-done-vibecode-way --add-topic skill --add-topic component-gallery --add-topic claude --add-topic cursor --add-topic codex --add-topic gemini --add-topic antigravity --add-topic design-systems --add-topic ui-components --add-topic frontend --add-topic accessibility
```

**Option B — GitHub website:**

1. Open https://github.com/Hkshoonya/Get-frontend-done-vibecode-way
2. Under **About** (right sidebar), click the **gear**
3. In **Topics**, add (comma or Enter):  
   `skill`, `component-gallery`, `claude`, `cursor`, `codex`, `gemini`, `antigravity`, `design-systems`, `ui-components`, `frontend`, `accessibility`
4. Click **Save changes**

---

## 3. Create labels (for issue templates)

**Option A — GitHub CLI:**

```bash
gh label create bug --color "d73a4a" --description "Something isn't working"
gh label create enhancement --color "a2eeef" --description "New feature or request"
```

**Option B — GitHub website:**

1. **Settings** → **Labels** → **New label**
2. Create:
   - Name: `bug`, Color: `#d73a4a`, Description: *Something isn't working*
   - Name: `enhancement`, Color: `#a2eeef`, Description: *New feature or request*

---

## 4. Open the first PR (optional)

A branch `docs/setup-and-share` is ready with this setup guide and a share kit. After pushing it:

```bash
git push -u origin docs/setup-and-share
gh pr create --title "docs: add GitHub setup guide and share kit" --body "Adds .github/SETUP-GITHUB.md (topics + labels) and SHARE.md for spreading the word. PRs welcome!"
```

If you prefer to open the first PR yourself with a tiny change (e.g. typo or extra topic), see [CONTRIBUTING.md](CONTRIBUTING.md).
