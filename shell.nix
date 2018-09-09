{ pkgs ? import ./nixpkgs { } }:

with pkgs;

mkShell {
  buildInputs = [
    git
    nodejs
    psc-package
    haskell.packages.ghc822.purescript
    yarn
  ];
}
