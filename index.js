document.addEventListener("DOMContentLoaded", function () {
    function updateProgress(className, percentage) {
        let progressCircle = document.querySelector("." + className);
        let progressValue = document.querySelector("." + className + "-progress");

        let startValue = 0;
        let speed = 20; // Speed of animation

        let progress = setInterval(() => {
            if (startValue >= percentage) {
                clearInterval(progress);
            } else {
                startValue++;
                progressValue.innerText = startValue + "%";
                progressCircle.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`;
            }
        }, speed);
    }

    // Call function for each skill
    updateProgress("html-css", 100);
    updateProgress("javascript", 80);
    updateProgress("nodejs", 80);
    updateProgress("reactjs", 30);
});
