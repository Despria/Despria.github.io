---
sidebar_position: 29
---

# Level 1 - 예산

## 문제

물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. <br/>
예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, <br/>
1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, <br/>
최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

1. d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
2. d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
3. budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

## 풀이

```c#
using System;
using System.Linq;

public class Solution
{
    public int solution(int[] d, int budget)
    {
        int departmentReceivedBudget = 0;
        int[] departmentBudget = d.OrderBy(x => x).ToArray();

        for (int i = 0; i < departmentBudget.Length; i++)
        {
            if (departmentBudget[i] <= budget)
            {
                budget -= departmentBudget[i];
                departmentReceivedBudget++;
            }
        }

        return departmentReceivedBudget;
    }
}
```

해결 일자 - 2023.01.13

정해진 예산 budget을 최대한 많은 부서에게 배분하고, 배분한 부서의 수를 구해야 하는 문제이다. <br/>
int 배열 d에는 각 부서가 필요로 하는 예산의 액수가 담겨있다.

최대한 많은 부서에게 예산을 지급하기 위해서는 예산 요구액이 적은 부서부터 배분하면 된다.<br/>
따라서 d.OrderBy(x => x).ToArray()를 통해 d를 오름차순으로 정렬해준다.<br/>
이후 예산 총액 budget에서 departmentBudget[i]를 차감해가며 예산을 얻은 부서의 수를 증가시켜주면 된다.