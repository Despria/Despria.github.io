---
sidebar_position: 14
---

# Level 1 - 신고 결과 받기

## 문제

신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. <br/>
무지가 개발하려는 시스템은 다음과 같습니다.

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.<br/>
신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.<br/>
한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.<br/>
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.<br/>
유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, <br/>
k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

|  유저 ID | 유저가 신고한 ID |                설명                |
|:--------:|:----------------:|:----------------------------------:|
|  "muzi"  |      "frodo"     | "muzi"가 "frodo"를 신고했습니다.   |
| "apeach" |      "frodo"     | "apeach"가 "frodo"를 신고했습니다. |
|  "frodo" |       "neo"      | "frodo"가 "neo"를 신고했습니다.    |
|  "muzi"  |       "neo"      | "muzi"가 "neo"를 신고했습니다.     |
| "apeach" |      "muzi"      | "apeach"가 "muzi"를 신고했습니다.  |

각 유저별로 신고당한 횟수는 다음과 같습니다.

|  유저 ID | 신고당한 횟수 |
|:--------:|:-------------:|
|  "muzi"  | 1             |
|  "frodo" | 2             |
| "apeach" | 0             |
|   "neo"  | 2             |

위 예시에서는 2번 이상 신고당한 "frodo"와 "neo"의 게시판 이용이 정지됩니다. <br/>
이때, 각 유저별로 신고한 아이디와 정지된 아이디를 정리하면 다음과 같습니다.

|  유저 ID |  유저가 신고한 ID |     정지된 ID    |
|:--------:|:-----------------:|:----------------:|
|  "muzi"  | ["frodo", "neo"]  | ["frodo", "neo"] |
|  "frodo" | ["neo"]           | ["neo"]          |
| "apeach" | ["muzi", "frodo"] | ["frodo"]        |
|   "neo"  | 없음              | 없음             |

따라서 "muzi"는 처리 결과 메일을 2회, "frodo"와 "apeach"는 각각 처리 결과 메일을 1회 받게 됩니다.

이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, <br/>
정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, <br/>
각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. 2 ≤ id_list의 길이 ≤ 1,000
> 1 ≤ id_list의 원소 길이 ≤ 10 <br/>
> id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.<br/>
> id_list에는 같은 아이디가 중복해서 들어있지 않습니다.<br/>

2. 1 ≤ report의 길이 ≤ 200,000
> 3 ≤ report의 원소 길이 ≤ 21<br/>
> report의 원소는 "이용자id 신고한id"형태의 문자열입니다.<br/>
> 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.<br/>
> id는 알파벳 소문자로만 이루어져 있습니다.<br/>
> 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.<br/>
> 자기 자신을 신고하는 경우는 없습니다.<br/>

3. 1 ≤ k ≤ 200, k는 자연수입니다.

4. return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] solution(string[] id_list, string[] report, int k)
    {
        Dictionary<string, int> mailReceivedUser = new Dictionary<string, int>();
        Dictionary<string, List<string>> reportArchive = new Dictionary<string, List<string>>();

        for (int i = 0; i < id_list.Length; i++)
        {
            mailReceivedUser.Add(id_list[i], 0);
            reportArchive.Add(id_list[i], new List<string>());
        }

        for (int i = 0; i < report.Length; i++)
        {
            string[] userReport = report[i].Split(" ");

            if (!reportArchive[userReport[1]].Contains(userReport[0]))
            {
                reportArchive[userReport[1]].Add(userReport[0]);
            }
        }

        foreach (var item in reportArchive.Keys)
        {
            if (reportArchive[item].Count < k)
                continue;
            
            for (int i = 0; i < reportArchive[item].Count; i++)
            {
                mailReceivedUser[reportArchive[item][i]]++;
            }
        }

        return mailReceivedUser.Values.ToArray();
    }
}
```

해결 일자 - 2023.01.09

유저들의 신고 횟수가 k번 누적된 유저들에 대한 처리를 신고한 유저들에게 알려주고, 알려준 횟수를 반환하는 프로그램이다.<br />
문제의 난이도는 쉬운 편이어서 금방 해결할 수 있었다. <br />

신고 결과 메일을 통지받은 유저들을 저장할 Dictionary와, 신고당한 유저 및 그를 신고한 유저를 저장할 Dictionary를 만들었다.<br />
그리고 누적된 신고 접수 report에 따라, reportArchive에 이를 순서대로 누적시킨다.<br />
단, 한 유저에 대한 동일 유저의 신고는 중복 처리되지 않으므로 이를 검사하면서 누적시킨다.<br />

그 후, 한 유저를 신고한 유저가 k명 이상인 경우, 그를 신고한 유저들에게 메일을 발송한다.<br />
신고한 유저는 reportArchive의 키값에 존재하므로 이를 통해 mailReceivedUser의 키값을 증가시키면 된다.<br />
그리고 mailReceivedUser의 Value값들만 배열로 변환하여 반환하면 끝이다.

해결 자체는 쉬웠지만, 다른 사람의 풀이를 보니 Linq를 사용하여 정말 깔끔하게 풀이한 것이 있었다.<br />
그래서 나중에 Linq 사용 시 참고를 위해 올려둬본다.<br />
(실행 시간 자체는 위의 코드가 최대 10배까지도 더 빠르게 나오기는 한다)

```c#
using System;
using System.Linq;
using System.Collections.Generic;

public class Solution 
{
    public int[] solution(string[] id_list, string[] report, int k) 
    {
        var tReport = report.Distinct().
           Select(s => s.Split(' ')).
           GroupBy(g => g[1]).
           Where(w => w.Count() >= k).
           SelectMany(sm => sm.Select(s => s[0])).
           ToList();

        return id_list.ToDictionary(x => x, x => tReport.Count(c => x == c)).Values.ToArray();
    }
}
```

Linq의 기능이 정말 다양하구나 싶었다.<br />
이 코드를 예시를 통해서 분석해보면 이해가 쉬울 것이다.<br />
solution 함수의 매개변수가 아래와 같다고 가정하자.

```c#
string[] idList = new string[] { "muzi", "frodo", "apeach", "neo" };
string[] report = new string[] { "muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi" };
int k = 2;
```

1. Distinct()<br />

우선 ```Distinct()```는 고유한 값만 반환한다. <br />
이 문제에서는 동일 유저에 대한 중복된 신고를 받아들이지 않으니 좋은 선택이다.

```c#
var sReport = report.Distinct();

foreach (var item in sReport)
{
    Console.WriteLine($"{item}");
}
```

> 실행 결과<br />
> muzi frodo<br />
> apeach frodo<br />
> frodo neo<br />
> muzi neo<br />
> apeach muzi<br />

위의 예시에서는 중복이 없기 때문에 위와 같은 결과를 반환하지만,<br />
만약 report가 ```["ryan con", "ryan con", "ryan con", "ryan con"]```이라면, 아래와 같은 값을 반환한다.

> ryan con

즉, 중복된 값이 있으면 전부 무시하고 1번만 반환한다.


2. Select()<br />

그 다음, ```Select()```는 연속된 자료구조(Seqeunce)의 요소마다 실행하여 새 형태로 반환하는 것이다.<br />
report에서 Distinct를 통해 중복된 요소를 모두 배제했으니, <br />
```Select(s => s.Split(' '))```을 통해 신고당한 유저와 신고한 유저를 나누는 것이다.

```c#
var sReport = report.Distinct().
                Select(s => s.Split(' '));

foreach (var item in sReport)
{
    Console.WriteLine($"{item[0]}: {item[1]}");
}
```

> 실행 결과<br />
> muzi: frodo<br />
> apeach: frodo<br />
> frodo: neo<br />
> muzi: neo<br />
> apeach: muzi<br />

이러한 결과를 반환한다.


3. GroupBy()<br />

그 후 실행되는 ```GroupBy()```는 컬렉션(List, Dictionary, Array)의 요소들을 그룹별로 뭉쳐주는 역할을 한다.<br />
일종의 '정렬' 기능이라고 생각하면 된다.

```c#
var sReport = report.Distinct().
           Select(s => s.Split(' ')).
           GroupBy(g => g[1]);

foreach (var item in sReport)
{
    Console.WriteLine($"Key: {item.Key}");
    foreach (var item2 in item)
    {
        foreach (var item3 in item2)
        {
            Console.WriteLine(item3);
        }
    }
}
```

> 실행 결과<br />
> Key: frodo<br />
> muzi<br />
> frodo<br />
> apeach<br />
> frodo<br />
> Key: neo<br />
> frodo<br />
> neo<br />
> muzi<br />
> neo<br />
> Key: muzi<br />
> apeach<br />
> muzi<br />

위의 매개변수 report를 통해 생각해 본다면, 우선 item.Key은 즉 GroupBy(g => g[1])의 그룹화 기준이라고 볼 수 있다.<br />
그리고 출력 muzi frodo, apeach frodo는 report의 각 요소들이다.

foreach문을 아래와 같이 바꿔 본다면 더 깔끔하게 무슨 뜻인지 이해할 수 있다.

```c#
foreach (var item in sReport)
{
    Console.WriteLine($"Key: {item.Key}");
    foreach (var item2 in item)
    {
        Console.WriteLine(item2[0]);
    }
}
```

> 실행 결과<br />
> Key: frodo<br />
> muzi<br />
> apeach<br />
> Key: neo<br />
> frodo<br />
> muzi<br />
> Key: muzi<br />
> apeach<br />

즉, GroupBy(g => g[1])을 통해, Select에서 Split으로 나눠진 각 요소들이 수정되는 것은 아니지만,<br />
g[1]을 기준으로 g[1]이 같은 값을 갖는 요소들 순서대로 정렬된다고 생각하면 되겠다.<br />
여기에서는 g[1]이 string형이므로, <string, string[]>의 형태로 정렬된다.<br />


4. Where()<br />

```Where(w => w.Count() >= k)```를 통해 신고한 유저가 k명 이상인 유저만 골라낸다. <br />
(Where는 Linq에서 일종의 조건문이다.)

```c#
var sReport = report.Distinct().
           Select(s => s.Split(' ')).
           GroupBy(g => g[1]).
           Where(w => w.Count() >= k);

foreach (var item in sReport)
{
    Console.WriteLine($"Key: {item.Key}");
    foreach (var item2 in item)
    {
        Console.WriteLine($"{item2[0]} {item2[1]}");
    }
}
```

> 실행 결과<br />
> Key: frodo<br />
> muzi frodo<br />
> apeach frodo<br />
> Key: neo<br />
> frodo neo<br />
> muzi neo<br />

위에서 키값 g[1]을 기준으로 각 요소들을 뭉쳐놓았는데, 거기서 Count가 k 이상인 것들만 추려내는 것이다.<br />
즉, 키값이 muzi이지만 Count는 1인 apeach muzi는 여기서 제외된다.


5. SelectMany()<br />

그리고 ```SelectMany()```를 통해 해당 유저들을 모두 얻어내서, ToList()를 통해 List형태로 반환한다.

```c#
var sReport = report.Distinct().
           Select(s => s.Split(' ')).
           GroupBy(g => g[1]).
           Where(w => w.Count() >= k).
           SelectMany(sm => sm.Select(s => s[0]));

foreach (var item in sReport)
{
    Console.WriteLine(item);
}
```

> 실행 결과<br />
> muzi<br />
> apeach<br />
> frodo<br />
> muzi<br />

여기서는 신고 메일을 받는 유저들을 추려냈다.<br />
위에서 정렬되고 Count가 k이상인 것들만 추려낸 string 배열들에서, <br />
이전에 Select문에서 s => s.Split으로 분리했던 그 요소 중 s[0]와 같은 것들만 다시 추려내는 것이다.<br />
report[]의 각 요소들은 "신고한 유저 - 신고당한 유저"로 들어오기 때문에 이는 신고한 유저만 추려내는 것과 같다.


6. ToDictionary()<br />

마지막으로 return문에서는 id_list.ToDictionary(x => x, x => tReport.Count(c => x == c))를 통해<br />
유저마다 신고 처리 메일을 받은 횟수를 Dictionary<string, int>형태로 저장한다.<br />
tReport.Count(c => x == c)는 x값과 같은 값을 갖는 요소의 수를 반환하는 것이다.<br />
그렇게 완성된 Dictionary 중 Value값만 배열로 반환한다.<br />

제대로 이해한 것이 맞는지는 모르겠는데, 정말 간결하게 풀이된 것 같다.