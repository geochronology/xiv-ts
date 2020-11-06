# https://create-react-app.dev/docs/deployment/

Use the Heroku Buildpack for Create React App. (https://github.com/mars/create-react-app-buildpack)

You can find instructions in Deploying React with Zero Configuration. (https://blog.heroku.com/deploying-react-with-zero-configuration)
Resolving Heroku Deployment Errors#

Sometimes npm run build works locally but fails during deploy via Heroku. Following are the most common cases.
"Module not found: Error: Cannot resolve 'file' or 'directory'"#

If you get something like this:
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src

It means you need to ensure that the lettercase of the file or directory you import matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So MyDirectory and mydirectory are two distinct directories and thus, even though the project builds locally, the difference in case breaks the import statements on Heroku remotes.
"Could not find a required file."#

If you exclude or ignore necessary files from the package you will see a error similar this one:
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local .gitignore or ~/.gitignore_global.