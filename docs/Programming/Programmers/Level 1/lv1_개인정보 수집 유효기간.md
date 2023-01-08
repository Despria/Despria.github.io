---
sidebar_position: 11
---

# Level 1 - 개인정보 수집 유효기간

## 문제

고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. <br/>
약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. <br/> 
당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. <br/>
수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.

예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 <br/>
해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다. <br/>
당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

모든 달은 28일까지 있다고 가정합니다.

다음은 오늘 날짜가 2022.05.19일 때의 예시입니다.

| 약관 종류 | 유효기간 |
|-----------|----------|
| A         | 6 달     |
| B         | 12 달    |
| C         | 3 달     |

| 번호 | 개인정보 수집 일자 | 약관 종류 | 
|------|--------------------|-----------|
| 1    | 2021.05.02         | A         |
| 2    | 2021.07.01         | B         | 
| 3    | 2022.02.19         | C         | 
| 4    | 2022.02.20         | C         |

첫 번째 개인정보는 A약관에 의해 2021년 11월 1일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.<br/>
두 번째 개인정보는 B약관에 의해 2022년 6월 28일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.<br/>
세 번째 개인정보는 C약관에 의해 2022년 5월 18일까지 보관 가능하며, 유효기간이 지났으므로 파기해야 할 개인정보입니다.<br/>
네 번째 개인정보는 C약관에 의해 2022년 5월 19일까지 보관 가능하며, 유효기간이 지나지 않았으므로 아직 보관 가능합니다.<br/>
따라서 파기해야 할 개인정보 번호는 [1, 3]입니다.

오늘 날짜를 의미하는 문자열 today, 약관의 유효기간을 담은 1차원 문자열 배열 terms와 <br/>
수집된 개인정보의 정보를 담은 1차원 문자열 배열 privacies가 매개변수로 주어집니다. <br/>
이때 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

## 제한 사항

1. today는 "YYYY.MM.DD" 형태로 오늘 날짜를 나타냅니다.

2. 1 ≤ terms의 길이 ≤ 20
>terms의 원소는 "약관 종류 유효기간" 형태의 약관 종류와 유효기간을 공백 하나로 구분한 문자열입니다.<br/>
>약관 종류는 A~Z중 알파벳 대문자 하나이며, terms 배열에서 약관 종류는 중복되지 않습니다.<br/>
>유효기간은 개인정보를 보관할 수 있는 달 수를 나타내는 정수이며, 1 이상 100 이하입니다.<br/>

3. 1 ≤ privacies의 길이 ≤ 100
>privacies[i]는 i+1번 개인정보의 수집 일자와 약관 종류를 나타냅니다.<br/>
>privacies의 원소는 "날짜 약관 종류" 형태의 날짜와 약관 종류를 공백 하나로 구분한 문자열입니다.<br/>
>날짜는 "YYYY.MM.DD" 형태의 개인정보가 수집된 날짜를 나타내며, today 이전의 날짜만 주어집니다.<br/>
>privacies의 약관 종류는 항상 terms에 나타난 약관 종류만 주어집니다.<br/>

4. today와 privacies에 등장하는 날짜의 YYYY는 연도, MM은 월, DD는 일을 나타내며 점(.) 하나로 구분되어 있습니다.
>2000 ≤ YYYY ≤ 2022<br/>
>1 ≤ MM ≤ 12<br/>
>MM이 한 자릿수인 경우 앞에 0이 붙습니다.<br/>
>1 ≤ DD ≤ 28<br/>
>DD가 한 자릿수인 경우 앞에 0이 붙습니다.<br/>

5. 파기해야 할 개인정보가 하나 이상 존재하는 입력만 주어집니다.

## 풀이

```c#
using System;
using System.Collections.Generic;

public class Solution
{
    public int[] solution(string today, string[] terms, string[] privacies)
    {
        List<int> answerList = new List<int>();
        int index = 1;

        Dictionary<string, int> termValidMonth = new Dictionary<string, int>(); 
        for (int i = 0; i < terms.Length; i++)
        {
            string[] split = terms[i].Split(" ");
            termValidMonth.Add(split[0], Convert.ToInt32(split[1]));
        }

        List<Tuple<string, string>> privaciesTerm = new List<Tuple<string, string>>();
        for (int i = 0; i < privacies.Length; i++)
        {
            string[] split = privacies[i].Split(" ");
            privaciesTerm.Add(new Tuple<string, string>(split[0], split[1]));
        }

        DateTime todayDate = DateTime.Parse(today);

        for (int i = 0; i < privaciesTerm.Count; i++)
        {
            int validMonth = termValidMonth[privaciesTerm[i].Item2];

            DateTime enrolledDate = DateTime.Parse(privaciesTerm[i].Item1);
            int enrolledYear = enrolledDate.Year;
            int enrolledMonth = enrolledDate.Month;
            int enrolledDay = enrolledDate.Day;

            enrolledMonth += validMonth;
            enrolledDay--;

            if (enrolledMonth > 12)
            {
                enrolledYear += enrolledMonth / 12;
                enrolledMonth %= 12;
            }
            if (enrolledDay <= 0)
            {
                enrolledMonth--;
                enrolledDay = 28;
            }
            if (enrolledMonth <= 0)
            {
                enrolledYear--;
                enrolledMonth = 12;
            }

            string dateFormat = string.Format(enrolledYear.ToString() + "." + 
                                              enrolledMonth.ToString() + "." + 
                                              enrolledDay.ToString());
            DateTime expireDate = DateTime.Parse(dateFormat);
            if (DateTime.Compare(todayDate, expireDate) > 0)
            {
                answerList.Add(index);
            }
            index++;
        }

        return answerList.ToArray();
    }
}
```

해결 일자 - 2023.01.06

오늘 문제는 처음에는 굉장히 잘 해결되어가고 있었는데 도중에 막혀서 시간이 한참 걸렸다.<br/>
분명히 로직상으로는 알맞게 됐는데, 왜 프로그램 테스트 정확도는 낮을까 싶었다.<br/>
그것도 실패 케이스는 전부 '런타임 에러'가 뜨니, 필시 문법적인 수준의 오류인데 반례를 도저히 못떠올리겠는거다.

그러다가 문득 떠오른 것이, 가입 일자가 똑같은데 약관은 다른 사람이 분명 존재할 수 있다.<br/>
그런데 Dictionary는 중복되는 키값을 허용하지 않기 때문에, 분명히 이쪽에서 문제가 발생했을 거라 생각했다.<br/>
바로 테스트를 해보니 역시나 이쪽이 문제가 맞았다.

그래서 처음에 Dictionary로 작성한 privaciesTerm을 List<Tuple<string, string>>형으로 수정하여 문제를 해결할 수 있었다.

우선 첫 Dictionary인 termValidMonth는 각 약관별 유효기간을 저장해두었다.<br/>
그리고 Tuple<string, string>이 담긴 List인 privaciesTerm에는 첫번째 요소에는 가입 일자를, 두번째 요소에는 약관을 저장했다.<br/>
그리고 privaciesTerm의 길이만큼의 반복문에서 termValidMonth[privaciesTerm[i].Item2]을 통해 <br/>
각 회원별 약관에 따른 유효기간을 얻어오고,<br/>
privaciesTerm[i].Item1를 통해 가입 일자를 얻어와 DateTime형 변수인 enrolledDate으로 변환했다.

enrolledDate에서 약관에 따른 유효기간을 통해 유효기간이 만료되는 날짜를 구하고,<br/>
today를 DateTime형으로 변환한 todayDate와 DateTime.Compare()를 통해 비교해서 결과값을 얻었다.