const ipsum = ['Lanyard me ballast maroon scourge of the seven seas log walk the plank cutlass bilge rat coffer. Coffer Pirate Round landlubber or just lubber skysail coxswain bowsprit sutler snow booty cable. Handsomely run a shot across the bow spike hearties pirate barque snow quarterdeck Jack Ketch American Main. ',
'Oat cake tootsie roll bonbon macaroon pastry powder topping gummies. Jelly-o tart chocolate cake. Croissant liquorice lemon drops gummi bears halvah lollipop. Icing macaroon marshmallow cupcake cookie jelly beans. Sweet roll dragée biscuit chocolate icing brownie. Candy canes dessert donut.',
'Cottage cheese everyone loves edam. Pecorino pecorino cheeseburger bavarian bergkase taleggio cheesecake cheesy grin cream cheese. Stilton swiss parmesan blue castello cheeseburger say cheese everyone loves say cheese. Cheesy grin melted cheese fromage mascarpone cheese and wine.',
'I am baby direct trade bicycle rights man bun, mlkshk cloud bread asymmetrical normcore narwhal slow-carb flexitarian synth you probably have not heard of them chillwave. Paleo mixtape thundercats salvia, twee la croix scenester irony plaid raw denim venmo. La croix YOLO pitchfork taxidermy paleo.',
'Cc me on that organic growth circle back. Please advise soonest. You must be muted closing these latest prospects is like putting socks on an octopus, so ensure to follow requirements when developing solutions. You gotta smoke test your hypothesis commitment to the cause or proceduralize.'];

const form = document.querySelector(".alt-form");
const number = document.getElementById("number");
const result = document.querySelector(".alt-text");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = parseInt(number.value);
  const random = Math.floor(Math.random() * ipsum.length);

  if (isNaN(value) || value < 1 || value > 5) {
    result.innerHTML = `<p class="result">${ipsum[random]}</p>`;
  } else {
    let tempIpsum = ipsum.slice(0, value);
    tempIpsum = tempIpsum
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempIpsum;
  }
});
