# Contributing

All contributions, both internally and externally, get merged through a Pull Request.

## Steps to contribute:

#### Clone the repo

**If you're part of the Women in Computing organization on GitHub**, you can clone the main repository:

```bash
git clone git@github.com:Women-in-Computing-at-RIT/wichacks.io.git
```

Otherwise, fork the repo and then clone it:

```bash
git clone git@github.com:your-username/wichacks.io.git
```

#### Make a branch for your changes

```bash
git checkout -b my-change-branch # `-b` does two things: creates a new branch & checks it out
```

#### Make your changes

Modify any code you need! [Sublime Text](https://www.sublimetext.com/) and [Visual Studio Code](https://code.visualstudio.com/) are two lightweight & easy to use editors if you need one.

#### Commit your changes

```bash
git status # to see what you changed - also can use `git diff`
git add --all
git commit -m "Add my changes" # describe your changes in 50 characters or less
```

#### Push your changes up & make a pull request

```bash
git push -u origin
```

Then open https://github.com/Women-in-Computing-at-RIT/wichacks.io and you will see a green "Create pull request" button. Give the PR a title (your commit message works), summarize your changes in the description, and submit!

## Pull request lifecycle

Once you submit a pull request ("PR"), several checks will run. These include tests to make sure everything works, as well as a check for consistent code style. If one fails, don't worry - opening the check results should show what went wrong. If you're stuck on how to fix it or the error doesn't make sense, just add a comment on the PR - someone will help out!

Ultimately, this is a time for everyone to check up on what's changing with the website, as well as ask questions and provide feedback. If you have to make any additional changes, you can just add another commit and push it up like before: `git add --all`, `git commit -m "My changes"`, and `git push origin`.

Once a pull request is approved, you did it! :tada: Whenever you're ready, hit the big green button to merge your pull request.

#### Splitting pull requests

If you're making a lot of changes, you might want to consider splitting your commits into two pull requests.

The changes in each pull request should ideally cover one main idea. For example, let's say you're working on two things: (1) adding sponsor logos and (2) redesigning a page. It's best to keep these as two separate PRs: a "Add x sponsor logo" pull request and a "Redesigned x page" pull request. This way, someone can review and approve your first PR separately from the second PR. 

This also means that the two changes can merge independently: your sponsor logo change can get reviewed & deployed quickly, while other people spend time looking over the bigger changes you made in the redesign PR.
