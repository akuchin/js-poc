var sinonTestCase = sinon.testCase({
    setUp: function() {
        this.getVersion = this.stub(Rally, 'getVersion');
    },

    'test should support version greater than one': function() {
        this.getVersion.returns(2);
        assertTrue(Rally.isSupported('read'));
    },
    'test should not support version less than two': function() {
        this.getVersion.returns(1);
        assertFalse(Rally.isSupported('read'));
    }
});

TestCase("Mock test", sinonTestCase);
