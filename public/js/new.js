const initVditor = (language) => {
  window.vditor = new Vditor("vditor", {
    cdn: "", //关键
    lang: language,
    height: window.innerHeight - 40,
    preview: {
      theme: {
        path: "/dist/css/content-theme", //关键
      },
    },
    hint: {
      emojiPath: "/dist/images/emoji", //关键
    },
    cache: {
      enable: false,
    },
  });
};
initVditor("zh_CN");
window.setLang = (language) => {
  window.vditor.destroy();
  initVditor(language);
};
