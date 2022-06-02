//bir kitap listemiz var okunanları yazdıralım
var library=[
    {title:'ince mehmet',
    author:'yaşar kemal',
    status:true},
    {title:'kuyucaklı yusuf',
    author:'sebahattin ali',
    status:true},
    {title:'memleketimden insan manzaraları',
    author:'nazım hikmet ran',
    status:false}
];
for (let i = 0; i < library.length; i++) {
    if(library[i].status===true){
        console.log(library[i].title+"=> "+library[i].author);
    }
}