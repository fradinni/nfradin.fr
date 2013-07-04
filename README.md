# Nicolas FRADIN - Website / Blog 
------
[nfradin.fr](http://nfradin.fr) is my personnal blog/website. The source code is free and can be re-used for your own personnal blog/website.

## Features

### Manage user accounts
Manage website / blog users.

### Enable/disable blog system
Blog can be activated or not if you only want a simple website.

## Installation
1. Clone github repository :
```git clone https://github.com/fradinni/nfradin.fr.git```

2. Install NodeJS dependencies : ```npm install```

3. Create '.env' file in project root directory:
```
PORT=8080
MONGO_URL=mongodb://<user>:<password>@<domain>:<port>/<dbName>
```

4. Launch backend: ```foreman start```
