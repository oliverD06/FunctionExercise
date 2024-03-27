function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear()

function beaker(speak){
  console.log(`${speak}`);
  console.log(`${speak}`);
  console.log(`${speak}`);
  console.log(`${speak}`);
}
beaker(`Meep`)

function muppetShow(a, b) {
    if (a === 'Muppet' && b === 'Show') {
      console.log('It\'s time to play the music. It\'s time to light the lights.');
    }
  }
  muppetShow('Muppet', 'Show');

  function kermit() {
    return "Kermit The Frog";
  }
  console.log(kermit());

  function muppetShowSeasons(seasons) {
    if (seasons === 5) {
      return true;
    } else {
      return false;
    }
  }
  console.log(muppetShowSeasons(5));
  console.log(muppetShowSeasons(3));

  const manOrMuppet = function() {
    console.log("Am I a man or am I a Muppet?");
  };
  manOrMuppet();

  const rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
  console.log(rainbowConnection());

  // No

  let outerVariable = "initial value";
function updateOuterVariable() {
  outerVariable = "updated value";
}
updateOuterVariable();
console.log(outerVariable);

const newMuppetMovies = ["The Muppets", "Muppets Most Wanted"];
const upperMovies = newMuppetMovies.map(function(movie) {
    return movie.toUpperCase();
  });