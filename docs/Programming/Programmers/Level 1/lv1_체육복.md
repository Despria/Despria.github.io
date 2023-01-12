---
sidebar_position: 26
---

# Level 1 - 체육복

## 문제

점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. <br/>
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 

학생들의 번호는 체격 순으로 매겨져 있어, <br/>
바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. <br/>
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. <br/>
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, <br/>
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, <br/>
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

## 제한 사항

1. 전체 학생의 수는 2명 이상 30명 이하입니다.
2. 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
3. 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
4. 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
5. 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. <br/>이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

## 풀이

```c#
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int solution(int n, int[] lost, int[] reserve)
    {
        int studentBorrowedUniform = 0;

        Dictionary<int, List<int>> uniformToBorrow = new Dictionary<int, List<int>>();
        List<int> losts = lost.ToList();
        List<int> reserves = reserve.ToList();
        List<int> tempRemove = new List<int>();

        losts.Sort();
        reserves.Sort();

        for (int i = 0; i < reserves.Count; i++)
        {
            if (losts.Contains(reserves[i]))
            {
                tempRemove.Add(reserves[i]);
            }
        }

        for (int i = 0; i < tempRemove.Count; i++)
        {
            losts.Remove(tempRemove[i]);
            reserves.Remove(tempRemove[i]);
        }

        for (int i = 0; i < losts.Count; i++)
        {
            uniformToBorrow.Add(losts[i], new List<int>() { losts[i] - 1, losts[i] + 1 });
        }

        for (int i = 0; i < losts.Count; i++)
        {
            for (int j = 0; j < uniformToBorrow[losts[i]].Count; j++)
            {
                if (reserves.Contains(uniformToBorrow[losts[i]][j]))
                {
                    reserves.Remove(uniformToBorrow[losts[i]][j]);
                    studentBorrowedUniform++;
                    break;
                }
            }
        }

        return n - losts.Count + studentBorrowedUniform;
    }
}
```

해결 일자 - 2023.01.12

반례를 찾느라 생각한것보다는 시간이 좀 걸린 문제였다.<br/>
여러 조건을 고려하느라 코드가 좀 난잡해진것 같다.<br/>
이 문제같은 경우는 혼자서 반례를 떠올리는게 좀처럼 안되서 질문란에 다른 사람들이 찾은 반례들을 참고해서 코드를 보강했다.

```c#
for (int i = 0; i < reserves.Count; i++)
{
    if (losts.Contains(reserves[i]))
    {
        tempRemove.Add(reserves[i]);
    }
}

for (int i = 0; i < tempRemove.Count; i++)
{
    losts.Remove(tempRemove[i]);
    reserves.Remove(tempRemove[i]);
}
```

우선 이 부분은, 제한 사항 중 '여분 체육복이 있는 학생이 체육복을 도난당했을 수 있다'는 부분을 해결하기 위한 것이다.<br/>
lost와 reserve에 동시에 번호가 존재한다면, 양쪽에서 모두 해당 번호를 제거해준다.<br/>
첫 반복문에서 모두 해결하려 하다간 List의 Count가 변해버려서 제대로 요소들에 접근하지 못하게 되니<br/>
제거할 요소를 모두 기억해 둘 임시 List를 하나 만들어 그를 이용해 요소들을 제대로 제거해주는 것이 좋다.

그 다음 Dictionary는 체육복을 도둑맞은 학생이 빌릴 수 있는 체육복을 지정해주기 위한 것이다.<br/>
이렇게 한 이유는 예를 들어 ```int n = 7; int[] lost = new int[] { 2, 4, 7 }; int[] reserve = new int[] { 1, 3, 5 };``` 일 때,<br/>
빌릴 수 있는 체육복은 ```{ 1, 3, 5, 6, 8 }``` 이 되는데, 문제는 단순히 빌릴 수 있는 체육복과 빌려야 하는 체육복 번호만으로 비교를 한다면<br/>
7번 학생이 5번 학생의 체육복을 빌리는 상황이 되어버릴 수도 있다.<br/>
이러한 상황을 방지하기 위해 Dictionary를 사용했다.

그리고 마지막 반복문은 실제로 체육복을 빌리는 부분이다.

```c#
for (int i = 0; i < losts.Count; i++)
{
    for (int j = 0; j < uniformToBorrow[losts[i]].Count; j++)
    {
        if (reserves.Contains(uniformToBorrow[losts[i]][j]))
        {
            reserves.Remove(uniformToBorrow[losts[i]][j]);
            studentBorrowedUniform++;
            break;
        }
    }
}
```

losts.Count는 체육복을 빌려야 하는 학생의 수이고,<br/>
uniformToBorrow[losts[i]].Count는 해당 학생이 빌릴 수 있는 체육복의 수이다. 그러므로 항상 2가 나온다.<br/>
reserves.Contains(uniformToBorrow[losts[i]][j])를 통해 빌릴 수 있는 체육복 리스트에 빌려야 하는 체육복이 존재하는 지 확인하고,<br/>
만약 존재한다면 빌리면 되는데, 이 때 체육복은 하나만 빌리면 되기 때문에<br/>
reserves에서 해당 체육복을 지우고 (이미 빌렸으므로 다른 학생이 빌릴 수 없음), 수업 가능 인원을 1 늘리고 반복문을 빠져나온다.