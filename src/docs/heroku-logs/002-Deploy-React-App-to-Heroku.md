# Via https://blog.heroku.com/deploying-react-with-zero-configuration

Create and Deploy a React App in Two Minutes

You can get started building React apps for free on Heroku.

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open



# Buildpack: https://github.com/mars/create-react-app-buildpack
# YT: https://www.youtube.com/watch?v=dn4mmfbletg



CRA Buildpack
-------------

# https://github.com/mars/create-react-app-buildpack
# https://github.com/mars/create-react-app-buildpack/issues/76

Web server

The web server may be configured via the static buildpack.

The config file static.json should be committed at the root of the repo. It will not be recognized, if this file in a sub-directory

The default static.json, if it does not exist in the repo, is:

{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  }
}