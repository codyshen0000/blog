(function () {
  "use strict";
  var root = document.documentElement;
  var btn = document.getElementById("theme");
  var nav = document.getElementById("nav");

  function isDark() {
    return root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function sync() {
    if (!btn) return;
    var dark = isDark();
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("title", dark ? "切换为浅色" : "切换为深色");
    btn.setAttribute("aria-label", dark ? "切换为浅色" : "切换为深色");
  }

  if (btn) {
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      sync();
    });
  }

  if (nav) {
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  sync();
})();
