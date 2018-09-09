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

The simplest way to provision these dependencies is to use Nix. You may install
Nix by running:

```
curl https://nixos.org/nix/install | sh`
```

Start by cloning this repository and `cd` into it:
```
$ git clone https://github.com/lambda-rennes/purescript-vuex.git
$ cd purescript-vuex
```

Then, if you choose to use Nix, run:
```
$ nix-shell
```

This will drop you into a shell where all necessary tools are available, pinned
to a working revision. It may take a while the first time, but everything will
be cached afterwards.

## Building the project

First, install PureScript and JavaScript dependencies:

```
$ psc-package install && yarn install
```

Then, build PureScript code with:
```
$ yarn buildps
```

Alternatively, you may use `yarn watch` to continuously monitor for changes and
automatically recompile PureScript into JavaScript code.

Finally, start a web server with Parcel. It will automatically bundle all
JavaScript code, including standalone `.vue` components, into a single
JavaScript file and serve the `web/index.html` file:

```
$ yarn serve
yarn run v1.5.1
warning package.json: No license field
$ parcel serve web/index.html
Server running at http://localhost:1234 
✨  Built in 838ms.
```

Point your web browser to `http://localhost:1234`: you should see a working web
application !

Parcel will also monitor for changes, rebuilding the JavaScript bundle as
needed. Using `yarn watch` and `yarn serve` together is thus especially
convenient.

# Troubleshooting

In case of issues, try running a _pure_ `nix-shell`:

```
$ nix-shell --pure
```

This should improve reproducibility, as only the environment provisioned by the
`nix-shell` should be visible (i.e., it will not interfere with pre-installed
programs). Note that most applications won't be accessible anymore !
