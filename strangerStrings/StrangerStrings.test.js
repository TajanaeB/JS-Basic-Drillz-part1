const { TestScheduler } = require('jest');
const StrangerStrings = require('./StrangerStrings');


test("Hello World Test", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let expected = "Hello World";


    // When
    let actual = strangerStrings.getHelloWorld();
    //Then
    expect(actual).toEqual(expected);
});

test("return the concatenation of `firstSegment`, and , `secondSegment`", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let firstSegment = 'Wutang';
    let secondSegment = ' Forever';

    let expected = "Wutang Forever";


    // When
    let actual = strangerStrings.concatenation(firstSegment, secondSegment);
    //Then
    expect(actual).toEqual(expected);
});

test("return the first 3 characters of `input`", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let input = 'Wutang';

    let expected = "Wut";


    // When
    let actual = strangerStrings.getPrefix(input);
    //Then
    expect(actual).toEqual(expected);
});

test("return the last 3 characters of `input`", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let input = 'Wutang';

    let expected = "ang";


    // When
    let actual = strangerStrings.getSuffix(input);
    //Then
    expect(actual).toEqual(expected);
});


test("return the middle character of `inputValue`", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let input = 'MethodMan';

    let expected = "o";


    // When
    let actual = strangerStrings.getMiddleCharacter(input);
    //Then
    expect(actual).toEqual(expected);
});

test("return the first sequence of characters", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let inputValue = 'Wutang Clan';

    let expected = "Wutang";


    // When
    let actual = strangerStrings.getFirstWord(inputValue);
    //Then
    expect(actual).toEqual(expected);
});

test("return the second sequence of characters", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let inputValue = 'Wutang Clan';

    let expected = "Clan";


    // When
    let actual = strangerStrings.getSecondWord(inputValue);
    //Then
    expect(actual).toEqual(expected);
});

test("return the reverse of input", () => {
    // Given
    let strangerStrings = new StrangerStrings();
    let inputValue = 'WutangClan';

    let expected = "nalCgnatuW";


    // When
    let actual = strangerStrings.reverse(inputValue);
    //Then
    expect(actual).toEqual(expected);
});
