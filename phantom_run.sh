#!/usr/bin/env bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
JSTD_VERSION=1.3.5

echo "Starting JsTestDriver Server"

nohup java -jar $ROOTDIR/JsTestDriver-$JSTD_VERSION.jar --port 9876 > $ROOTDIR/jstd.out 2> $ROOTDIR/jstd.err < /dev/null &
echo $! > $ROOTDIR/jstd.pid

echo "Starting PhantomJS"

nohup phantomjs $ROOTDIR/plugins/phantomjs-jstd.js > $ROOTDIR/phantomjs.out 2> $ROOTDIR/phantomjs.err < /dev/null &
echo $! > $ROOTDIR/phantomjs.pid

echo Wait a second for PhantomJs...
sleep 3s

java -jar $ROOTDIR/JsTestDriver-1.3.5.jar --config $ROOTDIR/jsTestDriver.yaml --tests all --testOutput $ROOTDIR/out

echo "Killing JsTestDriver Server"

PID=`cat $ROOTDIR/jstd.pid`
kill $PID

rm -f $ROOTDIR/jstd.out $ROOTDIR/jstd.err $ROOTDIR/jstd.pid

echo "Killing PhantomJS"

PID=`cat $ROOTDIR/phantomjs.pid`
kill $PID

rm -f $ROOTDIR/phantomjs.out $ROOTDIR/phantomjs.err $ROOTDIR/phantomjs.pid

genhtml out/jsTestDriver.conf-coverage.dat --output-directory out
