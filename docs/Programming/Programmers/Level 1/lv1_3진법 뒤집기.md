---
sidebar_position: 24
---

# Level 1 - 3진법 뒤집기

## 문제

자연수 n이 매개변수로 주어집니다. <br/>
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.<br/>

## 제한 사항

1. n은 1 이상 100,000,000 이하인 자연수입니다.

## 풀이

```c#
using System;

public class Solution
{
    public int solution(int n)
    {
        int answer = 0;

        string threeBase = "";

        while (n >= 3)
        {
            int left = n % 3;
            threeBase += left.ToString();
            n /= 3;
        }
        threeBase += n.ToString();

        for (int i = 0; i < threeBase.Length; i++)
        {
            int number = Convert.ToInt32(threeBase[i]) - 48;

            int threeBaseNumber = 1;
            int powIndex = threeBase.Length - 1 - i;
            int powNum = 3;
            int index = 0;

            while (index < powIndex)
            {
                threeBaseNumber *= powNum;
                index++;
            }

            answer += threeBaseNumber * number;
        }
        
        return answer;
    }
}
```

해결 일자 - 2023.01.11

주어진 10진수를 3진수로 변환 후, 해당 수를 거꾸로 돌린 다음 다시 10진수로 변환하는 문제이다.<br/>
다만, 주어진 수를 첫 while문처럼 문자열로 변환하면 애초에 거꾸로 돌려진 문자열 3진수가 나오므로<br/>
해당 수를 다시 10진수로 잘 변환하기만 하면 된다.

문자열 threeBase에서 요소를 하나씩 읽어나가는데, 이 때 char형 변수는 int형으로 변환하려하면<br/>
해당 변수의 ASCII값이 반환되기 때문에 이를 고려하여 0의 ASCII값인 48을 빼주면 의도하던 수를 얻을 수 있다.<br/>
이 후 해당 수의 위치를 고려하여 3의 제곱수를 곱하여 10진수로 변환하면 된다.

단순한 문제이지만, 생각지 못한 장애물이 하나 있었다.<br/>
3진법으로 변환된 문자열을 다시 10진법인 수로 표현하기 위해 계산을 하기 위해서<br/>
처음에는 MathF.Pow()를 사용했는데, 부동소수점의 문제인지 숫자가 커지면 정확도가 1씩 어긋나는 문제가 발생했다.

따라서 MathF.Pow()를 사용하지 않고 직접 제곱을 하는 식을 작성하여 구했더니 제대로 된 숫자가 나왔다.