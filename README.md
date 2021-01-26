# development
## todo
- responsive
- animate stack components
- timeline
- bring up live versions of prev projects
- have content markdown in separate files

# deploy
link: [live app](https://johan-st.herokuapp.com/)
```bash
heroku login
heroku container:login
heroku container:push web -a johan-st
heroku container:release web -a johan-st
```
