import { WinningNumbers } from '../src/Validation/winningNumberValidator.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호에 빈 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([0]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자열이 들어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, '일']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1부터 45까지의 범위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([100, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});
