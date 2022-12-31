---
sidebar_position: 2
---

# Level 1 - 문자열 나누기

## 문제

문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다. <br/>
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. <br/>
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.<br/>
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.<br/>
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.<br/>

문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, <br/>
분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

## 제한 사항

1. 1 ≤ s의 길이 ≤ 10,000 <br/>
2. s는 영어 소문자로만 이루어져 있습니다.

## 풀이

```c#
using System;

public class Solution
{
    int answer = 0;

    public int solution(string s)
    {
        int sameChar = 0;
        int diffChar = 0;
        int length = 0;

        for (int i = 0; i < s.Length; i++) 
        {
            if (s[i] == s[0])
            {
                sameChar++;
            }
            else
            {
                diffChar++;
            }
            length++;

            if (sameChar == diffChar)
            {
                answer++;
                string newString = s.Remove(0, length);
                solution(newString);
                break;
            }
            else
            {
                if (i == s.Length - 1)
                    answer++;
            }
        }
        return answer;
    }
}
```

해결 일자 - 2022.12.30

가까운 문자열 찾기 문제가 너무 금방 끝나버린 관계로 오늘은 2개의 문제를 진행했다.<br/>
이번 문제도 그닥 시간이 걸리지는 않았지만, 그래도 가까운 문자열 찾기보다는 오래 걸렸다.<br/>
재귀호출을 사용해버려서 그다지 효율 좋은 풀이방식은 아닌 것 같지만, 그래도 문제를 푸는 덴 성공했다.

answer를 클래스 멤버 변수로 두고, solution 메서드에서 answer에 숫자를 더해나가는 방식으로 진행했다.<br/>
첫번째 글자를 기준으로 처음부터 비교해나가기 때문에, 처음에는 무조건 sameChar에 1이 더해진다.<br/>
그 다음 글자부터 sameChar와 diffChar에 조건에 따라 수를 더해나가고,<br/>
만약 sameChar와 diffChar가 같아지면 그때까지의 문자열을 Remove로 도려내고 새 문자열로 재귀호출을 진행한다.<br/>
만약, "abracadabra" -> "ab - ra - ca - da - br - a"의 마지막 "a"와 같이 더 이상 읽을 글자는 없는데 <br/>
sameChar와 diffChar가 다른 경우, 더 이상 재귀호출을 진행할 필요가 없으므로 answer에 1을 더하고 종료한다.

문제를 다 풀고 나서 생각해보니, 재귀 없이 문자열을 처음부터 읽어나가는 방식으로 충분히 문제 해결이 가능할 듯 싶다.

간단하게 적어보자면, 그냥 처음부터 읽어나가면서 sameChar와 diffChar에 숫자를 더해나가다, <br/>
sameChar와 diffChar가 같아지면 answer에 1을 더하고 sameChar와 diffChar를 0으로 초기화 후, <br/>
비교할 기준 글자를 바꾸고 다시 진행하면 될 것이다.<br/>
이러면 answer를 클래스 멤버 변수로 따로 빼야 할 필요도 없을 것이다. <br/>

처음부터 풀이 방법을 재귀호출로 해보자고 정해놓아버려서 다른 방법은 생각지도 않아버린 게 문제인 것 같다.