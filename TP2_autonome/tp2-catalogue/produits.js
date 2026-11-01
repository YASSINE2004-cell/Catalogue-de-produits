const produits = [
{
id : 1,
nom : "clavier",
catégorie : "accessoires",
prix : 120,
stock : 5,
}, 

{
id : 2,
nom : "souris",
catégorie : "accessoires",
prix : 80,
stock : 8,
},
{
id : 3,
nom : "écran",
catégorie : "informatique",
prix : 900,
stock : 0,
},
{
id : 4,
nom : "casque",
catégorie : "accessoires",
prix : 240,
stock : 3,
}
];
function estvalide(produits) {
return(
    Number.isFinite(produits.prix) &&
    produits.prix >= 0 &&
    Number.isFinite(produits.stock) &&
    produits.stock >= 0
);
}


console.log(produits)
const produit = produits.map((p)=>`le nom:${p.nom},le prix ${p.prix}`);
console.log(produit)


const disponible = produits.filter((p)=>p.stock>0);
console.log(`Nombre de produits disponibles : ${disponible.length}`)

const valeurstock = produits.reduce((total,p)=>total+p.prix*p.stock,0);
console.log(`Valeur du stock : ${valeurstock}`)

const disponibles = produits.filter((p)=>p.stock>0);
if (disponibles.length > 0){
const moinscher = disponibles.reduce((min,produits) => produits.prix < min.prix ? produits : min );
console.log("le produit disponible le moins cher est :",moinscher.nom)
}
else {
    console.log("aucun produit disponible")
}
const lignes = produits.map((p)=>{return`${p.nom} - ${p.prix} MAD - ${p.stock} unités`});
for (const ligne of lignes)  {
    console.log(ligne);
}

const disponibless = produits.filter((p) => p.stock > 0);

if (disponibles.length > 0) {
    const moinscher = disponibles.reduce(
        (min, p) => p.prix < min.prix ? p : min
    );

    const { nom, prix, stock, catégorie } = moinscher;

    console.log("Nom :", nom);
    console.log("Prix :", prix, "MAD");
    console.log("Stock :", stock);
    console.log("Catégorie :", catégorie);
} else {
    console.log("Aucun produit disponible");
}
