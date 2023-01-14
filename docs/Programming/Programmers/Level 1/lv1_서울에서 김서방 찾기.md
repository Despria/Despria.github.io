---
sidebar_position: 51
---

# Level 1 - 서울에서 김서방 찾기

## 문제

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, <br/>
"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. <br/>
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

## 제한 사항

1. seoul은 길이 1 이상, 1000 이하인 배열입니다.
2. seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
3. "Kim"은 반드시 seoul 안에 포함되어 있습니다.

## 풀이

```c#
public class Solution
{
    public string solution(string[] seoul)
    {
        int kimPosition = 0;

        for (int i = 0; i < seoul.Length; i++) 
        { 
            if (seoul[i] == "Kim")
            {
                kimPosition = i;
            }
        }

        return string.Format($"김서방은 {kimPosition}에 있다");
    }
}
```

해결 일자 - 2023.01.14