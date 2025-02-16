document.addEventListener("DOMContentLoaded", function() {
    loadRamadanStart();
    generateDays();
    populateDateSelectors();
});

// إنشاء أيقونات الأيام
function generateDays() {
    let container = document.querySelector(".hexagon-container");
    container.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        let dayHex = document.createElement("div");
        dayHex.classList.add("hexagon");
        dayHex.textContent = i;
        dayHex.dataset.day = i;
        dayHex.onclick = function() { showDua(i); };

        container.appendChild(dayHex);
    }

    updateDays();
}

// تحديث الأيام المنقضية
function updateDays() {
    let startDate = new Date(localStorage.getItem("ramadanStart"));
    let today = new Date();
    let diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    let remaining = 30 - diffDays;
    document.getElementById("remainingMessage").textContent = `الأيام المتبقية لشهر رمضان: ${remaining > 0 ? remaining : 0}`;

    let savedDays = JSON.parse(localStorage.getItem("finishedDays")) || [];

    document.querySelectorAll(".hexagon").forEach((icon) => {
        let dayNumber = parseInt(icon.dataset.day);
        if (dayNumber <= diffDays) {
            icon.classList.add("past");
            savedDays[dayNumber - 1] = true;
        } else {
            icon.classList.remove("past");
        }
    });

    localStorage.setItem("finishedDays", JSON.stringify(savedDays));
}

// إظهار نافذة الدعاء
function showDua(day) {
    let duas = [
        "اللهم اجعل صيامي فيه صيام الصائمين وقيامي فيه قيام القائمين...",
        "اللهم قربني فيه إلى مرضاتك وجنبني فيه من سخطك ونقماتك...",
        // باقي الأدعية...
    ];

    document.getElementById("popupTitle").textContent = `دعاء اليوم ${day}`;
    document.getElementById("popupText").textContent = duas[day - 1] || "دعاء هذا اليوم غير متوفر.";
    document.getElementById("popup").style.display = "block";
}

// إغلاق النافذة المنبثقة
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
