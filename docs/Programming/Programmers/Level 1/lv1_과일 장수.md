---
sidebar_position: 5
---

# Level 1 - 과일 장수

## 문제

과일 장수가 사과 상자를 포장하고 있습니다. <br />
사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, k점이 최상품의 사과이고 1점이 최하품의 사과입니다. <br />
사과 한 상자의 가격은 다음과 같이 결정됩니다. <br />

한 상자에 사과를 m개씩 담아 포장합니다. <br />
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다. <br />
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다. <br />
(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다) <br />

예를 들어, k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, <br />
다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.<br />

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8<br />
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, <br />
과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

## 제한 사항

1. 3 ≤ k ≤ 9
2. 3 ≤ m ≤ 10
3. 7 ≤ score의 길이 ≤ 1,000,000
- 1 ≤ score``[i]`` ≤ k
4. 이익이 발생하지 않는 경우에는 0을 return 해주세요.

## 풀이

```c#
using System;
using System.Linq;

public class Solution {
    public int solution(int k, int m, int[] score)
    {
        int maximumProfit = 0;
        int count = 0;
        int[] appleOrderedDescending = score.OrderByDescending(item => item).ToArray();

        int appleBoxNumber = score.Length / m;

        for (int i = 0; i < appleBoxNumber; i++)
        {
            int[] appleBox = new int[m];

            for (int j = 0; j < m; j++)
            {
                appleBox[j] = appleOrderedDescending[count];
                count++;
            }

            int price = appleBox.Min();
            maximumProfit += price * m;
        }

        return maximumProfit;
    }
}
```

해결 일자 - 2023.01.01

이번 문제도 무난하게 해결할 수 있었다. <br />

사과들의 점수가 들어있는 배열 score를 내림차순으로 정렬하고, 한 상자에 담을 사과의 개수 m만큼씩 분리하여
한 상자마다 최저점수를 가진 사과를 기준으로 가격을 결정했다.
해당 가격을 모두 maximumProfit에 더하면 해당 사과들로 얻을 수 있는 최대 이익을 구할 수 있다.

이중 반복문을 이용하지 않아도 appleOrderedDescending의 인덱스 지정을 좀 더 깔끔하게 한다면
하나의 반복문만으로도 해결이 가능하지 않을까 싶다.
한 상자에 들어가는 사과의 수가 m이므로, 반복문에서 appleOrderedDescending의 사과의 최저 점수를 검사하다가 
한 상자에 m개만큼 사과가 담긴다면 저장된 최저 점수만큼 i를 곱해서 maximumProfit에 더하면 되지 않을까 싶다.

```c#
using System;
using System.Linq;

public class Solution
{
    public int solution(int k, int m, int[] score)
    {
        int[] appleOrderedDescending = score.OrderByDescending(item => item).ToArray();
        int lowestPrice = appleOrderedDescending[0];
        int maximumProfit = 0;

        for (int i = 0; i < appleOrderedDescending.Length; i++)
        {
            if (lowestPrice > appleOrderedDescending[i])
            {
                lowestPrice = appleOrderedDescending[i];
            }

            if (i % m == m - 1)
            {
                maximumProfit += lowestPrice * m;
            }
        }

        return maximumProfit;
    }
}
```

한 상자에 m개만큼 사과를 담았는지를 검사하는 식은 i % m == m - 1이다. <br />
해당 조건이 충족될 때까지의 가장 낮은 점수를 m만큼 곱해서 maximumProfit에 더해주는 것을 반복하면 된다. <br />
위의 코드보다 조금 더 개선된 속도로 결과를 얻을 수 있다. <br />

```c#
using System;

public class Solution
{
    public int solution(int k, int m, int[] score)
    {
        Array.Sort(score);
        Array.Reverse(score);
        int lowestPrice = score[0];
        int maximumProfit = 0;

        for (int i = 0; i < score.Length; i++)
        {
            if (lowestPrice > score[i])
            {
                lowestPrice = score[i];
            }

            if (i % m == m - 1)
            {
                maximumProfit += lowestPrice * m;
            }
        }

        return maximumProfit;
    }
}
```

위의 코드는 Linq에서 제공하는 기능인 OrderByDescending을 사용하지 않고 <br />
Array에서 제공하는 Sort와 Reverse를 사용한 것이다. <br />
이전에 작성한 코드에 비해 2배 이상 개선된 속도를 보여준다. <br />
불필요한 상황이 아니라면 Linq를 사용하는 것은 피해야하지 않을까 싶은 생각이 들었다.