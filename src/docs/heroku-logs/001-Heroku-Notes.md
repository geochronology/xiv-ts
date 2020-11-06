
Local Environments
------------------

# https://stackoverflow.com/questions/44633291/remote-prod-not-found-in-git-remotes

> git remote -v

heroku	https://git.heroku.com/young-reaches-39649.git (fetch)
heroku	https://git.heroku.com/young-reaches-39649.git (push)
origin	https://github.com/geochronology/xiv-ts.git (fetch)
origin	https://github.com/geochronology/xiv-ts.git (push)


Recompile Assets
----------------

heroku repo:reset --app=young-reaches-39649
$ git push heroku

https://stackoverflow.com/questions/22219142/force-heroku-to-recompile-all-assets



Troubleshooting Domain
----------------------


▶ heroku domains:add howdoicraftit.com --app xiv-ts
Configure your app's DNS provider to point to the DNS Target silhouetted-wildebeest-nu06k84ds9zk71iejsezqfdy.herokudns.com.
    For help, see https://devcenter.heroku.com/articles/custom-domains

The domain howdoicraftit.com has been enqueued for addition
Run heroku domains:wait 'howdoicraftit.com' to wait for completion
Adding howdoicraftit.com to ⬢ xiv-ts... done



# SO: https://stackoverflow.com/questions/52704791/how-to-connect-to-the-selected-app-with-heroku-cli

The way you try to set your remote for heroku is incorrect. That is why you get the above error. To set your remote correctly use the below command

heroku git:remote -a new_app

This will set your remote to newly crated app new_app

To deploy the code use below command

git push heroku master

This will deploy your code to heroku app


# Find .git for heroku app



▶ heroku open
 ›   Error: Multiple apps in git remotes
 ›     Usage: --remote menphina
 ›        or: --app young-reaches-39649
 ›     Your local git repository has more than 1 app referenced in git remotes.
 ›     Because of this, we can't determine which app you want to run this command against.
 ›     Specify the app you want with --app or --remote.
 ›     Heroku remotes in repo:
 ›     xiv-ts (heroku) 
 ›   young-reaches-39649 (menphina)
 ›
 ›     https://devcenter.heroku.com/articles/multiple-environments

> heroku open --app xiv-ts



Troubleshooting Build
---------------------

# SOLVED: https://github.com/mars/create-react-app-buildpack/issues/76


# may be ffu do to improper build guidelines. 
# running > craco start in logs when it should be build

GH: https://github.com/DocSpring/craco-less/issues/10
Docs: https://create-react-app.dev/docs/production-build/

Hi @kibray, I don't think this is the correct way to deploy an application to Heroku. You're not meant to run craco start during production, it's only for development while you are testing the application locally. In production, you should be running craco build to build the static files, and then host these static files somewhere like Netlify, or in an S3 bucket. (Or you can also host static files on Heroku, and serve them from the backend server.)

Here's some documentation about deployment: https://facebook.github.io/create-react-app/docs/deployment

Please let me know if you are still running into any issues after that



# scripts?

https://stackoverflow.com/questions/22954782/install-devdependencies-on-heroku

Keeping NPM_CONFIG_PRODUCTION true, I used Heroku's script hooks:

"scripts": {
  ...
  "heroku-prebuild": "export NPM_CONFIG_PRODUCTION=false; export NODE_ENV=; NPM_CONFIG_PRODUCTION=false NODE_ENV=development npm install --only=dev --dev",
  "heroku-postbuild": "export NPM_CONFIG_PRODUCTION=true; export NODE_ENV=production;",
   ...
},

(Finally) worked for me.


# Alternative Approach
https://stackoverflow.com/questions/39457619/webpack-not-found-deploying-to-heroku

"scripts": {
  ...,
  "heroku-prebuild": "npm install --dev",
  ...
},





