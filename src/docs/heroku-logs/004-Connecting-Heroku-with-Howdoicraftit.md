# https://devcenter.heroku.com/articles/custom-domains

Summary of steps

The remainder of this article covers these steps in greater detail:

    Confirm that you own the custom domain name. You can buy a custom domain name with a domain registration service.
    Add the custom domain to your app with the heroku domains:add command.
    Look up the Heroku-supplied DNS target for the custom domain using the heroku domains command.
    Configure your app’s DNS provider to point to the Heroku-supplied DNS target.
    Confirm that your app is accessible via the custom domain. There might be a delay while DNS changes propagate.




▶ heroku domains --app xiv-ts
=== xiv-ts Heroku Domain
xiv-ts.herokuapp.com

=== xiv-ts Custom Domains
Domain Name       DNS Record Type DNS Target
howdoicraftit.com ALIAS or ANAME  silhouetted-wildebeest-nu06k84ds9zk71iejsezqfdy.herokudns.com






▶ heroku domains
=== young-reaches-39649 Heroku Domain
young-reaches-39649.herokuapp.com

=== young-reaches-39649 Custom Domains
Domain Name       DNS Record Type DNS Target
howdoicraftit.com ALIAS or ANAME  thawing-anaconda-qbwmmjv3jmgzzulcetgtmprm.herokudns.com


^ pointing to old build, need to get new


# https://www.whatsmydns.net/


add domain
----------

# SO: https://stackoverflow.com/questions/32992445/how-to-configure-dns-records-for-name-com-and-a-heroku-app

Here's what worked for me. Start with typing this in the Heroku CLI

Heroku domains: add www.youwebsitename.com --app yourherokuapp 

This should give you a DNS target.You can obtain this from the your app settings as well on the website . Copy it and save it because we are going to need it later.Then after this run

heroku domains:wait for www.youwebsitename.com --app yourherokuapp 





