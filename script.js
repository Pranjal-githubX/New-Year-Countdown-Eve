function onLoadAnim(){
    gsap.to("body>*, main *", {
        opacity: 1,
        duration: 0.3,
        stagger: 0.04,
        delay: 0.3
    })
}
onLoadAnim()
document.addEventListener('DOMContentLoaded', () => {
    let months = document.querySelector(".boxes1 .lower h3");
    let days = document.querySelector(".boxes2 .lower h3");
    let hours = document.querySelector(".boxes3 .lower h3");
    let mins = document.querySelector(".boxes4 .lower h3");
    let seconds = document.querySelector(".boxes5 .lower h3");

    let previousValues = {
        months: null,
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    };

    function updateCountdown() {
        const newYearDate = new Date("2025-01-01T00:00:00");
        const currentDate = new Date();
        const diff = newYearDate - currentDate;

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalMonths = Math.floor(totalDays / 30);

        const remainingSeconds = totalSeconds % 60;
        const remainingMinutes = totalMinutes % 60;
        const remainingHours = totalHours % 24;
        const remainingDays = totalDays % 30;

        // Check for changes in values
        if (previousValues.months !== totalMonths) {
            gsap.fromTo(months, {
                scale: 5, color: "black",
                y: 35,
                opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 0.2, scale: 1, color: "white"
            })
        }
        if (previousValues.days !== remainingDays) {
            gsap.fromTo(days, {
                scale: 5, color: "black",
                y: 35,
                opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 0.2, scale: 1, color: "white"
            })
        }
        if (previousValues.hours !== remainingHours) {
            gsap.fromTo(hours, {
                scale: 5, color: "black",
                y: 35,
                opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 0.2, scale: 1, color: "white"
            })
        }
        if (previousValues.minutes !== remainingMinutes) {
            gsap.fromTo(mins, {
                scale: 5, color: "black",
                y: 35,
                opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 0.2, scale: 1, color: "white"
            })
        }
        if (previousValues.seconds !== remainingSeconds) {
            // console.log("Seconds changed");
            gsap.fromTo(seconds, {
                y: 20,
                opacity: 0,
            }, {
                y: 0, opacity: 1, duration: 0.2
            })
        }

        // Update values
        months.innerText = totalMonths;
        days.innerText = remainingDays;
        hours.innerText = remainingHours;
        mins.innerText = remainingMinutes;
        seconds.innerText = remainingSeconds;

        // Update previous values
        previousValues.months = totalMonths;
        previousValues.days = remainingDays;
        previousValues.hours = remainingHours;
        previousValues.minutes = remainingMinutes;
        previousValues.seconds = remainingSeconds;
    }

    updateCountdown(); // Initial update
    setInterval(updateCountdown, 1000); // Update every second
});
