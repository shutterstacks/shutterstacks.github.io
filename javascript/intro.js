//button click event
function replace(text) {
  text.innerHTML = "Le navigateur web affiche seulement le texte noir sur l'écran, le reste sert à la structure. Le texte mauve indique le type d'élément et le texte vert indique un attribut de l'élément, qui comprend une valeur. Chaque élément a une balise d'ouverture et une balise de fermeture. Pour donner un exemple, le paragraphe que vous êtes en train de lire est entouré des balises &ltp&gt et &lt/p&gt, qui veulent dire paragraphe. Il a aussi un attribut id=\"banane\" , cela lui assigne l'identifiant banane. Un identifiant permet de modifier l'élément en question sans affecter le reste des éléments du même type. Avec JavaScript, il est possible de modifier le contenu d'éléments html directement dans le navigateur. Pour faire cela, il vous faudra accéder à la console JavaScript en faisant Ctrl-Shift-J (Windows/Linux) ou Cmd+Opt+J (Mac). Notez que la console ne sera pas assessible si vous utilisez un téléphone intelligent. Une fois là, entrez le texte suivant dans la console :"
}
//object example
let Arbre = {
  fruit:"Pomme",
  tailleEnMètres:10,
  âge:50,
  nom: function() {
        alert("Le nom de l'arbre est Arbre 1.");
    }
};
//progress bar
let progress = document.getElementById("bar");
window.addEventListener('scroll', function() {
  let max = document.body.clientHeight - window.innerHeight;
  let value = window.pageYOffset;
  document.getElementById("bar").max = max;
  document.getElementById("bar").value = value;
});
//all headers and sidenav links into 2 arrays
let p = [document.getElementById("p1"), document.getElementById("p2"),
document.getElementById("p3"),
document.getElementById("p4"),
document.getElementById("p5"),
document.getElementById("p6"),
document.getElementById("p7")];
let a = [document.getElementById("a1"),
document.getElementById("a2"),
document.getElementById("a3"),
document.getElementById("a4"),
document.getElementById("a5"),
document.getElementById("a6")];
//function that colors grey passed links
function asdf(x) {
  if (window.pageYOffset > p[x+1].getBoundingClientRect().top + window.scrollY - 200) {  return a[x].style.color = "#aaa"
} else return a[x].style.color = ""
};
//on scroll, whenever you hover the link(green) or not(asdf)
document.addEventListener("scroll", function() {
try {
  for (let x = 0; x <= p.length; x++) {
    a[x].addEventListener("mouseover", function() {
      this.style.color = "#3ff936";
    });
    a[x].addEventListener("mouseout", function() {
    asdf(x);
    });
    asdf(x);
  }} catch(TypeError) {}
});
//sticky navigation for mobile
var menu = document.getElementById("menu");
var sticks = menu.offsetTop;
function sticky() {
  if (window.pageYOffset >= sticks) {
    menu.classList.add("stick");
  } else {
    menu.classList.remove("stick");
  }
}
document.addEventListener("scroll", sticky);
//javascript DOM example
let egg = document.getElementById("eggs");
eggs.onclick = function() {
let réponse = prompt("Entrez une couleur parmi les suivantes : cyan ou violet");
if(réponse === "cyan") {
eggs.style.color = "#00ffff";
} else if(réponse === "violet") {
eggs.style.color = "#ff00ff";
} else alert("Vous n'avez pas entré une couleur valide.");
};
//code for Défis
(function () {
  let button = document.getElementById("codeInput");
  let js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  button.onclick = function() {
    code.open();
    code.writeln(
"<p id=\"p\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><script>" +
        js.value +
        "</script>");
    code.close();
  };
})();
