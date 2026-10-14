
/* =========================================
   18 MONTHS — US TOGETHER
   Scrapbook pages, photos, stamp and effects
========================================= */

const memories = {
  hyderabad: [
    {
      photo: "hydm1.jpeg",
      note: "A little memory I'll always keep close. ♡"
    },
    {
      photo: "hydm2.jpeg",
      note: "Some moments stay with us long after they pass."
    }
  ],

  birthday: [
    {
      photo: "28m1.jpeg",
      note: "My birthday became more special because of you. 𓆩♡𓆪"
    },
    {
      photo: "28m2.jpeg",
      note: "One more memory I wish I could relive."
    }
  ],

  afterThreeDays: [
    {
      photo: "31m1.jpeg",
      note: "And 3 days later my b'day , we relly met again, That was amazing day ❀∿. "
    },
    {
      photo: "31m2.jpeg",
      note: "Getting to see you again felt so special."
    }
  ],

  general: [
    {
      photo: "m1.jpeg",
      note: "One of my favourite little pieces of us."
    },
    {
      photo: "m2.jpeg",
      note: "It's the little things that mean the most."
    },
    {
      photo: "m3.jpeg",
      note: "If I could keep a moment, I'd keep this one."
    }
  ]
};

const finalLetter = `EIGHTEEN MONTHS THAT MEAN 1½ YEAR,
Yeah! we had Happy day , sad days , days where we couldn't talk, day where we alomst gave-up.
But , we didn't & that is what usღ
I HOPE WE WILL HAVE BETTER DAY THAN WE PASSED THROUGH.
           HAPPY 18 MOTHS BABY
I LOVE YOU , I LOVE YOU & I LOVE YOU SO MUCH დ♡...

Every memory has its own place in my heart.
Even the simplest days became special in their
own little way because they were part of us.

This is not the end of our story,
And there is not end for our story.
There are still so many moments waiting for us,
so many memories we haven't made yet.

And I hope we keep adding pages,
one little moment at a time. ♡`;

/* Each entry is one portrait page.
   Photos from each named group stay together. */

const pages = [
  {
    chapterLabel: "BEFORE WE BEGIN",
    eyebrow: "A LITTLE NOTE",
    title: "Before we begin…",
    text: "Some stories don't need grand beginnings. Sometimes, they grow through little moments, familiar voices, and memories that slowly become everything.",
    ornament: "✧ · ♡ · ✧"
  },

  {
    chapterLabel: "BEFORE WE BEGIN",
    eyebrow: "18 MONTHS",
    title: "Our little world",
    text: "Eighteen months of us❋. Not just the big days, but all the little things that made this journey ours.",
    script: "And we're still writing…",
    ornament: "♡"
  },

  {
    chapterLabel: "OUR FIRST YEAR",
    eyebrow: "OUR FIRST YEAR",
    title: "The beginning",
    text: "Our first year was filled with little moments that became big memories. We found our own ways to care, to laugh, to miss each other, and to keep choosing us. And somehow, one memory at a time, we made a little world of our own✨.",
    ornament: "♡⃝♡"
  },

  {
    chapterLabel: "OUR FIRST YEAR",
    eyebrow: "A MEMORY TO KEEP",
    title: "A piece of us",
    photoGroup: "general",
    photoIndex: 0
  },

  {
    chapterLabel: "HYDERABAD",
    eyebrow: "A MEMORY FROM OUR JOURNEY",
    title: "Hyderabad days",
    text: "Distance changed some of our routines, but it never made our moments together any less special.",
    ornament: "✧"
  },

  {
    chapterLabel: "HYDERABAD",
    eyebrow: "TOGETHER AGAIN",
    title: "That little moment",
    photoGroup: "hyderabad",
    photoIndex: 0
  },

  {
    chapterLabel: "HYDERABAD",
    eyebrow: "THIS IS HOW",
    title: "cute my view seems",
    photoGroup: "hyderabad",
    photoIndex: 1
  },

  {
    chapterLabel: "LITTLE MOMENTS",
    eyebrow: "THE LITTLE THINGS",
    title: "Our kind of happiness",
    photoGroup: "general",
    photoIndex: 1
  },

  {
    chapterLabel: "JAGTIAL DAYS",
    eyebrow: "A DAY TO REMEMBER",
    title: "A little adventure",
    text: "The journey  to jagtial together was an amazing thing, that we ever thought of. But in soon i will sit in driving seat and you co-passenger seat and will be travellingg ..",
    ornament: "♡ · ୨୧ · ♡"
  },

  {
    chapterLabel: "BAMBILONI DAY",
    eyebrow: "A DAY WITH YOU",
    title: "Saved in my heart",
    photoGroup: "general",
    photoIndex: 2
  },

  {
    chapterLabel: "MY BIRTHDAY",
    eyebrow: "A DAY THAT MATTERED",
    title: "Birthday memories",
    text: "Some birthdays are remembered for the day itself. Some are remembered for the person who made them feel different, And that was my craziest , special birthdayy I ever had...",
    extratext: "I LOVE YOU SO MUCHH ⋆｡°✩ ♡ ✩°｡⋆ ...",
    ornament: "♡"
  },

  {
    chapterLabel: "MY GREATFUL DAY",
    eyebrow: "ONE OF MY FAVOURITES",
    title: "That day with you",
    photoGroup: "birthday",
    photoIndex: 0
  },

  {
    chapterLabel: "MY GREATFUL DAY",
    eyebrow: "ONE MORE BIRTHDAY MEMORY",
    title: "A little piece of that day",
    photoGroup: "birthday",
    photoIndex: 1
  },

  {
    chapterLabel: "31-07-2026",
    eyebrow: "AND THEN WE MET AGAIN",
    title: "THE SHORT WAIT",
    text: "Sometimes, even a short wait makes seeing someone again feel extra special. This was another great little moment for our reality.",
    ornament: "✧ ♡ ✧"
  },

  {
    chapterLabel: "THIRTY FIRST - JULY - 2026",
    eyebrow: "THE NIGHT WE WERE IN ☘𖧷",
    title: "KEPT CLOSE",
    photoGroup: "afterThreeDays",
    photoIndex: 0
  },

  {
    chapterLabel: "३१-०७-२०२६",
    eyebrow: "closest love",
    title: "THE NIGHT WE WERE EVERYTHING",
    photoGroup: "afterThreeDays",
    photoIndex: 1,
    hiddenMessage: "Some moments are small to everyone else, but mean the world to me. ♡"
  },

  {
    chapterLabel: "THE THING MEAN THIS BOOK FOR",
    eyebrow: "˚ʚ♡ɞ˚",
    title: "The thing I want to say is:  ",
    text: " HAPPY 18 MONTH , and HAPPY DUSSEHRA MY LOVELY PRINCESS ❃............  I HOPE WE WILL HAVE BETTER DAYS, AND WE MAY OR MAY MEET THIS DUSSHERA, BUT FOR SOME DUSSEHRA WE WILL CELEBRATE AS MARRIED COUPLES AND BY NEXT DHUSSEHRA COMES ON THIS DAY , WE WILL HAVE KIDS AND OUR FAMILY WILL CELEBRATING DUSSEHRA.. THIS IS MY PROMISE....  BABE, I LOVE YOU ",
    ornament: "♡"
  },

  {
    chapterLabel: "OUR LOVE BE CONTINUED",
    eyebrow: "ONE LAST THING",
    title: "A letter for you",
    text: "There are some things I'd rather leave in a letter, just for you.",
    envelope: true,
    ornament: "♡"
  },

  {
    chapterLabel: "TO BE CONTINUED",
    eyebrow: "18 MONTHS AND COUNTING",
    title: "OUR LOVE will be continued…",
   isFinalPage: true,
    text: "This book holds some of our memories, but our story is still going.",
    script: "We will have INFINITE cute and best Memories. AND US WILL REMAIN US FOREVER ♡",
    ornament: "✧ · ── ♡ ── · ✧"
  }
];

/* Page elements */
const cover = document.getElementById("cover");
const rightPage = document.getElementById("rightPage");
const rightContent = document.getElementById("rightContent");
const rightNumber = document.getElementById("rightNumber");

const openBookButton = document.getElementById("openBook");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const pageCounter = document.getElementById("pageCounter");

const letterDialog = document.getElementById("letterDialog");
const letterText = document.getElementById("letterText");
const closeLetterButton = document.getElementById("closeLetter");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");

let currentPage = 0;
let bookOpened = false;
let isTurningPage = false;

/* Escape HTML characters before inserting text into HTML. */
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

/* Build a photograph and its handwritten caption. */
function createMemory(group, index) {
  const photo = memories[group]?.[index];

  if (!photo) return "";

  return `
    <div class="photo-wrap">
      <img
        class="memory-photo"
        src="images/memories/${escapeHTML(photo.photo)}"
        alt="A memory from our scrapbook"
        loading="lazy"
      >
    </div>
    <p class="photo-note">${escapeHTML(photo.note)}</p>
  `;
}

/* Build the contents of an individual scrapbook page. */
function buildPage(page) {
  let html = "";

  if (page.eyebrow) {
    html += `<p class="eyebrow">${escapeHTML(page.eyebrow)}</p>`;
  }

  if (page.title) {
    const headingClass = page.script
      ? "script-heading"
      : "page-heading";

    html += `<h2 class="${headingClass}">${escapeHTML(page.title)}</h2>`;
  }

  if (page.text) {
    html += `<p class="page-copy">${escapeHTML(page.text)}</p>`;
  }

if (page.extraText) {
  html += `<p class="page-copy">${escapeHTML(page.extraText)}</p>`;
}

  if (page.photoGroup) {
    html += createMemory(page.photoGroup, page.photoIndex ?? 0);
  }

  if (page.hiddenMessage) {
    html += `
      <button
        class="hidden-note"
        data-hidden-message="${escapeHTML(page.hiddenMessage)}"
        type="button"
      >tap here for a little secret ♡</button>
    `;
  }

  if (page.envelope) {
    html += `
      <button
        class="envelope"
        id="openLetter"
        aria-label="Open your letter"
        type="button"
      ></button>
      <p class="page-copy">A little something, from my heart.</p>
    `;
  }

  if (page.isFinalPage) {
    html += `
      <img
        class="signature-stamp"
        src="images/chittichinnu/chittichinnu-stamp.png"
        alt="ChittiChinnu love stamp"
        loading="eager"
      >
    `;
  }

  if (page.script) {
    html += `<p class="photo-note">${escapeHTML(page.script)}</p>`;
  }

  if (page.ornament) {
    html += `<p class="ornament">${escapeHTML(page.ornament)}</p>`;
  }

  return html;
}

/* Render the current page. */
function renderPage(animationClass = "") {
  const page = pages[currentPage];

  if (!page) return;

  rightPage.hidden = false;

  rightPage.classList.remove(
    "final-page",
    "turn-out",
    "turn-in"
  );

  if (page.isFinalPage) {
  rightPage.classList.add("final-page");

  const book = document.querySelector(".book");
  if (book) book.classList.add("final-book");
} else {
  const book = document.querySelector(".book");
  if (book) book.classList.remove("final-book");
}
  rightContent.innerHTML = buildPage(page);
   if (page.isFinalPage) {
  rightContent.querySelectorAll('.script-heading, .photo-note')
    .forEach(el => {
      el.style.setProperty(
        'font-family',
        "'Cormorant Garamond', serif",
        'important'
      );
      el.style.setProperty('font-style', 'normal', 'important');
    });
}

  rightNumber.textContent = String(currentPage + 1).padStart(2, "0");

  pageCounter.textContent = page.chapterLabel;

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;

  rightPage.classList.add("visible");

  if (animationClass) {
    rightPage.classList.add(animationClass);
  }

  const envelope = document.getElementById("openLetter");

  if (envelope) {
    envelope.addEventListener("click", openLetter);
  }

  rightContent.querySelectorAll("[data-hidden-message]").forEach(button => {
    button.addEventListener("click", () => {
      button.textContent = button.dataset.hiddenMessage;
      button.disabled = true;
      button.style.textDecoration = "none";
    });
  });

  const image = rightContent.querySelector(".memory-photo");

  if (image) {
    image.addEventListener("error", () => {
      const wrap = image.closest(".photo-wrap");
      if (wrap) wrap.style.display = "none";
    }, { once: true });
  }
}

/* Open the book cover. */
function openBook() {
  if (bookOpened) return;

  bookOpened = true;
  cover.classList.add("opened");

  window.setTimeout(() => {
    cover.hidden = true;
    renderPage("turn-in");
  }, 650);
}

openBookButton.addEventListener("click", openBook);

/* Animate navigation between pages. */
function turnToPage(nextIndex) {
  if (
    !bookOpened ||
    isTurningPage ||
    nextIndex < 0 ||
    nextIndex >= pages.length ||
    nextIndex === currentPage
  ) {
    return;
  }

  isTurningPage = true;

  const direction = nextIndex > currentPage ? "forward" : "back";

  rightPage.classList.remove("turn-in");
  rightPage.classList.add("turn-out");

  window.setTimeout(() => {
    currentPage = nextIndex;

    renderPage("turn-in");

    rightPage.style.transformOrigin =
      direction === "back" ? "right center" : "left center";

    window.setTimeout(() => {
      rightPage.classList.remove("turn-in");
      rightPage.style.transformOrigin = "left center";
      isTurningPage = false;
    }, 600);
  }, 390);
}

prevButton.addEventListener("click", () => {
  turnToPage(currentPage - 1);
});

nextButton.addEventListener("click", () => {
  turnToPage(currentPage + 1);
});

/* Open and close the letter popup. */

function openLetter(){
  letterText.innerHTML = `
    <p>${finalLetter.split("\n\n")[0]}</p>
    <div class="letter-memory-gallery">
      <figure>
        <img src="images/memories/m4.jpeg" alt="A special memory">
        <figcaption> i love this cute kido side of my baby ; i hope i'll always desever my kidoo₊˚⊹♡ ♡</figcaption>
      </figure>
      <figure>
        <img src="images/memories/m5.jpeg" alt="Another special memory">
        <figcaption> i'll always be craving for your kisses wheather it's online or offline ☺ </figcaption>
      </figure>
      <figure>
        <img src="images/memories/m6.jpeg" alt="A memory close to my heart">
        <figcaption>A moment I want to keep us forever like this ∞♡∞</figcaption>
      </figure>
    </div>
    <p>${finalLetter.split("\n\n").slice(1).join("\n\n").replace(/\n/g,"<br>")}</p>
  `;

  if(typeof letterDialog.showModal==="function"){
    if(!letterDialog.open)letterDialog.showModal();
  }else{
    letterDialog.setAttribute("open","");
  }
}

closeLetterButton.addEventListener("click", () => {
  if (typeof letterDialog.close === "function") {
    letterDialog.close();
  } else {
    letterDialog.removeAttribute("open");
  }
});

letterDialog.addEventListener("click", event => {
  if (event.target === letterDialog) {
    if (typeof letterDialog.close === "function") {
      letterDialog.close();
    } else {
      letterDialog.removeAttribute("open");
    }
  }
});

/* Background music. Keep the file at docs/music/18m.mp3. */
backgroundMusic.src = "music/18m.mp3";

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicToggle.textContent = "♫";
      musicToggle.title = "Pause music";
    } catch {
      musicToggle.textContent = "×";
      musicToggle.title = "Check that music/18m.mp3 exists";
    }
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "♫";
    musicToggle.title = "Play music";
  }
});

/* Keyboard navigation. */
document.addEventListener("keydown", event => {
  if (!bookOpened || letterDialog.open) return;

  if (event.key === "ArrowRight") {
    turnToPage(currentPage + 1);
  }

  if (event.key === "ArrowLeft") {
    turnToPage(currentPage - 1);
  }
});

/* Hide the unused left page for portrait-page mode. */
letterText.textContent = finalLetter;

const leftPage = document.getElementById("leftPage");

if (leftPage) {
  leftPage.hidden = true;
}


/* ===== PASSWORD GATE + PREVIEW COUNTDOWN ===== */
(() => {
  const gate = document.getElementById("passwordGate");
  const form = document.getElementById("passwordForm");
  const input = document.getElementById("bookPassword");
  const message = document.getElementById("passwordMessage");
  const preview = document.getElementById("previewGate");

  if (!gate || !form || !input || !message || !preview) return;

  const targetDate = new Date("2026-10-20T00:00:00+05:30").getTime();

  let timer = null;
  let previewShown = false;

  function openBookWhenReady() {
    if (Date.now() < targetDate) return;

    previewShown = false;
    preview.hidden = true;

    const cover = document.getElementById("cover");
    if (cover && !cover.hidden) {
      const openButton = document.getElementById("openBook");
      if (openButton) openButton.focus();
    }
  }

  function updatePreviewCountdown() {
    const remaining = targetDate - Date.now();

    const values = {
      previewDays: Math.max(0, Math.floor(remaining / 86400000)),
      previewHours: Math.max(0, Math.floor((remaining % 86400000) / 3600000)),
      previewMinutes: Math.max(0, Math.floor((remaining % 3600000) / 60000)),
      previewSeconds: Math.max(0, Math.floor((remaining % 60000) / 1000))
    };

    Object.entries(values).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = String(value).padStart(2, "0");
    });

    if (remaining <= 0) {
      clearInterval(timer);
      timer = null;
      preview.hidden = true;
      previewShown = false;
      document.body.classList.remove("locked");
      openBookWhenReady();
    }
  }

  function showPreview() {
    if (Date.now() >= targetDate) {
      document.body.classList.remove("locked");
      preview.hidden = true;
      const openButton = document.getElementById("openBook");
      if (openButton) openButton.focus();
      return;
    }

    previewShown = true;
    preview.hidden = false;
    updatePreviewCountdown();

    if (!timer) timer = setInterval(updatePreviewCountdown, 1000);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value.trim().toLowerCase() !== "book") {
      message.textContent = "Not quite, sweetheart. Try again ♡";
      gate.classList.remove("shake");
      void gate.offsetWidth;
      gate.classList.add("shake");
      input.select();
      return;
    }

    message.textContent = "The story is waiting for you ♡";
    input.disabled = true;

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;

    gate.classList.add("unlocked");

    window.setTimeout(() => {
      gate.remove();
      showPreview();
    }, 700);
  });

  // If the target date has already passed, don't show the preview gate.
  if (Date.now() >= targetDate) {
    document.body.classList.remove("locked");
    preview.hidden = true;
  }
})();

