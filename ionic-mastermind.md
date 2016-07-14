![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/2000px-Ionic_Logo.svg.png)

# Ionic Game Lab

| Learning Objectives |
| :--- |
| Code a Game using Ionic |
| Further Team Programming Experience |
| Have Fun! |

## Roadmap

- Identify Teams/Sub-teams
- Review Specs of Game - Mastermind
- Review Starter Code
- Git/GitHub Workflow
- Code Away!

## Identify Teams/Sub-teams

### Identify Teams

Your teams will consist of your current stand up groups.

### Identify Sub-teams

To improve your workflow, consider breaking your team into two sub-teams as follows:

- HTML/CSS
  - This team will write all of the code in the HTML and CSS files.
  - This includes coding all Angular directives for binding, click handlers, etc.

- JavaScript
	- This team will be responsible for all of the code in the script files.

### Document the "Code Contract" Between Views & Controller

- Because the views/templates in AngularJS bind to properties and methods in the controller, it is important to establish what those properties/methods will be named and what they do.

- Document what you can before you start to code, then add and revise the contract as you go.

## Review Specs of Game - Mastermind

### Demo

View a quick demo of the game.

### Rules

The rules of the game are simple:

- The computer will generate a random "secret" code consisting of four of the icons in the footer bar. There may be zero or up to four of an icon (steep odds, but possible).
- The player tries to crack the secret code by making guesses, having the computer score them, and revising future guesses based upon the score of prior guesses.
- Guesses are formed by clicking any of the four positions, which will place the currently active icon, shown in the footer bar, in that location.
- Click any of the icons in the footer bar to make it the active icon.
- The player wins when they have cracked the code.

## Review Starter Code

- Starter code has been provided.
- The application has one Angular controller and three templates - all of which require some code modifications.
- Several `TODO` comments have been sprinkled around the files to help guide you.
- One of the first things your team should do is spend a little time familiarizing yourselves with the starter code and `TODO` comments. Doing so will pay dividends.

## Git/GitHub Workflow

- One team member should establish a local git and GitHub remote repository.
- For this particular exercise, feel free to use the "shared repository model" (vs. the "fork & pull model") whereby the other teammates are added as collaborators. This model can be more "efficient" for small teams working on a tight deadline.
- Using this model, teammates clone the repo instead of forking it and will have read/write access to the GitHub repo.
- All team members/collaborators should:
   - Create their own feature branches.
   - Commit changes to the branch.
   - Push the feature branch to the repo (`? git push origin my-feature`).
   - Issue a pull request.
   - Be aware that any collaborator has the ability to merge pull requests. Even the team member that made the request can merge it, but this would not be considered a best practice.
   - Be aware that all collaborators are able to push to the `master` branch  (but should never do so).
   - Never commit code that breaks the app!
   - Whenever notified of changes to the remote's `master` branch, merge changes into their local repo:

   ```
   ? git checkout master
   ? git pull
   ```
   
   This will ensure that a collaborator's local `master` branch is in sync with the remote's `master` (the app's production code).
   
   - Then, to ensure that you are lessening the chance of merge conflicts, you should merge your newly updated local `master` branch with your current feature branch:

   ```
   ? git checkout my-feature
   ? git merge master
   ```

## Code Away!

This app has some functionality that requires coding game logic, for example, scoring a turn. It's recommended that you pseudocode possible approaches.

Remember the AngularJS Mindset - drive your app with data and data-binding!

Have fun!

We'll review your solutions towards the end of the lesson.

 
