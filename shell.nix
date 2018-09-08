{ pkgs ? import ./nixpkgs { } }:

with pkgs;

mkShell {
  buildInputs = [
    git
    lscpu
    nodejs
    psc-package
    haskell.packages.ghc822.purescript
    yarn
  ];
}
