document.addEventListener("DOMContentLoaded", () => {
    runLoadingScreen();
});

// 1. Loading Screen Logic
function runLoadingScreen() {
    const progress = document.getElementById("progress");
    const counter = document.getElementById("counter");
    const loadingText = document.getElementById("loading-text");
    
    let count = 0;
    const interval = setInterval(() => {
        count++;
        progress.style.width = count + "%";
        counter.innerText = count + "%";

        if (count === 100) {
            clearInterval(interval);
            
            // Text change custom addition
            setTimeout(() => {
                loadingText.style.color = "#ff4d6d";
                loadingText.innerText = "Found 1 precious person... ❤️ Suchitra";
                counter.style.display = "none";
                progress.parentElement.style.display = "none";
                
                // Move to Scene 1
                setTimeout(() => {
                    switchScene("loading-screen", "scene-1");
                    startScene1();
                }, 2500);
            }, 800);
        }
    }, 30); // Speed of loading screen
}

// 2. Scene Switcher Function
function switchScene(currentId, nextId) {
    document.getElementById(currentId).classList.remove("active");
    document.getElementById(nextId).classList.add("active");
}

// 3. Scene 1 Logic (Typing effect)
function startScene1() {
    const textElement = document.getElementById("scene1-text");
    const message = "Ammu... Can I borrow a few minutes of your heart? ❤️";
    let index = 0;

    function type() {
        if (index < message.length) {
            textElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(type, 70); // Speed of typing
        }
    }
    
    setTimeout(type, 1000); // Small pause before typing starts
}

// 4. Click Heart Action
document.getElementById("start-button").addEventListener("click", () => {
    alert("Magical door unlocking... Preparing Scene 2!");
    // Here we will eventually trigger the zoom animation and switch to Scene 2
});
// 4. Click Heart Action (Triggers Zoom & Switches to Scene 2)
document.getElementById("start-button").addEventListener("click", () => {
    const heart = document.getElementById("start-button");
    
    // Add a quick zoom effect to the heart
    heart.style.transform = "scale(5)";
    heart.style.opacity = "0";
    heart.style.transition = "all 1s ease";

    setTimeout(() => {
        switchScene("scene-1", "scene-2");
    }, 1000);
});

// Temporary listener for Scene 3 button until we build it
document.getElementById("to-scene3").addEventListener("click", () => {
    alert("Heading to Scene 3 next!");
});
