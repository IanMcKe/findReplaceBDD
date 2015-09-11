describe('findReplace', function() {
    it('replaces one instance of a word with another word', function() {
        expect(findReplace('hello world', 'world', 'Gerald')).to.equal('hello Gerald');
    });
});
