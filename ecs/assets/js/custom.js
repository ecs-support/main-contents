$(document).ready(function () {
  // Fix Hugo's auto-generated Table of Contents.
  //   Must be performed prior to initializing ScrollSpy.

  $("#TableOfContents > ul > li > ul").unwrap().unwrap();
  $("#TableOfContents").addClass("nav flex-column");
  $("#TableOfContents li").addClass("nav-item");
  $("#TableOfContents li a").addClass("nav-link")
})


/* ---------------------------------------------------------------------------
   *    <summary>
   * --------------------------------------------------------------------------- */
const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
  summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
  summaries.forEach((summary) => {
    let detail = summary.parentNode;
      if (detail != this.parentNode) {
        detail.removeAttribute('open');
      }
    });
}


/* ---------------------------------------------------------------------------
   *    <accordion>
   * --------------------------------------------------------------------------- */
const accordions = document.querySelectorAll('accordion_2');


accordions.forEach((accordion_2) => {
  const icon = accordions.querySelector("#accordion-icon");
  summary.addEventListener('click', closeOpenedDetails);

});

function closeOpenedDetails() {
  accordions.forEach((accordion_2) => {
    let detail = accordion_2.parentNode;
      if (detail != this.parentNode) {
        detail.removeAttribute('open');
      }
    });
}