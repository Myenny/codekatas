//https://www.codewars.com/kata/how-many-stairs-will-suzuki-climb-in-20-years/train/javascript

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

function stairsIn20(s) {
  let total = 0
  for (i = 0; i < s.length; i++) {
    let dayCount = 0
    for (j = 0; j < s[i].length; j++) {
      dayCount += s[i][j]
    }
    total += dayCount
  }
  return total * 20
}

function stairsIn20(s) {
  return (
    s.reduce(
      (acc, item) =>
        acc +
        item.reduce((weekDayAcc, weekDayItem) => weekDayAcc + weekDayItem, 0),
      0
    ) * 20
  )
}
