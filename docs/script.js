
/* =====================================================
   18 MONTHS — us together ♡
   Main scrapbook settings
   Edit your photo notes and letter in this file.
===================================================== */

/* 1. YOUR MEMORY PHOTOS AND NOTES
   Keep photos inside: images/memories/
   Use the exact filename and extension.
*/

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
      note: "My birthday became more special because of you. ♡"
    },
    {
      photo: "28m2.jpeg",
      note: "One more memory I wish I could relive."
    }
  ],

  afterThreeDays: [
    {
      photo: "31m1.jpeg",
      note: "Three days later, and there we were again. ❤️"
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


/* 2. THE LONG LETTER
   Replace this sample text with your own message later.
*/

const finalLetter = `
Eighteen months of memories, little moments,
conversations, laughter, and everything in between.

Every memory has its own place in my heart.
Even the simplest days became special in their
own little way because they were part of us.

This is not the end of our story.
There are still so many moments waiting for us,
so many memories we haven't made yet.

And I hope we keep adding pages,
one little moment at a time. ♡
`;


/* 3. SCRAPBOOK CONTENT
   These nine spreads create 18 inside pages.
   Each spread contains a left and a right page.
*/

const spreads = [
  {
    label: "BEFORE WE BEGIN",
    left: {
      eyebrow: "A LITTLE NOTE",
      title: "Before we begin…",
      text: "Some stories don't need grand beginnings. Sometimes, they grow through little moments, familiar voices, and memories that slowly become everything.",
      ornament: "✧ · ♡ · ✧"
    },
    right: {
      eyebrow: "18 MONTHS",
      title: "Our little world",
      text: "Eighteen months of us. Not just the big days, but all the little things that made this journey ours.",
      script: "And we're still writing…"
    }
  },

  {
    label: "OUR FIRST YEAR",
    left: {
      eyebrow: "CHAPTER ONE",
      title: "The beginning",
      text: "Our first year was filled with little moments that became big memories. We found our own ways to care, to laugh, to miss each other, and to keep choosing us. And somehow, one memory at a time, we made a little world of our own.",
      ornament: "♡"
    },
    right: {
      eyebrow: "A MEMORY TO KEEP",
      title: "A piece of us",
      photoGroup: "general",
      photoIndex: 0
    }
  },

  {
    label: "HYDERABAD",
    left: {
      eyebrow: "A MEMORY FROM OUR JOURNEY",
      title: "Hyderabad days",
      text: "Distance changed some of our routines, but it never made our moments together any less special.",
      ornament: "✧"
    },
    right: {
      eyebrow: "TOGETHER AGAIN",
      title: "That little moment",
      photoGroup: "hyderabad",
      photoIndex: 0
    }
  },

  {
    label: "LITTLE MOMENTS",
    left: {
      eyebrow: "KEPT BETWEEN THESE PAGES",
      title: "Another memory",
      photoGroup: "hyderabad",
      photoIndex: 1
    },
    right: {
      eyebrow: "THE LITTLE THINGS",
      title: "Our kind of happiness",
      photoGroup: "general",
      photoIndex: 1
    }
  },

  {
    label: "JAGTIAL DAYS",
    left: {
      eyebrow: "A DAY TO REMEMBER",
      title: "A little adventure",
      text: "A place becomes special in a different way when it holds a memory of us. Jagtial will always be part of this chapter.",
      ornament: "♡ · ✧ · ♡"
    },
    right: {
      eyebrow: "A DAY WITH YOU",
      title: "Saved in my heart",
      photoGroup: "general",
      photoIndex: 2
    }
  },

  {
    label: "YOUR BIRTHDAY",
    left: {
      eyebrow: "A DAY THAT MATTERED",
      title: "Birthday memories",
      text: "Some birthdays are remembered for the day itself. Some are remembered for the person who made them feel different.",
      ornament: "♡"
    },
    right: {
      eyebrow: "ONE OF MY FAVOURITES",
      title: "That day with you",
      photoGroup: "birthday",
      photoIndex: 0
    }
  },

  {
    label: "THREE DAYS LATER",
    left: {
      eyebrow: "AND THEN WE MET AGAIN",
      title: "Just three days later",
      text: "Sometimes, even a short wait makes seeing someone again feel extra special. This was another little moment for our collection.",
      ornament: "✧ ♡ ✧"
    },
    right: {
      eyebrow: "ANOTHER PAGE OF US",
      title: "Together, again",
      photoGroup: "afterThreeDays",
      photoIndex: 0
    }
  },

  {
    label: "OUR LITTLE THINGS",
    left: {
      eyebrow: "THE THINGS THAT STAY",
      title: "The little details",
      text: "Not every memory needs a big story. Some deserve a place here simply because they mean something to us.",
      ornament: "♡"
    },
    right: {
      eyebrow: "TAP THE LITTLE NOTE",
      title: "A tiny secret",
      photoGroup: "afterThreeDays",
      photoIndex: 1,
      hiddenMessage: "Some moments are small to everyone else, but mean the world to me. ♡"
    }
  },

  {
    label: "TO BE CONTINUED",
    left: {
      eyebrow: "ONE LAST THING",
      title: "A letter for you",
      text: "There are some things I'd rather leave in a letter, just for you.",
      envelope: true,
      ornament: "♡"
    },
    right: {
      eyebrow: "18 MONTHS AND COUNTING",
      title: "To be continued…",
      text: "This book holds some of our memories, but our story is still going.",
      script: "Infinite little moments more. ♡",
      ornament: "✧ · ── ♡ ── · ✧"
    }
  }
];


/* 4. PAGE ELEMENTS */

const book = document.getElementById("book");
const cover = document.getElementById("cover");

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");

const leftNumber = document.getElementById("leftNumber");
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

let currentSpread = 0;
let bookOpened = false;


/* 5. HELPER: ESCAPE TEXT BEFORE PUTTING IT INTO HTML */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}


/* 6. BUILD A PHOTO AND ITS EDITABLE NOTE */

function createMemory(group, index) {
  const photo = memories[group]?.[index];

  if (!photo) {
    return `
      <p class="page-copy">
        Add a photo and note in the memories section
        at the top of script.js.
      </p>
    `;
  }

  const src = `images/memories/${photo.photo}`;

  return `
    <div class="photo-wrap">
      <img
        class="memory-photo"
        src="${escapeHTML(src)}"
        alt="A memory from our scrapbook"
        loading="lazy"
        onerror="this.closest('.photo-wrap').style.display='none'"
      >
    </div>
    <p class="photo-note">${escapeHTML(photo.note)}</p>
  `;
}


/* 7. BUILD A PAGE */

function buildPage(page, pageSide) {
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

  if (page.photoGroup) {
    html += createMemory(page.photoGroup, page.photoIndex ?? 0);
  }

  if (page.hiddenMessage) {
    html += `
      <button class="hidden-note" data-hidden-message="${escapeHTML(page.hiddenMessage)}">
        tap here for a little secret ♡
      </button>
    `;
  }

  if (page.envelope) {
    html += `
      <button class="envelope" id="openLetter" aria-label="Open your letter"></button>
      <p class="page-copy">A little something, from my heart.</p>
    `;
  }

  if (page.ornament) {
    html += `<p class="ornament">${escapeHTML(page.ornament)}</p>`;
  }

  return html;
}


/* 8. DISPLAY THE CURRENT SPREAD */

function renderSpread() {
  const spread = spreads[currentSpread];

  leftContent.innerHTML = buildPage(spread.left, "left");
  rightContent.innerHTML = buildPage(spread.right, "right");

  leftNumber.textContent = String(currentSpread * 2 + 1).padStart(2, "0");
  rightNumber.textContent = String(currentSpread * 2 + 2).padStart(2, "0");

  leftPage.classList.add("visible");
  rightPage.classList.add("visible");

  pageCounter.textContent = spread.label;

  prevButton.disabled = currentSpread === 0;
  nextButton.disabled = currentSpread === spreads.length - 1;

  const envelopeButton = document.getElementById("openLetter");

  if (envelopeButton) {
    envelopeButton.addEventListener("click", openLetter);
  }

  document.querySelectorAll("[data-hidden-message]").forEach(button => {
    button.addEventListener("click", () => {
      const message = button.dataset.hiddenMessage;
      button.textContent = message;
      button.disabled = true;
      button.style.textDecoration = "none";
    });
  });
}


/* 9. OPEN THE BOOK */

function openBook() {
  if (bookOpened) return;

  bookOpened = true;
  cover.classList.add("opened");

  window.setTimeout(() => {
    cover.style.display = "none";
    renderSpread();
  }, 650);
}

openBookButton.addEventListener("click", openBook);


/* 10. TURN PAGES */

function turnToSpread(nextIndex) {
  if (!bookOpened) return;

  if (nextIndex < 0 || nextIndex >= spreads.length) return;

  leftPage.classList.remove("visible");
  rightPage.classList.remove("visible");

  window.setTimeout(() => {
    currentSpread = nextIndex;
    renderSpread();
  }, 180);
}

prevButton.addEventListener("click", () => {
  turnToSpread(currentSpread - 1);
});

nextButton.addEventListener("click", () => {
  turnToSpread(currentSpread + 1);
});


/* 11. SEALED LETTER */

function openLetter() {
  letterText.textContent = finalLetter;

  if (typeof letterDialog.showModal === "function") {
    letterDialog.showModal();
  } else {
    letterDialog.setAttribute("open", "");
  }
}

closeLetterButton.addEventListener("click", () => {
  letterDialog.close();
});

letterDialog.addEventListener("click", event => {
  if (event.target === letterDialog) {
    letterDialog.close();
  }
});


/* 12. MUSIC
   Add music/18m.mp3 when you're ready.
*/

backgroundMusic.src = "music/18m.mp3";

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicToggle.textContent = "♫";
      musicToggle.title = "Pause music";
    } catch {
      musicToggle.textContent = "×";
      musicToggle.title = "Music file not added yet";
    }
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "♫";
    musicToggle.title = "Play music";
  }
});


/* 13. KEYBOARD NAVIGATION */

document.addEventListener("keydown", event => {
  if (!bookOpened || letterDialog.open) return;

  if (event.key === "ArrowRight") {
    turnToSpread(currentSpread + 1);
  }

  if (event.key === "ArrowLeft") {
    turnToSpread(currentSpread - 1);
  }
});


/* 14. READY */

letterText.textContent = finalLetter;
