---
sidebar_position: 6
---

# Level 1 - 푸드 파이트 대회

## 문제

수웅이는 매달 주어진 음식을 빨리 먹는 푸드 파이트 대회를 개최합니다. <br />
이 대회에서 선수들은 1대 1로 대결하며, 매 대결마다 음식의 종류와 양이 바뀝니다. <br />
대결은 준비된 음식들을 일렬로 배치한 뒤, 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽으로, <br />
다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식으로 진행됩니다. <br />
중앙에는 물을 배치하고, 물을 먼저 먹는 선수가 승리하게 됩니다.

이때, 대회의 공정성을 위해 두 선수가 먹는 음식의 종류와 양이 같아야 하며, 음식을 먹는 순서도 같아야 합니다. <br />
또한, 이번 대회부터는 칼로리가 낮은 음식을 먼저 먹을 수 있게 배치하여 선수들이 음식을 더 잘 먹을 수 있게 하려고 합니다.<br />
이번 대회를 위해 수웅이는 음식을 주문했는데, 대회의 조건을 고려하지 않고 음식을 주문하여 <br />
몇 개의 음식은 대회에 사용하지 못하게 되었습니다.

예를 들어, 3가지의 음식이 준비되어 있으며, 칼로리가 적은 순서대로 1번 음식을 3개, <br />
2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면, <br />
두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다. <br />
따라서 1번 음식 1개는 대회에 사용하지 못합니다.

수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, <br />
대회를 위한 음식의 배치를 나타내는 문자열을 return 하는 solution 함수를 완성해주세요.

## 제한 사항

1. 2 ≤ food의 길이 ≤ 9
2. 1 ≤ food의 각 원소 ≤ 1,000
3. food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
4. food[i]는 i번 음식의 수입니다.
5. food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다.
6. 정답의 길이가 3 이상인 경우만 입력으로 주어집니다.

## 풀이

```c#
using System;
using System.Linq;

public class Solution 
{
    public string solution(int[] food)
    {
        string foodAllocated = "";
        string foodAllocatedHalf = "";

        for (int i = 1; i < food.Length; i++)
        {
            if (food[i] % 2 != 0)
            {
                food[i]--;
            }

            for (int j = 0; j < food[i] / 2; j++)
            {
                foodAllocatedHalf += i.ToString();
            }
        }
        char[] foodAllocatedOtherHalf = foodAllocatedHalf.Reverse().ToArray();

        foodAllocated = foodAllocatedHalf;
        foodAllocated += "0";
        foreach (char c in foodAllocatedOtherHalf)
        {
            foodAllocated += c;
        }

        return foodAllocated;
    }
}
```

해결 일자 - 2023.01.02

이번 문제도 간단한 편이었지만, 처음에는 다른 방법을 생각하다가 좀 꼬여버려서 시간이 약간 걸렸다.<br />
food 배열에는 각 칼로리별 음식의 수량이 주어지는데, 0번 인덱스는 항상 물을 지정하며 1만 담긴다.<br />
배열의 인덱스 i는 음식의 칼로리, food``[i]``는 해당 음식의 개수를 의미한다.<br />
나머지 요소에서 음식을 나누어 분배하면 된다.

이 때, 음식의 개수가 홀수라면 양쪽에 공평하게 나누어 주지 못하게 되므로, 홀수인 경우는 1을 뺀다.<br />
그 다음, food``[i]``의 수만큼 foodAllocatedHalf에 i.ToString()을 더해주었다.<br />
이러면 왼쪽부터 시작하는 참가자가 먹는 음식이 순서대로 배치되게 된다.

그 다음, foodAllocatedHalf를 거꾸로 뒤집은 char형 배열인 foodAllocatedOtherHalf을 만들어 준다.<br />
그리고 foodAllocated에 foodAllocatedHalf, 0, foodAllocatedOtherHalf를 순서대로 더해주면 끝이다.