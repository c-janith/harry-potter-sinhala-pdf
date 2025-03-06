const books = [
    { title: "හැරී පොටර් සහ මායා ගල", link: "https://mixdrop.is/f/gjzopw9nadq3zr" },
    { title: "හැරී පොටර් සහ රහස් කාමරය", link: "https://mixdrop.is/f/mkvqlgm6axvexqv" },
    { title: "හැරී පොටර් අස්කබාන්හි සිරකරු", link: "https://mixdrop.is/f/k081nnxrt7jqwr" },
    { title: "හැරී පොටර් සහ අග්නි කුසලානය", link: "https://mixdrop.is/f/36708z63hm6dr94" },
    { title: "හැරී පොටර් සහ ෆීනික්ස් නිකාය", link: "https://mixdrop.is/f/r6xdz1v3u1p8v" },
    { title: "හැරී පොටර් සහ අඩ ලේ කුමාරයා 01", link: "https://mixdrop.is/f/pj8m1vrxfgglqdg" },
    { title: "හැරී පොටර් සහ අඩ ලේ කුමාරයා 02", link: "https://mixdrop.is/f/z1xd66r4bgg1wkn" },
    { title: "හැරී පොටර් සහ අඩ ලේ කුමාරයා 03", link: "https://mixdrop.is/f/036rn11lsede6q" },
    { title: "හැරී පොටර් සහ ඩෙත්ලි හැලෝස් 01", link: "https://mixdrop.is/f/xwejnkz7frl949" },
    { title: "හැරී පොටර් සහ ඩෙත්ලි හැලෝස් 02", link: "https://mixdrop.is/f/gjzopw9jb34xle" }
];

// Function to generate book cards dynamically
function generateBookCards() {
    const bookCardsContainer = document.getElementById('bookCards');
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const linkButton = document.createElement('button');
        linkButton.textContent = "Unlock & Download";
        linkButton.addEventListener('click', () => redirectToUnlockPage(book));

        card.appendChild(title);
        card.appendChild(linkButton);
        bookCardsContainer.appendChild(card);
    });
}

// Function to redirect to the unlock page
function redirectToUnlockPage(book) {
    window.location.href = `down-page.html?book=${encodeURIComponent(book.title)}&link=${encodeURIComponent(book.link)}`;
}

document.addEventListener('DOMContentLoaded', generateBookCards);
