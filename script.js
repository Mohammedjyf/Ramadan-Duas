const days = [
"دعاء اليوم الاوّل :اَللّـهُمَّ اجْعَلْ صِيامي فيهِ صِيامَ الصّائِمينَ، وَقِيامي فيهِ قيامَ الْقائِمينَ، وَنَبِّهْني فيهِ عَنْ نَوْمَةِ الْغافِلينَ، وَهَبْ لى جُرْمي فيهِ يا اِلـهَ الْعالَمينَ، وَاعْفُ عَنّي يا عافِياً عَنْ الْمجْرِمينَ .",
"دعاء اليوم الثّاني : اَللّـهُمَّ قَرِّبْني فيهِ اِلى مَرْضاتِكَ، وَجَنِّبْني فيهِ مِنْ سَخَطِكَ وَنَقِماتِكَ، وَوَفِّقْني فيهِ لِقِرآءَةِ ايـاتِكَ بِرَحْمَتِكَ يا اَرْحَمَ الرّاحِمينَ ",
"دعاء اليوم الثّالث :اَللّـهُمَّ ارْزُقْني فيهِ الذِّهْنَ وَالتَّنْبيهَ، وَباعِدْني فيهِ مِنَ السَّفاهَةِ وَالَّتمْويهِ، وَاجْعَلْ لى نَصيباً مِنْ كُلِّ خَيْر تُنْزِلُ فيهِ، بِجُودِكَ يا اَجْوَدَ الاْجْوَدينَ .",
"دعاء اليوم الرّابع :اَللّـهُمَّ قَوِّني فيهِ عَلى اِقامَةِ اَمْرِكَ، وَاَذِقْني فيهِ حَلاوَةَ ذِكْرِكَ، وَاَوْزِعْني فيهِ لاِداءِ شُكْرِكَ بِكَرَمِكَ، وَاحْفَظْني فيهِ بِحِفْظِكَ وَسَتْرِكَ، يا اَبْصَرَ النّاظِرينَ .",
"دعاء اليوم الخامس :اَللّـهُمَّ اجْعَلْني فيهِ مِنْ الْمُسْتَغْفِرينَ، وَاجْعَلْني فيهِ مِنْ عِبادِكَ الصّالِحينَ اْلقانِتينَ، وَاجْعَلني فيهِ مِنْ اَوْلِيائِكَ الْمُقَرَّبينَ، بِرَأْفَتِكَ يا اَرْحَمَ الرّاحِمينَ .",
"دعاء اليوم السّادس :اَللّـهُمَّ لا تَخْذُلْني فيهِ لِتَعَرُّضِ مَعْصِيَتِكَ، وَلاتَضْرِبْني بِسِياطِ نَقِمَتِكَ، وَزَحْزِحْني فيهِ مِنْ مُوجِباتِ سَخَطِكَ، بِمَنِّكَ وَاَياديكَ يا مُنْتَهى رَغْبَةِ الرّاغِبينَ .",
"دعاء اليوم السّابع :اَللّـهُمَّ اَعِنّي فِيهِ عَلى صِيامِهِ وَقِيامِهِ، وَجَنِّبْني فيهِ مِنْ هَفَواتِهِ وَآثامِهِ، وَارْزُقْني فيهِ ذِكْرَكَ بِدَوامِهِ، بِتَوْفيقِكَ يا هادِيَ الْمُضِلّينَ .",		
"دعاء اليوم الثّامن : اَللّـهُمَّ ارْزُقْني فيهِ رَحْمَةَ الاْيْتامِ، وَاِطْعامَ اَلطَّعامِ، وَاِفْشاءَ السَّلامِ، وَصُحْبَةَ الْكِرامِ، بِطَولِكَ يا مَلْجَاَ الاْمِلينَ .",
"دعاء اليوم التّاسع : اَللّـهُمَّ اجْعَلْ لي فيهِ نَصيباً مِنْ رَحْمَتِكَ الْواسِعَةِ، وَاهْدِني فيهِ لِبَراهينِكَ السّاطِعَةِ، وَخُذْ بِناصِيَتي اِلى مَرْضاتِكَ الْجامِعَةِ، بِمَحَبَّتِكَ يا اَمَلَ الْمُشْتاقينَ .",
"دعاء اليوم العاشر :اَللّـهُمَّ اجْعَلْني فيهِ مِنَ الْمُتَوَكِّلينَ عَلَيْكَ، وَاجْعَلْني فيهِ مِنَ الْفائِزينَ لَدَيْكَ، وَاجْعَلْني فيهِ مِنَ الْمُقَرَّبينَ اِلَيْكَ، بِاِحْسانِكَ يا غايَةَ الطّالِبينَ .",
"دعاء اليوم الحادي عشر :اَللّـهُمَّ حَبِّبْ اِلَيَّ فيهِ الاِْحْسانَ، وَكَرِّهْ اِلَيَّ فيهِ الْفُسُوقَ وَالْعِصْيانَ، وَحَرِّمْ عَلَيَّ فيهِ السَّخَطَ وَالنّيرانَ بِعَوْنِكَ يا غِياثَ الْمُسْتَغيثينَ .",
"دعاء اليوم الثّاني عشر :اَللّـهُمَّ زَيِّنّي فيهِ بِالسِّتْرِ وَالْعَفافِ، وَاسْتُرْني فيهِ بِلِباسِ الْقُنُوعِ وَالْكَفافِ، وَاحْمِلْني فيهِ عَلَى الْعَدْلِ وَالاِْنْصافِ، وَآمِنّي فيهِ مِنْ كُلِّ ما اَخافُ، بِعِصْمَتِكَ يا عِصْمَةَ الْخائِفينَ .",
"دعاء اليوم الثّالث عشر :اَللّـهُمَّ طَهِّرْني فيهِ مِنَ الدَّنَسِ وَالاْقْذارِ، وَصَبِّرْني فيهِ عَلى كائِناتِ الاْقْدارِ، وَوَفِّقْني فيهِ لِلتُّقى وَصُحْبَةِ الاْبْرارِ، بِعَوْنِكَ يا قُرَّةَ عَيْنِ الْمَساكينَ .",
"دعاء ليوم الرّابع عشر :اَللّـهُمَّ لا تُؤاخِذْني فيهِ بِالْعَثَراتِ، وَاَقِلْني فيهِ مِنَ الْخَطايا وَالْهَفَواتِ، وَلا تَجْعَلْني فيهِ غَرَضاً لِلْبَلايا وَالاْفاتِ، بِعِزَّتِكَ يا عِزَّ الْمُسْلِمينَ .",
"دعاء اليوم الخامس عشر :اَللّـهُمَّ ارْزُقْني فيهِ طاعَةَ الْخاشِعينَ، وَاشْرَحْ فيهِ صَدْري بِاِنابَةِ الْمخْبِتينَ، بِاَمانِكَ يا اَمانَ الْخائِفينَ .",
"دعاء اليوم السّادس عشر : اَللّـهُمَّ وَفِّقْني فيهِ لِمُوافَقَةِ الاْبْرارِ، وَجَنِّبْني فيهِ مُرافَقَةَ الاْشْرارِ، وَآوِني فيهِ بِرَحْمَتِكَ اِلى دارِ الْقَـرارِ، بِاِلهِيَّتِكَ يا اِلـهَ الْعالَمينَ .",
"دعاء اليوم السّابع عشر : اَللّـهُمَّ اهْدِني فيهِ لِصالِحِ الاْعْمالِ، وَاقْضِ لي فيهِ الْحَوائِجَ وَالاْمالَ، يا مَنْ لا يَحْتاجُ اِلَى التَّفْسيرِ وَالسُّؤالِ، يا عالِماً بِما في صُدُورِ الْعالَمينَ، صَلِّ عَلى مُحَمَّد وَآلِهِ الطّاهِرينَ .",
"دعاء اليوم الثّامن عشر :اَللّـهُمَّ نَبِّهْني فيهِ لِبَرَكاتِ اَسْحارِهِ، وَنَوِّرْ فيهِ قَلْبي بِضياءِ اَنْوارِهِ، وَخُذْ بِكُلِّ اَعْضائي اِلَى اتِّباعِ آثارِهِ، بِنُورِكَ يا مُنَوِّرَ قُلُوبِ الْعارِفينَ .",
"دعاء اليوم التّاسع عشر :اَللّـهُمَّ وَفِّرْ فيهِ حَظّي مِنْ بَرَكاتِهِ، وَسَهِّلْ سَبيلي اِلى خَيْراتِهِ، وَلا تَحْرِمْني قَبُولَ حَسَناتِهِ، يا هادِياً اِلَى الْحَقِّ الْمُبينِ .",
"دعاء اليوم العشرين :اَللّـهُمَّ افْتَحْ لي فيهِ اَبْوابَ الْجِنانِ، وَاَغْلِقْ عَنّي فيهِ اَبْوابَ النّيرانِ، وَوَفِّقْني فيهِ لِتِلاوَةِ الْقُرْآنِ، يا مُنْزِلَ السَّكينَةِ فى قُلُوبِ الْمُؤْمِنينَ .",
"دعاء اليوم الحادي والعشرين : اَللّـهُمَّ اجْعَلْ لى فيهِ اِلى مَرْضاتِكَ دَليلاً، وَلا تَجْعَلْ لِلشَّيْطانِ فيهِ عَلَيَّ سَبيلاً، وَاجْعَلِ الْجَنَّةَ لى مَنْزِلاً وَمَقيلاً، يا قاضِيَ حَوائِجِ الطّالِبينَ .",
"دعاء اليوم الثّاني والعشرين :اَللّـهُمَّ افْتَحْ لى فيهِ اَبْوابَ فَضْلِكَ، وَاَنْزِلْ عَلَيَّ فيهِ بَرَكاتِكَ، وَوَفِّقْني فيهِ لِمُوجِباتِ مَرْضاتِكَ، وَاَسْكِنّي فيهِ بُحْبُوحاتِ جَنّاتِكَ، يا مُجيبَ دَعْوَةِ الْمُضْطَرّينَ .",
"دعاء اليوم الثّالث والعشرين :اَللّـهُمَّ اغْسِلْني فيهِ مِنَ الذُّنُوبِ، وَطَهِّرْني فيهِ مِنَ الْعُيُوبِ، وَامْتَحِنْ قَلْبي فيهِ بِتَقْوَى الْقُلُوبِ، يا مُقيلَ عَثَراتِ الْمُذْنِبينَ .",
"دعاء اليوم الرّابع والعشرين :اَللّـهُمَّ اِنّي اَسْأَلُكَ فيهِ ما يُرْضيكَ، وَاَعُوذُبِكَ مِمّا يُؤْذيكَ، وَاَسْأَلُكَ التَّوْفيقَ فيهِ لاِنْ اُطيعَكَ وَلا اَعْصيْكَ، يا جَوادَ السّائِلينَ.",
"دعاء اليوم الخامس والعشرين :اَللّـهُمَّ اجْعَلْني فيهِ مُحِبَّاً لاِوْلِيائِكَ، وَمُعادِياً لاِعْدائِكَ، مُسْتَنّاً بِسُنَّةِ خاتَمِ اَنْبِيائِكَ، يا عاصِمَ قُلُوبِ النَّبِيّينَ.",
"دعاء اليوم السّادس والعشرين :اَللّـهُمَّ اجْعَلْ سَعْيي فيهِ مَشْكُوراً، وَذَنْبي فيهِ مَغْفُوراً وَعَمَلي فيهِ مَقْبُولاً، وَعَيْبي فيهِ مَسْتُوراً، يا اَسْمَعَ السّامِعينَ .",
"دعاء اليوم السّابع والعشرين :اَللّـهُمَّ ارْزُقْني فيهِ فَضْلَ لَيْلَةِ الْقَدْرِ، وَصَيِّرْ اُمُوري فيهِ مِنَ الْعُسْرِ اِلَى الْيُسْرِ، وَاقْبَلْ مَعاذيري، وَحُطَّ عَنّيِ الذَّنْبَ وَالْوِزْرَ، يا رَؤوفاً بِعِبادِهِ الصّالِحينَ .",
"دعاء اليوم الثّامن والعشرين :َللّـهُمَّ وَفِّرْ حَظّي فيهِ مِنَ النَّوافِلِ، وَاَكْرِمْني فيهِ بِاِحْضارِ الْمَسائِلِ، وَقَرِّبْ فيهِ وَسيلَتى اِلَيْكَ مِنْ بَيْنِ الْوَسائِلِ، يا مَنْ لا يَشْغَلُهُ اِلْحـاحُ الْمُلِحّينَ .",
"دعاء اليوم التّاسع والعشرين :اَللّـهُمَّ غَشِّني فيهِ بِالرَّحْمَةِ، وَارْزُقْني فيهِ التَّوْفيقَ وَالْعِصْمَةَ، وَطَهِّرْ قَلْبي مِنْ غَياهِبِ التُّهْمَةِ، يا رَحيماً بِعِبادِهِ الْمُؤْمِنينَ .",
"دعاء اليوم الثّلاثين :اَللّـهُمَّ اجْعَلْ صِيامى فيهِ بِالشُّكْرِ وَالْقَبُولِ عَلى ما تَرْضاهُ وَيَرْضاهُ الرَّسُولُ، مُحْكَمَةً فُرُوعُهُ بِالاُْصُولِ، بِحَقِّ سَيِّدِنا مُحَمَّد وَآلِهِ الطّاهِرينَ، وَالْحَمْدُ للهِ رَبِّ الْعالَمينَ .",
    // أكمل بقية الأدعية حتى اليوم الثلاثين
];

let startDate = localStorage.getItem('startDate') ? new Date(localStorage.getItem('startDate')) : null;

function generateCalendar() {
    const honeycomb = document.querySelector('.honeycomb');
    honeycomb.innerHTML = '';

    if (!startDate) return;

    const today = new Date();
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const remainingDays = 30 - daysPassed;

    if (remainingDays <= 0) {
        document.getElementById('remainingDays').textContent = "لقد انتهى شهر رمضان!";
        return;
    }

    document.getElementById('remainingDays').textContent = ` (${remainingDays}) يوم هي الأيام المتبقية لنهاية شهر الخير والبركة فاستثمرها`;
    for (let i = 1; i <= 30; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = `دعاء اليوم ${i-1}`;
        day.addEventListener('click', () => openPopup(days[i - 1]));

        if (i < daysPassed) {
            day.classList.add('past');
        } else if (i === daysPassed) {
            day.classList.add('current');
        }

        honeycomb.appendChild(day);
    }
}
function setStartDate() {
    const dateInput = document.getElementById('startDate');
    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    // التحقق من أن التاريخ المحدد ليس في المستقبل
    if (selectedDate > today) {
        alert("لا يمكن تحديد تاريخ في المستقبل. الرجاء اختيار تاريخ صحيح.");
        return;
    }

    startDate = selectedDate;
        // عرض رسالة تأكيد
    alert("تم تحديد تاريخ البداية بنجاح. قم بالحفظ لتطبيق النتائج.");
    localStorage.setItem('startDate', startDate);



    // تحديث التقويم
    generateCalendar();
        alert("تم حفظ التاريخ والتطبيق بنجاح .");

}

function openPopup(text) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    popupText.textContent = text;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function increaseFont() {
    const popupText = document.getElementById('popupText');
    let currentSize = window.getComputedStyle(popupText).fontSize;
    popupText.style.fontSize = `${parseFloat(currentSize) * 1.2}px`;

    // التأكد من أن النص يبقى مرئيًا
    popupText.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function decreaseFont() {
    const popupText = document.getElementById('popupText');
    let currentSize = window.getComputedStyle(popupText).fontSize;
    popupText.style.fontSize = `${parseFloat(currentSize) * 0.8}px`;
}

document.addEventListener('DOMContentLoaded', generateCalendar);
