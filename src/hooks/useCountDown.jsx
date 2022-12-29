import { useState } from "react"

const useCountDown = (date)=>{


        const[day, setDay] = useState()
        const[hour, setHour] = useState()
        const[min, setMin] = useState()
        const[sec, setSec] = useState()



    const countDown = ()=>{
        const countDate = new Date(date).getTime()

    const currentDate = new Date().getTime()

    const interval = countDate - currentDate


        const second = 1000
        const minute = second *60
        const hour = minute *60
        const day = hour * 24

            const dayNumber = Math.floor(interval / day)
            const hourNumber = Math.floor((interval % day)/hour)
            const minuteNumber = Math.floor((interval % hour) / minute)
            const secNumber = Math.floor((interval % minute)/second)
                // console.log(dayNumber, hourNumber, minuteNumber, secNumber)


            setDay(dayNumber)
            setHour(hourNumber)
            setMin(minuteNumber)
            setSec(secNumber)
    }

    setInterval(countDown,1000)
        return[day, hour, min, sec]
}

export default useCountDown