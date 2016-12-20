##JS Testing proof of concept

Concept is based on [js-test-driver](https://code.google.com/p/js-test-driver/):

##### Steps:
1. Preparation

	* install [lcov](http://ltp.sourceforge.net/coverage/lcov.php) (for pretty coverage view): 
	* install [phantomjs](http://phantomjs.org/download.html)

	**macos installation example:**  

	```brew install lcov```

	```brew install phantomjs```

	**fedora:**

	```sudo yum install lcov```

	```sudo yum install phantomjs```

	**ubuntu (tested on ubuntu server):**

	```sudo apt-get install lcov```

	```sudo apt-get install phantomjs```
		
2. Running

	run in headless PhantomJs:

	```./phantom_run.sh```

	or run tests pointing to any browser:

	```./run.sh /Applications/Firefox.app/Contents/MacOS/firefox```

3. Results

	find **passed/failed** report in console and coverage report inside ```./out```


