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

  // 提交表单时将编辑器的内容放到隐藏的 textarea 中
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    // 阻止默认提交行为
    e.preventDefault();
    // 将编辑器的内容放到隐藏的 textarea 中
    const markdown = window.vditor.getValue();
    const textarea = document.createElement("textarea");
    textarea.name = "markdown";
    textarea.style.display = "none";
    textarea.value = markdown;
    form.appendChild(textarea);
    // 提交表单
    form.submit();
  });

  // click
  const mkdn = document.querySelector(".mkdn");
  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", function () {
    mkdn.classList.toggle("active");
  });
};
initVditor("zh_CN");

initVditor()
