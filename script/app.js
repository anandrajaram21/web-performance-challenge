const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('marquee');

  // Load content immediately
  if (marqueeBar) {
    marqueeBar.innerHTML = CONTENT_BREAKING_NEWS;
  }

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  const cookieLayer = document.getElementById('cookie-layer');
  const acceptButton = document.getElementById('accept-cookies');

  if (!cookieLayer || !acceptButton) return;

  // Show cookie layer and prevent scrolling
  document.body.classList.add('no-scroll');

  // Handle accept button click
  acceptButton.addEventListener('click', () => {
    cookieLayer.classList.add('cookieLayer__base--accepted');
    document.body.classList.remove('no-scroll');
  });
};

const initApp = () => {
  const lazyLoadInstance = new LazyLoad();

  dynamicContent();
  cookieLayerInit();
  lazyLoadInstance.update();
};

initApp();