const moonPad =
  "M17 27.2499C17 42.1616 27 54.2499 27 54.2499C12.0883 54.2499 0 42.1616 0 27.2499C0 12.3383 12.0883 0.249947 27 0.249947C27 0.249947 17 12.3383 17 27.2499Z";
const sunPad =
  "M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;
//we need to click in the SUN
darkMode.addEventListener("click", () => {
  //we set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  //ad different animation to time line
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPad : moonPad }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 360,
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(225,225,225)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(rgb(22, 22, 22)" : "rgb(225,225,225)",
      },
      "-= 650"
    );
  // switch toggle to turn on the sun mode
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
