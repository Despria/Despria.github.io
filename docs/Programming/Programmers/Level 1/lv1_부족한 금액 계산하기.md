---
sidebar_position: 18
---

# Level 1 - 부족한 금액 계산하기

## 문제

새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. <br/>
이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N번째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. <br/>
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.

놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 <br/>
얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.<br/>
단, 금액이 부족하지 않으면 0을 return 하세요.

## 제한 사항

1. 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
2. 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
3. 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

## 풀이

```c#
using System;

public class Solution
{
    public long solution(long price, long money, long count)
    {
        for (int i = 1; i <= count; i++)
        {
            money -= price * i;
        }

        return money >= 0 ? 0 : -money;
    }
}
```

해결 일자 - 2023.01.10

굉장히 단순하지만 제한 사항에서 볼 수 있듯이 큰 수를 다루게 되므로 자료형의 범위만 주의하면 된다.<br/>
solution의 반환형 뿐 아니라 매개변수들 또한 모두 미리 long형으로 바꿔줘야 오류를 막을 수 있다.<br/>
안그러면 테스트 시 언더플로우 문제가 발생하는 모습을 확인할 수 있을 것이다.