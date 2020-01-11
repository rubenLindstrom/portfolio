$(document).ready(() => {
  const navBackgroundOnScroll = () => {
    const nav = $("nav");
    const navLinks = $(".nav-item > a");
    const [homeLink, aboutLink, workLink, contactLink] = navLinks;

    const halfWindowHeight = $(window).height() / 2;
    const aboutBreakpoint = $("#about").offset().top - halfWindowHeight;
    const workBreakpoint = $("#work").offset().top - halfWindowHeight;
    const contactBreakpoint = $("#contact").offset().top - halfWindowHeight;

    const hostingIcon = $("#hosting-service");
    const developmentIcon = $("#development-service");
    const supportIcon = $("#support-service");

    const icons = [hostingIcon, developmentIcon, supportIcon];

    const checkScroll = () => {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > 10) {
        nav.addClass("scrolled");
      } else {
        nav.removeClass("scrolled");
      }
      return scrollTop;
    };

    $(window).scroll(() => {
      // *** Show / Hide background ***
      const scrollTop = checkScroll();

      // *** Highlight active view ***
      if (scrollTop > contactBreakpoint) {
        $(contactLink).addClass("active");
        $(workLink).removeClass("active");
        $(aboutLink).removeClass("active");
        $(homeLink).removeClass("active");
      } else if (scrollTop > workBreakpoint) {
        $(workLink).addClass("active");
        $(contactLink).removeClass("active");
        $(aboutLink).removeClass("active");
        $(homeLink).removeClass("active");
      } else if (scrollTop > aboutBreakpoint) {
        $(aboutLink).addClass("active");
        $(contactLink).removeClass("active");
        $(workLink).removeClass("active");
        $(homeLink).removeClass("active");
      } else {
        $(homeLink).addClass("active");
        $(contactLink).removeClass("active");
        $(workLink).removeClass("active");
        $(aboutLink).removeClass("active");
      }
    });
  };

  navBackgroundOnScroll();
  setUpModals();
  $(window).on("resize", navBackgroundOnScroll);
});
