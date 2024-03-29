---
sidebar_position: 13
---

# Level 1 - 성격 유형 검사하기

## 문제

나만의 카카오 성격 유형 검사지를 만들려고 합니다. <br/>
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. <br/>
성격은 각 지표에서 두 유형 중 하나로 결정됩니다.<br/>

| 지표 번호 |        성격 유형       |
|:---------:|:----------------------:|
|  1번 지표 | 라이언형(R), 튜브형(T) |
|  2번 지표 | 콘형(C), 프로도형(F)   |
|  3번 지표 | 제이지형(J), 무지형(M) |
|  4번 지표 | 어피치형(A), 네오형(N) |

4개의 지표가 있으므로 성격 유형은 총 16(=2 x 2 x 2 x 2)가지가 나올 수 있습니다. <br/>
예를 들어, "RFMN"이나 "TCMA"와 같은 성격 유형이 있습니다.

검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.<br/>

* 매우 비동의
* 비동의
* 약간 비동의
* 모르겠음
* 약간 동의
* 동의
* 매우 동의

각 질문은 1가지 지표로 성격 유형 점수를 판단합니다.

예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.

|    선택지   |             성격 유형 점수            |
|:-----------:|:-------------------------------------:|
| 매우 비동의 | 네오형 3점                            |
|    비동의   | 네오형 2점                            |
| 약간 비동의 | 네오형 1점                            |
|   모르겠음  | 어떤 성격 유형도 점수를 얻지 않습니다 |
|  약간 동의  | 어피치형 1점                          |
|     동의    | 어피치형 2점                          |
|  매우 동의  | 어피치형 3점                          |

이때 검사자가 질문에서 약간 동의 선택지를 선택할 경우 어피치형(A) 성격 유형 1점을 받게 됩니다. <br/>
만약 검사자가 매우 비동의 선택지를 선택할 경우 네오형(N) 성격 유형 3점을 받게 됩니다.

위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고, <br/>
질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.<br/>
하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.

* 매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
* 동의나 비동의 선택지를 선택하면 2점을 얻습니다.
* 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
* 모르겠음 선택지를 선택하면 점수를 얻지 않습니다.

검사 결과는 모든 질문의 성격 유형 점수를 더하여 <br/>
각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. <br/>
단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 <br/>
검사자의 성격 유형이라고 판단합니다.

질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 <br/>
검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다. <br/>
이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. 1 ≤ survey의 길이 ( = n) ≤ 1,000
> survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.<br/>
> survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.<br/>
> survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.<br/>

2. choices의 길이 = survey의 길이
> choices[i]는 검사자가 선택한 i+1번째 질문의 선택지를 의미합니다.<br/>
> 1 ≤ choices의 원소 ≤ 7<br/>

| choices |      뜻     |
|:-------:|:-----------:|
|    1    | 매우 비동의 |
|    2    | 비동의      |
|    3    | 약간 비동의 |
|    4    | 모르겠음    |
|    5    | 약간 동의   |
|    6    | 동의        |
|    7    | 매우 동의   |

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

public class Solution
{
    public string solution(string[] survey, int[] choices)
    {
        StringBuilder answer = new StringBuilder();
        Dictionary<char, int> personality = new Dictionary<char, int>()
        {
            { 'R', 0 },
            { 'T', 0 },
            { 'C', 0 },
            { 'F', 0 },
            { 'J', 0 },
            { 'M', 0 },
            { 'A', 0 },
            { 'N', 0 }
        };

        for (int i = 0; i < choices.Length; i++)
        {   
            if (choices[i] == 4)
                continue;

            else if (choices[i] <= 3)
            {
                personality[survey[i][0]] += 4 - choices[i];
            }
            else
            {
                personality[survey[i][1]] += choices[i] - 4;
            }
        }

        char[] keys = personality.Keys.ToArray();
        for (int i = 0; i < personality.Count; i+=2)
        {
            if (personality[keys[i]] == personality[keys[i + 1]])
            {
                if (keys[i].CompareTo(keys[i + 1]) < 0)
                {
                    answer.Append(keys[i]);
                }
                else
                {
                    answer.Append(keys[i + 1]);
                }
            }
            else if (personality[keys[i]] > personality[keys[i + 1]])
            {
                answer.Append(keys[i]);
            }
            else
            {
                answer.Append(keys[i + 1]);
            }
        }

        return answer.ToString();
    }
}
```

해결 일자 - 2023.01.08

문제의 설명은 엄청 장황하지만, 실제로는 굉장히 간단하게 풀 수 있는 문제였다.<br/>
주어진 선택지에 따라 성격 유형별로 점수를 메겨, 그 점수를 비교하여 최종 성격 유형을 반환하면 된다.

성격 유형은 어떤 사용자가 테스트를 실행하더라도 변하지 않기 때문에, 고정된 Dictionary로 만들어 주었다.<br/>
Dictionary<char, int>형으로 만들어 각 성격 유형마다 점수를 저장할 수 있도록 했다.<br/>
그 후, survey와 choices의 길이는 동일하므로 chocies의 길이만큼 반복하며 성격 유형에 점수를 더했다.<br/>
선택지에 따라 반영되는 점수에 차이가 존재하므로 이를 고려하여 점수를 더해주면 된다.

그 후, 완성된 점수표에 따라 성격 유형을 완성하면 된다.<br/>
Dictionary는 R-T, C-F, J-M, A-N 순서대로 배치되어 있으므로 키값만 담긴 배열을 만든 후 <br/>
i와 i+1번째 값의 점수를 서로 비교하면 된다.

둘의 값이 같다면 CompareTo를 이용하여 알파벳 순서를 비교하여 더 빠른 쪽의 유형을 더해주고,<br/>
그렇지 않다면 둘의 값을 비교하여 더 큰 쪽의 유형을 더해준다.