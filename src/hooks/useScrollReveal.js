import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver + MutationObserver to a container.
 * Any element with [data-reveal] inside the container animates in when
 * it enters the viewport. Works with:
 *  - Static content (standard scroll reveal)
 *  - Dynamic content (async fetches, tab switches) via MutationObserver
 *  - In-viewport content (immediately visible on mount / tab switch)
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = "0px 0px -60px 0px",
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Intersection Observer ---
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    /**
     * Observe a single [data-reveal] element.
     * If the element is already in the viewport (e.g. section is visible
     * when a tab switches or async data loads), animate it immediately
     * using the element's own data-delay attribute for stagger.
     */
    const observe = (el, inViewportOverride = false) => {
      if (el.classList.contains("reveal-visible")) return;

      const rect = el.getBoundingClientRect();
      const alreadyVisible =
        inViewportOverride ||
        (rect.top < window.innerHeight && rect.bottom > 0);

      if (alreadyVisible) {
        // Parse the element's own stagger delay (data-delay="200")
        const delay = parseInt(el.dataset.delay ?? "0", 10) + 20;
        setTimeout(() => el.classList.add("reveal-visible"), delay);
      } else {
        io.observe(el);
      }
    };

    // Observe everything already in the container
    container.querySelectorAll("[data-reveal]").forEach((el) => observe(el));

    // --- Mutation Observer (watches for newly added elements) ---
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          if (node.matches?.("[data-reveal]")) observe(node, true);
          node.querySelectorAll?.("[data-reveal]").forEach((el) =>
            observe(el, true)
          );
        });
      });
    });

    mo.observe(container, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [threshold, rootMargin]);

  return containerRef;
}
