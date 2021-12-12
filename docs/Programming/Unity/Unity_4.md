---
sidebar_position: 4
tags: [C#, Unity]
---

# Unity를 위한 기본 문법 4

이번 편으로 C# 기본 문법편을 마무리짓도록 하겠다.<br />
물론 이제껏 작성한 내용은 기본 문법에 불과하기 때문에 여기서 더욱 깊게 들어가면 배울 내용이 앞으로도 매우 많을 것이지만,<br />
이 글의 주요 목적은 어디까지나 유니티 C# 스크립트 작성을 위한 기본기이므로 우선 가장 필수적인 내용까지만 정리하려 한다.

지난 편에서 다룬 클래스와 연관되는 내용을 정리하게 될 것이다.<br />
클래스와 연관된 기능들, 그리고 클래스와 연관되거나 비슷한 형태를 띄는 자료형들을 정리하고 마무리하도록 하겠다.

---

# 클래스와 연관된 유용한 기능들

## 제네릭 (Generic)

**제네릭**은 자료형을 클래스 객체(인스턴스) 생성시에 직접 지정해주는 방법이라고 생각하면 된다.<br />
클래스 뿐만 아니라, 인터페이스나 메서드 등에도 제네릭을 사용할 수 있다.<br />
(인터페이스에 대해서는 밑에서 다뤄보도록 하겠다.)<br />
여러 자료형을 지정할 수 있을 경우에 객체 생성시에 자료형을 직접 지정할 수 있게 해줌으로써 코드 작성의 효율성을 높여준다.

제네릭은 아래와 같이 작성한다.<br />
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
제네릭 식별자를 하나 지정할 때는 암묵적으로 T를 사용한다는 것을 알아두자.<br />
이러한 암묵적 약속은 협업을 할 때 매우 중요하므로 반드시 따르는 것이 좋다고 이곳저곳에서 강조되는 모습을 쉽게 볼 수 있다.

사용 방법은 제네릭 식별자 위치인 T에 사용하고자 하는 자료형을 작성하는 것이다.<br />
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

제네릭 식별자는 하나 뿐만 아니라 동시에 여러 개를 사용할 수도 있다.<br />
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

제네릭 식별자에 지정할 수 있는 자료형을 제한해야 하는 경우도 있을 것이다.<br />
그런 경우에는 **where** 키워드를 사용하여 제네릭 식별자 위치별로 자료형을 지정해줄 수 있다.<br />
자료형 지정은 하나 뿐만이 아니라 여러 개를 지정할 수 있다.

이를테면, 아래의 GenericExample2 클래스의 제네릭 식별자 T에는 반드시 클래스를 사용해야 한다고 가정해보자.<br />
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

다만 제네릭이 가져다주는 편의성에 반해, 사용 제약도 은근히 많다는 것에 주의할 필요가 있다.<br />
대표적으로 제네릭 식별자를 쓰는 변수는 산술 연산이 안된다. (사용자 정의 연산은 가능하다고 한다.)<br />
또한 위의 예시처럼 제네릭 식별자에 자료형을 제한해 놓는 경우에도, 특정 자료형만 사용 가능하다던가, <br />특정 자료형은 함께 사용할 수 없다던가 하는 제약이 있다.<br />
이는 제네릭 사용 시 컴파일러에서 오류 메세지로 안내해주니 이곳에서는 생략하도록 하겠다.

---

## 인덱서 (Indexer)

**인덱서**는 클래스나 구조체의 객체(인스턴스)를 배열처럼 인덱싱할 수 있게 해주는 메서드의 일종이라고 보면 될 듯 하다.<br />
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

이를 이용해서 예시를 작성해본다면 아래와 같다.<br />
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

위의 제네릭이나 인덱서를 기본적으로 사용하는 C#의 기본 클래스가 있는데, 그것은 바로 List 클래스이다.<br />
List 클래스와 같이 데이터를 구조적으로 정리, 표현해놓은 것을 일반적으로 **자료구조**, 또는 **컬렉션(Collection)**이라 부른다.<br />
C#은 객체 지향 언어이므로 이러한 자료구조도 전부 클래스로 표현하는 것 뿐이다.

**List 클래스**는 배열과 유사한 자료형을 생성한다. <br />그렇다면 굳이 번거롭게 클래스를 쓰지 않고 그냥 배열을 생성하면 되지 않냐고 물을 수 있을 것이다.<br />
하지만 일반적인 배열은 크기가 고정되어 있는 반면, List 클래스는 크기가 가변적인 배열을 생성할 수 있으므로 매우 편리하다.<br />
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

List 클래스를 생성하면서 곧바로 요소를 추가할 수도 있다.<br />
위의 List 예시에서 Add를 굳이 5번 반복할 필요 없이, 아래처럼 곧바로 리스트 요소를 초기화 할 수 있다.

```C#
List<int> list = new List<int>() {10, 20, 30, 40, 50};
```

List 클래스는 제네릭 식별자로 인해 한 가지 자료형만 담을 수 있는 반면,
아무 자료형이나 담을 수 있는 **ArrayList** 클래스도 있다.<br />
ArrayList 클래스는 ``using System.Collections;``로 네임스페이스를 지정해줘야 하며, 아무 타입이나 포함시킬 수 있으니 편리한 반면,<br />
그만큼 List 클래스에 비해서 속도 면에서 손해를 볼 수밖에 없음을 알아두도록 하자.<br />
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

List 클래스에서 사용할 수 있는 메서드는 Add나 Remove 말고도 많으니 List 클래스의 정의를 참고하도록 하자.<br />
간단하게 몇가지를 표로 정리하자면 다음과 같다.<br />
아래 표에서 T는 제너릭 식별자와 같은 타입의 매개변수라고 보면 되고,
int32는 간단히 정수라고 봐도 된다. <br />Object는 다른 객체라고 보면 된다.<br />
ICollection은 Collection 인터페이스를 의미하며, 이를 사용하기 위해서는 Collection 인터페이스의 구현 클래스를 만들어야 한다.<br />
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

짧게 덧붙이자면 C#에는 List, ArrayList 이외에도 유사한 자료구조로 Hashtable, Dictionary이 있다.<br />
이들에 관해서도 간략하게 알아보도록 하겠다.

**Hashtable**, **Dictionary**는 파이썬의 Dictionary와 유사한 구조라고 보면 된다. <br />
키(Key)와 값(Value)를 함께 저장하는 자료구조이다.<br />
배열은 요소를 찾기 위해서 선형탐색이든, 이진탐색이든 결과적으로는 인덱스 여러 개를 찾아가며 검색을 해야 하는 반면, <br />
해시 테이블은 필요한 값을 찾을 때 키를 통해서 해당 값에 곧바로 접근할 수 있으므로, 매우 빠른 탐색 속도를 기대할 수 있다.<br />
이 때, 값은 중복되어도 상관없지만, 키는 항상 고유해야 한다 (중복되어서는 안된다).<br />
Hashtable과 Dictionary의 차이점은 List와 ArrayList의 차이와 마찬가지로, Hashtable은 Key값에 아무 자료형이나 넣을 수 있지만, <br />
Dictionary는 제네릭으로 자료형을 지정하여 생성하므로 자료형을 통일해야 한다는 점이다.

간단하게 Hashtable, Dictionary의 생성 코드와 사용 방법만 예시로 적는다면 아래와 같다.<br />
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

Hashtable과 Dictionary에도 유용한 메서드들이 많다.<br />
그 중 일부를 정리해본다면 아래 표와 같다.

|메서드|설명|
|---|---|
|Add(T Key, U Value)|매개변수의 키와 값을 추가|
|Clear()|모든 요소(키와 값) 제거|
|ContainsKey(T Key)|매개변수 키가 있는지 확인|
|ContainsValue(T Value)|매개변수 값이 있는지 확인|
|Equals(Object)|매개변수 개체와 같은지 확인|
|Remove(T Key)|매개변수 키가 있는 값을 제거|

C#의 자료구조에는 이 외에도 연결 리스트(Linked List), 큐(Queue), 스택(Stack), 트리(Tree), 그래프(Graph), 힙(Heap) 등이 있다.<br />
하지만 이런 자료구조들은 현재 수준에서는 아직 이해하기 어렵기 때문에 일단은 이정도 수준에서 마무리하려 한다.

---

### Linq

Linq는 Language-Integrated Query의 약자로 컬렉션 형태의 데이터를 쉽게 다루고자 만들어진 구문이다.<br />
즉, Linq를 사용하면 위에서 다룬 List, Dictionary 등을 보다 간편하게 다룰 수 있는 것이다.<br />
여기서 Query, 즉 쿼리란 쉽게 말해서 데이터베이스에 정보를 요청하는 것이라고 보면 된다고 한다. <br />일종의 검색 행위라고 볼 수 있을 것 같다.

Linq 구문은 from, in, where, orderby, select의 다섯 가지 키워드로 이루어진다고 간단하게 정리할 수 있겠다.<br />
Linq 구문의 예시를 적어본다면 아래와 같다.<br />
``using System.Linq`` 네임스페이스 선언이 필요하다.

```C#
using System.Linq;

List<int> input = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var output = from item in input 
             where item % 2 == 0 
             orderby item descending
             select item;

foreach (var item in output)
    {
        Console.WriteLine(item);
    }

// 실행 결과
// 2
// 4
// 6
// 8
// 10
```

코드를 들여다보면 이해하기가 그닥 어렵지 않다고 느낄 것이다.<br />
이제부터 Linq의 구문을 하나하나 살펴보도록 하자.

1. from - in - select

Linq 구문은 **from**, **in**, **select**를 반드시 포함해야 한다.<br />
from은 컬렉션에서 요청할 정보를 담을 변수 이름을 지정하는 것이고, <br />
in은 요청의 대상이 될 컬렉션을 의미한다고 보면 된다.<br />
또한 select는 해당 정보를 반환하는 구문이라고 보면 된다.

간단히 표현하자면 다음과 같다.

```C#
from [변수 이름] in [컬렉션]
select [변수 이름]
```

특히 select의 경우, **익명 객체**와 연관지어서 자주 쓰이곤 한다.<br />
익명 객체는 쉽게 말해서 1회용 클래스라고 보면 된다.<br />
단 한번밖에 안 쓰는것이 확실하다면 이를 위해 클래스를 쓰는 것은 오히려 자원의 낭비일 것이다.<br />
그럴 때 익명 객체를 활용하면 코드를 절약할 수 있다.

```C#
new { <속성> = <값>, <속성> = <값> ... }
```

Linq 구문과 연관지어서 작성한다면 다음과 같은 식으로 작성할 수 있다.

```C#
using System.Linq;

List<int> input = new List<int>() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

var output = from item in input 
             where item % 2 == 0  // 아래 2번 where 키워드를 참고하자
             orderby item descending // 아래 3번 orderby 키워드를 참고하자
             select new // 익명 객체 생성
             {
                 A = item + 1,
                 B = item * item,
                 C = 100
             };

foreach (var item in output)
    {
        Console.WriteLine(item.A);
        Console.WriteLine(item.B);
        Console.WriteLine(item.C);
        Console.WriteLine();
    }

/* 실행 결과
11
100
100

9
64
100

7
36
100

5
16
100

3
4
100
*/
```


2. where

where는 일종의 조건식 키워드라고 보면 된다.<br />
from - in 구문으로 어떤 컬렉션에서 요소를 검색할 지 정했다면, 그 다음 where를 통해 그 중 어떤 요소만 검색할 지를 정할 수 있다.

```C#
from [변수 이름] in [컬렉션]
where [조건식]
select [변수 이름]
```

3. orderby

orderby는 말 그대로 어떻게 정렬할 지를 정하는 키워드이다.<br />
orderby [변수 이름] ascending으로 작성하면 오름차순으로, orderby [변수 이름] descending으로 작성하면 내림차순으로 정렬한다.<br />
이 때, orderby를 생략하면 자동으로 오름차순으로 정렬된다.

```C#
from [변수 이름] in [컬렉션]
where [조건식]
orderby [변수 이름] descending
select [변수 이름]
```
---

## out 키워드

클래스 메서드를 다루다보면 반환값, 즉 return값이 없을때도 있기는 하지만, return값이 있는 경우도 많다.<br />
하지만 return의 한계는 한 번에 하나의 값밖에 반환할 수 없다는 것이다.<br />
return으로 한 번에 여러개의 값을 반환하는 것은 불가능하다.<br />
그럴 때 사용할 수 있는 것이 바로 **out** 키워드이다.

우선 간단하게 정리하자면 out 키워드는 매개변수를 활용하여 반환값을 간접적으로 여러개 돌려받을 수 있도록 해준다.<br />
메서드에서 out 키워드를 활용하는 대략적인 형태는 다음과 같다.

```C#
[접근 제한자] [자료형] [메서드 이름] ([매개변수], [out 매개변수]) { [메서드 내용] }
```

out 키워드를 사용하는 예시 중 하나인 TryParse() 메서드를 보도록 하자.<br />
일반적인 Parse() 메서드는 문자형을 숫자 자료형으로 변환해주며, 잘못된 값을 넣으면 예외가 발생하여 프로그램이 종료되지만,<br />
TryParse() 메서드는 잘못된 값을 넣으면 일단 false를 반환하여 프로그램이 종료되는 상황을 막아준다.<br />
TryParse() 메서드의 구조는 다음과 같다.

```C#
public static bool TryParse(string s, out int result);
```

TryParse() 메서드는 매개변수로 문자열과 함께 out 키워드가 붙은 변수를 입력받는다.<br />
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

즉, 이 코드를 본다면, TryParse() 메서드의 return 값은 bool형(True 또는 False)이고,<br />
메서드의 본 목적인 숫자로 변환된 값은 output 변수에 저장되었음을 알 수 있다.<br />
한번에 bool값과 숫자 자료형을 동시에 반환하기 위해 return과 out 키워드를 동시에 사용했다고 볼 수 있겠다.

이를 통해 out 키워드를 어떻게 사용하는지 알 수 있을 것이다.<br />
out 키워드를 사용하는 메서드는 반환값을 out 키워드가 붙은 매개변수에 저장할 수 있다.<br />
그렇기에 out 키워드 매개변수를 여러개 사용하면 하나 이상의 반환값을 간접적으로 얻을 수 있는 것이다.<br />
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

## ref 키워드

---

# 클래스와 연관된 자료형

## 구조체

구조체는 클래스와 비슷한 형태를 지닌 자료형이다.
실제로 클래스와 거의 비슷한 구문을 사용한다. <br />
구조체와 클래스의 가장 큰 차이점은 클래스는 참조 형식인 반면 구조체는 값 형식이라는 것이다.<br />
그렇기에 클래스는 객체 생성이 필요하지만 구조체는 그럴 필요 없이 선언만으로 생성이 가능하다.<br />
여기에 구조체는 클래스처럼 힙에 생성되는 것이 아닌 스택에 생성된다거나, 값 복사가 가능한 등의 값 형식의 특징을 그대로 갖는다.<br />
또한 구조체는 다른 클래스나 구조체 상속이 불가능하다. 단, 인터페이스 구현은 가능하다.

우선 구조체를 생성하는 방법부터 알아보자.
구조체는 struct 키워드를 사용하며, 그 외 생성 방법은 클래스와 매우 흡사하다.<br />
구조체 또한 멤버 변수, 생성자, 메서드를 가질 수 있다.<br />
기존에는 구조체에 매개변수가 없는 생성자를 선언할 수 없었지만, C# 10부터는 가능하다고 한다.

아래는 위의 내용을 토대로 클래스의 기본 형태를 작성한 것이다.

```C#
struct [구조체 이름]
{
    // 구조체 멤버 변수
    [접근 제한자] [자료형] [변수 이름];

    // 구조체 생성자 - C# 10부터는 매개변수 없는 생성자 생성 가능
    [접근 제한자] [구조체 이름] ([매개변수])
    {
        // 생성자 내용
    }

    // 구조체 메서드
    [접근 제한자] [반환 자료형] [메서드 이름] ([매개변수])
    {
        // 메서드 내용
    }
}
```

구조체의 예시를 작성해보면 아래와 같이 작성하여 사용할 수 있을 것이다.

```C#
struct Calculator
{
    // 구조체 멤버 변수
    public int x;
    public int y;

    // 구조체 생성자
    public Calculator(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    // 구조체 메서드
    public int Plus()
    {
        return x + y;
    }

    public int Minus()
    {
        return x - y;
    }
}
```

```C#
static void Main(string[] args)
    {
        // 구조체 선언
        Calculator calculator = new Calculator(20, 10);

        // 구조체 메서드 사용
        Console.WriteLine(calculator.Plus());
        Console.WriteLine(calculator.Minus());
    }
```

## 인터페이스

**인터페이스**는 클래스 생성을 할 때 특정한 형태를 만들 것을 강요하기 위해서 사용되는 형식이라고 보면 된다.<br />
인터페이스는 자체적으로 인스턴스를 생성할 수 없고, 반드시 이를 상속(구현)하는 클래스나 구조체 등이 있어야 한다.<br />
이렇게만 생각해보면 추상 클래스와 다를 것이 뭐냐고 생각할 수 있겠다.<br />
하지만 클래스는 다중 상속이 불가능한 반면, 인터페이스는 **다중 상속이 가능**하다는 차이가 있어, 다형성의 구현에 큰 역할을 한다.

인터페이스는 **interface** 키워드로 생성한다. <br />
클래스와 동급의 카테고리이므로 클래스를 생성하던 위치라면 어느 곳이든지 생성할 수 있다.<br />
일반적으로는 클래스와 마찬가지로 별도의 파일을 만들어 인터페이스를 정의한다.<br />
인터페이스 생성의 규칙은 아래와 같다.

1. 인터페이스 내부에는 **인스턴스 메서드**(클래스에서 생성하던 그 메서드), **속성**, **이벤트**, **인덱서**를 선언할 수 있다.<br />
2. 또한 인터페이스 내부에는 정적(static) 생성자, 정적 필드, 상수, 연산자를 사용할 수 있다.<br />
3. 인터페이스 내부에 인스턴스 생성자, 인스턴스 멤버, 또는 소멸자는 선언할 수 없다.<br />
4. 기본적으로 인터페이스의 멤버들은 public 접근 제한자를 가지나, <br />명시적으로 다른 접근 제한자(private, protected 등)를 설정할 수 있다.

인스턴스 생성자나 인스턴스 멤버를 선언할 수 없는 이유는 인터페이스는 자체적으로 객체(인스턴스) 생성이 불가능하기 때문이다.<br />
자체적으로 객체를 생성할 일이 없으므로 당연히 소멸자도 사용할 일이 없는 것이다.

```C#
interface [인터페이스 이름]
{
    [자료형] [인터페이스 메서드](); // 세부 내용은 일반적으로는 구현하지 않음. 단, 
                                    // C# 8부터는 세부내용 구현이 가능 (default method)
                                    // 디폴트 메서드에 대해서는 아래 내용 참조
    [자료형] [속성] {get; set;}
}
```

인터페이스 생성의 간단한 예시는 아래와 같다.<br />
참고로 C#에서 인터페이스 이름을 붙일 때는 대문자 'I'로 시작하는 것이 관례이므로 이를 지켜주는 것이 좋다.

```C#
interface IBasic
{
    int TestInstanceMethod();
    int TestProperty {get; set;}
}
```

인터페이스를 클래스에서 상속받을 때는 클래스 상속 때와 마찬가지로 ':' 기호를 이용하여 상속받을 인터페이스 이름을 적으면 된다.<br />
이 때, 인터페이스를 상속받는 클래스는 반드시 public 접근 제한자로 설정되어야 하며, 정적(static)이어서는 안된다.<br />
또한, 인터페이스 멤버들의 이름을 그대로 이어받아야 한다.

아래와 같이 할 수 있다.<br />
클래스의 인터페이스 상속을 컴파일러의 자동 완성 기능으로 구현할 경우, <br />VisualStudio같은 경우는 아래와 같이 자동 완성이 이뤄진다.<br />
throw new NotImplementedException(); 예외 대신 상속받은 멤버들의 세부 내용을 작성하면 된다.

```C#
class TestClass : IBasic
{
    public int TestInstanceMethod()
    {
        // 메서드 내용
        throw new NotImplementedException();
    }

    public int TestProperty
    {
        get
        {
            // getter
            throw new NotImplementedException();
        }

        set
        {
            // setter
            throw new NotImplementedException();
        }
    }
}
```

### 인터페이스 다중 상속

앞서 언급했듯이, 인터페이스는 클래스간의 상속과는 다르게 다중 상속이 가능하다.<br />
동시에 인터페이스는 구현 클래스의 객체(인스턴스)를 생성한 후, 그 상속 관계인 인터페이스로 자료형 변환을 하는 것이 가능하다.<br />
클래스 상속 시 자식 클래스의 객체(인스턴스)가 부모 클래스로 자료형 변환이 가능하다는 것을 떠올려본다면 이해가 쉬울 것이다.<br />
앞서 말한 다형성의 구현을 이뤄내는 방법이 바로 이것이기도 하다.<br />
또한, 인터페이스 상속을 받으면서 동시에 클래스 상속을 받는 것도 가능하다.<br />
다만, 당연하게도 클래스는 여전히 한 개 까지만 상속받을 수 있다.

다중 상속을 받는 클래스와 자료형 변환을 하는 예시는 아래와 같다.

```C#
class Program
{
    class Parent {}

    class Child : Parent, IDisposable, Icomparable
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public void CompareTo(object obj)
        {
            throw new NotImplementedException();
        }
    }
}
```

Child 클래스가 Parent 클래스의 상속을 받으면서, 동시에 Disposable 인터페이스와 Comparable 인터페이스의 상속을 받은 모습이다.<br />
이렇게 클래스를 작성한다면, 위에 언급한 대로 상속받은 클래스와 인터페이스들로 자료형 변환이 가능하다.

```C#
Child child = new Child();
Parent childAsParent = new Child();
IDisposable childAsDisposable = new Child();
IComparable childAsComparable = new Child();
```

#### 명시적 인터페이스

만약 인터페이스를 다중 상속받는 상황인데, 상속받는 인터페이스들에 이름이 같은 메서드가 있다고 생각해보자.<br />
원래대로라면 이름이 중복된 메서드는 한번만 구현해도 되지만, 만약 해당 메서드를 각각 별도로 구현하고 싶다면 어떻게 해야할까?<br />
이름이 같은 메서드는 일반적으로 중복해서 선언할 수 없지만, 이런 때를 위해 명시적 인터페이스라고 불리는 방법을 사용할 수 있다.<br />

예시를 들자면 아래와 같다.<br />
아래 인터페이스 IRight와 ILeft는 이름이 같은 메서드 Run()을 가지고 있다.<br />
이 때, 이 두 인터페이스를 다중 상속받는 클래스 SampleClass가 있다고 가정하자.

```C#
class Program
{
    interface IRight
    {
        int Run();
    }

    interface ILeft
    {
        int Run();
    }

    class SampleClass : IRight, ILeft
    {
        int Run()
        {
            Console.WriteLine("SampleClass Run");
        }
    }
}
```

명시적 인터페이스를 사용하지 않는다면, 위와 같이 Run() 메서드를 한번만 작성하게 될 것이고, <br />
이 때 Run() 메서드의 내용은 SampleClass에서 작성한 대로 동작할 것이다.

```C#
Sampleclass sample = new SampleClass();
IRight right = sample;
ILeft left = sample;

sample.Run();
right.Run();
left.Run();

// 실행 결과
// SampleClass Run
// SampleClass Run
// SampleClass Run
```

하지만, 구현 클래스에서 인터페이스 메서드를 각각 명시적으로 작성한다면, 각 인터페이스의 메서드를 따로 호출할 수 있다.<br />
단, 이때, 명시적으로 작성한 메서드는 해당 인터페이스로 자료형 변환을 해야만 사용할 수 있다.

```C#
class Program
{
    interface IRight
    {
        int Run();
    }

    interface ILeft
    {
        int Run();
    }

    class SampleClass : IRight, ILeft
    {
        int IRight.Run()
        {
            Console.WriteLine("IRight Run");
        }

        int ILeft.Run()
        {
            Console.WriteLine("ILeft Run");
        }
    }
}

Sampleclass sample = new SampleClass();
IRight right = sample;
ILeft left = sample;

sample.Run(); // 컴파일러 에러 발생 - 명시적 인터페이스로만 Run()을 작성했으므로 사용 불가능
right.Run(); // IRight.Run() 호출
left.Run(); // ILeft.Run() 호출
```

### 디폴트 메서드 (Default Method)

본래 인터페이스는 메서드에 세부 내용을 작성하는 것이 불가능했지만 C# 8부터는 그것이 가능해졌다.<br />
인터페이스 구현 클래스는 인터페이스의 멤버를 모두 상속해야만 한다는 원칙을 기억할 것이다.<br /> 하지만 그렇기 때문에 인터페이스에 수정이 필요한 경우에도 이를 반영하기 어려웠다.<br />
그 이유는 어떤 인터페이스를 수정한다면, 특히 어떤 메서드를 추가해야 하는 상황이 발생해 버린다면<br />
그를 상속하는 모든 클래스들이 비록 사용할 일이 없더라도 해당 메서드를 구현해야 하는 번거로움이 있었기 때문이다.

그러나 인터페이스의 메서드에 세부 내용을 작성하는 것이 가능해짐으로서, <br />인터페이스에 새 메서드를 작성해야 하는 상황이 생긴다 하더라도
업데이트해야 하는 메서드를 세부 내용을 미리 작성함으로서 <br />불필요하게 모든 구현 클래스를 수정할 필요가 사라지게 되었다.<br />
인터페이스에서 내용이 구현된 메서드는 구현 클래스가 해당 인터페이스를 참조함으로서 해당 메서드를 그대로 사용할 수 있으며, <br />
혹은 구현 클래스에서 기존에 인터페이스 메서드를 구체화시켰듯이 다시 정의하여 사용하는 것도 가능하다.

기본 인터페이스 메서드, 즉 디폴트 메서드의 사용 예시는 아래와 같다.

```C#
interface Sampleinterface
{
    void SampleMethod()
    {
        Console.WriteLine("Default Method");
    }
}

class SampleClass : SampleInterface
{

}

Sampleinterface sampleI = new SampleClass();

sampleI.SampleMethod();

// 실행 결과 : Default Method

Sampleclass sampleC = new SampleClass();

sampleC.SampleMethod(); // 클래스 SampleClass에서 SampleMethod()를 정의하고 있지 않으므로 에러 발생
```

## 예외 처리

프로그램을 실행하는 도중에 문제가 발생하여 프로그램이 강제로 종료되는 것을 예외라고 부른다.<br />
이를테면, 배열에 접근할 때, 해당 배열보다 큰 인덱스에 접근하려 할 때 발생하는 IndexOutOfRangeException과 같은 것들 말이다.<br />
아마 프로그래밍을 배우는 사람들이라면 다들 이러한 문제를 한번쯤은 겪어 봤을 것이다.<br />
개발 중 실수로 발생하는 예외는 코드를 수정하여 해결할 수 있지만, 사용자에 의해 발생하는 예외는 개발자들도 예측하기 어렵다.<br />
그렇다고 예외를 내버려두어 예외가 발생할때마다 프로그램이 강제로 종료되어 버린다면?<br />
매번 프로그램을 재시작해야하니 그것은 좋은 프로그램이라 부르기 힘들 것이다.<br />
이러한 예외들을 대처할 수 있게 만드는 것이 바로 예외 처리이다.

예외 처리를 위해서 예외가 발생하는 상황을 고려하여 해당 상황에 처리할 내용을 작성해두는 것도 가능하겠지만,<br />
보다 깔끔하게 작성하기 위해 try - catch - finally 구문을 사용하는 것도 가능하다.<br />
이 때, try 구문은 반드시 필요하나, catch나 finally 구문은 생략할 수 있다.<br />
아래와 같이 작성하면 된다.

```C#
try
{
    // 기본적으로 실행될 내용
}

catch(Exception exception) //매개변수로 예외 클래스와 그 클래스의 객체(인스턴스), 즉 예외 객체가 필요
{
    // try 구문에서 예외가 발생 시 실행
    // catch 구문 생략 시 try 구문에서 에러 발생 시 그냥 넘어감
    // 여러 개의 catch 구문을 사용하여 다양한 예외 클래스 사용 가능
}

finally
{
    // 예외와 관계없이 실행
    // catch 구문 내에 return 키워드 여부와 관계 없이 무조건 실행
    // finally 구문 내부는 무조건 실행하고 종료되므로 도중에 구문을 벗어나는 return 키워드 등 사용 불가능
}
```

또한, 프로그램 실행 시 예외를 일부러 발생시켜야 하는 상황이 생길 수도 있다.<br />
그럴 때를 대비하여 throw 키워드를 통해 일부러 예외를 발생시키는 것이 가능하다.<br />
아래와 같은 방법으로 사용한다.

```C#
throw new Exception(); // 예외 클래스 객체를 생성하여 예외를 발생시킴
```

필요에 따라서 개발자가 직접 예외 클래스를 작성할 수도 있다.<br />
예외 클래스는 Exception 클래스를 상속받아서 작성하면 되며, 일반적으로 아래의 형식을 따른다.

```C#
class [예외 클래스 이름] : Exception
{
    public [예외 클래스 이름](매개변수) : base(message) // 부모 클래스, 즉 Exception의 생성자 호출
    {

    }
}
```

이와 같은 형식으로 직접 예외를 작성해서 사용하는 예시는 아래와 같다.

```C#
class CustomException : Exception
{
    public CustomException(String message) : base(message)
    {

    }
}

class Program
{
    static void Main(String[] args)
    {
        try
        {
            throw new CustomException("사용자 정의 예외");
        }

        catch (CustomException exception)
        {
            Console.WriteLine(exception.message);
        }
    }
}
```


## 델리게이트 (Delegate)

델리게이트(Delegate)란 어떤 메서드를 매개변수로서 저장할 수 있게 해주는 키워드라고 보면 이해하기 편할 것이다.<br />
델리게이터를 선언하고, 그와 같은 반환 자료형과 매개변수 개수를 지닌 메서드를 델리게이터에 대입하여 사용할 수 있다.<br />
이때까지는 변수에 일반적인 값을 저장했다면, 델리게이터는 어떠한 메서드의 작동 방식, 즉 행위 자체를 저장하는 것이라 볼 수 있다.<br />
그리고 해당 델리게이터가 호출되면 델리게이터는 현재 저장하고 있는 메서드의 기능을 그대로 따라하는 것이다.<br />
델리게이트(Delegate)라는 단어의 뜻인 '대리자'에 걸맞는 기능이라고 할 수 있겠다.

델리게이트는 C#에서 '콜백(Callback) 함수'를 구현하는 방법이기도 하다.<br />
콜백 함수라는 것은 쉽게 말해서 평소에는 작동하지 않고 대기하다가, 사용자의 요청이 있을 때에 비로소 작동하는 함수이다.<br />
또한 다른 함수의 매개변수로서 사용되는 것도 가능하다. 델리게이트 또한 이러한 방식으로 사용할 수 있다.

델리게이트를 생성하는 방법은 아래와 같다.<br />
delegate 키워드를 사용하되, 마치 메서드를 생성하듯이 생성하면 된다.

```C#
[접근 제한자] delegate [자료형] [델리게이터 이름]

// 생성 예시
public delegate int TestDelegate(int a, int b);
```

델리게이트는 인스턴스 메서드나 정적 메서드를 모두 참조할 수 있다.<br />
단, 인스턴스 메서드를 사용하기 위해서는 해당 클래스의 객체(인스턴스)를 생성해야 한다.

위에서 생성한 TestDelegate를 사용하는 예시는 아래와 같다.<br />
아래와 같은 메서드 Plus와 Minus가 있다고 가정하자.<br />
두 메서드는 TestDelegate와 같은 반환형을 가졌으며, 매개변수 또한 int형 두 개로 같다.<br />
이런 경우에는 TestDelegate 델리게이트가 해당 메서드를 참조할 수 있게 된다.

```C#
class Calculator
    {
        int a;
        int b;

        public Calculator() { }

        //인스턴스 메서드
        public int Multiple(int a, int b)
        {
            return a * b;
        }

        public int Divide(int a, int b)
        {
            return a / b;
        }
    }

class Program
{
    public delegate int TestDelegate(int a, int b);

    // 정적 메서드
    static int Plus(int a, int b)
    {
        return a + b;
    }

    static int Minus(int a, int b)
    {
        return a - b;
    }

    static void Main(string[] args)
    {
        Calculator cal = new Calculator();

        TestDelegate d1 = Plus;
        TestDelegate d2 = Minus;
        TestDelegate d3 = cal.Multiple;

        Console.WriteLine(d1(2, 5)); // TestDelegate d1이 참조하는 Plus 메서드에 2, 5 대입
        Console.WriteLine(d2(5, 2)); // TestDelegate d2가 참조하는 Minus 메서드에 5, 2 대입
        Console.WriteLine(d3(5, 2)); // TestDelegate d3가 참조하는 Calculator 인스턴스 cal의 Multiple 메서드에 5, 2 대입

        //실행 결과
        // 7
        // 3
        // 10
    }
}
```

또한, 델리게이트를 사용할 때 유용하게 사용할 수 있는 **'무명 메서드'** 방식이 있다.<br />
말 그대로 이름이 없는 메서드로, 한번만 사용하고 다시 사용하지 않을 임시 메서드라고 보면 된다.<br />
델리게이트와 같이 사용하는 방식은 아래와 같다.<br />
위의 TestDelegate 델리게이트에 무명 메서드를 사용한다고 가정해보자.

```C#
class Program
{

    public delegate int TestDelegate(int a, int b);

    static int Plus(int a, int b)
    {
        return a + b;
    }

    static void Main(string[] args)
    {
        TestDelegate d1 = Plus;

        //무명 메서드
        TestDelegate d2 = delegate(int a, int b)
        {
            return a * b;
        }

        Console.WriteLine(d1(2, 5)); 
        Console.WriteLine(d2(5, 2)); // 무명 메서드에 5, 2 대입

        //실행 결과
        // 7
        // 10
    }
}
```

델리게이트는 하나의 메서드만 참조할 수 있는 것이 아니라, 하나의 델리게이트가 여러 개의 메서드를 동시에 참조할 수도 있다.<br />
이를 델리게이트 체인(Delegate Chain)이라 부른다.<br />
델리게이트 체인을 위해서는 Delegate.Combine() 메서드 또는 += 연산자를 사용할 수 있다.<br />
반대로 델리게이트에서 특정 메서드를 제외하려면 Delegate.Remove() 메서드 또는 -= 연산자를 사용하면 된다.<br />
이렇게 여러 개의 메서드를 동시에 참조하는 델리게이트는 실행 시 가장 마지막으로 실행한 메서드의 값을 보여준다.

아래와 같이 사용할 수 있다.<br />
위의 TestDelegate 델리게이트에 Plus와 Minus 메서드를 모두 참조시켜서 출력 후, 다시 Minus 메서드는 제외하고 출력해보자.

```C#
class Program
{
    public delegate int TestDelegate(int a, int b);

    static int Plus(int a, int b)
    {
        Console.WriteLine($"{a} + {b} = {a + b}");
        return a + b;
    }

    static int Minus(int a, int b)
    {
        Console.WriteLine($"{a} - {b} = {a - b}");
        return a - b;
    }

    static void Main(string[] args)
    {
        TestDelegate d1 = Plus;
        d1 += Minus;
        // new TestDelegate(Plus), new TestDelegate(Minus)와 같이 적어도 됨

        Console.WriteLine(d1(3,5));

        TestDelegate dCom = (TestDelegate)Delegate.Combine(new TestDelegate(Plus), new TestDelegate(Minus));

        Console.WriteLine(dCom(2,5));

        // 실행 결과
        // 3 + 5 = 8
        // 3 - 5 = -2
        // -2       -> d1이 마지막으로 실행한 메서드가 Minus이므로 3 - 5 = -2를 출력함
        // 2 + 5 = 7
        // 2 - 5 = -3
        // -3       -> dCom이 마지막으로 실행한 메서드가 Minus이므로 2 - 5 = -3를 출력함

        d1 -= Minus;
        dCom = (TestDelegate)Delegate.Remove(dCom, new TestDelegate(Minus));

        Console.WriteLine(d1(3, 5));
        Console.WriteLine(dCom(2, 5));

        // 실행 결과
        // 3 + 5 = 8
        // 8        -> d1이 마지막으로 실행한 메서드가 Plus이므로 3 - 5 = -2를 출력함
        // 2 + 5 = 7
        // 7        -> dCom이 마지막으로 실행한 메서드가 Plus이므로 3 - 5 = -2를 출력함
    }
}
```

앞서 언급한 제네릭을 사용하면 델리게이트를 자료형에 따라 매번 다르게 선언할 필요 없이 사용할 수 있다.<br />
다만, 매개변수의 갯수 자체는 메서드와 일치시켜야 한다.<br />
아래 제네릭을 사용한 TestDelegate2는 매개변수가 두개이므로 식별자로 int형을 지정하면 Plus나 Minus 메서드 등을 참조할 수 있다.<br />
당연하게도 제네릭 식별자를 여러 개 사용하는 경우에도 반환형, 매개변수 자료형과 갯수만 일치하면 된다.

```C#
public delegate T TestDelegate2<T>(T a, T b);
public delegate int TestDelegate3<T1, T2>(T1 a, T2 b);

TestDelegate2<int> td1 = Plus;
TestDelegate3<int, int> td2 = Minus;
```

### 람다 (Lambda)

람다(Lambda)는 이름이 없는 함수, 즉 익명 메서드라고 볼 수 있다.<br />
람다식의 형태를 사용하지 않아도 익명 메서드를 만들 수는 있지만, 람다식을 사용하는 것이 훨씬 간결한 표현이 가능하다.<br />
람다는 특히 델리게이터와 연관지어 사용할 때 강력한 성능을 발휘한다.

### 이벤트 (Event)

이벤트(Event)는 특정한 일이 발생했을 때, 외부에 그 발생 사실을 전달하는 장치라고 볼 수 있다.



/// 델리게이터와 람다, 이벤트 작성 필요