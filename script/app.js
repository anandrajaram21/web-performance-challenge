const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively."
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const closeBox = () => {
  document.body.classList.remove('no-scroll');
  document.querySelector('.cookieLayer__base').classList.add('cookieLayer__base--hidden');
};

const acceptCookies = () => {
  // do sth to accept
  closeBox();
};

const declineCookies = () => {
  // do sth to decline
  closeBox();
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('#breaking-news');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  const template = `<div class="cookieLayer__base">
    <div class="cookieLayer__content">
      <h2 class="cookieLayer__title">Do you like cookies ?</h2>
      <button class="cookieLayer__button" onclick="acceptCookies()">Cookie monster in da house</button>
      <button class="cookieLayer__button" onclick="declineCookies()">Nope, not a fan</button>
    </div>
  </div>`;

  const cookieNotice = document.querySelector('#cookie-notice');
  cookieNotice.innerHTML = template;
};

const layoutTrashing = (n) => {
  for (let i = 0; i < n; i++) {
    const container = document.querySelector('header');
    console.log(container.clientTop);
  }
};

const initApp = () => {
  layoutTrashing(20);
  dynamicContent();
  cookieLayerInit();
};

initApp();