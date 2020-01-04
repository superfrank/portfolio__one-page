window.onload = function() {
  const source = document.getElementById("entry-template").innerHTML;
  const template = Handlebars.compile(source);
  Handlebars.registerHelper("inc", function(index) {
    index++;
    return index;
  });
  const context = {
    projects: [
      {
        name: "The internet, but not as we know it",
        meta: ["Art Direction", "Design", "Front-end", "Illustration"],
        link:
          "https://www.theguardian.com/technology/ng-interactive/2019/jan/11/the-internet-but-not-as-we-know-it-life-online-in-china-russia-cuba-and-india",
        description:
          "A feature showcasing four illustrated examples of what the internet looks like across the globe. The project won a " +
          "<a href='https://www.dandad.org/awards/professional/2019/graphic-design/231385/the-guardian-the-internet-but-not-as-we-know-it/'>" +
          "D&AD Wooden Pencil, 2019" +
          "</a>" +
          " and was featured in " +
          "<a href='https://www.creativereview.co.uk/the-guardian-brings-the-worlds-internet-use-to-life-in-animated-feature/'>" +
          "Creative Review" +
          "</a>"
      },
      {
        name: "Air pollution may be damaging ‘every organ in your body’",
        meta: ["Art Direction", "Design", "Front-end", "Illustration"],
        link:
          "https://www.theguardian.com/environment/ng-interactive/2019/may/17/air-pollution-may-be-damaging-every-organ-and-cell-in-the-body-finds-global-review",
        description:
          "Using exclusive scientific research, users journey down the human body and learn how each organ is affected through illustration and animation. " +
          "<a href='https://twitter.com/DrMariaNeira/status/1129369951771480065'>" +
          "Shared" +
          "</a>" +
          " by the head of the World Health Organisation"
      },
      {
        name: "Welcome to the fastest-heating place on Earth",
        meta: ["Art Direction", "Design", "Front-end"],
        link:
          "https://www.theguardian.com/environment/ng-interactive/2019/jul/01/its-getting-warmer-wetter-wilder-the-arctic-town-heating-faster-than-anywhere",
        description:
          "A feature focused on the island of Svalbard, where temperatures have risen over 4C since 1971"
      },
      {
        name: "A complete guide to every player at the World Cup",
        meta: ["Art Direction", "Design", "Front-end", "Illustration"],
        link:
          "https://www.theguardian.com/football/ng-interactive/2018/jun/05/world-cup-2018-complete-guide-players-ratings-goals-caps",
        description:
          "A mammoth project of mini-bios on all 736 players at the 2018 World Cup, Russia. " +
          "<a href='https://www.reddit.com/r/soccer/comments/8opsc5/the_guardians_wonderful_guide_to_every_team_and/'>" +
          "Featured on reddit" +
          "</a>" +
          ' and bizarrely described by a coworker as “One of the greatest things that’s happened in my life"'
      },
      {
        name: "How populist are you?",
        meta: ["Art Direction", "Design", "Front-end"],
        link:
          "https://www.theguardian.com/world/ng-interactive/2018/nov/21/how-populist-are-you-quiz",
        description:
          "With over 1.2 million page views in 48hrs, the quiz shows which World Leader you're least and most similar to. 33% of users were tied closely to Obama and 1% were most like Trump"
      },
      {
        name: "The lives of Grenfell Tower",
        meta: ["Art Direction", "Design", "Front-end"],
        link:
          "https://www.theguardian.com/uk-news/ng-interactive/2018/may/14/lives-of-grenfell-tower-victims-fire",
        description:
          "A visual memorial to all 72 victims who died in the Grenfell Tower fire"
      }
    ]
  };
  const output = template(context);
  document.getElementById("one-page").innerHTML = output;
};

window.addEventListener("load", function() {
  var delay = 2;
  var nodes = document.querySelectorAll(".animate");
  for (var i = 0; i < nodes.length; i++) {
    var words = nodes[i].innerText.split(" ");
    nodes[i].innerHTML = "";
    for (var i2 = 0; i2 < words.length; i2++) {
      var item = document.createElement("span");
      item.innerText = words[i2];
      var calc = delay + (nodes.length + i2) / 3;
      item.style.animationDelay = calc + "s";
      nodes[i].appendChild(item);
    }
  }
});
