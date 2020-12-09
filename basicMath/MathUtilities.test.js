const { TestScheduler } = require('jest');
const MathUtilities = require('./MathUtilities');

test("Test 1 Integer Addition", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 16384;
    let addedValue = 7;

    // When
    let expected = 16391;
    let actual = math.add(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 2 Integer Addition", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 63;
    let addedValue = 64;

    // When
    let expected = 127;
    let actual = math.add(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 1 Integer Subtraction", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 20;
    let addedValue = 7;

    // When
    let expected = 13;
    let actual = math.subtract(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 2 Integer Subtraction", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 16384;
    let addedValue = 16383;

    // When
    let expected = 1;
    let actual = math.subtract(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});


test("Test 1 Integer Division", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 20;
    let addedValue = 2;

    // When
    let expected = 10;
    let actual = math.divide(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 2 Integer Division", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 2;
    let addedValue = 1;

    // When
    let expected = 2;
    let actual = math.divide(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 1 Integer Multiplication", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 5;
    let addedValue = 2;

    // When
    let expected = 10;
    let actual = math.multiply(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});

test("Test 2 Integer Multiplication", () => {
    // Given
    let math = new MathUtilities();
    let baseValue = 20;
    let addedValue = 1000;

    // When
    let expected = 20000;
    let actual = math.multiply(baseValue, addedValue);
    //Then
    expect(actual).toEqual(expected);
});