---
sidebar_position: 4
tags: [C#, Unity]
---

# Unity를 위한 기본 문법 4

이번 편으로 C# 기본 문법편을 마무리짓도록 하겠다.
물론 이제껏 작성한 내용은 기본 문법에 불과하기 때문에 여기서 더욱 깊게 들어가면 배울 내용이 앞으로도 매우 많을 것이지만,
이 글의 주요 목적은 어디까지나 유니티 C# 스크립트 작성을 위한 기본기이므로 우선 가장 필수적인 내용까지만 정리하려 한다.

지난 편에서 다룬 클래스와 연관되는 내용을 정리하게 될 것이다.
클래스와 연관된 기능들, 그리고 클래스와 연관되거나 비슷한 형태를 띄는 자료형들을 정리하고 마무리하도록 하겠다.

---

# 클래스와 연관된 유용한 기능들

## 제네릭 (Generic)

**제네릭**은 자료형을 클래스 객체(인스턴스) 생성시에 직접 지정해주는 방법이라고 생각하면 된다.
클래스 뿐만 아니라, 인터페이스나 메서드 등에도 제네릭을 사용할 수 있다.
인터페이스에 대해서는 밑에서 다뤄보도록 하겠다.
여러 자료형을 지정할 수 있을 경우에 객체 생성시에 자료형을 직접 지정할 수 있게 해줌으로써 코드 작성의 효율성을 높여준다.

제네릭은 아래와 같이 작성한다.
아래에서는 클래스로 작성했지만, 바로 언급했듯이 인터페이스나 메서드 등도 제네릭을 사용할 수 있음을 알아두자.

```C#
class [클래스 이름]<제너릭 식별자>
{
    // 클래스 내용
    public [제너릭 식별자] [변수];

    public [메서드 이름]([제너릭 식별자] [매개변수 이름]) {}
}
```

제네릭을 이용한 예시 클래스를 작성해본다면 아래와 같이 작성할 수 있겠다.

```C#
class GenericExample<T>
{
    public T value;

    public GenericExample(T value)
    {
        this.value = value;
    }

    public void PrintExample()
    {
        Console.WriteLine("제네릭 자료형: {0} \t 값: {1}", value.GetType(), value);
    }
}
```
제네릭 식별자를 하나 지정할 때는 암묵적으로 T를 사용한다는 것을 알아두자.
이러한 암묵적 약속은 협업을 할 때 매우 중요하므로 반드시 따르는 것이 좋다고 이곳저곳에서 강조되는 모습을 쉽게 볼 수 있다.

사용 방법은 제네릭 식별자 위치인 T에 사용하고자 하는 자료형을 작성하는 것이다.
이를테면, 위의 GenericExample 클래스에 자료형 String을 사용하여 예를 들어보도록 하자.

```C#
class Program
    {
        static void Main(string[] args)
        {
            GenericExample<string> example = new GenericExample<string>("홍길동");
            example.PrintExample();
        }
    }

// 실행 결과
// 제네릭 타입: System.String       값: 홍길동
```

제네릭 식별자는 하나 뿐만 아니라 동시에 여러 개를 사용할 수도 있다.
아래의 예시를 보도록 하자.

```C#
class GenericExample<T, U>
{
    public T value1;
    public U value2;

    public GenericExample(T value1, U value2)
    {
        this.value1 = value1;
        this.value2 = value2;
    }

    public void PrintExample()
    {
        Console.WriteLine("첫번째 변수: {0} \t 두번째 변수: {1}", value1, value2);
    }
}

class Program
    {
        static void Main(string[] args)
        {
            GenericExample<string, string> example = new GenericExample<string, string>("홍길동", "임꺽정");
            example.PrintExample();
        }
    }

// 실행 결과
// 첫번째 변수: 홍길동      두번째 변수: 임꺽정
```

제네릭 식별자에 지정할 수 있는 자료형을 제한해야 하는 경우도 있을 것이다.
그런 경우에는 **where** 키워드를 사용하여 제네릭 식별자 위치별로 자료형을 지정해줄 수 있다.
자료형 지정은 하나 뿐만이 아니라 여러 개를 지정할 수 있다.

이를테면, 아래의 GenericExample2 클래스의 제네릭 식별자 T에는 반드시 클래스를 사용해야 한다고 가정해보자.
구조체에 대해서는 아래에서 다룰 것이다.
그런 경우에는 아래와 같이 작성한다.

```C#
class GenericExample2<T>
    where T : class
    {
        public GenericExample(T value)
        {
            this.value = value;
        }

    public void PrintExample()
        {
            Console.WriteLine("제네릭 자료형: {0}", value.GetType());
        }
    }
```

다만 제네릭이 가져다주는 편의성에 반해, 사용 제약도 은근히 많다는 것에 주의할 필요가 있다.
대표적으로 제네릭 식별자를 쓰는 변수는 산술 연산이 안된다. (사용자 정의 연산은 가능하다고 한다.)
또한 위의 예시처럼 제네릭 식별자에 자료형을 제한해 놓는 경우에도, 특정 자료형만 사용 가능하다던가, 특정 자료형은 함께 사용할 수 없다던가 하는 제약이 있다.
이는 제네릭 사용 시 컴파일러에서 오류 메세지로 안내해주니 이곳에서는 생략하도록 하겠다.

---

## 인덱서 (Indexer)

**인덱서**는 클래스나 구조체의 객체(인스턴스)를 배열처럼 인덱싱할 수 있게 해주는 메서드의 일종이라고 보면 될 듯 하다.
배열을 활용하거나 배열과 유사한 구조의 클래스를 만들 경우에 유용하게 활용할 수 있다.

인덱서는 클래스 (또는 구조체) 내부에서 아래와 같이 작성하여 생성할 수 있다.

```C#
class [클래스 이름]
{
    // 자료형은 서로 일치해야 함
    public [자료형] this[[자료형] [변수]]
    {
        // 인덱서 내용
    }
}
```

위의 제네릭과 합쳐서 인덱서를 활용하는 클래스를 만들어본다면 아래와 같다.

```C#
class IndexerSample<T>
{
    // private 생성자로 배열 생성
    private T[] array = new T[100];

    // 인덱서를 사용해 배열 요소에 접근, 겟터와 셋터 사용
    public T this[int i]
    {
        get { return array[i]; }
        set { arr[i] = value; }
    } 
}
```

이를 이용해서 예시를 작성해본다면 아래와 같다.
아래 예시는 제네릭 식별자에 string을 주고 생성된 배열의 첫번째 인덱스에 'Hello, World!'를 저장한 후 출력한다.

```C#
class Program
{
    static void Main(string[] args)
    {
        IndexerSample<string> sample = new IndexerSample<string>();

        sample[0] = "Hello, World!";

        Console.WriteLine(sample[0]);
    }
}
```
---

### 자료구조 간략 소개 - List, ArrayList, Hashtable, Dictionary

위의 제네릭이나 인덱서를 기본적으로 사용하는 C#의 기본 클래스가 있는데, 그것은 바로 List 클래스이다.
List 클래스와 같이 데이터를 구조적으로 정리, 표현해놓은 것을 일반적으로 **자료구조**라고 부른다.
C#은 객체 지향 언어이므로 이러한 자료구조도 전부 클래스로 표현하는 것 뿐이다.

**List 클래스**는 배열과 유사한 자료형을 생성하는데, 그렇다면 굳이 번거롭게 클래스를 쓰지 않고 그냥 배열을 생성하면 되지 않냐고 물을 수 있을 것이다.
하지만 일반적인 배열은 크기가 고정되어 있는 것과는 다르게, List 클래스는 크기가 가변적인 배열을 생성할 수 있으므로 매우 편리하다.
List 클래스를 사용할 때는 ``using System.Collections.Generic;``으로 네임스페이스를 미리 선언해주어야 한다.

List 클래스의 생성 방법은 아래와 같다.

```C#
List<제네릭 식별자> [클래스 이름] = new List<제네릭 식별자>();
```

이렇게 생성한 List 클래스는 다음과 같이 사용할 수 있다.

```C#
using System.Collections.Generic;

class Program
    {
        static void Main(string[] args)
        {
            List<int> list = new List<int>();

            list.Add(10);
            list.Add(20);
            list.Add(30);
            list.Add(40);
            list.Add(50);

            foreach (var item in list)
            {
                Console.WriteLine(item);
            }

            list.Remove(10);
            Console.WriteLine();

            foreach (var item in list)
            {
                Console.WriteLine(item);
            }

            /* 이렇게 표기해도 같음
            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            */
        }
    }

/* 실행 결과
10
20
30
40
50

20
30
40
50
*/
```

List 클래스를 생성하면서 곧바로 요소를 추가할 수도 있다.
위의 List 예시에서 Add를 굳이 5번 반복할 필요 없이, 아래처럼 곧바로 리스트 요소를 초기화 할 수 있다.

```C#
List<int> list = new List<int>() {10, 20, 30, 40, 50};
```

List 클래스는 제네릭으로 자료형을 지정해줘야 하니 한 가지 자료형밖에 담을 수 없는 반면,
모든 자료형을 담을 수 있는 **ArrayList** 클래스도 있다.
ArrayList 클래스는 ``using System.Collections;``로 네임스페이스를 지정해줘야 하며, 아무 타입이나 포함시킬 수 있으니 편리한 반면,
그만큼 List 클래스에 비해서 속도 면에서 손해를 볼 수밖에 없음을 알아두도록 하자.
List나 ArrayList는 배열처럼 다루며 크기를 유동적으로 사용할 수 있다는 점에서 동적 배열(Dynamic Array)이라고 부르기도 한다. 

```C#
// Collections 네임스페이스 필요
using System.Collections;

ArrayList arrayList = new ArrayList();

arrayList.Add(5);
arrayList.Add("Hello World");
arrayList.Add(100.5);

foreach (var item in arrayList)
{
    Console.WriteLine(item);
}

/* 이렇게 표기해도 같음
for (int i = 0; i < arrayList.Count; i++)
    {
        Console.WriteLine(arrayList[i]);
    }
*/

// 실행 결과
// 5
// Hello World
// 100.5
```

List 클래스에서 사용할 수 있는 메서드는 Add나 Remove 말고도 많으니 List 클래스의 정의를 참고하도록 하자.
간단하게 몇가지를 표로 정리하자면 다음과 같다.
아래 표에서 T는 제너릭 식별자와 같은 타입의 매개변수라고 보면 되고,
int32는 간단히 정수라고 봐도 된다. Object는 다른 객체라고 보면 된다.
ICollection의 경우는 Collection 인터페이스를 의미하는 것으로 이를 사용하기 위해서는 Collection 인터페이스의 구현 클래스를 만들어야 한다.
이게 무엇을 의미하는지는 아래 인터페이스 부분에서 좀 더 자세히 다뤄보도록 하겠다.

|메서드|설명|
|---|---|
|Add(T)|리스트 끝에 요소 추가|
|AddRange(ICollection)|리스트 끝에 지정된 컬렉션 요소를 추가|
|Clear()|모든 요소 제거|
|Contains(T)|리스트에 해당 요소가 있는지 확인|
|Equals(Object)|매개변수 개체와 같은지 확인|
|IndexOf(T)|요소를 검색해서, 첫번째로 나온 요소의 인덱스 반환|
|Insert(int32, T)|지정한 인덱스에 요소 삽입|
|Remove(T)|요소를 검색해서, 첫번째로 나온 요소 삭제|
|RemoveAt(int32)|지정한 인덱스에 요소 제거|
|Reverse()|요소 순서를 반대로 바꿈|
|Sort()|요소를 순서대로 정렬함|

짧게 덧붙이자면 C#에는 List, ArrayList 이외에도 유사한 자료구조로 Hashtable, Dictionary이 있다.
이들에 관해서도 간략하게 알아보도록 하겠다.

**Hashtable**, **Dictionary**는 파이썬의 Dictionary와 유사한 구조라고 보면 된다. 
키(Key)와 값(Value)를 함께 저장하는 자료구조이다.
필요한 값을 찾을 때 키를 통해서 해당 값에 곧바로 접근할 수 있으므로, 매우 빠른 탐색 속도를 기대할 수 있다.
이 때, 값은 중복되어도 상관없지만, 키는 항상 고유해야 한다 (중복되어서는 안된다).
Hashtable과 Dictionary의 차이점은 List와 ArrayList의 차이와 마찬가지로, Hashtable은 Key값에 아무 자료형이나 넣을 수 있지만, 
Dictionary는 제네릭으로 자료형을 지정하여 생성하므로 자료형을 통일해야 한다는 점이다.

간단하게 Hashtable, Dictionary의 생성 코드와 사용 방법만 예시로 적는다면 아래와 같다.
저장한 값을 불러올 때는 배열과 같은 방법으로 키를 입력하면 된다.

```C#
// Hashtable은 Collections, Dictionary는 Collections.Generic 네임스페이스 필요
using System.Collections;
using System.Collections.Generic;

// 해시테이블(Hashtable) 생성 방법
Hashtable hashtable = new Hashtable();

// 해시테이블(Hashtable) 예시
hashtable.Add("Coffee", 1500);
hashtable.Add(1500, "Coffee");
hashtable.Add("Waffle", 2000);
hashtable.Add(2000, "Waffle");

Console.WriteLine(hashtable["Coffee"]);
Console.WriteLine(hashtable[1500]);
Console.WriteLine(hashtable["Waffle"]);
Console.WriteLine(hashtable[2000]);

/* 실행 결과
1500
Coffee
2000
Waffle
*/

// 딕셔너리(Dictionary) 생성 방법
Dictionary<T(키), U(값)> dictionary = new Dictionary<T(키), U(값)>();

// 딕셔너리(Dictionary) 예시
Dictionary<string, int> dictionary = new Dictionary<string, int>();

dictionary.Add("Coffee", 1500);
dictionary.Add("Sandwich", 3000);
dictionary.Add("Waffle", 2000);

Console.WriteLine(dictionary["Coffee"]);
Console.WriteLine(dictionary["Sandwich"]);
Console.WriteLine(dictionary["Waffle"]);

/* 실행 결과
1500
3000
2000
*/
```

Hashtable과 Dictionary에도 유용한 메서드들이 많다.
그 중 일부를 정리해본다면 아래 표와 같다.

|메서드|설명|
|---|---|
|Add(T Key, U Value)|매개변수의 키와 값을 추가|
|Clear()|모든 요소(키와 값) 제거|
|ContainsKey(T Key)|매개변수 키가 있는지 확인|
|ContainsValue(T Value)|매개변수 값이 있는지 확인|
|Equals(Object)|매개변수 개체와 같은지 확인|
|Remove(T Key)|매개변수 키가 있는 값을 제거|

C#의 자료구조에는 이 외에도 연결 리스트(Linked List), 큐(Queue), 스택(Stack), 트리(Tree), 그래프(Graph), 힙(Heap) 등이 있다.
하지만 이런 자료구조들은 현재 수준에서는 아직 이해하기 어렵기 때문에 일단은 이정도 수준에서 마무리하려 한다.

---

### Linq (CQRS-디자인패턴 내용을 약간 언급할지 말지?)

---

## out 키워드

클래스 메서드를 다루다보면 반환값, 즉 return값이 없을때도 있기는 하지만, return값이 있는 경우도 많다.
하지만 return의 한계는 한 번에 하나의 값밖에 반환할 수 없다는 것이다.
return으로 한 번에 여러개의 값을 반환하는 것은 불가능하다.
그럴 때 사용할 수 있는 것이 바로 **out** 키워드이다.

우선 간단하게 정리하자면 out 키워드는 매개변수를 활용하여 반환값을 간접적으로 여러개 돌려받을 수 있도록 해준다.
메서드에서 out 키워드를 활용하는 대략적인 형태는 다음과 같다.

```C#
[접근 제한자] [자료형] [메서드 이름] ([매개변수], [out 매개변수]) { [메서드 내용] }
```

out 키워드를 사용하는 예시 중 하나인 TryParse() 메서드를 보도록 하자.
일반적인 Parse() 메서드는 문자형을 숫자 자료형으로 변환해주며, 잘못된 값을 넣으면 예외가 발생하여 프로그램이 종료되지만,
TryParse() 메서드는 잘못된 값을 넣으면 일단 false를 반환하여 프로그램이 종료되는 상황을 막아준다.
TryParse() 메서드의 구조는 다음과 같다.

```C#
public static bool TryParse(string s, out int result);
```

TryParse() 메서드는 매개변수로 문자열과 함께 out 키워드가 붙은 변수를 입력받는다.
예를 들자면 아래와 같이 사용한다.

```C#
Console.WriteLine("숫자를 입력하세요.");
int output;
bool result = int.TryParse(Console.ReadLine(), out output);

if (result) 
{
    Console.WriteLine("Output: {0}", output);
}
else 
{
    Console.WriteLine("숫자를 입력해주세요.");
}
```

이를 통해 out 키워드를 어떻게 사용하는지 알 수 있을 것이다.
out 키워드를 사용하는 메서드는 반환값을 out 키워드가 붙은 매개변수에 저장할 수 있다.
그렇기에 out 키워드 매개변수를 여러개 사용하면 하나 이상의 반환값을 간접적으로 얻을 수 있는 것이다.
out 키워드를 사용해서 직접 예시 메서드를 작성해본다면 아래와 같이 할 수 있을 것이다.

```C#
static void OutKeyWord(int x, int y, int vx, int vy, out int rx, out int ry)
{
    rx = x + vx;
    ry = y + vy;
}

static void Main(string[] args)
{
    int x = 0;
    int y = 0;
    int vx = 5;
    int vy = 5;

    Console.WriteLine("x: {0}, y: {1}", x, y);

    // 변화된 값
    OutKeyWord(x, y, vx, vy, out x, out y);
    Console.WriteLine("x: {0}, y: {1}", x, y);
}
```

위의 예시는 int형 변수 x, y를 out 키워드를 사용하여 각각 vx, vy만큼 더한 모습이다.

---

# 클래스와 연관된 자료형

## 구조체

## 인터페이스

## 예외 처리

## 델리게이터와 람다