module.exports = (url, alt = "Missing alt text") => {
  return `<picture>
  <source srcset="/images/${url}?nf_resize=fit&w=3840" media="(min-width: 3840px)">
  <source srcset="/images/${url}?nf_resize=fit&w=3200" media="(min-width: 3200px)">
  <source srcset="/images/${url}?nf_resize=fit&w=2148" media="(min-width: 2148px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1920" media="(min-width: 1920px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1600" media="(min-width: 1600px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1366" media="(min-width: 1366px)">
  <source srcset="/images/${url}?nf_resize=fit&w=1024" media="(min-width: 1024px)">
  <source srcset="/images/${url}?nf_resize=fit&w=768" media="(min-width: 768px)">
  <source srcset="/images/${url}?nf_resize=fit&w=640" media="(min-width: 640px)">
  <source srcset="/images/${url}?nf_resize=fit&w=320" media="(min-width: 320px)">
  <img src="/images/${url}?nf_resize=fit&w=150" alt="${alt}" />
</picture>`;
};