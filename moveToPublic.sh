#!/usr/bin/env bash

rm -rf ./public/libs/
mkdir -p ./public/libs/
cp ./node_modules/react/umd/react.production.min.js ./public/libs/
cp ./node_modules/react-dom/umd/react-dom.production.min.js ./public/libs/
