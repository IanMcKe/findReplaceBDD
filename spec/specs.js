describe('findReplace', function() {
    it('replaces one instance of a word with another word', function() {
        expect(findReplace('hello world', 'world', 'Gerald')).to.equal('hello Gerald');
    });

    it('replaces multiple instances of a word with another word', function() {
        expect(findReplace('hello world world', 'world', 'Gerald')).to.equal('hello Gerald Gerald');
    });

    it('replaces all instances of a word even if it has capitals or not', function() {
        expect(findReplace('hello World world', 'world', 'Gerald')).to.equal('hello Gerald Gerald');
    });
});
