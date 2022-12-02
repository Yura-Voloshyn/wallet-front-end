### Prepare to work

First we clone repo from "Dev" branch (NOT MAIN) - this is a development branch.
git clone https://github.com/Yura-Voloshyn/wallet-front-end.git

To sync your local branch with dev use this command: |git checkout dev|, |git
pull| then create new branch - |git checkout -b "branch-name"|, switch to new
branch |git checkout "branch-name"|

Every feature or bugfix performed in a separate branch - feature/feature-name
and bugfix/bugfix-name

Delete branch - |git branch -d "feature/feature-name"|

Save local changes and push to remote - |git add .| and |git commit -m “your
commit text”| then |git push|

After the feature is ready, we send the history (commits) of the local branch to
GitHub and open a pull request. Attentively select the desired repository (dev
is our choice, you shoud see something like this | dev <<< "your branch name" |)

### Development

To install all dependencies use |npm ci| before start writing the code

### Routing

If your application uses the `react-router-dom` library for routing, you must
additionally configure the `<BrowserRouter>` component by passing the exact name
of your repository in the `basename` prop. Slashes at the beginning and end of
the line are required.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
