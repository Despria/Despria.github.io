---
sidebar_position: 12
---

# Level 1 - 숫자 짝꿍

## 문제

두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 <br/>
가장 큰 정수를 두 수의 짝꿍이라 합니다. (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). <br/>
X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. <br/>
X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. <br/>
다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다. <br/>
(X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)<br/>
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.<br/>

## 제한 사항

1. 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
2. X, Y는 0으로 시작하지 않습니다.
3. X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

## 풀이

```c#
using System;
using System.Text;

public class Solution 
{
    public string solution(string X, string Y)
    {
        string answer = "";
        StringBuilder sb = new StringBuilder();

        for (int i = 9; i >= 0; i--)
        {
            if (!X.Contains(i.ToString()) || !Y.Contains(i.ToString()))
                continue;

            int xLengthBefore = X.Length;
            int yLengthBefore = Y.Length;

            X = X.Replace(i.ToString(), "");
            Y = Y.Replace(i.ToString(), "");

            int xLengthAfter = X.Length;
            int yLengthAfter = Y.Length;

            if (xLengthBefore != xLengthAfter && yLengthBefore != yLengthAfter)
            {
                int xLengthDiff = xLengthBefore - xLengthAfter;
                int yLengthDiff = yLengthBefore - yLengthAfter;

                if (xLengthDiff > yLengthDiff)
                {
                    for (int j = 0; j < yLengthDiff; j++)
                    {
                        sb.Append(i.ToString());
                    }
                }
                else
                {
                    for (int j = 0; j < xLengthDiff; j++)
                    {
                        sb.Append(i.ToString());
                    }
                }
            }
        }

        answer = sb.ToString();
        if (sb.Length == 0)
        {
            answer = "-1";
        }
        else if (sb.Replace("0", "").Length == 0)
        {
            answer = "0";
        }

        return answer;
    }
}
```

해결 일자 - 2023.01.07

원리 자체는 굉장히 간단하지만, 제한 사항에서 알 수 있듯이 최대 길이가 3백만인 문자열이 들어오기 때문에
시간을 잘 절약해야 하는 것이 관건인 문제이다.

문자열의 길이가 짧았다면, 반복문을 통해 Y.Contains(X[i])와 같은 방식을 통해 쉽게 해결이 가능하겠지만,
그랬다가는 매개변수의 문자열 길이가 클 때 시간 초과로 절대로 통과할 수가 없게 된다.

그래서 선택한 방식은, 어차피 문자열의 각 '숫자'들은 모두 0~9사이의 수로 이루어져 있기 때문에
0~9사이의 수를 하나씩 확인해가면서 StringBuilder에 조건에 맞는 수들을 추가해나가는 것이다.
어차피 짝꿍 수는 짝이 맞는 수로 만들어내는 수의 최대값이므로 큰 수부터 추가해나가면 짝꿍 수가 나온다.
특정 수를 제거했을 때 X와 Y의 길이를 비교하여, 그 길이의 차가 작은 쪽 만큼 StringBuilder에 해당 수를 더했다.

다른 사람들의 풀이 방식을 보니 X, Y를 대상으로 각각 10칸(숫자 0~9)의 배열을 생성하여,
X, Y에서 각 숫자의 갯수만큼 배열의 각 요소의 크기를 증가시키고,
마지막에는 각 배열의 요소의 크기를 비교해가면서 작은 수만큼 문자열에 더해주는 방법도 있었다.

```c#
// 숫자 0~9까지 각 숫자의 개수를 담을 배열 선언
// 문자열 X와 Y의 각 요소를 검사하면서 그에 해당하는 인덱스의 수를 증가시킴
int[] xNumber = new int[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
int[] yNumber = new int[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// 예를 들어, X = "12341"일 경우 xNumber는 아래와 같음
int[] xNumber = new int[] { 0, 2, 1, 1, 1, 0, 0, 0, 0, 0 };


// 각 문자열의 검사가 끝났을 경우 xNumber와 yNumber의 동일 인덱스의 요소 중
// 작은 값만큼 문자열에 해당 인덱스의 수를 추가함
for (int i = 0; i < xNumber.Length; i++)
{
    if (xNumber[i] > yNumber[i])
    {
        for (int j = 0; j < yNumber[i]; j++)
        {
            sb.Append(i.ToString());
        }
    }
    else
    {
        for (int j = 0; j < xNumber[i]; j++)
        {
            sb.Append(i.ToString());
        }
    }
}
```