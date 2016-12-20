#!/usr/bin/env bash
java -jar JsTestDriver-1.3.5.jar --port 9876 --config jsTestDriver.yaml --browser $1 --tests  all --testOutput out
genhtml out/jsTestDriver.conf-coverage.dat --output-directory out
