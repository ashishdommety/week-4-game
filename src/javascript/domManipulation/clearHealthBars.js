export let clearHealthBars = () => {
  let healthBars = document.getElementById("health-bars-container");
  healthBars.parentNode.removeChild(healthBars);
};
