const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async (db) =>{
    //inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-20.027427468748193",
        lng:"-48.93347024917603",
        name:"Lar da caridade",
        about:"Presta assistência a crianças de 0 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social." , 
        whatsapp: "(34)99876-1234",       
        images:[
            "https://images.unsplash.com/photo-1603677573452-83d462d541bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603483804998-a3219271e626?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions:"Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours:"Horário de visitas Das 7h até as 17h",
        open_on_weekends:"1"
           
    })
    //consultar dados na tabela
    const selectedOrpahanges = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrpahanges)

    //consultar somente um orfanato pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    console.log(orphanage)*/

    //deletar dado da tabelas
    /*console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))*/
})