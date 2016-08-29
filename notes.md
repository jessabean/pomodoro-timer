# Design notes

## Notes

### Setup:

- Set the number of minutes to start with
    - `minutesStart` = 25
- Need total time in s for the countdown 
    - `TIME` (total ms) = `minutesStart` * 60 (s)
- Set up display
    - seconds HTML = '00'
    - minutes HTML = `minutesStart`

### countdown function:

- takes total time as parameter: `function(TIME)`
- seconds = 60 - 1
- minutes = minutesStart
- Set interval to check every 1000 ms:
    - if seconds%60 === 0
        - reset seconds: seconds = 60 - 1
        - subtract one from minutes: `minutes--`
        - reset seconds HTML: '00'
        - reset minutes HTML: minutes--
    - else
        - seconds HTML = seconds

- subtract one unit from total time
- or if total time is zero, stop the interval
    - `TIME--` || `clearInterval()`
