---
sidebar_position: 27
---

# Level 1 - 모의고사

## 문제

수포자는 수학을 포기한 사람의 준말입니다. <br/>
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. <br/>
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...<br/>
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...<br/>
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, <br/>
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 사항

1. 시험은 최대 10,000 문제로 구성되어있습니다.
2. 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
3. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] solution(int[] answers)
    {
        int[] first = new int[] { 1, 2, 3, 4, 5 };
        int[] second = new int[] { 2, 1, 2, 3, 2, 4, 2, 5 };
        int[] third = new int[] { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };

        int firstScore = 0;
        int secondScore = 0;
        int thirdScore = 0;

        for (int i = 0; i < answers.Length; i++)
        {
            int firstAnswer = first[i % first.Length];
            int secondAnswer = second[i % second.Length];
            int thirdAnswer = third[i % third.Length];

            if (answers[i] == firstAnswer)
                firstScore++;

            if (answers[i] == secondAnswer)
                secondScore++;

            if (answers[i] == thirdAnswer)
                thirdScore++;
        }

        int[] scoreArray = new int[] { firstScore, secondScore, thirdScore };
        List<int> highestScore = new List<int>();
        int highScore = scoreArray.Max(score => score);

        if (highScore == firstScore)
            highestScore.Add(1);

        if (highScore == secondScore) 
            highestScore.Add(2);

        if (highScore == thirdScore)
            highestScore.Add(3);

        return highestScore.ToArray();
    }
}
```

해결 일자 - 2023.01.13

쉬운 편에 속하는 문제였다.<br/>
우선 첫번째로 수포자들이 문제를 찍는 방식의 규칙성을 찾아내어 배열로 생성한다.<br/>

1번 수포자는 매우 단순하게 1, 2, 3, 4, 5 ... 의 반복이다.<br/>
2번 수포자는 2, 1, 2, 3, 2, 4, 2, 5 ... 로 홀수번째는 2, 짝수번째는 2가 아닌 수를 순서대로 반복한다.<br/>
3번 수포자는 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ... 로 숫자 쌍을 3-1-2-4-5 순서대로 반복한다.

이들이 찍는 패턴의 길이가 각자 다르기 때문에, answer 배열에서 알맞게 대조를 할 수 있게 해야 한다.<br/>
answer의 길이만큼 반복문을 실행한다고 했을 때, [i % 각 수포자의 패턴 길이]라면 알맞게 대조할 수 있다.<br/>
그렇게 해서 일단 각 수포자들의 점수를 구해둔다.

그 다음은 해당 수포자들의 점수 중 최대값을 구한다.<br/>
점수를 모아 배열로 생성하고, 최고 점수인 수포자의 번호를 담을 List도 생성한다.<br/>
그 후, 최고점수를 Max(score => score)를 통해 구하여, 점수가 같다면 List에 그 번호를 추가한다.<br/>
이 때, 문제의 요구사항에 따라 오름차순으로 더해주었다.

만약 수포자 수가 3명보다 훨씬 많았다면 최고 점수인 수포자를 구하는 부분을 아래와 같이 바꾸면 될 것이다. <br/>

```c#
// scoreArray는 추가적인 요소가 더 있다고 가정
int[] scoreArray = new int[] { firstScore, secondScore, thirdScore ... nScore };
int highScore = scoreArray.Max(score => score)
List<int> highestScore = new List<int>();

for (int i = 0; i < scoreArray.Length; i++;)
{
    if (highScore == scoreArray[i])
        highestScore.Add(i + 1);
}
```

이렇게 반복문을 사용하면 될 것이다.<br/>
이제와서 보니 이렇게 푸는 것이 코드가 훨씬 간결한데 그냥 애초에 이렇게 제출할 걸 그랬다.