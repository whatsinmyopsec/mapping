#!/bin/bash

mimes="application/gzip"
dst="bins/"

mkdir $dst
for f in *; {
    [[ "$(file --mime-type -b "$f")" == *"$mimes"* ]] && mv "$f" "$dst/$f"
}
