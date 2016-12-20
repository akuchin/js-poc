var sinonTestCase = sinon.testCase({
    setUp:function () {
        this.server = this.server.create();
    },
    "test server":function () {
        var callback = this.spy();
        getTodos(42, callback);

        // This is part of the FakeXMLHttpRequest API
        this.server.requests[0].respond(
            200,
            { "Content-Type":"application/json" },
            JSON.stringify([
                { id:1, text:"Provide examples", done:true }
            ])
        );

        assert(callback.calledOnce);
    },
    "test server request":function () {
        this.stub(jQuery, "ajax");
        getTodos(42, this.spy());

        assertTrue(jQuery.ajax.calledWithMatch({ url:"/todo/42/items" }));
    },
    "test server requests":function () {
        var callback = this.spy();
        getTodos(42, callback);
        // This is part of the FakeXMLHttpRequest API
        this.server.requests[0].respond(
            200,
            { "Content-Type":"application/json" },
            JSON.stringify([
                { id:1, text:"Provide examples", done:true }
            ])
        );

        assertTrue(this.server.requests.length === 1);
        assertEquals(this.server.requests[0].url, "/todo/42/items");
        assertEquals(this.server.requests[0].responseText, '[{"id":1,"text":"Provide examples","done":true}]');
    }
});

TestCase("Fake server xhr test", sinonTestCase);
