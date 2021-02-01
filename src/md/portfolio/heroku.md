# heroku

At the moment this app is deployed on [heroku](https://heroku.com). As one of many service providers, _heroku_ stands out as a free (for small projects) and streamlined experience. 

Similar to many other providers, Heroku suspends the container if it has not recieved any trafic for 30 minutes. This is why the first visit can take a few extra seconds.

I build, push and release my app with one npm script leveraging the heroku cli.
```sh
npm run deploy
```

