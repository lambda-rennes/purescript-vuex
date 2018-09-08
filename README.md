# What is this project about ?

This project shows how to use PureScript within a Vue/Vuex project. We propose a
relatively lightweight approach where Vue is in the driver's seat. User
interaction is handled by Vue, while the Vuex store delegates state
transformations - where complex domain logic usually lies, and thus where type
safety is most beneficial - to PureScript functions. This approach is both
powerful and flexible, allowing to seamlessly mix PureScript and JavaScript
logic.

# Instructions

## Prerequesites

To build this project, you will need:
- git
- nodejs
- psc-package
- purescript 0.12
- yarn

The simplest way to provision these dependencies is to install Nix and start a Nix shell:

```
$ nix-shell --pure
```

This will drop you in a shell where all necessary tools are available, pinned to
a working version. It may take a while the first time, but everything will be
cached afterwards.

## Building the project

First, install PureScript and JavaScript dependencies:

```
$ psc-package install && yarn install
```

Then, build PureScript code with:
```
$ yarn buildps
```

You may also use `yarn watch` to continuously monitor for changes and rebuild
automatically.

Finally, you may start a web server with Parcel that will automatically bundle
PureScript and JavaScript code:

```
$ yarn server
arn run v1.5.1
warning package.json: No license field
$ parcel serve web/index.html
Server running at http://localhost:1234 
✨  Built in 838ms.
```

Point your web browser to `http://localhost:1234`: you should see a working web
application !
