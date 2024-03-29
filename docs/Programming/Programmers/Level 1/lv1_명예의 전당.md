---
sidebar_position: 3
---

# Level 1 - 명예의 전당

## 문제

"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, <br/>
시청자들의 문자 투표수로 가수에게 점수를 부여합니다. <br/>
매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 <br/>
해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. <br/>
즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. <br/>
k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, <br/>
출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.<br/>

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. <br/>
예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, <br/>
명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.<br/>

![Lv1_명예의 전당](../Images/lv1HallOfFame.png)

명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, <br/>
매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

## 제한 사항

1. 3 ≤ k ≤ 100
2. 7 ≤ score의 길이 ≤ 1,000
- 0 ≤ score[i] ≤ 2,000

## 풀이

```c#
using System;
using System.Linq;

public class Solution
{
    public int[] solution(int k, int[] score)
    {
        int[] answer = new int[score.Length];

        for (int i = 0; i < score.Length; i++)
        {
            int[] scoreUntilBroadcastDay = new int[i + 1];
            for (int j = 0; j < i + 1; j++)
            {
                scoreUntilBroadcastDay[j] = score[j];
            }

            int[] scoreOrderedDescending = scoreUntilBroadcastDay.OrderByDescending(item => item).ToArray();
            if (scoreOrderedDescending.Length < k)
                answer[i] = scoreOrderedDescending[scoreOrderedDescending.Length - 1];
            else
                answer[i] = scoreOrderedDescending[k - 1];
        }

        return answer;
    }
}
```

해결 일자 - 2022.12.31

오늘 문제도 쉽게 해결할 수 있었다.

방송 출연자 전체의 점수가 담긴 배열 score와, 명예의 전당에 존재할 수 있는 인원수가 매개변수로 주어진다.
방송 일차는 처음부터 (1, 2, 3... score.Length) 까지 커지므로, 방송 일차까지의 점수를 매일마다 비교하고,
명예의 전당 입성자 중 최하위 점수를 answer 배열에 계속 추가하여 반환하면 되는 문제이다.
즉, answer 배열의 크기는 score 배열의 크기와 같다.

answer 배열의 각 요소를 구하기 위해, 우선 score배열의 크기만큼 반복문을 선언했다.
그리고 각 방송 일차까지의 점수를 담는 배열 scoreUntilBroadcastDay를 선언하고, 
매 반복마다 해당 일차까지의 점수를 담도록 했다.

마지막으로 해당 배열을 내림차순으로 정렬하고, 해당되는 요소를 answer에 담는다.
이 때, 만약 scoreOrderedDescending의 크기가 k, 즉 명예의 전당 최대 입성자 수보다 작을 경우에는
입성자 중 가장 낮은 점수가 answer 배열에 들어가도록 하면 된다.
그게 아니라면 scoreOrderedDescending에서 k-1 인덱스에 있는 요소를 넣으면 된다.

다만 이 문제도 일단 해결해보고 나니, 이중 반복문을 쓰지 않아도 해결할 수 있지 않을까 싶다.
메서드 내부에서 List를 하나 만들어서, 반복문 순차마다 score의 요소를 하나씩 집어넣으면서 정렬시킨 후,
List에서 해당되는 인덱스의 점수를 answer에 집어넣는다면 굳이 이중 반복문이 없어도 해결이 가능할 것이라 생각된다.