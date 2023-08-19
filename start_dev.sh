#!/bin/bash

cd sk
npm run build
(trap 'kill 0' SIGINT; npm run dev:backend & npm run dev & wait)
