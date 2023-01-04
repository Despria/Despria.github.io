---
sidebar_position: 8
---

# Level 1 - 옹알이(2)

## 문제

머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. <br />
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 <br />
연속해서 같은 발음을 하는 것을 어려워합니다. 

문자열 배열 babbling이 매개변수로 주어질 때, <br />
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

## 제한 사항

1. 1 ≤ babbling의 길이 ≤ 100
2. 1 ≤ babbling[i]의 길이 ≤ 30
3. 문자열은 알파벳 소문자로만 이루어져 있습니다.

## 풀이

이 문제를 해결하면서 처음으로 짠 코드는 이랬다.

```c#
using System;

public class Solution
{
    public int solution(string[] babbling)
    {
        int wordsNumber = 0;
        string[] pronounces = new string[] { "aya", "ye", "woo", "ma" };

        for (int i = 0; i < babbling.Length; i++)
        {
            for (int j = 0; j < pronounces.Length; j++)
            {
                if (!babbling[i].Contains(pronounces[j]))
                    continue;

                // 연속된 문자열 체크
                int index = babbling[i].IndexOf(pronounces[j]);
                string checkContinuous = babbling[i].Remove(index, pronounces[j].Length);
                int secondIndex = checkContinuous.Contains(pronounces[j]) ? 
                                  checkContinuous.IndexOf(pronounces[j]) : -1;
                if (secondIndex == index)
                    break;

                // 존재하는 발음 체크
                string checkPronounce = babbling[i].Replace(pronounces[j], "");
                babbling[i] = checkPronounce;
                if (babbling[i] == string.Empty)
                {
                    wordsNumber++;
                    break;
                }
            }
        }
        return wordsNumber;
    }
}
```

조금 복잡해보이긴 하지만 테스트 케이스는 확실하게 통과했다.<br />
하지만 그럼에도 코드 제출 시 절반의 성공률밖에 보이지 않았다.

여러 번 테스트를 반복한 결과로는 연속된 문자열을 체크하는 부분은 전혀 문제가 없었다.<br />
주어진 문자열 babbbling에서 발음에 해당하는 부분의 인덱스를 String.IndexOf()로 찾아낸다.<br />
String.IndexOf()는 문자열 내에서 매개변수 char형이나 string형에 해당하는 부분이 있는지를 검사하고<br />
있다면 처음으로 발견한 부분의 첫 인덱스를 반환한다.<br />
예를 들자면, 문자열 "ayaye"를 대상으로 String.IndexOf("aya")를 실행한다면 반환값은 0이 된다.<br />
그러므로 발음이 존재하는 부분의 인덱스를 찾아내고, 이를 int형 변수 index에 저장한다. <br />
그 다음 찾아낸 발음을 제거한 임시 문자열 checkContinuous을 만들고 다시 해당 발음을 찾아본다.<br />
해당 발음이 존재한다면 그 인덱스를 다시 secondIndex에 저장한다. 존재하지 않는다면 secondIndex는 -1이 된다.<br />
index와 secondIndex의 값이 같다면 연속된 발음이 존재하는 것이므로 break를 통해 반복문을 빠져나간다.

문제점은 바로 '존재하는 발음 체크' 부분에 있었다.<br />
String.Replace()를 통해 공백 문자열로 발음을 교체하는데, 이러면 특정 단어 조합에서 문제가 발생한다.<br />
예를 들어서, 주어진 문자열 babbling이 "wyeoo"라고 가정해보자.<br />
이런 문자열이라면 ye만 발음 가능하고 "w"나 "oo"는 발음 불가능하므로 정답에 포함되는 단어가 아니다.<br />
그런데, 위의 로직대로라면 String.Replace()로 "ye"를 빈 문자열로 교체하고 나서<br />
발음 가능한 단어인 "woo"가 완성되어 정답으로 인식해버리는 문제가 발생한다.

이러한 문제점을 해결하고 코드를 더 깔끔하게 정리하여 아래의 코드를 다시 작성했더니 문제없이 통과했다.<br />
처음에 버겁게 생각했던 부분은 연속된 문자열이었는데 <br />
오히려 이것보다는 당연하다고 생각했던 문자열 검사 부분에서 막혔다.<br />
아직 문제해결능력이 많이 부족한가보다.

```c#
public class Solution
{
    public int solution(string[] babbling)
    {
        int wordsNumber = 0;
        string[] pronounces = new string[] { "aya", "ye", "woo", "ma" };

        for (int i = 0; i < babbling.Length; i++)
        {
            for (int j = 0; j < pronounces.Length; j++)
            {
                if (!babbling[i].Contains(pronounces[j]))
                    continue;

                // 연속된 문자열 체크
                if (babbling[i].Contains(pronounces[j] + pronounces[j]))
                    break;

                // 존재하는 발음 체크
                babbling[i] = babbling[i].Replace(pronounces[j], " ");
            }

            if (babbling[i].Trim() == string.Empty)
                wordsNumber++;
        }

        return wordsNumber;
    }
}
```

우선 연속된 발음을 체크하는 방법이 훨씬 더 간결해졌다.<br />
정말 단순하게 생각하면 되는 것이었다.<br />
말 그대로 '연속된' 발음이므로, pronounce 두 개를 말 그대로 이어붙인 것이 존재하는지를 검사하면 되는 것이다.<br />
처음에는 인덱스를 통해서 찾을 생각밖에 안했는데, 오히려 너무 복잡하게만 생각했다.

그리고 문제점을 해결하는 방법은 String.Replace()로 빈 문자열로 전환하지 않고, 공백이 있는 " "로 전환하는 것이다.<br />
그 후 모든 발음을 체크한 다음, String.Trim()으로 문자열의 모든 공백을 제거하면 된다.<br />
이러면 "wyeoo"와 같은 문자열이 들어온다 해도, 처음에는 "w oo"로 변환되었다가, <br />
모든 발음을 체크한 다음에야 String.Trim()을 통해 "woo"로 합쳐지므로 더욱 정확한 검사가 가능하다.