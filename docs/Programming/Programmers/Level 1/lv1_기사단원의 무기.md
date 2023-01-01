---
sidebar_position: 4
---

# Level 1 - 기사단원의 무기

## 문제

숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. <br />
기사들은 무기점에서 무기를 구매하려고 합니다. <br />

각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. <br />
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, <br />
제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다. <br />

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. <br />
만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, <br />15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. <br />
무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. <br />
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.<br />

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 <br />
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, <br />
무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

## 제한 사항

1. 1 ≤ number ≤ 100,000
2. 2 ≤ limit ≤ 100
3. 1 ≤ power ≤ limit

## 풀이

```c#
using System;
using System.Collections.Generic;

public class Solution
{
    public int solution(int number, int limit, int power)
    {
        List<int> divisorNumberList = new List<int>();
        int amountOfIronNeeded = 0;

        for (int i = 1; i <= number; i++)
        {
            int numberOfDivisor = 0;

            for (int j = 1; j <= MathF.Sqrt(i); j++)
            {
                if (MathF.Pow(j, 2) == i)
                    numberOfDivisor++;
                else if (i % j == 0) 
                    numberOfDivisor += 2;
            }

            divisorNumberList.Add(numberOfDivisor);
        }

        for (int i = 0; i < divisorNumberList.Count; i++)
        {
            if (divisorNumberList[i] > limit)
                divisorNumberList[i] = power;

            amountOfIronNeeded += divisorNumberList[i];
        }

        return amountOfIronNeeded;
    }
}
```

해결 일자 - 2023.01.01

해결방법은 정말 단순하지만, 문제에서 약수의 개수를 여러 번 구하는 것을 요구하기 때문에<br />
약수의 개수를 구할 때 너무 단순하게 때려박으면 무려 시간 초과로 테스트 결과가 실패로 판정되는 문제이다.

1번부터 number에 해당하는 번호를 가진 기사가 존재한다고 가정한다.<br />
예를 들어, 문제의 입출력 예시에 있는 것처럼 number가 5라면,<br />
1부터 5까지의 각 숫자마다 약수의 개수를 구하면 된다.<br />
그러면 각 기사의 공격력을 배열로 표현한다면 [1, 2, 2, 3, 2]가 될 것이다.<br />
이 때, limit가 3이고 power가 3이라면, 여기서는 다행히 limit보다 큰 공격력을 가진 기사가 없으므로<br />
그대로 모든 기사의 공격력을 더하면 10이 되고, 10kg만큼의 철이 필요하게 된다.

약수의 개수를 구하는 방법은 가장 단순하게는 숫자 n의 약수를 구한다 치면 1부터 n까지 전부 나머지 검사를 할 수 있겠지만,<br />
이러면 위에 적은대로 시간이 너무 오래 걸려 문제를 통과하지 못한다.

조금 더 효율적으로 약수의 개수를 구하는 방법은 두 가지인데,<br />
첫 번째로는 소인수분해를 이용해 약수의 개수를 구하는 것이다.<br />
두 번째로는 n의 절반까지만 약수를 구하고, 그걸 2배로 하면 n의 약수의 개수가 나온다.<br />
여기서는 두 번째 풀이를 사용했다.<br />
단, n이 어떤 수의 제곱일 경우에는 단순히 2배를 하면 안되므로 이것만 주의하면 된다.

첫 이중 반복문에서 각 기사의 약수의 개수를 구해서 divisorNumberList에 차례대로 담은 다음,<br />
그 다음 반복문에서 각 기사의 약수의 개수가 limit를 초과하는지 검사한 후, <br />
초과한다면 power로 바꾼 후 amountOfIronNeeded에 더해주었다.

이 문제에서는 이중 반복문을 피해갈 방법이 딱히 떠오르지 않았다.<br />
약수를 구하는 것 자체가 결국은 반복문을 피할 수 없다고 생각되는데, <br />
거기에 기사의 번호 1부터 number까지 순서대로 구해야 하니 다른 방법이 떠오르지 않았다.