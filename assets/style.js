// Initialize font properties
const fontname = "Barlow";
const fontweights = [300, 400]

// Color properties
const basecolor = "#5a5a5a";
const accentcolor = "#222";
const highlightcolor = "#111";

// const basecolor = "#888";
// const accentcolor = "#222";
// const highlight = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = accentcolor;
const adecoration = "none";
// const ahovercolor = accentcolor;
// const ahoverduration = "0.3s";
// const ahoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Menu properties
const menucolor = basecolor;
const menufontsize = "16pt";
const menudecoration = "none";
const menupadding = "4px";
// const menuhover = accentcolor;
// const menuhoverduration = "0.3s";
// const menuhoverdecoration = "none"; //none, underline, overline, dotted, color (https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

// Header properties
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = accentcolor;
const namefontsize = "26pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = accentcolor;
const insttitlesize = "14px";
const instyearcolor = accentcolor;
const instyearsize = "14px";

//     .institution {
//             font - size: 12px;
//             color: #222;
//         }
//   .years {
//             font - size: 11px;
//             color: #888;
//         }

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

// $(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);
$(".menulink").css("padding-bottom", menupadding);

$(".header").css("color", headercolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", namecolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", ptitlecolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", selfcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", insttitlecolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", instyearcolor);
$(".years").css("font-size", instyearsize);


/* Keep image hover previews inside the viewport */
document.querySelectorAll(".keyboard-hover, .standup-hover").forEach(wrapper => {
    const preview = wrapper.querySelector(".keyboard-preview, .standup-preview");
    const link = wrapper.querySelector("a");
    if (!preview || !link) return;

    function positionPreview() {
        const anchor = link.getBoundingClientRect();
        const image = preview.getBoundingClientRect();
        const margin = 12;

        const clamp = (value, min, max) =>
            Math.max(min, Math.min(value, max));

        // Center above the link, without crossing screen edges.
        const left = clamp(
            anchor.left + anchor.width / 2 - image.width / 2,
            margin,
            window.innerWidth - image.width - margin
        );

        // Prefer above; flip below if necessary.
        const above = anchor.top - image.height - margin;
        const below = anchor.bottom + margin;

        const top = above >= margin
            ? above
            : below + image.height <= window.innerHeight - margin
                ? below
                : clamp(above, margin, window.innerHeight - image.height - margin);

        preview.style.left = `${left}px`;
        preview.style.top = `${top}px`;
    }

    wrapper.addEventListener("pointerenter", positionPreview);
    wrapper.addEventListener("focusin", positionPreview);
    preview.addEventListener("load", positionPreview);

    window.addEventListener("resize", positionPreview);
    window.addEventListener("scroll", () => {
        if (wrapper.matches(":hover") || wrapper.contains(document.activeElement)) {
            positionPreview();
        }
    }, { passive: true });
});
