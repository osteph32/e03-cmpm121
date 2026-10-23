// @deno-types="./asset-url.d.ts"
import hatUrl from "./assets/nicubunu_Adventurer_hat.svg?no-inline";
import bandageUrl from "./assets/bandagecross.svg?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "An adventurer wearing his hat and a bandage on hit cheek",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
mouth.setAttribute("d", "M 78 139 Q 103 153 125 132");
mouth.setAttribute("fill", "none");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// SVG: https://freesvg.org/adventure-hat-vector-illustration
const hatImage = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
hatImage.setAttribute("href", hatUrl);
hatImage.setAttribute("x", "20");
hatImage.setAttribute("y", "-10");
hatImage.setAttribute("width", "160");
hatImage.setAttribute("height", "100");
face.append(hatImage);

// SVG: https://freesvg.org/medical-bandage-cross
const bandageImage = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
bandageImage.setAttribute("href", bandageUrl);
bandageImage.setAttribute("x", "124");
bandageImage.setAttribute("y", "106");
bandageImage.setAttribute("width", "42");
bandageImage.setAttribute("height", "19");
bandageImage.setAttribute("transform", "rotate(-25 145 115.5)");
face.append(bandageImage);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
