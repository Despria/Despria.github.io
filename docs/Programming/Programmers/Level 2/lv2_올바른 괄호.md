---
sidebar_position: 0
---

# Level 2 - 올바른 괄호

## 문제

괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 

예를 들어 <br/>
* "()()" 또는 "(())()" 는 올바른 괄호입니다.
* "()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, <br/>
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

## 제한 사항

1. 문자열 s의 길이 : 100,000 이하의 자연수
2. 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

## 풀이

```c#
public class Solution
{
    public bool solution(string s)
    {
        if (s[0] == ')' || s[s.Length - 1] == '(')
            return false;

        int brackets = 0;
        for (int i = 0; i < s.Length; i++) 
        {
            if (s[i] == '(')
            {
                brackets++;
            }
            else  
            {
                if (brackets > 0 && s[i] == ')')
                {
                    brackets--;
                }
                else
                {
                    return false;
                }
            }
        }

        return brackets == 0 ? true : false;
    }
}
```

해결 일자 - 2023.01.15

오늘부터는 레벨2의 문제들을 풀어볼 것이다. <br/>
전반적으로 훑어보니, 확실히 레벨2의 문제들은 난이도도 훨씬 높다고 느껴지고 도전한 사람의 수도 훨씬 적었다.<br/>
레벨1만큼 빠른 속도로 풀지는 못하겠지만, 그래도 할 수 있는 것부터 꾸준히 해결해볼 계획이다.

레벨2 중에서는 난이도가 꽤 쉬운 편인 문제로 시작했다.<br/>

우선, 괄호가 ')'로 시작하거나 '('로 끝나는 경우는 애초에 괄호가 성립이 안되므로 제외한다.<br/>
그리고 괄호는 반드시 '('로 시작해서 ')'로 끝나야 하므로 괄호가 완전한지 판별하기 위한 변수 brackets를 생성했다.

정상적으로 '('로 시작한 경우, brackets에 1을 더한다.<br/>
그리고 brackets가 1 이상인 상태이고, 읽어들인 문자가 ')'인 경우에만 brackets에서 1을 차감한다.<br/>
그렇지 않은 상황에서 ')'을 읽어들였다는 것은 괄호가 ')'로 시작하는 비정상적인 경우이므로 바로 false를 반환한다.

이것을 s의 끝까지 반복하여, 만약 brackets가 0이 아니라면 여분의 괄호가 남았다는 것이므로 false를 반환한다.

```c#
public class Solution
{
    public bool solution(string s)
    {
        if (s[0] == ')' || s[s.Length - 1] == '(')
            return false;

        int brackets = 0;
        for (int i = 0; i < s.Length; i++) 
        {
            if (s[i] == '(')
            {
                brackets++;
            }
            else if (brackets > 0 && s[i] == ')')
            {
                brackets--;
            }
            else
            {
                return false;
            }
        }

        return brackets == 0 ? true : false;
    }
}
```

조건문을 살짝 정리하여 위와 같이 수정했다.

```c#
public class Solution
{
    public bool solution(string s)
    {
        while (s.Replace("()", "") != s)
        {
            s = s.Replace("()", "");
        }
        return s.Length == 0 ? true : false;
    }
}
```

처음에는 이 코드로 시도해봤는데, 정확성 테스트는 문제 없으나 효율성 테스트에서 막혔다.