// 참고 링크 https://dev.to/ornio/add-google-analytics-through-gtm-google-tag-manager-on-next-js-5e4f

export const GTMPageView = (url) => {

  const pageEvent = {
    event: 'pageview',
    page: url,
  };
  //@ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};