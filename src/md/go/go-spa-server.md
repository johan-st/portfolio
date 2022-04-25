# go-spa-server

A minimalistic server for Single Page Applications
## Usage
Run executable together w/ an "assets" folder.

## Behaviour
- _http://localhost:3000/favicon.ico_  serves _./assets/favicon.ico_ 
- _http://localhost:3000/robots.txt_  serves _./assets/robots.txt_ 
- _http://localhost:3000/assets/*_  serves _./assets/*_ 
- _http://localhost:3000/*_ All other routes serve file _./assets/index.html_ 