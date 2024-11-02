# javascript-lotto-precourse

###  💵 로또 발매기 
사용자가 로또 구입 금액과 당첨 번호, 보너스 번호를 입력하면 당첨 내역을 알려주는 로또 발매기입니다. 
<br/>
<br/>

## 과제 진행 요구 사항
- 미션은 로또 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
     - AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.
<br/>

## ✅ 기능 요구 사항 체크리스트

### 입력

- 구입금액
- [X]  ‘구입금액을 입력해 주세요.\n’ 입력값을 받는다.
    - [X]  변수 설정- purchaseAmountInput
- 당첨 번호
- [X]  ‘당첨번호를 입력해 주세요.\n’ 입력값을 받는다.
    - [X]  변수 설정: winningNumbersInput
    - [X]  쉼표 (,) 기준으로 구분한다. 
- 보너스 번호
- [X]  ‘보너스번호를 입력해 주세요.\n’ 입력값을 받는다.
    - [X]  변수 설정: bonusNumberInput

### 출력

- 1] 구입개수
    - [X]  ‘{n}개를 구매했습니다.’ 라고 출력한다.

- 2] 발행한 로또 리스트
    - [X]  이후 구매한 로또 번호들을 배열로 보여준다.
    - [X]  로또 한 장에 6개 숫자로 이루어져 있다.
    - [X]  로또 번호는 오름차순으로 정렬하여 보여준다.
        - e.g. [8, 21, 23, 41, 42, 43]
- 3] 당첨내역
    - [X]  ‘당첨 통계\n’를 출력한다.
    - [X]  ‘—-’ 구분선도 함께 출력한다.
    - [X]  로또 번호가 맞는 개수에 해당하는 맞은 개수를 보여준다
        - 3개 일치 (5,000원) - {0}개
        - 4개 일치 (50,000원) - {0}개
        - 5개 일치 (1,500,000원) - {0}개
        - 5개 일치, 보너스 볼 일치 (30,000,000원) - {0}개
        - 6개 일치 (2,000,000,000원) - {0}개
- 4] 총수익률
    - [X]  ‘총수익률은 {00.0}%입니다.’ 를 출력한다.
    - 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
### 내부 기능

- 구입금액
    - [X] 로또 1장의 가격은 1,000원이다.
- 로또번호
    - [X]  로또 번호의 숫자 범위는 1~45까지이다.
    - [X]  1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
    - [X]  로또 1개당 배열로 구성한다.
- 당첨 번호
    - [X]  당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
    - [X]  당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
        - 1등: 6개 번호 일치 / 2,000,000,000원
        - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
        - 3등: 5개 번호 일치 / 1,500,000원
        - 4등: 4개 번호 일치 / 50,000원
        - 5등: 3개 번호 일치 / 5,000원
- 당첨금액
    - [X]  변수 설정: lottoWinningAmount
- 총수익률
    - [X]  변수 설정: rateOfReturn
    - [X]  수익률은 소수점 둘째 자리에서 반올림 한다.
        - (ex. 100.0%, 51.5%, 1,000,000.0%)
    - [X]  수익률 계산 = (당첨 금액 / 구입 금액)*100
### 에러 처리

- [X] 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
    - 구입금액 에러 처리
        - [X]  빈값을 입력하는 경우 예외 처리한다.
            - [X]  ‘1,000원 단위로 입력해주세요.’
        - [X]  1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
            - [X]  ‘1,000원 단위로 입력해주세요.’

    - 당첨 번호 에러 처리
        - [X]  빈값을 입력하는 경우 예외 처리한다.
            - [X]  ‘빈값입니다. 당첨 번호 6개를 쉼표로 구분하여 입력해주세요.’
        - [X]  쉼표(,) 이외에 숫자가 아닌 경우  에러 처리 한다.
            - [X]   '입력하신 모든 당첨번호의 구분이 쉼표(,) 로 되어있지 않습니다.' 
        - [X]  숫자 길이가 6길이가 아닐 시 에러 처리 한다.
            - [X]  ‘숫자는 6개만 입력해주세요.’
        - [X]  1부터 45까지의 숫자가 아닌 경우 에러 처리 한다.
            - [X]  ‘입력하신 당첨번호는 1부터 45 까지의 숫자가 아닙니다.’

        - [X]  당첨 번호가 중복된 숫자로 입력한 경우 에러 처리 한다.
            - [X]  ‘입력하신 당첨번호의 숫자가 중복되었습니다.’
    - 보너스 번호 에러 처리
        - [X]  빈값을 입력하는 경우 에러 처리한다.
        - [X]  숫자가 아닌 경우 에러 처리 한다.
            - [X]  ‘숫자로 입력해 주세요.’
        - [X]  1부터 45까지의 숫자가 아닌 경우 에러 처리 한다.
            - [X]  ‘입력하신 보너스번호는 1부터 45 까지의 숫자가 아닙니다.’

로또 번호 에러 처리 클래스
- [ ] 모두 숫자로 이루어져있지 않은 경우 에러 처리 한다.
- [X] 중복된 번호가 있을 경우 에러 처리 한다.






<br/>

## 프로그래밍 요구 사항 체크리스트

### 1.

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js`의 `run()`이다.
- `package.json` 파일은 변경할 수 없으며, **제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.**
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
    - 기본적으로 [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)를 원칙으로 한다.

### 2.

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
    - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
    - 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
        - [Using Matchers](https://jestjs.io/docs/using-matchers)
        - [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
        - [Jest로 파라미터화 테스트하기: test.each(), describe.each()](https://www.daleseo.com/jest-each)

### 3.

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
    - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
    - 때로는 if/else, when문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
    - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.
    - 단위 테스트 작성이 익숙하지 않다면 `LottoTest`를 참고하여 학습한 후 테스트를 작성한다.

### **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - Random 값 추출은 `Random. pickUniqueNumbersInRange()`를 활용한다.
    - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

### **사용 예시**

- 1에서 45 사이의 중복되지 않은 정수 6개 반환

```jsx
MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

```

### **Lotto 클래스**

- 제공된 `Lotto` 클래스를 사용하여 구현해야 한다.
- `Lotto`에 `numbers` 이외의 필드(인스턴스 변수)를 추가할 수 없다.
- `numbers`의 접근 제어자인 `#`은 변경할 수 없다.
- `Lotto`의 패키지를 변경할 수 있다.

```jsx
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}
```

### ✅ **과제 제출 전 체크 리스트**

- [ ] 기능을 올바르게 구현했더라도 **요구 사항에 명시된 출력 형식을 따르지 않으면 0점**을 받게 된다.
- [ ] 기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
- [ ] **테스트가 실패하면 점수가 0점**이 되므로 제출하기 전에 반드시 확인한다.

### ✅ **테스트 실행 가이드 체크 리스트**

- [ ] 터미널에서 `node --version`을 실행하여 Node.js 버전이 20.17.0 이상인지 확인한다.
- [ ] 아래 명령을 입력하여 패키지를 설치한 후 실행하는 데 문제가 없어야 한다.
### **사용 예시**

- 1에서 45 사이의 중복되지 않은 정수 6개 반환

```jsx
MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

```

### **Lotto 클래스**

- 제공된 `Lotto` 클래스를 사용하여 구현해야 한다.
- `Lotto`에 `numbers` 이외의 필드(인스턴스 변수)를 추가할 수 없다.
- `numbers`의 접근 제어자인 `#`은 변경할 수 없다.
- `Lotto`의 패키지를 변경할 수 있다.

```jsx
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}
```

### ✅ **과제 제출 전 체크 리스트**

- [ ] 기능을 올바르게 구현했더라도 **요구 사항에 명시된 출력 형식을 따르지 않으면 0점**을 받게 된다.
- [ ] 기능 구현을 완료한 후 아래 가이드에 따라 모든 테스트가 성공적으로 실행되는지 확인한다.
- [ ] **테스트가 실패하면 점수가 0점**이 되므로 제출하기 전에 반드시 확인한다.

### ✅ **테스트 실행 가이드 체크 리스트**

- [ ] 터미널에서 `node --version`을 실행하여 Node.js 버전이 20.17.0 이상인지 확인한다.
- [ ] 아래 명령을 입력하여 패키지를 설치한 후 실행하는 데 문제가 없어야 한다.