module.exports = (url, alt = "Missing alt text") => {
  return `<picture class="lazy lazy-initial">
  <source srcset="/images/tiny/${url}" media="(min-width: 3840px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 3200px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 2148px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 1920px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 1600px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 1366px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 1024px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 768px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 640px)">
  <source srcset="/images/tiny/${url}" media="(min-width: 320px)">
  <img src="/images/tiny/${url}" alt="${alt}" /></picture>`;
};