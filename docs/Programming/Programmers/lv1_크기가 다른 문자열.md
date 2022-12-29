---
sidebar_position: 0
---

# Level 1 - 크기가 다른 문자열

## 문제

숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, <br />
이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. <br />
이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

## 제한 사항
1. 1 ≤ p의 길이 ≤ 18 <br />
2. p의 길이 ≤ t의 길이 ≤ 10,000 <br />
3. t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다. <br />

## 풀이

```c#
public class Solution
{
    public int solution(string t, string p)
    {
        List<char> tList = new List<char>();
        for (int i = 0; i < t.Length; i++)
        {
            tList.Add(t[i]);
        }
        
        int length = p.Length;
        int answerNumber = 0;
        
        for (int i = 0; i < tList.Count; i++)
        {
            if (i + length > tList.Count)
                break;

            string partialNumber = "";

            for (int j = i; j < i + length; j++)
            {
                partialNumber += tList[j].ToString();
            }
            long tNumber = Convert.ToInt64(partialNumber);
            long pNumber = Convert.ToInt64(p);

            if (tNumber <= pNumber)
            {
                answerNumber++;
            }
        }
        
        return answerNumber;
    }
}
```

프로그래머스 문제를 꾸준히 풀면서 문제 해결능력을 좀 키워보려고 한다.<br />
첫 문제는 간단한 편이었다.<br />
물론 문제를 푼 다른 사람들의 코드는 훨씬 간결하게 푼 것들이 많았지만..

두 개의 문자열이 주어지고, 첫번째 문자열 t를 p의 길이만큼 순차적으로 쪼개면서 p와의 크기를 비교해야한다.<br />
t에서 랜덤한 문자를 뽑아서 숫자를 만드는 것이 아니라 연속된 문자열을 뽑아내는 것이라 해결이 간단했다.<br />
문제에도 나와 있듯, 문자열 t가 "3141592"라면, "314", "141", "415"... 와 같이 순서대로 등장하는 방식이라는 뜻이다.

그렇기 때문에 우선 문자열 t의 모든 요소를 리스트로 만들었다.<br />
사실 문제를 다 풀고 나서 생각해보니 굳이 리스트를 사용하지 않아도 <br />
그냥 문자열 t의 인덱스에 접근해서 풀 수 있지 않았을까 싶다.<br />
굉장히 습관적으로 리스트를 꺼내게 된 것 같다.

그 다음은 어쨌든 리스트로 만든 tList에서 순서대로 p의 길이만큼 문자열을 뽑아낸다.<br />
해당 문자열은 임시 string 변수 partialNumber에 합쳐둔다.<br />
그리고 partialNumber와 p를 모두 정수로 변환하여 비교하고, 문제의 조건에 맞으면 answerNumber에 1을 더한다.<br />
쉽게 해결할 수 있는 문제였다.

다만 생각지도 못한 곳에서 약간 버벅였는데, <br />
코드 테스트용으로 집어넣는 문자열의 크기가 큰 편인지 partialNumber와 p를 정수로 변환할 때 <br />
int형 변수로는 전부 커버가 안되는 문제가 있어서 테스트 케이스에서 정확도가 떨어져 통과를 못했다. <br />
그래서 long형 변수를 사용하니 문제없이 테스트를 통과했다.