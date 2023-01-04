---
sidebar_position: 7
---

# Level 1 - 햄버거 만들기

## 문제

햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다. <br />
함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고,<br />
상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다. <br />
상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다. <br />
상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며, <br />
재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.

예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때, <br />
상수는 여섯 번째 재료가 쌓였을 때, 세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고, <br />
아홉 번째 재료가 쌓였을 때, 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다. <br />
즉, 2개의 햄버거를 포장하게 됩니다.

상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때, <br />
상수가 포장하는 햄버거의 개수를 return 하도록 solution 함수를 완성하시오.

## 제한 사항

1. 1 ≤ ingredient의 길이 ≤ 1,000,000
2. ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.

## 풀이
```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int solution(int[] ingredient)
    {
        int numberOfHamburger = 0;
        Stack<int> ingredientStack = new Stack<int>();

        for (int i = 0; i < ingredient.Length; i++)
        {
            ingredientStack.Push(ingredient[i]);

            if (ingredientStack.Count >= 4)
            {
                string hamburger = "";
                hamburger = ingredientStack.ElementAt(0).ToString()
                          + ingredientStack.ElementAt(1).ToString()
                          + ingredientStack.ElementAt(2).ToString()
                          + ingredientStack.ElementAt(3).ToString();

                if (hamburger == "1321")
                {
                    numberOfHamburger += 1;
                    for (int k = 0; k < 4; k++)
                    {
                        ingredientStack.Pop();
                    }
                }
            }
        }
        return numberOfHamburger;
    }
}
```

해결 일자 - 2023.01.03

이번 문제는 해결하는데 시간이 좀 걸렸다. <br />
해결 자체는 그리 늦지 않게 했었지만 작성한 코드가 시간 초과 문제로 인해 테스트 케이스를 통과하지 못했었다. <br />
문제 해결 개념 자체는 그렇게 복잡하지 않다. <br />

재료로 주어지는 배열 내부에서 [1, 2, 3, 1]을 얼마만큼 찾아낼 수 있느냐가 주어진 문제의 뜻이다. <br />
단, [1, 2, 3, 1] 배열을 하나 찾아내고 나면 그 이전에 있던 요소들까지 고려하여 다시 찾아야 한다. <br />
여러 방법을 생각해봤지만, 결국 스택을 쓰는 게 제일 좋을 것 같아서 스택을 쓰기로 했다. <br />
재료를 처음부터 순서대로 스택에 집어넣고, 스택의 길이가 4 이상인 경우 (완성된 버거의 길이가 최소 4이므로) <br />
스택에서 재료를 맨 위에서부터 확인하여 햄버거를 완성하기 위한 순서와 동일한 경우, <br />
완성된 버거의 수를 뜻하는 numberOfHamburger에 1을 더하고, 햄버거를 완성시킨 재료들을 Pop으로 스택에서 빼내준다.

스택의 맨 위에서부터 요소를 확인하기 위해서 ElementAt()을 사용했다. <br />
ElementAt(0)은 스택의 맨 위에 있는 요소를 알려준다. <br />
따라서 ElementAt(0)부터 ElementAt(3)까지 더하면 스택의 맨 위에서부터 4개의 요소를 알 수 있다.


```c#
using System;
using System.Collections.Generic;

public class Solution
{
    int numberOfHamburger = 0;

    public int solution(int[] ingredient)
    {
        List<int> burgerStack = new List<int>();

        for (int i = 0; i < ingredient.Length; i++)
        {
            if (ingredient[i] == 0)
                continue;

            else
            {
                if (burgerStack.Count == 0)
                {
                    if (ingredient[i] == 1)
                        burgerStack.Add(ingredient[i]);
                }
                else
                {
                    if (ingredient[i] == 2 && burgerStack.Contains(1))
                    {
                        burgerStack.Add(ingredient[i]);
                    }

                    else if (ingredient[i] == 3 && burgerStack.Contains(2))
                    {
                        burgerStack.Add(ingredient[i]);
                    }

                    else if (ingredient[i] == 1 && burgerStack.Contains(3))
                    {
                        burgerStack.Add(ingredient[i]);
                        numberOfHamburger++;

                        for (int j = 3; j >= 0; j--)
                        {
                            ingredient[i - j] = 0;
                        }

                        burgerStack.Clear();
                        solution(ingredient);
                    }

                    else if (ingredient[i] == 1 && burgerStack.Contains(1))
                    {
                        burgerStack.Clear();
                        burgerStack.Add(ingredient[i]);
                    }

                    else
                    {
                        burgerStack.Clear();
                    }
                }
            }
        }

        return numberOfHamburger;
    }
}
```

이게 처음으로 문제를 해결했을 때 짠 코드이다. 테스트 케이스 자체는 통과할 수 있기는 하다. <br />
하지만 이걸 쓰면서도 스스로 '이건 시간초과때문에 통과는 못하겠다' 라고 생각하고 있었다. <br />
매 요소마다 검사하면서도 재귀호출까지 사용하니 시간 초과가 일어나지 않을 수가 없기는 했다. <br />
이 방법에서 매 요소마다 검사하는 것을 요소가 4개 이상일 때만 검사하는 것으로 바꾼다면 <br />
위의 방법과 얼추 비슷해질것 같기는 하다. <br />
burgerStack List에 요소 4개를 검사하고, 버거 순서와 일치할 시 RemoveAt같은 메서드로 요소를 지우면 될 것이다. <br />