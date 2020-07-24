# Contributing to grpc-tools

We'd love you to contribute to our source code and to make our project even better than it is
today! Here are the guidelines we'd like you to follow:

- [Questions and Problems](#question)
- [Issues and Bugs](#issue)
- [Before contributing](#contribute)
- [Working with the code](#working-with-the-code)

## <a name="question"></a>Where to ask Questions?

Questions can be asked in form of issues. Also feel free asking questions to the [maintainers](https://github.com/Byndyusoft/grpc-tools#maintainers)

## <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the source code, you can help us by submitting an issue to our repository. Even better, you can submit a Pull Request with a fix.

**Please see the [Working with the code](#working-with-the-code) below.**

## <a name="contribute"></a>How to contribute?

When contributing to this repository, please first discuss the change you wish to make via an issue with the owners of this repository before making a change. Once owners agree with your proposal, you can follow instructions from the next section to create a Pull Request.
Also first of all search GitHub for an open or closed Pull Request that relates to your submission. We don't want you to waste time.

## Working with the code

If you want to fix, to add enhancement, or to improve documentation, you need to learn how to work with GitHub, grpc-tools code base and contributing rules.

### Cloning

You will need clone the repository to work on the code.

```shell
 git clone https://github.com/Byndyusoft/grpc-tools.git
```

This creates the directory grpc-tools. Depending on your version of git it might be necessary
to explicitly tell Git to download the contents of the repository submodules:

```shell
 git submodule update --init --recursive
```

### Creating a branch

Branch `master` is protected. To make your change, create a new branch from it. You must pull the `master` branch.

```shell
 git checkout master
 git pull origin master
```

For create new branch, you can do :

```shell
 git branch feature/new_feature
 git checkout feature/new_feature
```

or :

```shell
 git checkout -b feature/new_feature
```

For better understanding why branch is created, branch must respect the naming convention:

- for a feature : feature/#<issue_number>\_short_name_of_feature
- for a bug fix : fix/#<issue_number>\_short_name_of_bug

### Writing code

Now, you can write code. For help you, you can read [README](README.md) or ask [questions](#question). Don't forget to add #<issue_number> to your commit messages for automatically link it with the issue.

### Merging your code

After coding, you can't merge your code to `master` because this branch is protected. To do this, you must create a Pull Request from your branch to `master`.

For accepting, each Pull Request must satisfy the following conditions:

1.  The merge to `master` should not have conflict. You can execute `git rebase origin/master`
2.  Tests are enriched and tests are executed with success
3.  Documentation are enriched
