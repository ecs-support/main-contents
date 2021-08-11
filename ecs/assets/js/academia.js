/*************************************************
 *  academia
 *  https://github.com/gcushen/hugo-academia
 *
 *  Core JS functions and initialization.
 **************************************************/

(function ($) {
  /* ---------------------------------------------------------------------------
   * Responsive scrolling for URL hashes.
   * --------------------------------------------------------------------------- */

  // Dynamically get responsive navigation bar offset.
  var $navbar = $(".navbar");
  var navbar_offset = $navbar.innerHeight();

  /**
   * Responsive hash scrolling.
   * Check for a URL hash as an anchor.
   * If it exists on current page, scroll to it responsively.
   * If `target` argument omitted (e.g. after event), assume it's the window's hash.
   */
  function scrollToAnchor(target) {
    // If `target` is undefined or HashChangeEvent object, set it to window's hash.
    target =
      typeof target === "undefined" || typeof target === "object"
        ? window.location.hash
        : target;
    // Escape colons from IDs, such as those found in Markdown footnote links.
    target = target.replace(/:/g, "\\:");

    // If target element exists, scroll to it taking into account fixed navigation bar offset.
    if ($(target).length) {
      $("body").addClass("scrolling");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - navbar_offset,
        },
        600,
        function () {
          $("body").removeClass("scrolling");
        }
      );
    }
  }

  // Make Scrollspy responsive.
  function fixScrollspy() {
    var $body = $("body");
    var data = $body.data("bs.scrollspy");
    if (data) {
      data._config.offset = navbar_offset;
      $body.data("bs.scrollspy", data);
      $body.scrollspy("refresh");
    }
  }

  function removeQueryParamsFromUrl() {
    if (window.history.pushState) {
      var urlWithoutSearchParams =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.hash;
      window.history.pushState(
        {
          path: urlWithoutSearchParams,
        },
        "",
        urlWithoutSearchParams
      );
    }
  }

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }


    var colla = document.getElementsByClassName("ollapse");
    var i;

    for (i = 0; i < colla.length; i++) {
      colla[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }



  // Check for hash change event and fix responsive offset for hash links (e.g. Markdown footnotes).
  window.addEventListener("hashchange", scrollToAnchor);

  /* ---------------------------------------------------------------------------*/
  //  Add smooth scrolling to all links inside the main navbar.
   /* --------------------------------------------------------------------------- */

  // animation scroll js
  var html_body = $("html, body");
  $("nav a, .page-scroll").on("click", function () {
    //use page-scroll class in any HTML tag for scrolling
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name="' + this.hash.slice(1) + '"]');
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - navbar_offset,
          },
          1500,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // easeInOutExpo Declaration
  jQuery.extend(jQuery.easing, {
    easeInOutExpo: function (x, t, b, c, d) {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
      }
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    },
  });

  /* ---------------------------------------------------------------------------*/
  /* Hide mobile collapsable menu on clicking a link.  */
  /* ---------------------------------------------------------------------------*/

  $(document).on("click", ".navbar-collapse.show", function (e) {
    //get the <a> element that was clicked, even if the <span> element that is inside the <a> element is e.target
    var targetElement = $(e.target).is("a")
      ? $(e.target)
      : $(e.target).parent();

    if (
      targetElement.is("a") &&
      targetElement.attr("class") != "dropdown-toggle"
    ) {
      $(this).collapse("hide");
    }
  });

  /* --------------------------------------------------------------------------- */
//   Filter publications.         
   /* --------------------------------------------------------------------------- */

  // Active publication filters.
  var pubFilters = {};

  // Search term.
  var searchRegex;

  // Filter values (concatenated).
  var filterValues;

  // Publication container.
  var $grid_pubs = $("#container-publications");

  // Initialise Isotope.
  $grid_pubs.isotope({
    itemSelector: ".isotope-item",
    percentPosition: true,
    masonry: {
      // Use Bootstrap compatible grid layout.
      columnWidth: ".grid-sizer",
    },
    filter: function () {
      var $this = $(this);
      var searchResults = searchRegex ? $this.text().match(searchRegex) : true;
      var filterResults = filterValues ? $this.is(filterValues) : true;
      return searchResults && filterResults;
    },
  });

  // Filter by search term.
  var $quickSearch = $(".filter-search").keyup(
    debounce(function () {
      searchRegex = new RegExp($quickSearch.val(), "gi");
      $grid_pubs.isotope();
    })
  );

  // Debounce input to prevent spamming filter requests.
  function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;

      function delayed() {
        fn.apply(_this, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  }

  // Flatten object by concatenating values.
  function concatValues(obj) {
    var value = "";
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }

  $(".pub-filters").on("change", function () {
    var $this = $(this);

    // Get group key.
    var filterGroup = $this[0].getAttribute("data-filter-group");

    // Set filter for group.
    pubFilters[filterGroup] = this.value;

    // Combine filters.
    filterValues = concatValues(pubFilters);

    // Activate filters.
    $grid_pubs.isotope();

    // If filtering by publication type, update the URL hash to enable direct linking to results.
    if (filterGroup == "pubtype") {
      // Set hash URL to current filter.
      var url = $(this).val();
      if (url.substr(0, 9) == ".pubtype-") {
        window.location.hash = url.substr(9);
      } else {
        window.location.hash = "";
      }
    }
  });

  // Filter publications according to hash in URL.
  function filter_publications() {
    var urlHash = window.location.hash.replace("#", "");
    var filterValue = "*";

    // Check if hash is numeric.
    if (urlHash != "" && !isNaN(urlHash)) {
      filterValue = ".pubtype-" + urlHash;
    }

    // Set filter.
    var filterGroup = "pubtype";
    pubFilters[filterGroup] = filterValue;
    filterValues = concatValues(pubFilters);

    // Activate filters.
    $grid_pubs.isotope();

    // Set selected option.
    $(".pubtype-select").val(filterValue);
  }

  /* ---------------------------------------------------------------------------
   * Google Maps or OpenStreetMap via Leafvar.
   * --------------------------------------------------------------------------- */

  function initMap() {
    if ($("#map").length) {
      var map_provider = $("#map-provider").val();
      var lat = $("#map-lat").val();
      var lng = $("#map-lng").val();
      var zoom = parseInt($("#map-zoom").val());
      var address = $("#map-dir").val();
      var api_key = $("#map-api-key").val();

      if (map_provider == 1) {
        var map = new GMaps({
          div: "#map",
          lat: lat,
          lng: lng,
          zoom: zoom,
          zoomControl: true,
          zoomControlOpt: {
            style: "SMALL",
            position: "TOP_LEFT",
          },
          panControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          overviewMapControl: false,
          scrollwheel: true,
          draggable: true,
        });

        map.addMarker({
          lat: lat,
          lng: lng,
          click: function (e) {
            var url =
              "https://www.google.com/maps/place/" +
              encodeURIComponent(address) +
              "/@" +
              lat +
              "," +
              lng +
              "/";
            window.open(url, "_blank");
          },
          title: address,
        });
      } else {
        var map = new L.map("map").setView([lat, lng], zoom);
        if (map_provider == 3 && api_key.length) {
          L.tileLayer(
            "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
            {
              attribution:
                'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18,
              id: "mapbox.streets",
              accessToken: api_key,
            }
          ).addTo(map);
        } else {
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          }).addTo(map);
        }
        var marker = L.marker([lat, lng]).addTo(map);
        var url =
          lat +
          "," +
          lng +
          "#map=" +
          zoom +
          "/" +
          lat +
          "/" +
          lng +
          "&layers=N";
        marker.bindPopup(
          address +
            '<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route=' +
            url +
            '">Routing via OpenStreetMap</a></p>'
        );
      }
    }
  }

  /* ---------------------------------------------------------------------------*/
//  GitHub API.
   /* --------------------------------------------------------------------------- */

  function printLatestRelease(selector, repo) {
    $.getJSON("https://api.github.com/repos/" + repo + "/tags")
      .done(function (json) {
        var release = json[0];
        $(selector).append(" " + release.name);
      })
      .fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
      });
  }

  /* ---------------------------------------------------------------------------*/
   // Toggle search dialog.
   /* --------------------------------------------------------------------------- */

  function toggleSearchDialog() {
    if ($("body").hasClass("searching")) {
      $("[id=search-query]").blur();
      $("body").removeClass("searching");
      removeQueryParamsFromUrl();
    } else {
      $("body").addClass("searching");
      $(".search-results")
        .css({
          opacity: 0,
          visibility: "visible",
        })
        .animate(
          {
            opacity: 1,
          },
          200
        );
      $("#search-query").focus();
    }
  }

  /* ---------------------------------------------------------------------------*/
   // Toggle day/night mode.
   /* --------------------------------------------------------------------------- */

  function toggleDarkMode(
    codeHlEnabled,
    codeHlLight,
    codeHlDark,
    diagramEnabled
  ) {
    if ($("body").hasClass("dark")) {
      $("body")
        .css({
          opacity: 0,
          visibility: "visible",
        })
        .animate(
          {
            opacity: 1,
          },
          500
        );
      $("body").removeClass("dark");
      if (codeHlEnabled) {
        codeHlLight.disabled = false;
        codeHlDark.disabled = true;
      }
      $(".js-dark-toggle i").removeClass("fa-sun").addClass("fa-moon");
      localStorage.setItem("dark_mode", "0");
      if (diagramEnabled) {
        // TODO: Investigate Mermaid.js approach to re-render diagrams with new theme without reloading.
        location.reload();
      }
    } else {
      $("body")
        .css({
          opacity: 0,
          visibility: "visible",
        })
        .animate(
          {
            opacity: 1,
          },
          500
        );
      $("body").addClass("dark");
      if (codeHlEnabled) {
        codeHlLight.disabled = true;
        codeHlDark.disabled = false;
      }
      $(".js-dark-toggle i").removeClass("fa-moon").addClass("fa-sun");
      localStorage.setItem("dark_mode", "1");
      if (diagramEnabled) {
        // TODO: Investigate Mermaid.js approach to re-render diagrams with new theme without reloading.
        location.reload();
      }
    }
  }

  /* ---------------------------------------------------------------------------*/
  // Normalize Bootstrap Carousel Slide Heights.
 /*--------------------------------------------------------------------------- */

  function normalizeCarouselSlideHeights() {
    $(".carousel").each(function () {
      // Get carousel slides.
      var items = $(".carousel-item", this);
      // Reset all slide heights.
      items.css("min-height", 0);
      // Normalize all slide heights.
      var maxHeight = Math.max.apply(
        null,
        items
          .map(function () {
            return $(this).outerHeight();
          })
          .get()
      );
      items.css("min-height", maxHeight + "px");
    });
  }

  /* ---------------------------------------------------------------------------*/
   //  On document ready.
   /* --------------------------------------------------------------------------- */

  $(document).ready(function () {
    // Fix Hugo's auto-generated Table of Contents.
    //   Must be performed prior to initializing ScrollSpy.
    $("#TableOfContents > ul > li > ul").unwrap().unwrap();
    $("#TableOfContents").addClass("nav flex-column");
    $("#TableOfContents li").addClass("nav-item");
    $("#TableOfContents li a").addClass("nav-link");

    // Set dark mode if user chose it.
    var default_mode = 0;
    if ($("body").hasClass("dark")) {
      default_mode = 1;
    }
    var dark_mode = parseInt(localStorage.getItem("dark_mode") || default_mode);

    // Is code highlighting enabled in site config?
    const codeHlEnabled = $("link[title=hl-light]").length > 0;
    const codeHlLight = $("link[title=hl-light]")[0];
    const codeHlDark = $("link[title=hl-dark]")[0];
    const diagramEnabled = $("script[title=mermaid]").length > 0;

    if (dark_mode) {
      $("body").addClass("dark");
      if (codeHlEnabled) {
        codeHlLight.disabled = true;
        codeHlDark.disabled = false;
      }
      if (diagramEnabled) {
        mermaid.initialize({
          theme: "dark",
        });
      }
      $(".js-dark-toggle i").removeClass("fa-moon").addClass("fa-sun");
    } else {
      $("body").removeClass("dark");
      if (codeHlEnabled) {
        codeHlLight.disabled = false;
        codeHlDark.disabled = true;
      }
      if (diagramEnabled) {
        mermaid.initialize({
          theme: "default",
        });
      }
      $(".js-dark-toggle i").removeClass("fa-sun").addClass("fa-moon");
    }

    // Toggle day/night mode.
    $(".js-dark-toggle").click(function (e) {
      e.preventDefault();
      toggleDarkMode(codeHlEnabled, codeHlLight, codeHlDark, diagramEnabled);
    });
  });

  /* ---------------------------------------------------------------------------*/
  // * On window loaded.
   /* --------------------------------------------------------------------------- */

  $(window).on("load", function () {
    if (window.location.hash) {
      // When accessing homepage from another page and `#top` hash is set, show top of page (no hash).
      if (window.location.hash == "#top") {
        window.location.hash = "";
      } else if (!$(".projects-container").length) {
        // If URL contains a hash and there are no dynamically loaded images on the page,
        // immediately scroll to target ID taking into account responsive offset.
        // Otherwise, wait for `imagesLoaded()` to compvare before scrolling to hash to prevent scrolling to wrong
        // location.
        scrollToAnchor();
      }
    }

    // Initialize Scrollspy.
    var $body = $("body");
    $body.scrollspy({
      offset: navbar_offset,
    });

    // Call `fixScrollspy` when window is resized.
    var resizeTimer;
    $(window).resize(function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(fixScrollspy, 200);
    });

    // Filter projects.
    $(".projects-container").each(function (index, container) {
      var $container = $(container);
      var $section = $container.closest("section");
      var layout;
      if ($section.find(".isotope").hasClass("js-layout-row")) {
        layout = "fitRows";
      } else {
        layout = "masonry";
      }

      $container.imagesLoaded(function () {
        // Initialize Isotope after all images have loaded.
        $container.isotope({
          itemSelector: ".isotope-item",
          layoutMode: layout,
          masonry: {
            gutter: 20,
          },
          filter: $section.find(".default-project-filter").text(),
        });

        // Filter items when filter link is clicked.
        $section.find(".project-filters a").click(function () {
          var selector = $(this).attr("data-filter");
          $container.isotope({
            filter: selector,
          });
          $(this)
            .removeClass("active")
            .addClass("active")
            .siblings()
            .removeClass("active all");
          return false;
        });

        // If window hash is set, scroll to hash.
        // Placing this within `imagesLoaded` prevents scrolling to the wrong location due to dynamic image loading
        // affecting page layout and position of the target anchor ID.
        // Note: If there are multiple project widgets on a page, ideally only perform this once after images
        // from *all* project widgets have finished loading.
        if (window.location.hash) {
          scrollToAnchor();
        }
      });
    });

    // Enable publication filter for publication index page.
    if ($(".pub-filters-select")) {
      filter_publications();
      // Useful for changing hash manually (e.g. in development):
      // window.addEventListener('hashchange', filter_publications, false);
    }

    // Load citation modal on 'Cite' click.
    $(".js-cite-modal").click(function (e) {
      e.preventDefault();
      var filename = $(this).attr("data-filename");
      var modal = $("#modal");
      modal
        .find(".modal-body code")
        .load(filename, function (response, status, xhr) {
          if (status == "error") {
            var msg = "Error: ";
            $("#modal-error").html(msg + xhr.status + " " + xhr.statusText);
          } else {
            $(".js-download-cite").attr("href", filename);
          }
        });
      modal.modal("show");
    });

    // Copy citation text on 'Copy' click.
    $(".js-copy-cite").click(function (e) {
      e.preventDefault();
      // Get selection.
      var range = document.createRange();
      var code_node = document.querySelector("#modal .modal-body");
      range.selectNode(code_node);
      window.getSelection().addRange(range);
      try {
        // Execute the copy command.
        document.execCommand("copy");
      } catch (e) {
        console.log("Error: citation copy failed.");
      }
      // Remove selection.
      window.getSelection().removeRange(range);
    });

    // Initialise Google Maps if necessary.
    initMap();

    // Print latest version of GitHub projects.
    var githubReleaseSelector = ".js-github-release";
    if ($(githubReleaseSelector).length > 0)
      printLatestRelease(
        githubReleaseSelector,
        $(githubReleaseSelector).data("repo")
      );

    // On search icon click toggle search dialog.
    $(".js-search").click(function (e) {
      e.preventDefault();
      toggleSearchDialog();
    });
    $(document).on("keydown", function (e) {
      if (e.which == 27) {
        // `Esc` key pressed.
        if ($("body").hasClass("searching")) {
          toggleSearchDialog();
        }
      } else if (
        e.which == 191 &&
        e.shiftKey == false &&
        !$("input,textarea").is(":focus")
      ) {
        // `/` key pressed outside of text input.
        e.preventDefault();
        toggleSearchDialog();
      }
    });
  });

  // Normalize Bootstrap carousel slide heights.
  $(window).on("load resize orientationchange", normalizeCarouselSlideHeights);
})(jQuery);
